
import { Request, Response } from 'express';
import { Redis } from "ioredis";


export type MyContext = {
    req: Request;  // define the type
    res: Response;
    redis: Redis;
    payload?: { containerParkId: string };
};

export enum WASTE_TYPE {  
  METAAL,
  HOUT,
  PAPIER,
  KARTON,
  GROENAFVAL,
  GLAS,
  GFT,
  KLEIN_GEVAARLIJK_AFVAL,
  BOUWAFVAL,
  KERAMIEK,
  
}

export enum CONTAINER_TYPE {
  SMALL,
  BIG
}



