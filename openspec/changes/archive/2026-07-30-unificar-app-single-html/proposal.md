## Why

La aplicación de registro de productos actualmente está distribuida en múltiples archivos (2 HTML, 1 CSS, 4 JS). Para simplificar la distribución, despliegue y uso, se requiere unificar toda la aplicación en un único archivo HTML autocontenido, eliminando la dependencia de archivos externos y facilitando su portabilidad.

## What Changes

- **BREAKING**: Eliminación de la estructura multi-archivo (index.html, reporte.html, css/, js/)
- Consolidación de todo el código (HTML, CSS, JavaScript) en un único archivo `app.html`
- Las dos pantallas (Registro y Reporte) se convierten en vistas navegables dentro del mismo archivo
- Todo el CSS se incrusta en etiquetas `<style>`
- Todo el JavaScript se incrusta en etiquetas `<script>`
- La navegación entre pantallas se maneja con JavaScript (mostrar/ocultar secciones)
- Se mantienen todas las funcionalidades existentes: formulario, validaciones, cálculo de totales, reporte con filtros, eliminación de registros y persistencia en LocalStorage

## Capabilities

### New Capabilities

- `single-file-architecture`: Arquitectura de archivo único que consolida HTML, CSS y JavaScript en un solo archivo `.html` con navegación entre vistas mediante JavaScript

### Modified Capabilities

(ninguna - las funcionalidades existentes se mantienen, solo cambia la arquitectura de distribución)

## Impact

- **Archivos eliminados**: index.html, reporte.html, css/estilos.css, js/app.js, js/storage.js, js/reporte.js, js/utils.js
- **Archivo nuevo**: app.html (único archivo de la aplicación)
- **Dependencias**: Ninguna (se mantiene sin frameworks ni librerías externas)
- **Compatibilidad**: Se mantiene en navegadores modernos (Chrome, Edge, Firefox, Safari)
- **Ventaja**: Un solo archivo para distribuir, copiar o compartir
