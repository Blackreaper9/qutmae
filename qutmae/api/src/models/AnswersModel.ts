import { Schema, model } from "mongoose";
import { IAnswer } from "../GlobalTypes";


const AnswerSchema = new Schema<IAnswer>({
    questionaireId:{
        type: Schema.Types.ObjectId,
        ref: "questionnaires",
        required:true
    },

    questionId:{
        type: Schema.Types.ObjectId,
        ref: "questions",
        required:true
    },

    answer:{
        type: String,
        required:true
    },



});
export const AnswersModel = model("answers", AnswerSchema);