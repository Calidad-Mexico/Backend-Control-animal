import prisma from "../../../prisma/prismaClient.js"

const getAnimals = async (req, res) => {
    try {
        const animals = prisma.animales.findMany()

        if (!animals) {
            return res.status(404).json({ message: "No se pudieron obtener los animales"})
        }

        return res.status(200).json({ message: "Animales obtenidos exitosamente", animals })
    } catch(error) {
        return res.status(500).json({ message: error.message });
    }
}

const getAnimalsByID = async (req, res) => {
    // Extracion del id por parametros
    const { id } = req.params

    // Manejo de errores
    if (!id) {
        return res.status(404).json({ message: "Falta ID"})
    }

    try {
        const animal = await prisma.animales.findUnique({
            where: {
                animal_id: id
            },
        })

        if (!animal) {
            return res.status(404).json({ message: "No se pudo obtener el animal" })
        }

        return res.status(200).json({ message: "Animal obtenido exitosamente", animal })
    } catch(error) {
        return res.status(500).json({ message: error.message });
    }
}

const createAnimals = async (req, res) => {

}

const deleteAnimals = async (req, res) => {}

export {
    getAnimals,
    getAnimalsByID,
    createAnimals,
    deleteAnimals
}