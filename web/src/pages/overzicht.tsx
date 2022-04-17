
import { Stack } from "@mui/material";
import { useRouter } from "next/router";
import { ContainerItem } from "../components/ContainerComponents/ContainerItem";
import { CurrentContainerPark } from "../components/display/currentContainerPark";
import Loader from "../components/display/Loader";
import { useContainersQuery } from "../generated/graphql";
import { WithApollo } from "../utils/withApollo";





export const Overzicht: React.FC<{}> = ({ }) => {
  // const apolloClient = useApolloClient();

  const router = useRouter();

  const { data, error, loading } = useContainersQuery();


  if (loading) {
    return (Loader)
  }

  console.log("data", data)



  return (
    <>


      <CurrentContainerPark />

      <button onClick={() => { router.push('createcontainer') }}>
        creer nieuwe container
      </button>

      <Stack spacing={2}>

        {data!.containers.map((container: any, c_index: any) =>
          !container ? null : (
            <>
              <ContainerItem container={container} />


            </>

          )
        )}



        {/* Overzicht van alle containers met een knop om te zeggen dat ze vol zitten */}


      </Stack>
    </>
  );
};

export default WithApollo({ ssr: true })(Overzicht);

