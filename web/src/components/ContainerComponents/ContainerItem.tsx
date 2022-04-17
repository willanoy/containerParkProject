import Box from "@mui/material/Box";
import { Container } from "../../generated/graphql";
import { CONTAINER_TYPE, WASTE_TYPE } from "../../types";


interface ContainerItemProps {
  container: Container;
}

export const ContainerItem: React.FC<ContainerItemProps> = ({ container }) => {


  const verzend_container_pop_up = () => {
    alert('De container wordt opgehaald')
  }


  return (
    <>
     
        

        <Box key={container.id} >
                <div>ID</div>
                <div>{container.id}</div>

                <div>Type</div>
                <div>{CONTAINER_TYPE[container.container_type] }</div>

                <div>Materiaal</div>
                <div>{WASTE_TYPE[container.material_type] }</div>

                <button onClick={() => verzend_container_pop_up()}>
                  Bestel ophaling
                </button>

               
               {/* Order button */}

                {/* <LoginModal ContainerParkId={cpark.id} open={open} handleClose={handleClose} /> */}



            </Box>


     

    </>
  );
};
