
import { sign } from "jsonwebtoken";
import { ContainerPark } from "../entities/ContainerPark";


// TODO: add variable for value stay logged in
export const createAccessToken = async (cpark: ContainerPark) => {
  // console.log("create accessToken");
  // If no status

  let token = {containerParkId: cpark.id};  
  return sign(token, process.env.ACCESS_TOKEN_SECRET!, { expiresIn: "15m", });


  
};


export const createRefreshToken = (cpark: ContainerPark) => {

  console.log("create refresh token");

  let token = { containerParkId: cpark.id, tokenVersion: cpark.tokenVersion, };  
  return sign( token, process.env.REFRESH_TOKEN_SECRET!, { expiresIn: "10000d" } );


};

// // mag dit async zijn?
// export const createAccessToken = async (user: User, paginaId?:string, status?: number) => {


//   // If no status
//   if(!status){
//     const arequest = await AccessRequest.findOne({where:{
//       userId: user.id,
//       pageId: paginaId
//     }})

//     status =arequest?.status
//   }
//   else{
//     status = 0; // er is geen status meegegeven en geen accessrequest
//   }

//   return sign({ userId: user.id, pageId: paginaId, status: status }, process.env.ACCESS_TOKEN_SECRET!, {
//     expiresIn: "15m",

//   });
// };
