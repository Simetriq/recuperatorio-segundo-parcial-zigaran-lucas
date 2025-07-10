import { json } from "sequelize";
import model from "../models/language.model.js";

export const getAllPrograms = async ()=>{
    try {

        const traerTodo = await model.findAll()
        return res.status(200).json(traerTodo);

    } catch (error) {
        return res.status(400).json({message:"Error al tratar de traer todos los lenguajes"})
    }
}
export const getProgramsById = async ()=>{
    try {

        const traerId = await model.findByPk(req.params.id)
        return res.status(200).json(traerId);
        
    } catch (error) {
        return res.status(400).json({message:"Error al tratar de traer de buscar por ID el lenguaje"})
    }
}
export const createPrograms = async ()=>{
    try {
        const crear = await model.create(req.body)
        return res.status(201).json(crear);
    } catch (error) {
        return res.status(400).json({message:"Error al tratar de crear un lenguaje"})
    }
}
export const deleteProgram = async ()=>{
    try {
        
        const borrar = await model.destroy({where:{id: req.params.id}})
        if(borrar) return res.status(200).json({message:"se borro exitosamente el lenguaje"})

    } catch (error) {
        return res.status(400).json({message:"Error al tratar de borrar un lenguaje"})
    }
}
export const updateProgram = async ()=>{
    try {
        const [acutalizar] = await movieModel.update(req.body,{where:{id:req.params.id}})
        if(actualizar){const siactualizo = await movieModel.findByPk(req.params.id)}
        return res.status(200).json(siactualizo)
    } catch (error) {
        return res.status(400).json({message:"Error al tratar de actualizar un lenguaje"})
    }
}