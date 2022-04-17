import * as React from 'react';
import { useCurrentContainerParkIdQuery } from "../../generated/graphql";
import Loader from './Loader';


interface CurrentContainerParkProps {
    
}

export const CurrentContainerPark: React.FC<CurrentContainerParkProps> = ({}) => {


    const { data, error, loading } = useCurrentContainerParkIdQuery();


    console.log("data",data);

    if (loading) {
      return (Loader)
    }

    if (error) {
      console.log (error)
    }
  
    return (
      <>
  
      <div>
        ContainerPark :
      </div>
      {data?.currentContainerParkId}
  
  
      </>
    )
};
