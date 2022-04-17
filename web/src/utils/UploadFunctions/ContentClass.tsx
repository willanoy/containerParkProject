import { useMutation } from "@apollo/client";
import { useState } from "react";
import { MAX_UPLOAD_SIZE } from "../../constants";
import { useCreateAnonymousHerinneringMutation, useCreateMediaHerinneringAnonymouslyMutation, useCreateMediaHerinneringMutation, useMeQuery } from "../../generated/graphql";
import { createMediaFunction } from "./createAndUploadMedia";
import { MUTIPLE_UPLOAD } from "./uploadUtils";

export class ContentClass {
  public_token:string;
  title: string;
  sender_name:string;
  question:string;
  message:string;
  category:number;
  media:Array<any>;
  date:any;
  totalMB:number;
  accesstatus:number;
  ontimeline:boolean;

    constructor() {
      this.public_token = '';
      this.title = '';
      this.sender_name = '';
      this.question = '';
      this.message = '';
      this.category = 1;
      this.date = null;
      this.media=[];
      this.totalMB=0;
      this.accesstatus=2;
      this.ontimeline=false;

    }
   

    get get_title(): string {
      return this.title;
    }
    get get_question(): string {
      return this.question;
    }
    
    public set_question(v : string) {
      this.question = v;
    }
    

    addMedia(event:any ) {      

        for (let i = 0; i < event.target.files.length; i++) {
          // if((this.totalMB + event.target.files[i].size)>MAX_UPLOAD_SIZE){
          //   alert("Uw media is te groot om te uploaden")
          //   } 
          // else{         
            this.media.push(event.target.files[i]);
            this.totalMB = this.totalMB + event.target.files[i].size
          // }
        }            

    }

    removeMedia ( file:any){

    }

    async uploadMemoriesAnonymous (){

        const [createAnonymousHerinnering] = useCreateAnonymousHerinneringMutation();
        const [mutateUpload, { loading, error, data }] = useMutation(MUTIPLE_UPLOAD);
        const [createMediaHerinnering] = useCreateMediaHerinneringMutation();
        const [createMediaHerinneringAnonymously] = useCreateMediaHerinneringAnonymouslyMutation();
        const [progress, setprogress] = useState(0);
        const { data: meData } = useMeQuery();
        if(this.media.length===0 || this.message.length<10){
          return false;
        }
        try {
          const herinne = await createAnonymousHerinnering({
            variables: {
              input: {
                title: this.question,
                text: this.message,
                categorie: 1, //TODO: fix categorie default family
                datumVanHerinnering: this.date,
                on_timeline: this.ontimeline,
                       },
              status: this.accesstatus,
              paginaId: this.public_token,
              unregistered_creator_name: this.sender_name //TODO: Himpe-hommage maak veld waar mensen da achterlaten of zet er standaard anoniem
       
            },
    
            update: (cache:any) => {
              //TODO: look why all the memories are suddenly double
              cache.evict({ fieldName: "herinneringen:{}" });
            },
          });
    
          let response;
          try {
            if (this.media.length > 0) {
              if(meData?.me?.status === undefined){
              response = await createMediaFunction(
                this.media,
                this.public_token,
                "herinnering",
                herinne.data!.createAnonymousHerinnering.id,    //TODO: Himpe-hommage terugzetten naar .createHerinnering.
                mutateUpload,
                createMediaHerinneringAnonymously
              );
              }else{
                response = await createMediaFunction(
                  this.media,
                  this.public_token,
                  "herinnering",
                  herinne.data!.createAnonymousHerinnering.id,    //TODO: Himpe-hommage terugzetten naar .createHerinnering.
                  mutateUpload,
                  createMediaHerinnering,
                  setprogress
                );
              }
            }
          } catch (error: any) {
            if (error.message === "FileExtension not allowed") {
              alert("File extensie mag niet gebruikt worden"); //TODO: better warning, toast?
            } else {
              return (error.message);              
            }
          }
    
          if (herinne.errors) {
            return ('herinnering-error');              

          }
          if (response === false) {
            return ('response-error');  
          }
    
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: "create_content",
            type: "memory",
            //TODO: userId, herinneringId, timer?
          });
    
    
    
          
          location.reload(); //TODO: dit werkt maar moet betere oplossing met cache
        } catch (error: any) {
          return(error.message);
        }
        return true;
      };
    
      
    
      

    
   
}



