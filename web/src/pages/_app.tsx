import { theme } from "@chakra-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { useState, useEffect } from "react";
import { setAccessToken } from "../accessToken";



function MyApp({ Component, pageProps }: any) {

  const [loading, setLoading] = useState(true);


  useEffect(() => {

    // TODO - is this required now that we have the token refresh link?
    fetch(process.env.NEXT_PUBLIC_REFRESH_URL!, { method: 'POST', credentials: 'include' }).then(async (x) => {
      const { accessToken } = await x.json()
      setAccessToken(accessToken);
      setLoading(false);
    })  


    
  }, [])

  if (loading) {
    return (<div>...</div>)
  }


  const context = {};

  // const client = WithApollo(MyApp);

return (
    <>
      {/* <StaticRouter location={process.env.NEXT_PUBLIC_API_URL} context={context}> */}
      <ThemeProvider theme={theme}>
      
      <Component {...pageProps} />
    </ThemeProvider>

    </>

  );
}


export default MyApp;
