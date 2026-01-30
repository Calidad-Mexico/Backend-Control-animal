import prisma from "../../../prisma/prismaClient.js";

const getStatistics = async (req, res) => {
    try {
        const animales = await prisma.animales.count()

        const adopciones =  await prisma.adopciones.count()

        const vacunaciones = await prisma.vacunaciones.count()

        return res.status(200).json({
            message: "Estadisticas obtenidas exitosamente",
            animales,
            adopciones,
            vacunaciones
        })
    } catch (error) {
        res.status(500).json({ message: "Ha ocurrido un error al obtener las estadisticas", error: error.message });
    }
}

export {
    getStatistics
}