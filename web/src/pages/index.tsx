import { useApolloClient } from "@apollo/client";
import Stack from '@mui/material/Stack';
import React from "react";
import { Router } from 'react-router-dom';
import { ContainerParkItem } from "../components/ContainerComponents/ContainerParkItem";
import { CurrentContainerPark } from "../components/display/currentContainerPark";
import Loader from "../components/display/Loader";
import { useAllContainerParksQuery } from '../generated/graphql';

import { WithApollo } from "../utils/withApollo";


const Index = () => {

  const { data, error, loading } = useAllContainerParksQuery();


  if (loading) {
    return (Loader)
  }

  return (
<>


<CurrentContainerPark />

      <div>
        Alle containerparken
        </div>
        <div>
          <Stack spacing={2}>
            {data!.allContainerParks.map((containerPark: any, cpark_index: any) =>
              !containerPark ? null : (
                <>
                  <ContainerParkItem cpark={containerPark} />


                </>

              )
            )}

          </Stack>
        </div>


      </>
      );
};

      export default WithApollo({ssr: false})(Index);

