# Aplicacion de Carrito de Compras

Este proyecto es una implementación básica de un sistema de carrito de compras utilizando JavaScript orientado a objetos. La aplicación permite a los usuarios agregar productos a un carrito, calcular el total y finalizar la compra.

## Estructura del Proyecto

El proyecto incluye tres clases principales:

1. **Producto**: Representa un producto disponible para la compra.
2. **Carrito**: Almacena productos y maneja las operaciones relacionadas con el carrito, como agregar productos y calcular el total.
3. **Usuario**: Representa un usuario que puede tener un carrito asociado y realizar una compra.

### Clases

#### `Producto`

- **Descripción**: Esta clase representa un producto con un nombre, un precio y una cantidad disponible.
- **Propiedades**:
  - `nombre`: El nombre del producto.
  - `precio`: El precio del producto.
  - `cantidad`: La cantidad de unidades.
- **Métodos**:
  - `calcularTotal()`: Calcula el precio total en función de la cantidad y el precio por unidad.

#### `Carrito`

- **Descripción**: Almacena los productos que el usuario ha agregado y permite calcular el total del carrito.
- **Propiedades**:
  - `productos`: Una lista de productos agregados al carrito.
- **Métodos**:
  - `agregarProducto(producto)`: Agrega un producto al carrito.
  - `calcularTotalCarrito()`: Calcula el total a pagar sumando el total de todos los productos.
  - `vaciarCarrito()`: Vacía el carrito después de la compra.

#### `Usuario`

- **Descripción**: Representa al usuario que interactúa con el carrito de compras.
- **Propiedades**:
  - `nombre`: El nombre del usuario.
  - `correo`: El correo electrónico del usuario.
  - `carrito`: Un objeto de la clase `Carrito` que contiene los productos del usuario.
- **Métodos**:
  - `agregarProductoAlCarrito(producto)`: Agrega un producto al carrito del usuario.
  - `finalizarCompra()`: Calcula el total de la compra, muestra el total y vacía el carrito.