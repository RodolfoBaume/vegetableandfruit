export class ArticuloLista {
    constructor() {
      this.articulos = [];
    }
  
    agregarArticuloLista(articulo) {
      this.articulos.push(articulo);
    }
  
    borrarArticulo(codigo) {
      this.articulos = this.articulos.filter(
        (articulo) => articulo.codigo != codigo
      );
    }
  
    seleccionarArticulo() {}
  }