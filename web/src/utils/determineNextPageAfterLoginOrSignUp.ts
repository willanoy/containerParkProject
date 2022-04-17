import { NextRouter } from "next/router";


export const determineNextPageAfterLoginOrSignUp =  (router:NextRouter) => {
  
    
    // Optie 1: Router.query.next bevat een variabele 
    //(situatie duikt op nadat je teruggestuurd bent naar login van een pagina waar je geen authenticatie voor had)
    if (typeof router.query.next === "string") {
        window.location.replace(router.query.next);
        return false;
      }
      //2) Optie2:  we zitten in een modal op een bepaalde pagina
      else if (typeof router.query.public_token === "string") {
        // setLoginModalClick(false);
        window.location.reload();
        return true;
      }
      //3) Optie3: standaard login/registratie -> naar account
      else{
        router.push("/overzicht");
        return false;
      }

}