export class Producto {
    toLowerCase() {
      throw new Error('Method not implemented.');
    }
    filter(producto: Producto) {
      throw new Error('Method not implemented.');
    }
    id:number;
    nombre:string;
    codigo:string;
    precio: number;
    descripcion: string;
    imagenUrl: string;

    constructor() {
        this.id = 0;
        this.nombre = "";
        this.codigo = "";
        this.precio = 0;
        this.descripcion = "";
        this.imagenUrl = "";
        
    }
}
