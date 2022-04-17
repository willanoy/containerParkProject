import gql from "graphql-tag";
import { STATUS } from "../../constants";
import { useCancelMollieSubscriptionMutation, useChangeStatusAccessRequestMutation } from "../../generated/graphql";


const [cancelSubscription] = useCancelMollieSubscriptionMutation();


export const CancelSubscription = async (status: STATUS, accessrequest_id: any,public_token:string,molli_id:any) => {

  await cancelSubscription({
    variables: {
      public_token: public_token,
      MollieSubscriptionId: molli_id,
    },
  });
};