# Tienda Online de Huevos — Template ecommerce

Template de venta de huevos con 5 páginas HTML existentes.

## Alcance

Incluye categoría, detalle, carrito y finalización. main.js contiene la lógica del carrito de demostración y guarda productos en localStorage. La finalización no implica un cobro real.

Los precios, contactos y datos de cliente son ejemplos para personalizar. La presencia de un formulario o botón no garantiza una integración con servicios externos.

## Tecnologías y estructura

- HTML para las páginas.
- CSS local: `styles.css y nova.css`.
- JavaScript local: `main.js y nova.js`.
- localStorage para el estado de demostración en el navegador.
- Fuentes, iconos o imágenes externas según cada pantalla; se necesita conexión para cargar esos recursos.

## Vista previa local

Desde esta carpeta, inicia un servidor estático. Por ejemplo, con Node.js y npm disponibles:

```sh
npx --yes http-server . -p 8000
```

Abre [la pantalla inicial](http://localhost:8000/index.html) en el navegador. No hay un package.json ni un paso de build propio del template.

La navegación existente usa el prefijo absoluto `/ecommerce-template-01/`. La URL anterior permite inspeccionar la pantalla inicial; para recorrer los enlaces sin modificarlos, configura tu servidor o sitio contenedor para servir esta carpeta bajo ese prefijo. Las rutas de los archivos se conservan tal como están.

## Páginas incluidas

Las rutas son relativas a esta carpeta.

| Archivo | Título de la pantalla |
| --- | --- |
| `carrito.html` | Carrito |
| `categoria.html` | Categoría |
| `detalle.html` | Detalle |
| `finalizar.html` | Finalizar compra |
| `index.html` | Tienda Online Huevos |

## Personalización

- Edita los textos, contactos e imágenes en los HTML.
- Ajusta los estilos en `styles.css` y `nova.css` y la configuración de Tailwind de las páginas cuando corresponda.
- Los importes del template están presentados en CLP. Mantén el formato sin decimales y los contactos de ejemplo para Chile al personalizarlo.
- Comprueba los cambios en móvil, tablet y escritorio.
- Para reiniciar la demostración, elimina únicamente las claves de localStorage de este template desde las herramientas de desarrollo del navegador.

## Integración

Antes de usar el template en una tienda operativa, conecta los servicios que correspondan: catálogo, inventario, autenticación, pedidos, pagos y contacto. Revisa las rutas y sustituye el contenido de muestra y los textos legales por los del negocio.
