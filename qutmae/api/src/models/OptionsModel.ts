import { Schema, model } from "mongoose";

interface IOption{
    text:String
    value: String
    questionId:Schema.Types.ObjectId | string;
   
}

const OptionSchema = new Schema<IOption>({
    text:{
        type:String,
        required:true
    },
    value:{
        type:String,
        required:true
    },

    questionId:{
        type: Schema.Types.ObjectId,
        ref: "questions",
        required:true
    }
});

export const OptionModel = model("options", OptionSchema);