
import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {


  render( )
  {


    if(process.env.NODE_ENV ==="production"){
      return (
        <Html>
          <Head>



          </Head>
          <body>
         <Main />
            <NextScript />
          </body>
        </Html>
      );
    }
    else{



      return (
        <Html>
          <Head>
         
          </Head>
          <body>

            <Main />
            <NextScript />
          </body>
        </Html>
      );
    }
    
  }
}