## MODIFIED Requirements

### Requirement: Responsive design mejorado para móviles
El sistema SHALL adaptar la nueva interfaz Aurora a pantallas móviles de 320px-600px, priorizando composición vertical, lectura rápida, controles táctiles y ausencia de scroll horizontal.

#### Scenario: Layout adaptativo en pantallas pequeñas
- **WHEN** la aplicación se visualiza en pantallas de 320px-600px
- **THEN** el contenedor SHALL usar padding de 12px-16px
- **THEN** el header SHALL conservar una jerarquía clara sin solaparse con el título
- **THEN** las cards, campos y acciones principales SHALL ocupar el ancho disponible sin desbordarse
- **THEN** el texto SHALL ser legible sin zoom

#### Scenario: Reporte responsive en móvil
- **WHEN** el reporte se visualiza en móvil
- **THEN** la tabla SHALL reemplazarse por cards verticales
- **THEN** cada card SHALL mostrar producto, estado, total y acciones en una jerarquía visual clara
- **THEN** no SHALL existir scroll horizontal para consultar o actuar sobre un registro

#### Scenario: Herramientas responsive
- **WHEN** se visualizan filtros, compartir o acciones de reporte en móvil
- **THEN** los controles SHALL apilarse con separación mínima de 12px
- **THEN** las acciones principales SHALL tener ancho suficiente y no competir visualmente entre sí

### Requirement: Tipografía responsive
El sistema SHALL usar una escala tipográfica fluida basada en `clamp()` o unidades relativas para conservar jerarquía y legibilidad entre móvil, tablet y escritorio.

#### Scenario: Tipografía móvil
- **WHEN** la aplicación se visualiza en móvil
- **THEN** los títulos SHALL mantener una jerarquía visible sin superar el ancho disponible
- **THEN** el texto body SHALL ser de al menos 1rem y los labels SHALL ser legibles sin zoom

#### Scenario: Tipografía de escritorio
- **WHEN** la aplicación se visualiza en escritorio
- **THEN** los títulos, métricas y datos SHALL aprovechar el espacio disponible sin perder proporción
- **THEN** la escala SHALL mantener consistencia entre formulario, reporte y modales

### Requirement: Espaciado responsive
El sistema SHALL adaptar padding, gaps y márgenes mediante una escala consistente para que la interfaz respire en escritorio y permanezca compacta en móvil.

#### Scenario: Espaciado reducido en móvil
- **WHEN** la pantalla tiene menos de 600px
- **THEN** las cards SHALL usar padding cercano a 16px
- **THEN** el contenedor SHALL usar 12px-16px y los grupos SHALL mantener separación mínima de 8px

#### Scenario: Espaciado generoso en escritorio
- **WHEN** la pantalla supera 768px
- **THEN** las cards SHALL usar al menos 24px de padding cuando el contenido lo permita
- **THEN** el contenido SHALL mantener un ancho máximo centrado y una separación visual clara

### Requirement: Media queries actualizadas
El sistema SHALL implementar breakpoints consistentes para móvil, tablet y escritorio, con layouts fluidos y sin depender de anchos fijos que provoquen desbordamiento.

#### Scenario: Breakpoints definidos
- **WHEN** se inspecciona el CSS
- **THEN** SHALL existir una regla para móvil alrededor de 600px
- **THEN** SHALL existir adaptación para tablet entre 601px y 1024px cuando sea necesaria
- **THEN** SHALL existir un layout base para escritorio desde 1025px

#### Scenario: Movimiento reducido
- **WHEN** el usuario tiene `prefers-reduced-motion: reduce`
- **THEN** las animaciones y transiciones no esenciales SHALL reducirse o desactivarse
