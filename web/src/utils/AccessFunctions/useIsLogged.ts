import { useMeQuery } from "../../generated/graphql";
import { isServer } from "./../isServer";

export const useIsLogged = () => {
    const {data: meData, loading: meloading} = useMeQuery({
        skip: isServer(),
       
      });if(meData) {

    }
    if(meData?.me?.status === undefined){
        return false;
    }
    else return true;
}
