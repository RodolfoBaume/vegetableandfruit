// import { ArticuloLista } from "../classes/articulo-list.class";
// import { Articulo } from "../classes/articulo.class";

class Articulo {
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

class ArticuloLista {
  constructor() {
    this.articulos = [];
  }

  agregarArticuloLista(articulo) {
    this.articulos.push(articulo);
  }

  borrarArticuloLista(codigo) {
    this.articulos = this.articulos.filter(
      (articulo) => articulo.codigo != codigo
    );
  }

  // eliminar Articulo
  eliminarArticulo (codigo) {
    let tr = document.querySelector("#registro_" + codigo);
    let okBorrar = confirm("¿Estas seguro de borrar el producto?");
    if (okBorrar) {
      articulosLista.borrarArticuloLista(codigo);
      tr.remove();
    }
  }

  // seleccionar Articulo
  seleccionarArticulo (codigo) {
    document.getElementById("codigoArt").value =
      articulosLista.articulos[codigo - 1].codigo;
    document.getElementById("desc").value =
      articulosLista.articulos[codigo - 1].descripcion;
    document.getElementById("precio").value =
      articulosLista.articulos[codigo - 1].precio;
  }
}

const articulosLista = new ArticuloLista();

articulosLista.agregarArticuloLista(
  new Articulo(1, "papas", 10.55, "img/papas.jpg")
);
articulosLista.agregarArticuloLista(
  new Articulo(2, "manzanas", 12.1, "img/manzanas.jpg")
);
articulosLista.agregarArticuloLista(
  new Articulo(3, "melón", 52.3, "img/melon.jpg")
);
articulosLista.agregarArticuloLista(
  new Articulo(4, "cebollas", 17, "img/cebollas.jpg")
);
articulosLista.agregarArticuloLista(
  new Articulo(5, "calabaza", 20, "img/calabazas.jpg")
);

crearTabla = (lista) => {
  let stringTabla =
    '<thead class="table-success"><tr><th>Código</th><th>Descripción</th><th>Precio</th><th>Borrar</th><th>Seleccionar</th></tr></thead>';
  for (let articulo of lista) {
    let fila = `<tr id="registro_${articulo.codigo}">`;
    fila += `<td>${articulo.codigo} </td>`;

    fila += `<td> ${articulo.descripcion} </td>`;

    fila += `<td> $ ${articulo.precio} </td>`;

    fila += `<td> <button class='buttonBorrar btn btn-danger' onclick='articulosLista.eliminarArticulo(${articulo.codigo})'>Borrar?</button> </td>`;

    fila += `<td> <button class='buttonSel btn btn-secondary' onclick='articulosLista.seleccionarArticulo(${articulo.codigo})'>Seleccionar</button></td>`;

    fila += `</tr>`;
    stringTabla += fila;
  }
  return stringTabla;
};

let tabla = document.getElementById("tablaArticulos");
if (tabla != null) {
  tabla.innerHTML = crearTabla(articulosLista.articulos);
}

crearCards = (lista) => {
  let stringCard = "";
  for (let articulo of lista) {
    let fila = `<div class="col mb-5">
            <div class="card h-100">
                <!-- badge-->
                <div class="badge text-bg-success text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Código ${articulo.codigo}</div>
                <!-- Product image-->
                <img class="card-img-top" src="${articulo.imagen}" alt="..." />
                <!-- Product details-->
                <div class="card-body p-4">
                    <div class="text-center">
                        <!-- Product name-->
                        <h5 class="fw-bolder">${articulo.descripcion}</h5>
                        <!-- Product price-->
                        $ ${articulo.precio}
                    </div>
                </div>
                <!-- Product actions-->
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Añadir al carrito</a></div>
                 </div>
            </div>
        </div>`;
    stringCard += fila;
  }
  return stringCard;
};

let tarjetas = document.getElementById("tarjetas");
if (tarjetas != null) {
  tarjetas.innerHTML = crearCards(articulosLista.articulos);
}

// agregar Articulo
agregarArticulo = () => {
  let codigo = parseInt(document.getElementById("codigoArt").value);
  let descripcion = document.getElementById("desc").value;
  let precio = document.getElementById("precio").value;

  if (codigo == 0 || codigo === null) {
    //verifica que sea distinto de cero
    alert("Debe ingresar un código de articulo distinto a cero");
  } else if (
    articulosLista.articulos.find((articulo) => articulo.codigo === codigo)
  ) {
    // verifica codigo existente
    alert("Ya existe un artículo con dicho codigo");
  } else {
    // se agrega articulo
    const nuevoArticulo = new Articulo(codigo, descripcion, precio);
    articulosLista.agregarArticuloLista(nuevoArticulo);
    tabla.innerHTML = crearTabla(articulosLista.articulos);
    document.getElementById("codigoArt").value = "";
    document.getElementById("desc").value = "";
    document.getElementById("precio").value = "";
  }
};

// modificar Articulo
modificarArticulo = () => {
  let codigo = document.getElementById("codigoArt").value;
  let descripcion = document.getElementById("desc").value;
  let precio = document.getElementById("precio").value;

  articulosLista.articulos[0].codigo = codigo;
  articulosLista.articulos[0].descripcion = descripcion;
  articulosLista.articulos[0].precio = precio;

  console.log(articulosLista.articulos[0]);
  console.log(articulosLista);
};
