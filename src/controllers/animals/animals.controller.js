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

const createAnimal = async (req, res) => {
    try {
        const {
            nombre,
            especie,
            Raza,
            edad,
            pelaje,
            peso,
            numero_microchip,
            tipo_ingreso,
            ubicacion_actual,
            estado_salud,
            sexo,
            observaciones,
            fecha_ingreso,
            es_adoptable,
            autorizado_adopcion_por,
        } = req.body;

        // Validar relacion con el usuario que lo crea
        const usuario = await prisma.usuarios.findUnique({
            where: {
                usuario_id: autorizado_adopcion_por,
            },
        });

        if (!usuario) {
            return res.status(404).json({
                message: "El usuario autorizador no existe",
            });
        }

        const animal = await prisma.animales.create({
            data: {
                nombre,
                especie,
                Raza,
                edad,
                pelaje,
                peso: Number(peso),
                numero_microchip,
                tipo_ingreso,
                ubicacion_actual,
                estado_salud,
                sexo,
                observaciones: observaciones || "",
                fecha_ingreso,
                es_adoptable: Boolean(es_adoptable),
                autorizado_adopcion_por,
            },
        });

        return res.status(201).json({
            message: "Animal creado correctamente",
            animal,
        });
    } catch (error) {
        console.error("Error al crear animal:", error);

        // Error por campo unique (si luego lo agregas)
        if (error.code === "P2002") {
            return res.status(409).json({
                message: "El número de microchip ya existe",
            });
        }

        return res.status(500).json({ message: "Error interno del servidor",  error: error.message });
    }
};

const deleteAnimals = async (req, res) => {
    // Obtener id de los parametros
    const { id } = req.params

    // Manejo de errores
    if (!id) {
        return res.status(404).json({ message: "Falta ID"})
    }

    try {
        const animal = await prisma.animales.findUnique({
            where: {
                animal_id: id
            }
        })

        if (!animal) {
            return res.status(404).json({ message: "No se encontro el animal a eliminar" })
        }

        return res.status(200).json({ message: "Animal eliminado exitosamente", animal })
    } catch(error) {
        return res.status(500).json({ message: error.message });
    }
}

export {
    getAnimals,
    getAnimalsByID,
    createAnimal,
    deleteAnimals
}