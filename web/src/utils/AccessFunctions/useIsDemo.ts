import { EXAMPLE_PAGE_ID } from "../../constants";
import { useGetStringFromUrl } from "../useGetIntFromUrl";

export const useIsDemo = () => {
    const public_token = useGetStringFromUrl("public_token");
   if( EXAMPLE_PAGE_ID.includes(public_token) ){
     return true
   }
    return false
   
}