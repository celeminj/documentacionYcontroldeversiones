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
 * Calcula el total a pagar por este rpoducto.
 * @returns  - el total a pagar por el producto.
 */
  calcularTotal() {
    return this.precio * this.cantidad;
  }
}

class Carrito {
  /**
   *  Inicialmente el carrito esta vacio
   */
  constructor() {
    this.productos = [];
  }
/**
 * Esto agrega un producto al carrito
 * @param {*} producto 
 */
  agregarProducto(producto) {
    this.productos.push(producto);
  }
/**
 * Calcula el total del carrito sumando el total de cada producto agregado
 * @returns 
 */
  calcularTotalCarrito() {
    return this.productos.reduce((total, producto) => total + producto.calcularTotal(), 0);
  }
/**
 * Vacía el carrito eliminando todos los productos
 */
  vaciarCarrito() {
    this.productos = [];
  }
}

class Usuario {
  /**
   * Crea una nueva instancia de Usuario.
   * @param {*} nombre 
   * @param {*} correo 
   */
  constructor(nombre, correo) {
    this.nombre = nombre;
    this.correo = correo;
    this.carrito = new Carrito();
  }
/**
 * Agrega un producto al carrito del usuario.
 * @param {*} producto 
 */
  agregarProductoAlCarrito(producto) {
    this.carrito.agregarProducto(producto);
  }
/**
 * Finaliza la compra del usuario.
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
