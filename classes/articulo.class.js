export class Articulo {
    constructor(codigo, descripcion, precio, imagen) {
      this.codigo = codigo;
      this.descripcion = descripcion;
      this.precio = precio;
      if (imagen == null) {
        this.imagen = "/img/producto-sin-imagen.png";
      } else {
        this.imagen = imagen;
      }
    }
  }