import Box from "@mui/material/Box";
import { useRouter } from "next/router";
import React from "react";
import { setAccessToken } from "../../accessToken";
import { useLoginMutation } from "../../generated/graphql";

interface LoginProps {
  ContainerParkId: string;
}

export const Login: React.FC<LoginProps> = ({ ContainerParkId }) => {

  const router = useRouter();


  const [login] = useLoginMutation();

  let [wachtwoord, setwachtwoord] = React.useState("");


  let inloggen = async (e: any) => {

    try {
      const response = await login({
        variables: { ContainerParkId: ContainerParkId, password: wachtwoord, },

        update: (cache: any, { data }) => {
          if(data?.login){
            setAccessToken(data?.login);
            
          }         

        },
      });

      if(!response?.data?.login){
        throw new Error("dfsdf")
      }else{
        setAccessToken(response?.data?.login);
      }
      
      await router.push('/overzicht');

    } catch (error) {
      console.log(error)
      // throw new Error(error.)
    }


  };

  return (
    <>


      <Box>
        Login
      </Box>
      <div>
        Containerpark login ID:
      </div>
      <div>
        {ContainerParkId}
      </div>


      <Box >
        Wachtwoord:
      </Box>




      <input type='text' onChange={(event: any) => setwachtwoord(event.target.value)} />

      <button onClick={(e: any) => { inloggen(e); }} >
        inloggen
      </button>


      {/* <form>
        <div className="login_label">{t("words.email")}</div>
        <div className="login_input_box">
          <FiMail className="input_login_icon" />
          <input placeholder={t("words.email")} name="username" className="login_input_field" onChange={(e: any) => setEmailValue(e.target.value)} ></input>
        </div>

        <div className="login_label">{t("words.password")}</div>
        
        <div className="login_input_box" onClick={() => document.getElementById("password")?.focus()} >
          <MdLock className="input_login_icon" />
          <input placeholder={t("words.password")} id="password" className="login_input_field" type={view_pass ? "text" : "password"} name="password" autoComplete="new-password"
            onChange={(e: any) => setpasswordValue(e.target.value)}
          ></input>
          <AiFillEye className="view_password_icon" onClick={() => setview_pass(!view_pass)} />
        </div>

        <div className="password_forgot_container">
          <a className="no_account_register_link" href="/forgot-password"> {t("words.forgot_password")} </a>
        </div>
        
      </form>
      <div className="login_btn" onClick={(e: any) => { inloggen(e); }} >  {loading_state ? ( <CircularProgress color="secondary" size={30} /> ) : <div>inloggen</div>}</div> */}

    </>
  );
};
