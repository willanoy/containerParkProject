import { ApolloClient, from, InMemoryCache } from "@apollo/client";
import { setContext } from 'apollo-link-context';
import { TokenRefreshLink } from 'apollo-link-token-refresh';
import { createUploadLink } from 'apollo-upload-client';
import jwtDecode from "jwt-decode";
import { NextPageContext } from 'next';
import { getAccessToken, setAccessToken } from '../accessToken';
import { createWithApollo } from './createWithApollo';

const uploadlink = createUploadLink({uri: process.env.NEXT_PUBLIC_API_URL, credentials: "include"});

const authLink = setContext((_, { headers }) => {
  const token = getAccessToken();

  console.log("set context token:", token);
  
  return {
    headers: {
      ...headers,
      authorization: token ? `bearer ${token}` : '',
    },
  }
})

const tokenRefreshLink = new TokenRefreshLink({
  accessTokenField: 'accessToken',
  isTokenValidOrUndefined: () => {
    const token = getAccessToken();

    if (!token) {
      return true
    }

    

    try {
     
      const decoded_token = jwtDecode(token);     

      if (Date.now() >= (((decoded_token as any).exp) as number) * 1000) {
        return false
      } else {
        return true
      }
    } catch (err:any) {
      console.log(err.message)
      console.log('Error here...')
      return false
    }
  },
  fetchAccessToken:  () => {
    return fetch(process.env.NEXT_PUBLIC_REFRESH_URL!, {
      method: 'POST',
      credentials: 'include',

    })

  },
  handleFetch: (accessToken) => {
    // console.log("setAccessToken: ",accessToken);
    setAccessToken(accessToken);
  },
  handleError: (err) => {
    console.warn('Your refresh token is invalid. Try to relogin')
    console.log(err)
  },
})


const createClient = (ctx: NextPageContext) => new ApolloClient({


    link: from([tokenRefreshLink,authLink,uploadlink]),
    cache:new InMemoryCache({}),
   
    
  });

export const WithApollo = createWithApollo(createClient);