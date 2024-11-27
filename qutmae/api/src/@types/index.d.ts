
interface IUser{
    name:String;
    email:string;
    lastnames:string;
    password:string;
    questionaireId:Schema.Types.ObjectId | string;
    rol: "administrator" |  "client";
   
}

declare namespace Express{
    export interface Request{
        user?: IUser
        
    }
}