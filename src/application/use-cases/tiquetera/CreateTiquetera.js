export default class CreateTiquetera {
    constructor(tiqueteraRepositoryMongo) {
      this.tiqueteraRepositoryMongo = tiqueteraRepositoryMongo;
    }
  
    async execute(data) {
      const newTiquetera = {
        nrotiquetera: data.nrotiquetera,
        cliente: data.cliente,
        saldo: data.saldo,
        totalTransacciones: data.totalTransacciones
      };
      return await this.tiqueteraRepositoryMongo.create(newTiquetera);
    }
}
