# single-file-architecture

## Purpose

Define the architecture for a single self-contained HTML file (`app.html`) that includes all HTML, CSS, and JavaScript for the complete application, with no external dependencies.

## Requirements

### Requirement: Archivo HTML unico autocontenido
El sistema SHALL consistir en un unico archivo `app.html` que contenga todo el HTML, CSS y JavaScript necesario para la aplicacion completa.

#### Scenario: Un solo archivo distribuido
- **WHEN** se distribuye la aplicacion
- **THEN** el sistema SHALL consistir en un unico archivo `app.html`
- **THEN** el archivo SHALL funcionar abriendolo directamente en el navegador (protocolo file://)

#### Scenario: Sin dependencias de archivos externos
- **WHEN** se abre `app.html` en el navegador
- **THEN** el sistema SHALL funcionar sin requerir ningun archivo externo (CSS, JS, imagenes)

### Requirement: CSS incrustado en etiqueta style
El sistema SHALL incluir todo el CSS dentro de una etiqueta `<style>` en el `<head>` del documento, incluyendo variables CSS modernas y animaciones.

#### Scenario: Estilos contenidos en el documento
- **WHEN** se inspecciona el archivo `app.html`
- **THEN** todo el CSS SHALL estar dentro de una etiqueta `<style>` en el `<head>`
- **THEN** NO SHALL existir referencia a archivos CSS externos
- **THEN** el CSS SHALL incluir variables CSS (custom properties) en `:root`
- **THEN** el CSS SHALL incluir animaciones (@keyframes) si son necesarias
- **THEN** el CSS SHALL incluir media queries para responsive design

### Requirement: JavaScript incrustado en etiqueta script
El sistema SHALL incluir todo el JavaScript dentro de una etiqueta `<script>` antes del cierre de `</body>`.

#### Scenario: Scripts contenidos en el documento
- **WHEN** se inspecciona el archivo `app.html`
- **THEN** todo el JavaScript SHALL estar dentro de una etiqueta `<script>` antes de `</body>`
- **THEN** NO SHALL existir referencia a archivos JS externos

### Requirement: Navegacion entre vistas Registro y Reporte
El sistema SHALL proporcionar navegacion entre las vistas de Registro y Reporte dentro del mismo archivo, sin recargar la pagina.

#### Scenario: Vista de registro activa por defecto
- **WHEN** el usuario abre `app.html`
- **THEN** el sistema SHALL mostrar la vista de Registro (formulario)
- **THEN** la vista de Reporte SHALL estar oculta

#### Scenario: Navegar a vista de Reporte
- **WHEN** el usuario presiona el boton "Ir a Reportes"
- **THEN** el sistema SHALL ocultar la vista de Registro
- **THEN** el sistema SHALL mostrar la vista de Reporte
- **THEN** NO SHALL recargarse la pagina

#### Scenario: Navegar a vista de Registro desde Reporte
- **WHEN** el usuario presiona un boton "Volver al Registro" o equivalente en la vista de Reporte
- **THEN** el sistema SHALL ocultar la vista de Reporte
- **THEN** el sistema SHALL mostrar la vista de Registro
- **THEN** NO SHALL recargarse la pagina

### Requirement: Organizacion del codigo por secciones logicas
El sistema SHALL organizar el JavaScript en secciones logicas claramente identificadas con comentarios.

#### Scenario: Secciones identificables en el codigo
- **WHEN** se inspecciona el bloque `<script>` del archivo
- **THEN** el codigo SHALL estar organizado en secciones: Utilidades, Storage, Formulario, Reporte
- **THEN** cada seccion SHALL estar precedida por un comentario descriptivo

### Requirement: Preservacion de funcionalidades existentes
El sistema SHALL mantener todas las funcionalidades de la aplicacion original multi-archivo.

#### Scenario: Formulario funcional
- **WHEN** el usuario esta en la vista de Registro
- **THEN** el sistema SHALL permitir registrar productos con validaciones, calculo automatico de total y persistencia en LocalStorage

#### Scenario: Reporte funcional
- **WHEN** el usuario esta en la vista de Reporte
- **THEN** el sistema SHALL permitir filtrar por fechas, mostrar tabla con totales generales y eliminar registros con confirmacion

#### Scenario: Persistencia en LocalStorage
- **WHEN** se registran o eliminan productos
- **THEN** el sistema SHALL almacenar los datos en localStorage bajo la clave "productos"
- **THEN** los datos SHALL persistir entre sesiones del navegador

### Requirement: Diseno responsive en archivo unico
El sistema SHALL mantener el diseno responsive para dispositivos moviles y escritorio dentro del archivo unico.

#### Scenario: Responsive en movil
- **WHEN** el usuario abre `app.html` en un dispositivo movil
- **THEN** el sistema SHALL adaptar el layout a pantallas pequenas
- **THEN** los campos, botones y tabla SHALL ser legibles y usables

#### Scenario: Responsive en escritorio
- **WHEN** el usuario abre `app.html` en un escritorio
- **THEN** el sistema SHALL mostrar un layout centrado y proporcionado

### Requirement: SVG inline para iconografía
El sistema SHALL incluir iconos SVG directamente en el HTML o generados dinámicamente con JavaScript, sin dependencias externas.

#### Scenario: Iconos SVG en el documento
- **WHEN** se renderizan iconos en la aplicación
- **THEN** los iconos SHALL ser SVG inline en el HTML
- **THEN** los iconos SHALL estar dentro de elementos `<svg>` en el DOM
- **THEN** NO SHALL existir referencia a archivos de iconos externos
- **THEN** NO SHALL existir referencia a CDN de icon fonts
- **THEN** los SVG SHALL poder ser estilizados con CSS (colores, tamaños)

### Requirement: Animaciones CSS sin dependencias
El sistema SHALL implementar todas las animaciones usando CSS nativo (transitions, @keyframes) sin librerías externas.

#### Scenario: Animaciones implementadas en CSS
- **WHEN** se inspecciona el código de animaciones
- **THEN** las animaciones SHALL estar definidas con CSS @keyframes
- **THEN** las transiciones SHALL estar definidas con CSS transition property
- **THEN** NO SHALL existir referencia a librerías de animación externas (GSAP, Anime.js, etc.)
- **THEN** las animaciones SHALL funcionar sin JavaScript (excepto para triggers dinámicos)

### Requirement: Variables CSS para sistema de diseño
El sistema SHALL definir un sistema de diseño usando CSS Custom Properties para mantener consistencia visual sin dependencias externas.

#### Scenario: Variables CSS en root
- **WHEN** se inspecciona el CSS del archivo `app.html`
- **THEN** SHALL existir un selector `:root` con variables CSS definidas
- **THEN** las variables SHALL incluir colores (primario, éxito, peligro, texto, fondo)
- **THEN** las variables SHALL incluir espaciados (xs, sm, md, lg, xl)
- **THEN** las variables SHALL incluir radios de borde (sm, md, lg)
- **THEN** las variables SHALL incluir sombras (sm, md, lg)
- **THEN** las variables SHALL incluir duraciones de transición (fast, normal)

#### Scenario: Uso de variables en componentes
- **WHEN** se renderizan los componentes de la aplicación
- **THEN** los componentes SHALL referenciar las variables CSS con `var(--nombre-variable)`
- **THEN** NO SHALL haber valores de color hardcodeados en componentes (solo en variables)
- **THEN** los cambios en las variables SHALL reflejarse automáticamente en todos los componentes
