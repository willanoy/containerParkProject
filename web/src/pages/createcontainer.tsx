import { useRouter } from 'next/router';
import React from 'react';
import { CurrentContainerPark } from '../components/display/currentContainerPark';
import { useCreateContainerMutation } from '../generated/graphql';
import { CONTAINER_TYPE, WASTE_TYPE } from '../types';
import { WithApollo } from '../utils/withApollo';




export const CreateContainer: React.FC<{}> = ({ }) => {
    // const apolloClient = useApolloClient();

    const [createContainer] = useCreateContainerMutation();

    const router = useRouter();


    let [WasteType, setWasteType] = React.useState<WASTE_TYPE>(WASTE_TYPE.GFT);
    let [ContainerType, setContainerType] = React.useState<CONTAINER_TYPE>(CONTAINER_TYPE.SMALL);


    const createContainerFct = async (event: any) => {


        const newContainer = await createContainer({
            variables: {
                input: {
                    material_type: parseInt(String(WasteType)),
                    container_type: parseInt(String(ContainerType))

                }
            }
        });

        console.log("sdsfsdfsdf")


        alert("container is gecreerd");
    }


    return (
        <>

            <CurrentContainerPark />

            <button onClick={() => {router.push('overzicht')}}>
        terug
      </button>

            <form>
                <div>Type afval</div>

                <select value={WasteType} onChange={(event: any) => setWasteType(event.target.value)}>
                    {
                        Object.keys(WASTE_TYPE).map((key, index) => (
                            <option
                                aria-selected="true"
                                key={WASTE_TYPE[index]}
                                value={parseInt(key)}
                            >
                                {WASTE_TYPE[index]}
                            </option>
                        )
                        )
                    }
                </select>


                <div>Type afval</div>

                <select value={ContainerType} onChange={(event: any) => setContainerType(event.target.value)}>
                    {
                        Object.keys(CONTAINER_TYPE).map((key, index) => (
                            <option
                                aria-selected="true"
                                key={CONTAINER_TYPE[index]}
                                value={parseInt(key)}
                            >
                                {CONTAINER_TYPE[index]}
                            </option>
                        )
                        )
                    }
                </select>

            </form>
            <button onClick={async (event: any) => await createContainerFct(event.target.value)}>Creer container</button>


        </>
    );
};

export default WithApollo({ ssr: true })(CreateContainer);

