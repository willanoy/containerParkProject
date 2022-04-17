

export const __prod__ = process.env.NODE_ENV === 'production'
export const COOKIE_NAME = "qid";
export const FORGET_PASSWORD_PREFIX = "change-password:";
export const PRIVATE_LINK = "prive-link:";
export const PUBLIC_LINK = "publieke-link:";

// Limits for free
export const MAX_AMOUNT_OF_PERSONAL_MESSAGES_FREE = 2;
export const MAX_AMOUNT_OF_MEMORIES_FREE = 10;
export const MAX_AMOUNT_OF_CONDOLANCES_FREE = Infinity;
export const MAX_AMOUNT_OF_MESSAGES_FREE = Infinity;
export const MAX_AMOUNT_OF_MEDIA_FREE = 20;
export const MAX_AMOUNT_OF_PEOPLE_FREE = 1;
export const MAX_AMOUNT_OF_BYTES_FREE =   2*1024*1024*1024;   //2 GB
export const MAX_AMOUNT_OF_BYTES_FREE_GB = 2;  

// Limits for basic
export const MAX_AMOUNT_OF_PERSONAL_MESSAGES_BASIC = 5;
export const MAX_AMOUNT_OF_MEMORIES_BASIC = 20;
export const MAX_AMOUNT_OF_CONDOLANCES_BASIC = 50;
export const MAX_AMOUNT_OF_MESSAGES_BASIC = 2;
export const MAX_AMOUNT_OF_MEDIA_BASIC = 200;
export const MAX_AMOUNT_OF_PEOPLE_BASIC = 100;
export const MAX_AMOUNT_OF_BYTES_BASIC = 20*1024*1024*1024; //20GB
export const MAX_AMOUNT_OF_BYTES_BASIC_GB = 20; //20GB




export const AMOUNT_OF_MEMORIES_PLAN: number[] = [MAX_AMOUNT_OF_MEMORIES_FREE,MAX_AMOUNT_OF_MEMORIES_BASIC,Infinity ];
export const AMOUNT_OF_PERSONAL_MESSAGES_PLAN: number[] = [MAX_AMOUNT_OF_PERSONAL_MESSAGES_FREE,MAX_AMOUNT_OF_PERSONAL_MESSAGES_BASIC,Infinity ];
export const AMOUNT_OF_MESSAGES_PLAN: number[] = [MAX_AMOUNT_OF_MESSAGES_FREE,MAX_AMOUNT_OF_MESSAGES_BASIC,Infinity ];
export const AMOUNT_OF_CONDOLANCES_PLAN: number[] = [MAX_AMOUNT_OF_CONDOLANCES_FREE,MAX_AMOUNT_OF_CONDOLANCES_BASIC,Infinity ];
export const AMOUNT_OF_MEDIA_PLAN: number[] = [MAX_AMOUNT_OF_MEDIA_FREE,MAX_AMOUNT_OF_MEDIA_BASIC,Infinity ];
export const AMOUNT_OF_PEOPLE_PLAN: number[] = [MAX_AMOUNT_OF_PEOPLE_FREE,MAX_AMOUNT_OF_PEOPLE_BASIC,Infinity ];
export const AMOUNT_OF_BYTES_PLAN: number[] = [ MAX_AMOUNT_OF_BYTES_FREE, MAX_AMOUNT_OF_BYTES_BASIC, Infinity ];




export const WHITELIST_FILE_EXTENSIONS = new Set(["png", "mp4", "jpeg","jpg","webp","gif", "avi", "mp3", "mov","MOV","quicktime", "wmv", "mpg", "wav","m4a", "mpeg",]);
export const  EXAMPLE_IDS: string[] = ["169f485d-a542-47ac-87b1-1d9bd5be569e", "d32b99a9-3583-4f61-a04f-dd6d5ffab20b", "51fc5f66-87ab-41f4-b24b-6c0eb06ae33f","85536598-7f90-413e-8cb4-5cc0dcab984f"];

//TODO: moet er nog iets bij?

export enum STATUS {
    Denied = -1,
    None = 0,
    Pending = 1,
    Approved = 2,
    Intimate = 3,
    CoOwner = 4,
    Owner = 5,  
    Partner=6,
}

/**
 * Extra info about the user
 */
export enum ACCOUNT_STATUS {
    NOT_VERIFIED,
    VERIFIED,
    PAYING_CUSTOMER,
    VERIFIED_PARTNER
}
/**
 * Type of partner: FUNERAL_UNDERTAKER, FUNERAL_INSURANCE or DIGITALIZER
 * can be extended
 */
export enum PARTNER_TYPE{
    FUNERAL_UNDERTAKER,
    FUNERAL_INSURANCE,
    DIGITALIZER
}

export enum Categories {
    Familie = 1,
    Vrienden,
    Reizen,
    Sport,
    Jeugd,
    Werk,
    Hobby,
    Gelegenheid
}


export enum DESIGN_TYPE {    
    Golden_sun,
    Nature,
    Soft_pink,
    Beige,
    White
}

export enum PAYMENT_STATUS {
    Expiring,
    Valid,
    Archive
}

/**
 * Free, basic, premium, funeral and forever?
 */
export enum PAYMENT_PLAN {
    Free ,              // Only 10 memories allowed and only one author
    Basic,              // Limited sharing capabilities
    Premium,            // No Limits on sharing
    Memorial,            // Afterwards automatically in archive, five years online
    Wedding,            // Wedding functionalities first ,
    Gift,
    Forever
}



export enum Payment_Term {
    Recurring,
    One_Year,
    Five_Years,
    Ten_Years,
    Forever,
}

export interface Package {
    term: Payment_Term,
    plan: PAYMENT_PLAN,
    price: number

} 


export const Wedding: Package = {term:Payment_Term.One_Year , plan:PAYMENT_PLAN.Premium, price: 200 }

export const Jubilee: Package = {term:Payment_Term.One_Year , plan:PAYMENT_PLAN.Premium, price: 100 }

export const Memorial: Package = {term:Payment_Term.Five_Years , plan:PAYMENT_PLAN.Memorial, price: 200 }

export const Small_Family_Gift: Package = {term:Payment_Term.One_Year , plan:PAYMENT_PLAN.Basic, price: 50 }

export const Family_Gift: Package = {term:Payment_Term.One_Year , plan:PAYMENT_PLAN.Premium, price: 50 }

export const Family_Own: Package = {term:Payment_Term.Recurring , plan:PAYMENT_PLAN.Premium, price: 5 }



/**
 * (OUTDATED, all prices are premium for the moment)
 * Prices when choosing the basic package for monthly subscriptiuon, 1,5 and 10 years respe
 */
export const PAYMENT_BASIC_PLAN: number[] = [5,50,200,250];


/**

 * Prices when choosing the premium package for monthly subscriptiuon, 1,5 and 10 years respe
 */
export const PAYMENT_PREMIUM_PLAN: number[] = [5,50,200,250];

/**
 * (OUTDATED)
 * Prices when choosing the funeral package for monthly subscriptiuon, 1,5 and 10 years respe
 * TODO: change when extra funeral features are added
 */
 export const PAYMENT_FUNERAL_PLAN: number[] = [5,50,400,500];


 export const EXAMPLE_PAGE_ID: string[] =  ["d32b99a9-3583-4f61-a04f-dd6d5ffab20b",
                                            "169f485d-a542-47ac-87b1-1d9bd5be569e", 
                                            "51fc5f66-87ab-41f4-b24b-6c0eb06ae33f", 
                                            "6c375ba9-1188-4253-8a46-afe5825d1d8e",
                                            "85536598-7f90-413e-8cb4-5cc0dcab984f",
                                            "fac39da1-02b0-4c67-a996-6583f4e8cebc", //lovento billy willy
                                            "0a7c0dc0-5f7a-4d3f-9ee7-8072ba6cc419", //lovento dereck
                                            "c611cdab-91e4-4ab4-95f3-c3b3668d7485", //lovento ellen
                                            "275ea83e-0cea-4c15-b739-92045a568fc8", //FAMILY JANSSENS
                                            "755b1250-d222-48ca-981b-27e4d1f101d6", //FAMILY williams
                                            "bed88c79-11ab-4954-b486-38480e602eaa"] //FAMILY jacobs