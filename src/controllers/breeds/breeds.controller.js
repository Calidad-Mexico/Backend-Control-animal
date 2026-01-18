import prisma from "../../../prisma/prismaClient.js";

const getBreeds = async (req, res) => {
    try {
        const breeds = await prisma.cat_Razas.findMany()

        if (!breeds) {
            return res.status(404).json({ message: "No se pudieron obtener las razas"})
        }

        return res.status(200).json({ message: "Razas obtenidas exitosamente", breeds });
    } catch(error) {
        return res.status(500).json({ message: error.message });
    }
}

const createBreed = async (req, res) => {
    // Obtener datos del body
    const {
        especie_animal,
        nombre_raza
    } = req.body;

    // Datos de la raza
    const breedData = {
        especie_animal,
        nombre_raza
    }
    try {
        const breed = await prisma.cat_Razas.create({
            data: breedData
        })

        if (!breed) {
            return res.status(404).json({ message: "No se pudo crear la raza" })
        }

        return res.status(201).json({ message: "Raza creada", breed });
    } catch(error) {
        return res.status(500).json({ message: error.message });
    }
}

export {
    getBreeds,
    createBreed,
}