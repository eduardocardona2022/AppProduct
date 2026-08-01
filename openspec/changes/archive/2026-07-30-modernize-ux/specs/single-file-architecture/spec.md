## MODIFIED Requirements

### Requirement: CSS incrustado en etiqueta style
El sistema SHALL incluir todo el CSS dentro de una etiqueta `<style>` en el `<head>` del documento, incluyendo variables CSS modernas y animaciones.

#### Scenario: Estilos contenidos en el documento
- **WHEN** se inspecciona el archivo `app.html`
- **THEN** todo el CSS SHALL estar dentro de una etiqueta `<style>` en el `<head>`
- **THEN** NO SHALL existir referencia a archivos CSS externos
- **THEN** el CSS SHALL incluir variables CSS (custom properties) en `:root`
- **THEN** el CSS SHALL incluir animaciones (@keyframes) si son necesarias
- **THEN** el CSS SHALL incluir media queries para responsive design

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

## ADDED Requirements

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
