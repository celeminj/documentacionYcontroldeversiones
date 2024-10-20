class Producto {
  /**
   * 
   * @param {*} nombre 
   * @param {*} precio 
   * @param {*} cantidad 
   */
  constructor(nombre, precio, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
  }
/**
 * 
 * @returns 
 */
  calcularTotal() {
    return this.precio * this.cantidad;
  }
}

class Carrito {
  /**
   * 
   */
  constructor() {
    this.productos = [];
  }
/**
 * 
 * @param {*} producto 
 */
  agregarProducto(producto) {
    this.productos.push(producto);
  }
/**
 * 
 * @returns 
 */
  calcularTotalCarrito() {
    return this.productos.reduce((total, producto) => total + producto.calcularTotal(), 0);
  }
/**
 * 
 */
  vaciarCarrito() {
    this.productos = [];
  }
}

class Usuario {
  /**
   * 
   * @param {*} nombre 
   * @param {*} correo 
   */
  constructor(nombre, correo) {
    this.nombre = nombre;
    this.correo = correo;
    this.carrito = new Carrito();
  }
/**
 * 
 * @param {*} producto 
 */
  agregarProductoAlCarrito(producto) {
    this.carrito.agregarProducto(producto);
  }
/**
 * 
 */
  finalizarCompra() {
    const total = this.carrito.calcularTotalCarrito();
    console.log(`Usuario ${this.nombre} ha realizado una compra por un total de ${total}€`);
    this.carrito.vaciarCarrito();
  }
}


const producto1 = new Producto("Laptop", 1200, 1);
const producto2 = new Producto("Mouse", 20, 2);

const usuario = new Usuario("Juan", "juan@example.com");

usuario.agregarProductoAlCarrito(producto1);
usuario.agregarProductoAlCarrito(producto2);

usuario.finalizarCompra();
