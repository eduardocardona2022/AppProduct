## MODIFIED Requirements

### Requirement: Responsive design mejorado para móviles
El sistema SHALL mejorar el diseño responsive para dispositivos móviles con patrones modernos, incluyendo adaptación del botón toggle de tema y layout de tabla de reportes.

#### Scenario: Layout adaptativo en pantallas pequeñas
- **WHEN** la aplicación se visualiza en pantallas de 320px-600px
- **THEN** el contenedor principal SHALL tener padding reducido (12px-16px)
- **THEN** los campos de formulario SHALL ocupar 100% del ancho disponible
- **THEN** los botones SHALL ocupar 100% del ancho en móvil
- **THEN** el texto SHALL ser legible sin zoom (mínimo 14px)

#### Scenario: Tabla responsive en móvil
- **WHEN** la tabla de reporte se visualiza en móvil (ancho < 601px)
- **THEN** la tabla SHALL ocultarse y reemplazarse por cards individuales por registro
- **THEN** cada card SHALL mostrar los datos del registro en formato vertical (label: valor)
- **THEN** cada card SHALL incluir un botón eliminar visible en la parte inferior
- **THEN** NO SHALL requerir scroll horizontal para ver los datos ni el botón eliminar
- **THEN** los botones de acción SHALL ser táctiles (mínimo 44x44px de área clickable)

#### Scenario: Tabla en escritorio
- **WHEN** la tabla de reporte se visualiza en escritorio (ancho >= 601px)
- **THEN** la tabla SHALL mostrarse con el layout tradicional de columnas
- **THEN** las cards móviles SHALL estar ocultas

#### Scenario: Filtros responsive en móvil
- **WHEN** los filtros de fecha se visualizan en móvil
- **THEN** los campos de fecha SHALL apilarse verticalmente
- **THEN** el botón de buscar SHALL ocupar ancho completo
- **THEN** SHALL haber espaciado adecuado entre elementos (mínimo 12px)

#### Scenario: Toggle de tema en móvil
- **WHEN** el botón toggle se visualiza en móvil
- **THEN** el botón SHALL tener área táctil mínima de 44x44px
- **THEN** el botón SHALL estar posicionado sin interferir con el título
- **THEN** el layout del header SHALL ajustarse para acomodar el toggle

### Requirement: Touch targets accesibles
El sistema SHALL asegurar que todos los elementos interactivos tengan áreas de touch adecuadas para móviles, incluyendo el nuevo botón toggle y el botón eliminar en cards de reporte.

#### Scenario: Botones con área táctil suficiente
- **WHEN** se renderiza un botón en móvil
- **THEN** el botón SHALL tener un área mínima de 44x44px (recomendación WCAG)
- **THEN** el padding SHALL ser suficiente para lograr el tamaño mínimo
- **THEN** el espaciado entre botones SHALL ser de al menos 8px

#### Scenario: Inputs con área táctil suficiente
- **WHEN** se renderiza un campo de entrada en móvil
- **THEN** el input SHALL tener altura mínima de 44px
- **THEN** el padding SHALL ser suficiente para fácil interacción táctil

#### Scenario: Toggle con área táctil suficiente
- **WHEN** se renderiza el botón toggle en móvil
- **THEN** el botón SHALL tener un área mínima de 44x44px
- **THEN** el espaciado alrededor del botón SHALL ser al menos 8px

#### Scenario: Botón eliminar en card de reporte con área táctil suficiente
- **WHEN** se renderiza el botón eliminar en una card de reporte en móvil
- **THEN** el botón SHALL tener un área mínima de 44x44px
- **THEN** el botón SHALL ocupar ancho completo dentro de la card
- **THEN** el botón SHALL ser fácilmente identificable como acción destructiva
