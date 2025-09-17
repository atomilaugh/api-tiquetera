// Importamos el repositorio de MongoDB para clientes
import tiqueteraRepositoryMongo from "../repositories/tiqueteraRepositoryMongo.js";  
// Importamos la clase de caso de uso para crear clientes
import CreateTiquetera from "../../application/use-cases/tiquetera/CreateTiquetera.js";  

// Creamos una instancia del repositorio
const clientesRepository = new tiqueteraRepositoryMongo();

// Creamos una instancia del caso de uso, inyectando el repositorio
const createTiqueteraUseCase = new CreateTiquetera(clientesRepository);

// Controlador para manejar las solicitudes relacionadas con clientes
class TiqueteraController {
    // Método para crear un nuevo cliente
    async create(req, res) {
        try {
            const data = req.body;  // Obtenemos los datos del cuerpo de la solicitud
            const newTiquetera = await createTiqueteraUseCase.execute(data); // Ejecutamos el caso de uso
            res.status(201).json(newTiquetera); // Respondemos con el nuevo cliente creado
        } catch (error) {
            res.status(500).json({ error: error.message }); // Manejo de errores
        }
    }
}

// Exportamos una instancia del controlador para usarla en las rutas
export default new TiqueteraController();       