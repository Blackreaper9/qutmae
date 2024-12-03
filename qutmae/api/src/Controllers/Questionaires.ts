import { Request, Response } from "express";
import { OptionModel} from "../models/OptionsModel";
import { QuestionModel } from "../models/QuestionsModel";
import { QuestionnaireModel } from "../models/QuestionnairesModel";
import { UsersModel } from "../models/UsersModel";
import { AnswersModel } from "../models/AnswersModel";



export const CreateQuestionnaires = async (req:Request, res: Response):Promise<void>=>{
    
    try {
        const title = req.body.title
        const description = req.body.description
        const userId = req.body.userId
        
        if (req.user?.rol === "administrator")
    {
        res.status(400).json({msg:"Los administradores no tiene permitido la creacion de usuarios"})
    return
    }

    if(!title || !description || !userId){res.status(400).json({msg:"Datos insuficientes"})
        return;

    }
 
    const questionnaire = await QuestionModel.create({
        title,
        description,
        userId,   
    });

    const user = await UsersModel.findById(userId);
        if(!user){
            res.status(400).json({msg:"El usuario que intenta crear la actividad no existe"})
            return;
        }
        res.status(200).json({ msg: "Cuestionario creado con éxito", questionnaire })
        return;
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error al crear el cuestionario" })
        return;
    }
};

export const getQuestionnaire = async (req: Request, res: Response): Promise<void> => {
    try {
        const questionnaire = await QuestionnaireModel.findOne({ title: req.body.title })
        res.status(200).json({ questionnaire })
        return;
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error al obtener los cuestionarios" })
        return;
    }
};

export const createQuestion = async (req: Request, res: Response): Promise<void> => {
    try {
        const title = req.body.title
        const type = req.body.type
        const isMandatory = req.body.isMandatory
        const questionnaireId = req.body.questionnaireId

        if (!title || !type || !questionnaireId || !isMandatory) {
            res.status(400).json({ msg: "Faltan datos para crear la pregunta" });
            return;
        }

        const question = await QuestionModel.create({
            title,
            type,
            isMandatory,
            questionnaireId,
        });

        res.status(200).json({ msg: "Pregunta creada con éxito", question })
        return;
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error al crear la pregunta" })
        return;
    }
};

export const getQuestion= async (req: Request, res: Response): Promise<void> => {
    try {
        const questionn = await QuestionModel.findOne({ questionnaireId:req.body.questionnaireId})
        res.status(200).json({ questionn })
        return;
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error al obtener los cuestionarios" })
        return;
    }
};

export const createOption = async (req: Request, res: Response): Promise<void> => {
    try {
        const title = req.body.title
        const questionId = req.body.questionId

        if (!title || !questionId) {
            res.status(400).json({ msg: "Faltan datos para crear la opción" });
            return;
        }

        const option = await OptionModel.create({
            title,
            questionId,
        });

        res.status(200).json({ msg: "Opción creada con éxito", option })
        return;
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error al crear la opción" })
        return;
    }
};

export const createAnswer = async (req: Request, res: Response): Promise<void> => {
    try {
        const questionnaireId = req.body.questionnaireId
        const questionId = req.body.questionId
        const answer  = req.body.answer

        if (!questionnaireId || !questionId || !answer) {
            res.status(400).json({ msg: "Faltan datos para enviar la respuesta" });
            return;
        }

        const newAnswer = await AnswersModel.create({
            questionnaireId,
            questionId,
            answer,
        });

        res.status(200).json({ msg: "Respuesta enviada con éxito", newAnswer})
        return;
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error al enviar respuesta"})
        return;
    }
};