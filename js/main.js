let total = 0;
let cantidad = 0;

// array productos
const productos = [
  { id: 1, producto: "Agua", precio: 200, stock: 50 },
  { id: 2, producto: "Yerba", precio: 450, stock: 50 },
  { id: 3, producto: "Leche", precio: 100, stock: 50 },
];

// funcion calcular precio de unidades
function CalcularIva(subTotal) {
  ivaInc = subTotal * 1.21;
  return ivaInc;
}

// funcion registrar pedido
function registrarPedido() {
  cantidad = parseInt(prompt("Ingrese Cantidad"));
  if (cantidad <= productos[pedido - 1].stock) {
    alert(
      "Usted pidió " +
        cantidad +
        " unidades " +
        "El precio por unidad es de $" +
        productos[pedido - 1].precio
    );
    productos[pedido - 1].stock = productos[pedido - 1].stock - cantidad;
    let subTotal = productos[pedido - 1].precio * cantidad;
    CalcularIva(subTotal);

    alert("El total de la compra con IVA es de $" + ivaInc);
    total = total + ivaInc;
  } else {
    alert(
      "No tenemos esa cantidad en stcok. Stock disponible " +
        productos[pedido - 1].stock
    );
  }
}

// Clase clientes
class Clientes {
  constructor(nombre, edad) {
    (this.nombre = nombre), (this.edad = edad);
  }
}

//Función de registro de cliente
function registroCliente() {
  nombre = prompt("Ingrese su Nombre");
  edad = prompt("Ingrese su Edad");
  clientenuevo = new Clientes(nombre, edad);
}

registroCliente();
let pedido = parseInt(
  prompt("Ingrese su Pedido\n1.Leche\n2.Yerba\n3Agua\n4.Salir")
);
while (pedido != 4) {
  switch (pedido) {
    case 1:
      registrarPedido();
      break;
    case 2:
      registrarPedido();
      break;
    case 3:
      registrarPedido();
      break;
    case 4:
      registrarPedido();
      break;
    default:
      alert("No se reconoce la opción");
      break;
  }
  pedido = parseInt(
    prompt("Ingrese su Pedido\n1.Leche\n2.Yerba\n3Agua\n4.Salir")
  );
}
alert(nombre + " Gracias por su compra.\nEl total del ticket es de $" + total);
