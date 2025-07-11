
import programingLanguage from "../models/language.model.js";


export const getAllPrograms = async (req, res)=>{
    try {

        const traerTodo = await programingLanguage.findAll()
        return res.status(200).json(traerTodo);

    } catch (error) {
        return res.status(400).json({message:"Error al tratar de traer todos los lenguajes"})
    }
}
export const getProgramsById = async (req, res)=>{
    try {

        const traerId = await programingLanguage.findByPk(req.params.id)
        return res.status(200).json(traerId);
        
    } catch (error) {
        return res.status(400).json({message:"Error al tratar de traer de buscar por ID el lenguaje"})
    }
}
export const createPrograms = async (req, res)=>{
        const {name, paradigm, release_year } = req.body
    try {

        const nameUnique = await programingLanguage.findOne({where: {name}});

        if(nameUnique) return res.status(400).json({errorMessage: "'name' debe ser unico"});

        if(name===undefined || name === "") return res.status(400).json({message:" name es obligatorio"})
        if(paradigm === undefined || paradigm === "") return res.status(400).json({message:"paradigma es obligatorio"})
        if(!Number.isInteger(release_year)) return res.status(400).json({messag: "el año de lanzamiento debe ser un entero"})
        if(release_year <= 0) return res.status(400).json({message: "el año debe ser mayor a 0"})
        const crear = await programingLanguage.create(req.body)
        return res.status(201).json(crear);
    } catch (error) {
        return res.status(400).json({message:"Error al tratar de crear un lenguaje"})
    }
}
export const deleteProgram = async (req, res)=>{
    try {
        
        const borrar = await programingLanguage.destroy({where:{id: req.params.id}})
        if(borrar > 0) return res.status(200).json({Message: "Se elimino el lenguaje con exito"});
        return res.status(404).json({errorMessage: "el lenguaje no se encontro"});

    } catch (error) {
        return res.status(400).json({message:"Error al tratar de borrar un lenguaje"})
    }
}
export const updateProgram = async (req, res)=>{

        const {name, paradigm, release_year} = req.body

    try {

        const nameUnique = await programingLanguage.findOne({where: {name}});

        if(nameUnique) return res.status(400).json({errorMessage: "'name' debe ser unico"});

        if(name===undefined || name === "") return res.status(400).json({message:" name es obligatorio"})
        if(paradigm === undefined || paradigm === "") return res.status(400).json({message:"paradigma es obligatorio"})
        if(!Number.isInteger(release_year)) return res.status(400).json({messag: "el año de lanzamiento debe ser un entero"})
        if(release_year <= 0) return res.status(400).json({message: "el año debe ser mayor a 0"})

        const [actualizar] = await programingLanguage.update(req.body,{where:{id: req.params.id}})

        if(actualizar){const encontro = await programingLanguage.findByPk(req.params.id)
            return res.status(200).json(encontro)
        
        }else{return res.status(404).json({message:"No se encontro el id para modificar"})}
        
    } catch (error) {
        return res.status(400).json({message:"Error al tratar de actualizar un lenguaje"})
    }
}
