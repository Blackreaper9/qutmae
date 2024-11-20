import { Schema, model } from "mongoose";

interface IQuestionnaire{
    title:String
    description: String
    userId:Schema.Types.ObjectId | string;
   
}

const QuestionnaireSchema = new Schema<IQuestionnaire>({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },

    userId:{
        type: Schema.Types.ObjectId,
        ref: "users",
        required:true
    }
});

export const QuestionnaireModel = model("questionnaires", QuestionnaireSchema);