import { Schema } from "mongoose";



export interface IQuestion{
    title:String
    type: " radio" | "checkbox" | "select"| " text"
    isMandatory: boolean,
    questionaireId:Schema.Types.ObjectId | string;
   
}
export interface IOption{
    text:String
    questionId:Schema.Types.ObjectId | string;
   
}


export interface IQuestionnaire{
    title:String
    description: String
    userId:Schema.Types.ObjectId | string;
   
}

export interface IAnswer{

    questionaireId:Schema.Types.ObjectId | string;
    questionId:Schema.Types.ObjectId | string;
    answer:string;
}


export interface IUser{
    name:String;
    email:string;
    lastNames:string;
    password:string;
    questionaireId:Schema.Types.ObjectId | string;
    rol: " administrator" |  " client";
   
}
