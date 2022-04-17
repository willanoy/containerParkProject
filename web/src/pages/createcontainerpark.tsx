import React from 'react';
import { CurrentContainerPark } from '../components/display/currentContainerPark';
import { useCreateContainerParkMutation } from '../generated/graphql';
import { WithApollo } from '../utils/withApollo';




export const CreateContainerPark: React.FC<{}> = ({ }) => {
  
  const [createContainerPark] = useCreateContainerParkMutation();


  let [location, setlocation] = React.useState("");
  let [name, setname] = React.useState("");
  let [intercommunale, setintercommunale] = React.useState("");
  let [wachtwoordPagina, setwachtwoordPagina] = React.useState("");
  let [wachtwoord, setwachtwoord] = React.useState("");

  const createContainerParkFct = async (event:any) => {

    if(wachtwoord !== "wachtwoordinbackend"){

        alert("U heeft een ongeldig wachtwoord ingevoerd")

    }else{
        const dfsd = await createContainerPark({
            variables:{
                input:{
                    name:name,
                    location:location,
                    intercommunale: intercommunale,
                   
    
                },
                password:wachtwoordPagina
            }
        })
    
        alert("U heeft een containerpark aangemaakt")
    }

   

  }

  return (
    <>

<CurrentContainerPark/>


            <div>Naam container park</div>
            <input type='text' onChange={(event: any) => setlocation(event.target.value)} />

            <div>Locatie</div>
            <input type='text' onChange={(event: any) => setname(event.target.value)} />

            <div>Intercommunale</div>
            <input type='text' onChange={(event: any) => setintercommunale(event.target.value)} />

            <div>Wachtwoord van ContainerPark</div>
            <input type='text' onChange={(event: any) => setwachtwoordPagina(event.target.value)} />

            
            <div>Wachtwoord</div>
            <input type='text' onChange={(event: any) => setwachtwoord(event.target.value)} />



            <button onClick={(event: any) => createContainerParkFct(event.target.value)}>Creer containerpark</button>

    </>
  );
};

export default WithApollo({ ssr: true })(CreateContainerPark);

