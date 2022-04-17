import gql from "graphql-tag";
import { STATUS } from "../../constants";
import { useChangeStatusAccessRequestMutation } from "../../generated/graphql";


const [changestatus] = useChangeStatusAccessRequestMutation();


export const changeStatus = async (status: STATUS, accessrequest_id: any,public_token:string) => {
    try {
      const response = await changestatus({
        variables: {
          id: accessrequest_id,
          paginaId: public_token,
          status: status,
        },
        update: (cache: any) => {
          cache.writeFragment({
            id: "AccessRequest:" + accessrequest_id,
            fragment: gql` fragment _ on AccessRequest { status } `,
            data: { status: status, },
          });
        },
      });


    } catch (error:any) {

      //TODO mooie dialog
      if (error.message.includes("not owner of page")) {
        alert("Alleen de eigenaar kan deze  actie uitvoeren");
      } else if (error.message.includes("Cant promote or demote yourself")) {
        alert("Je kan je eigen status niet wijzigen");

      } else if (
        error.message.includes( "Cant change status of people who have a higher or equal status than yourself" )
      ) {
        alert("Je kan de status van medebeheerders niet wijzigen ");
      } else if (
        error.message.includes(
          "De gebruiker moet geverifieerd zijn voordat die mede_beheerder of eigenaar kan worden"
        )
      ) {
        alert(
          "De gebruiker moet geverifieerd zijn voordat die mede_beheerder of eigenaar kan worden"
        );
      } else {
        alert("Er is iets misgelopen probeer later opnieuw.");
      }
    }
  };