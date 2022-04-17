import * as React from 'react';
import Box from '@mui/material/Box';
import { ContainerPark } from "../../generated/graphql";
import { LoginModal } from '../modals/logInModal';


interface ContainerParkItemProps {
    cpark: ContainerPark;
}

export const ContainerParkItem: React.FC<ContainerParkItemProps> = ({ cpark }) => {


    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>

           
            <Box key={cpark.id} >
                <div>ID</div>
                <div>{cpark.id}</div>

                <div>Naam</div>
                <div>{cpark.name}</div>

                <div>Locatie</div>
                <div>{cpark.location}</div>

                <div>intercommunale</div>
                <div>{cpark.intercommunale}</div>

                <button onClick={handleOpen}>log in</button>

                <LoginModal ContainerParkId={cpark.id} open={open} handleClose={handleClose} />



            </Box>

        </>
    );
};
