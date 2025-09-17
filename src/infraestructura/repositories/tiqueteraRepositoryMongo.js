// Importamos Mongoose para manejar MongoDB
import mongoose from "mongoose";

// Definimos el esquema de MongoDB para los clientes
const tiqueteraSchema = new mongoose.Schema({
    nrotiquetera: { type: String, required: true, unique: true },
    cliente: { type: String, required: true },
    saldo: { type: Number, required: true },
    totalTransacciones: { type: Number, required: true }
}, {
    timestamps: true // Añade campos de createdAt y updatedAt automáticamente
});

// Creamos el modelo basado en el esquema
const TiqueteraModel = mongoose.model("Tiquetera", tiqueteraSchema);

// Repositorio para manejar las operaciones CRUD en MongoDB
class TiqueteraRepositoryMongo {
    // Crear un nuevo cliente
    async create(data) {
        const newTiquetera = new TiqueteraModel(data);
        return await newTiquetera.save();
    }

    // Obtener todos los clientes
    async findAll() {
        return await TiqueteraModel.find();
    }

    // Obtener un cliente por ID
    async findById(id) {
        return await TiqueteraModel.findById(id);
    }

    // Actualizar un cliente por ID
    async update(id, data) {
        return await TiqueteraModel.findByIdAndUpdate(id, data, { new: true });
    }

    // Eliminar un cliente por ID
    async delete(id) {
        return await TiqueteraModel.findByIdAndDelete(id);
    }
}

// Exportamos el repositorio para usarlo en los controladores y casos de uso
export default TiqueteraRepositoryMongo;    