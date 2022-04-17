import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Container = {
  __typename?: 'Container';
  containerPark: ContainerPark;
  containerParkId: Scalars['String'];
  container_type: Scalars['Float'];
  createdAt: Scalars['String'];
  id: Scalars['String'];
  material_type: Scalars['Float'];
  updatedAt: Scalars['String'];
};

export type ContainerInput = {
  container_type?: Maybe<Scalars['Float']>;
  material_type: Scalars['Float'];
};

export type ContainerPark = {
  __typename?: 'ContainerPark';
  containers: Array<Container>;
  createdAt: Scalars['String'];
  id: Scalars['String'];
  intercommunale: Scalars['String'];
  location: Scalars['String'];
  name: Scalars['String'];
  tokenVersion: Scalars['Float'];
  updatedAt: Scalars['String'];
};

export type ContainerParkInput = {
  intercommunale?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  accessToken?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<FieldError>>;
  event_type?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type Mutation = {
  __typename?: 'Mutation';
  RequestPickUp: Container;
  UpdatePassword: Scalars['Boolean'];
  changePassword: Scalars['Boolean'];
  createContainer: Container;
  createContainerPark: ContainerPark;
  facebookLogin: LoginResponse;
  forgotPassword: Scalars['Boolean'];
  googleLogin: LoginResponse;
  login: Scalars['String'];
  logout: Scalars['Boolean'];
  register: LoginResponse;
  requestToVerifyAccount: Scalars['Boolean'];
  revokeRefreshTokensForUser: Scalars['Boolean'];
  updateUser?: Maybe<Scalars['Boolean']>;
  validateOwnership: Scalars['Boolean'];
  verifyAccount: Scalars['Boolean'];
};


export type MutationRequestPickUpArgs = {
  containerId: Scalars['String'];
};


export type MutationUpdatePasswordArgs = {
  newPassword: Scalars['String'];
  oldpassword: Scalars['String'];
};


export type MutationChangePasswordArgs = {
  newPassword: Scalars['String'];
  token: Scalars['String'];
};


export type MutationCreateContainerArgs = {
  input: ContainerInput;
  status?: Maybe<Scalars['Float']>;
};


export type MutationCreateContainerParkArgs = {
  input: ContainerParkInput;
  password: Scalars['String'];
};


export type MutationFacebookLoginArgs = {
  accessToken: Scalars['String'];
  userID: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationGoogleLoginArgs = {
  googleId: Scalars['String'];
};


export type MutationLoginArgs = {
  ContainerParkId: Scalars['String'];
  password: Scalars['String'];
};


export type MutationRegisterArgs = {
  options: UsernamePasswordInput;
};


export type MutationRequestToVerifyAccountArgs = {
  email: Scalars['String'];
};


export type MutationRevokeRefreshTokensForUserArgs = {
  userId: Scalars['String'];
};


export type MutationUpdateUserArgs = {
  email: Scalars['String'];
  username: Scalars['String'];
};


export type MutationValidateOwnershipArgs = {
  newPassword: Scalars['String'];
  token: Scalars['String'];
};


export type MutationVerifyAccountArgs = {
  token: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  allContainerParks: Array<ContainerPark>;
  container: Container;
  containerPark: ContainerPark;
  containers: Array<Container>;
  currentContainerParkId?: Maybe<Scalars['String']>;
};


export type QueryContainerArgs = {
  containerId: Scalars['String'];
};


export type QueryContainerParkArgs = {
  containerParkId: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  FacebookId: Scalars['String'];
  GoogleId: Scalars['String'];
  account_status: Scalars['Float'];
  createdAt: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['String'];
  tokenVersion: Scalars['Float'];
  updatedAt: Scalars['String'];
  username: Scalars['String'];
};

export type UsernamePasswordInput = {
  account_status: Scalars['Boolean'];
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type CreateContainerMutationVariables = Exact<{
  input: ContainerInput;
}>;


export type CreateContainerMutation = (
  { __typename?: 'Mutation' }
  & { createContainer: (
    { __typename?: 'Container' }
    & Pick<Container, 'id' | 'material_type' | 'container_type'>
  ) }
);

export type CreateContainerParkMutationVariables = Exact<{
  input: ContainerParkInput;
  password: Scalars['String'];
}>;


export type CreateContainerParkMutation = (
  { __typename?: 'Mutation' }
  & { createContainerPark: (
    { __typename?: 'ContainerPark' }
    & Pick<ContainerPark, 'id' | 'name' | 'location' | 'intercommunale'>
  ) }
);

export type FacebookLoginMutationVariables = Exact<{
  accessToken: Scalars['String'];
  userID: Scalars['String'];
}>;


export type FacebookLoginMutation = (
  { __typename?: 'Mutation' }
  & { facebookLogin: (
    { __typename?: 'LoginResponse' }
    & Pick<LoginResponse, 'accessToken' | 'event_type'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id'>
    )>, errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>> }
  ) }
);

export type GoogleLoginMutationVariables = Exact<{
  googleId: Scalars['String'];
}>;


export type GoogleLoginMutation = (
  { __typename?: 'Mutation' }
  & { googleLogin: (
    { __typename?: 'LoginResponse' }
    & Pick<LoginResponse, 'accessToken' | 'event_type'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id'>
    )>, errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>> }
  ) }
);

export type LoginMutationVariables = Exact<{
  ContainerParkId: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'login'>
);

export type RegisterMutationVariables = Exact<{
  options: UsernamePasswordInput;
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'LoginResponse' }
    & Pick<LoginResponse, 'accessToken'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id'>
    )>, errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>> }
  ) }
);

export type ContainerQueryVariables = Exact<{
  containerId: Scalars['String'];
}>;


export type ContainerQuery = (
  { __typename?: 'Query' }
  & { container: (
    { __typename?: 'Container' }
    & Pick<Container, 'id' | 'material_type' | 'container_type'>
  ) }
);

export type AllContainerParksQueryVariables = Exact<{ [key: string]: never; }>;


export type AllContainerParksQuery = (
  { __typename?: 'Query' }
  & { allContainerParks: Array<(
    { __typename?: 'ContainerPark' }
    & Pick<ContainerPark, 'id' | 'location' | 'name' | 'intercommunale'>
  )> }
);

export type ContainersQueryVariables = Exact<{ [key: string]: never; }>;


export type ContainersQuery = (
  { __typename?: 'Query' }
  & { containers: Array<(
    { __typename?: 'Container' }
    & Pick<Container, 'id' | 'material_type' | 'container_type'>
  )> }
);

export type CurrentContainerParkIdQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentContainerParkIdQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'currentContainerParkId'>
);


export const CreateContainerDocument = gql`
    mutation CreateContainer($input: ContainerInput!) {
  createContainer(input: $input) {
    id
    material_type
    container_type
  }
}
    `;
export type CreateContainerMutationFn = Apollo.MutationFunction<CreateContainerMutation, CreateContainerMutationVariables>;

/**
 * __useCreateContainerMutation__
 *
 * To run a mutation, you first call `useCreateContainerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateContainerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createContainerMutation, { data, loading, error }] = useCreateContainerMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateContainerMutation(baseOptions?: Apollo.MutationHookOptions<CreateContainerMutation, CreateContainerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateContainerMutation, CreateContainerMutationVariables>(CreateContainerDocument, options);
      }
export type CreateContainerMutationHookResult = ReturnType<typeof useCreateContainerMutation>;
export type CreateContainerMutationResult = Apollo.MutationResult<CreateContainerMutation>;
export type CreateContainerMutationOptions = Apollo.BaseMutationOptions<CreateContainerMutation, CreateContainerMutationVariables>;
export const CreateContainerParkDocument = gql`
    mutation CreateContainerPark($input: ContainerParkInput!, $password: String!) {
  createContainerPark(input: $input, password: $password) {
    id
    name
    location
    intercommunale
  }
}
    `;
export type CreateContainerParkMutationFn = Apollo.MutationFunction<CreateContainerParkMutation, CreateContainerParkMutationVariables>;

/**
 * __useCreateContainerParkMutation__
 *
 * To run a mutation, you first call `useCreateContainerParkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateContainerParkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createContainerParkMutation, { data, loading, error }] = useCreateContainerParkMutation({
 *   variables: {
 *      input: // value for 'input'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useCreateContainerParkMutation(baseOptions?: Apollo.MutationHookOptions<CreateContainerParkMutation, CreateContainerParkMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateContainerParkMutation, CreateContainerParkMutationVariables>(CreateContainerParkDocument, options);
      }
export type CreateContainerParkMutationHookResult = ReturnType<typeof useCreateContainerParkMutation>;
export type CreateContainerParkMutationResult = Apollo.MutationResult<CreateContainerParkMutation>;
export type CreateContainerParkMutationOptions = Apollo.BaseMutationOptions<CreateContainerParkMutation, CreateContainerParkMutationVariables>;
export const FacebookLoginDocument = gql`
    mutation FacebookLogin($accessToken: String!, $userID: String!) {
  facebookLogin(accessToken: $accessToken, userID: $userID) {
    user {
      id
    }
    errors {
      field
      message
    }
    accessToken
    event_type
  }
}
    `;
export type FacebookLoginMutationFn = Apollo.MutationFunction<FacebookLoginMutation, FacebookLoginMutationVariables>;

/**
 * __useFacebookLoginMutation__
 *
 * To run a mutation, you first call `useFacebookLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFacebookLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [facebookLoginMutation, { data, loading, error }] = useFacebookLoginMutation({
 *   variables: {
 *      accessToken: // value for 'accessToken'
 *      userID: // value for 'userID'
 *   },
 * });
 */
export function useFacebookLoginMutation(baseOptions?: Apollo.MutationHookOptions<FacebookLoginMutation, FacebookLoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<FacebookLoginMutation, FacebookLoginMutationVariables>(FacebookLoginDocument, options);
      }
export type FacebookLoginMutationHookResult = ReturnType<typeof useFacebookLoginMutation>;
export type FacebookLoginMutationResult = Apollo.MutationResult<FacebookLoginMutation>;
export type FacebookLoginMutationOptions = Apollo.BaseMutationOptions<FacebookLoginMutation, FacebookLoginMutationVariables>;
export const GoogleLoginDocument = gql`
    mutation GoogleLogin($googleId: String!) {
  googleLogin(googleId: $googleId) {
    user {
      id
    }
    errors {
      field
      message
    }
    accessToken
    event_type
  }
}
    `;
export type GoogleLoginMutationFn = Apollo.MutationFunction<GoogleLoginMutation, GoogleLoginMutationVariables>;

/**
 * __useGoogleLoginMutation__
 *
 * To run a mutation, you first call `useGoogleLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGoogleLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [googleLoginMutation, { data, loading, error }] = useGoogleLoginMutation({
 *   variables: {
 *      googleId: // value for 'googleId'
 *   },
 * });
 */
export function useGoogleLoginMutation(baseOptions?: Apollo.MutationHookOptions<GoogleLoginMutation, GoogleLoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GoogleLoginMutation, GoogleLoginMutationVariables>(GoogleLoginDocument, options);
      }
export type GoogleLoginMutationHookResult = ReturnType<typeof useGoogleLoginMutation>;
export type GoogleLoginMutationResult = Apollo.MutationResult<GoogleLoginMutation>;
export type GoogleLoginMutationOptions = Apollo.BaseMutationOptions<GoogleLoginMutation, GoogleLoginMutationVariables>;
export const LoginDocument = gql`
    mutation Login($ContainerParkId: String!, $password: String!) {
  login(ContainerParkId: $ContainerParkId, password: $password)
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      ContainerParkId: // value for 'ContainerParkId'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($options: UsernamePasswordInput!) {
  register(options: $options) {
    accessToken
    user {
      id
    }
    errors {
      field
      message
    }
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const ContainerDocument = gql`
    query Container($containerId: String!) {
  container(containerId: $containerId) {
    id
    material_type
    container_type
  }
}
    `;

/**
 * __useContainerQuery__
 *
 * To run a query within a React component, call `useContainerQuery` and pass it any options that fit your needs.
 * When your component renders, `useContainerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useContainerQuery({
 *   variables: {
 *      containerId: // value for 'containerId'
 *   },
 * });
 */
export function useContainerQuery(baseOptions: Apollo.QueryHookOptions<ContainerQuery, ContainerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ContainerQuery, ContainerQueryVariables>(ContainerDocument, options);
      }
export function useContainerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ContainerQuery, ContainerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ContainerQuery, ContainerQueryVariables>(ContainerDocument, options);
        }
export type ContainerQueryHookResult = ReturnType<typeof useContainerQuery>;
export type ContainerLazyQueryHookResult = ReturnType<typeof useContainerLazyQuery>;
export type ContainerQueryResult = Apollo.QueryResult<ContainerQuery, ContainerQueryVariables>;
export const AllContainerParksDocument = gql`
    query AllContainerParks {
  allContainerParks {
    id
    location
    name
    intercommunale
  }
}
    `;

/**
 * __useAllContainerParksQuery__
 *
 * To run a query within a React component, call `useAllContainerParksQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllContainerParksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllContainerParksQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllContainerParksQuery(baseOptions?: Apollo.QueryHookOptions<AllContainerParksQuery, AllContainerParksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllContainerParksQuery, AllContainerParksQueryVariables>(AllContainerParksDocument, options);
      }
export function useAllContainerParksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllContainerParksQuery, AllContainerParksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllContainerParksQuery, AllContainerParksQueryVariables>(AllContainerParksDocument, options);
        }
export type AllContainerParksQueryHookResult = ReturnType<typeof useAllContainerParksQuery>;
export type AllContainerParksLazyQueryHookResult = ReturnType<typeof useAllContainerParksLazyQuery>;
export type AllContainerParksQueryResult = Apollo.QueryResult<AllContainerParksQuery, AllContainerParksQueryVariables>;
export const ContainersDocument = gql`
    query Containers {
  containers {
    id
    material_type
    container_type
  }
}
    `;

/**
 * __useContainersQuery__
 *
 * To run a query within a React component, call `useContainersQuery` and pass it any options that fit your needs.
 * When your component renders, `useContainersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useContainersQuery({
 *   variables: {
 *   },
 * });
 */
export function useContainersQuery(baseOptions?: Apollo.QueryHookOptions<ContainersQuery, ContainersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ContainersQuery, ContainersQueryVariables>(ContainersDocument, options);
      }
export function useContainersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ContainersQuery, ContainersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ContainersQuery, ContainersQueryVariables>(ContainersDocument, options);
        }
export type ContainersQueryHookResult = ReturnType<typeof useContainersQuery>;
export type ContainersLazyQueryHookResult = ReturnType<typeof useContainersLazyQuery>;
export type ContainersQueryResult = Apollo.QueryResult<ContainersQuery, ContainersQueryVariables>;
export const CurrentContainerParkIdDocument = gql`
    query CurrentContainerParkId {
  currentContainerParkId
}
    `;

/**
 * __useCurrentContainerParkIdQuery__
 *
 * To run a query within a React component, call `useCurrentContainerParkIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentContainerParkIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentContainerParkIdQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentContainerParkIdQuery(baseOptions?: Apollo.QueryHookOptions<CurrentContainerParkIdQuery, CurrentContainerParkIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CurrentContainerParkIdQuery, CurrentContainerParkIdQueryVariables>(CurrentContainerParkIdDocument, options);
      }
export function useCurrentContainerParkIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CurrentContainerParkIdQuery, CurrentContainerParkIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CurrentContainerParkIdQuery, CurrentContainerParkIdQueryVariables>(CurrentContainerParkIdDocument, options);
        }
export type CurrentContainerParkIdQueryHookResult = ReturnType<typeof useCurrentContainerParkIdQuery>;
export type CurrentContainerParkIdLazyQueryHookResult = ReturnType<typeof useCurrentContainerParkIdLazyQuery>;
export type CurrentContainerParkIdQueryResult = Apollo.QueryResult<CurrentContainerParkIdQuery, CurrentContainerParkIdQueryVariables>;