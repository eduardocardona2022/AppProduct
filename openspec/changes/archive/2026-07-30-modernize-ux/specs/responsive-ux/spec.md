## ADDED Requirements

### Requirement: Responsive design mejorado para móviles
El sistema SHALL mejorar el diseño responsive para dispositivos móviles con patrones modernos.

#### Scenario: Layout adaptativo en pantallas pequeñas
- **WHEN** la aplicación se visualiza en pantallas de 320px-600px
- **THEN** el contenedor principal SHALL tener padding reducido (12px-16px)
- **THEN** los campos de formulario SHALL ocupar 100% del ancho disponible
- **THEN** los botones SHALL ocupar 100% del ancho en móvil
- **THEN** el texto SHALL ser legible sin zoom (mínimo 14px)

#### Scenario: Tabla responsive en móvil
- **WHEN** la tabla de reporte se visualiza en móvil
- **THEN** la tabla SHALL permitir scroll horizontal si es necesario
- **THEN** las celdas SHALL tener padding reducido para maximizar espacio
- **THEN** el texto SHALL mantenerse legible (mínimo 12px)
- **THEN** los botones de acción SHALL ser táctiles (mínimo 44x44px de área clickable)

#### Scenario: Filtros responsive en móvil
- **WHEN** los filtros de fecha se visualizan en móvil
- **THEN** los campos de fecha SHALL apilarse verticalmente
- **THEN** el botón de buscar SHALL ocupar ancho completo
- **THEN** SHALL haber espaciado adecuado entre elementos (mínimo 12px)

### Requirement: Touch targets accesibles
El sistema SHALL asegurar que todos los elementos interactivos tengan áreas de touch adecuadas para móviles.

#### Scenario: Botones con área táctil suficiente
- **WHEN** se renderiza un botón en móvil
- **THEN** el botón SHALL tener un área mínima de 44x44px (recomendación WCAG)
- **THEN** el padding SHALL ser suficiente para lograr el tamaño mínimo
- **THEN** el espaciado entre botones SHALL ser de al menos 8px

#### Scenario: Inputs con área táctil suficiente
- **WHEN** se renderiza un campo de entrada en móvil
- **THEN** el input SHALL tener altura mínima de 44px
- **THEN** el padding SHALL ser suficiente para fácil interacción táctil

### Requirement: Tipografía responsive
El sistema SHALL ajustar tamaños de fuente para mejor legibilidad en diferentes tamaños de pantalla.

#### Scenario: Tamaños de fuente adaptativos
- **WHEN** la aplicación se visualiza en móvil
- **THEN** los títulos principales SHALL ser al menos 1.3rem
- **THEN** el texto body SHALL ser al menos 1rem (16px)
- **THEN** los labels SHALL ser al menos 0.9rem
- **WHEN** la aplicación se visualiza en escritorio
- **THEN** los tamaños de fuente SHALL ser proporcionales al espacio disponible

### Requirement: Espaciado responsive
El sistema SHALL ajustar espaciados (padding, margin) según el tamaño de pantalla.

#### Scenario: Espaciado reducido en móvil
- **WHEN** la aplicación se visualiza en pantallas < 600px
- **THEN** el padding de cards SHALL reducirse a 16px
- **THEN** el padding del contenedor SHALL ser 12px-16px
- **THEN** los margins entre elementos SHALL reducirse proporcionalmente

#### Scenario: Espaciado generoso en escritorio
- **WHEN** la aplicación se visualiza en pantallas > 768px
- **THEN** el padding de cards SHALL ser 24px o más
- **THEN** el contenedor SHALL tener max-width centrado (700px-900px)
- **THEN** los margins SHALL proporcionar respiración visual adecuada

### Requirement: Modal responsive
El sistema SHALL adaptar el modal de confirmación para diferentes tamaños de pantalla.

#### Scenario: Modal en móvil
- **WHEN** el modal se abre en móvil
- **THEN** el modal SHALL ocupar 90% del ancho de pantalla
- **THEN** el modal SHALL tener padding adecuado (20px-24px)
- **THEN** los botones SHALL apilarse verticalmente si no caben horizontalmente
- **THEN** el texto SHALL ser legible sin zoom

#### Scenario: Modal en escritorio
- **WHEN** el modal se abre en escritorio
- **THEN** el modal SHALL tener max-width de 340px-400px
- **THEN** el modal SHALL estar centrado vertical y horizontalmente
- **THEN** los botones SHALL mostrarse horizontalmente

### Requirement: Mensajes toast responsive
El sistema SHALL adaptar los mensajes toast para diferentes tamaños de pantalla.

#### Scenario: Toast en móvil
- **WHEN** se muestra un toast en móvil
- **THEN** el toast SHALL ocupar máximo 90% del ancho de pantalla
- **THEN** el toast SHALL estar centrado horizontalmente
- **THEN** el texto SHALL ser legible sin zoom
- **THEN** el padding SHALL ser adecuado (12px-16px)

#### Scenario: Toast en escritorio
- **WHEN** se muestra un toast en escritorio
- **THEN** el toast SHALL tener max-width de 400px-500px
- **THEN** el toast SHALL estar centrado en la parte superior
- **THEN** el padding SHALL ser generoso (16px-20px)

### Requirement: Media queries actualizadas
El sistema SHALL implementar media queries modernas para breakpoints comunes.

#### Scenario: Breakpoints definidos
- **WHEN** se inspecciona el CSS
- **THEN** SHALL existir media query para móvil (max-width: 600px o similar)
- **THEN** SHALL existir media query para tablet (opcional, 601px-1024px)
- **THEN** SHALL existir estilos base para escritorio (min-width: 1025px)
- **THEN** las media queries SHALL usar unidades relativas (rem, em) o px consistentes
