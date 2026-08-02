## MODIFIED Requirements

### Requirement: Sistema de variables CSS para diseño
El sistema SHALL implementar un sistema de diseño usando CSS Custom Properties en `:root` para colores semánticos, superficies, espaciado, tipografía, radios, sombras y transiciones, con una variante completa bajo `[data-theme="dark"]`. Los componentes SHALL consumir roles semánticos en lugar de repetir colores directos.

#### Scenario: Variables CSS definidas en root
- **WHEN** se inspecciona el CSS del archivo `app.html`
- **THEN** el sistema SHALL definir variables CSS para fondo de aplicación, superficies, texto, bordes, colores primarios, estados de entrega y acciones
- **THEN** las variables SHALL incluir escalas de espaciado, radios, sombras, tipografía y transiciones

#### Scenario: Uso consistente de variables en componentes
- **WHEN** se renderizan botones, cards, inputs, filtros o reportes
- **THEN** los componentes SHALL usar las variables semánticas definidas en `:root`
- **THEN** NO SHALL duplicar colores de superficie, texto o borde en selectores de componentes

#### Scenario: Variables oscuras bajo data-theme
- **WHEN** el elemento `<html>` tiene `data-theme="dark"`
- **THEN** las variables de fondo, superficies, texto, bordes y sombras SHALL cambiar a la variante nocturna
- **THEN** espaciado, radios y transiciones SHALL conservar la misma escala

### Requirement: Paleta de colores moderna
El sistema SHALL usar una paleta Aurora con índigo como acción primaria, menta como estado positivo y coral como acción destructiva, con superficies y textos que cumplan WCAG AA en temas claro y oscuro.

#### Scenario: Identidad cromática Aurora
- **WHEN** se renderiza la aplicación
- **THEN** la acción primaria SHALL usar un índigo moderno y la acción positiva SHALL usar un verde menta claramente distinguible
- **THEN** los estados hover, active y focus SHALL tener variantes definidas
- **THEN** los gradientes SHALL limitarse a superficies decorativas y no SHALL transportar información crítica por sí solos

#### Scenario: Contraste accesible
- **WHEN** se muestra texto normal sobre cualquier superficie
- **THEN** el contraste SHALL cumplir WCAG AA con al menos 4.5:1
- **THEN** los estados de entrega, error y acción destructiva SHALL distinguirse además por texto o icono

#### Scenario: Contraste en tema oscuro
- **WHEN** el tema activo es oscuro
- **THEN** el texto primario, secundario, bordes y controles SHALL conservar contraste suficiente sobre superficies nocturnas

### Requirement: Cards con diseño moderno
El sistema SHALL usar cards como superficies de contenido con radio mínimo de 16px, borde sutil, sombra de baja intensidad, padding consistente y estados hover/focus apropiados para el contexto.

#### Scenario: Card visual mejorada
- **WHEN** se renderiza una card de formulario, reporte o total
- **THEN** la card SHALL usar `var(--color-surface)`, borde semántico, radio de al menos 16px y padding de al menos 20px
- **THEN** la card SHALL separar visualmente contenido principal, metadatos y acciones

#### Scenario: Card en tema oscuro
- **WHEN** el tema activo es oscuro
- **THEN** la card SHALL usar una superficie nocturna elevada y una sombra visible pero sutil
- **THEN** el texto y los controles SHALL permanecer legibles

### Requirement: Botones con estilo moderno
El sistema SHALL usar una jerarquía de botones con acción primaria, secundaria, positiva, destructiva e iconográfica, con estados hover, active, focus-visible y disabled coherentes.

#### Scenario: Jerarquía de acciones
- **WHEN** se renderiza una vista de registro o reporte
- **THEN** la acción principal SHALL destacar con el color primario
- **THEN** compartir y entrega SHALL conservar colores de estado reconocibles sin competir con la acción principal
- **THEN** las acciones destructivas SHALL usar el color de peligro y confirmación existente

#### Scenario: Estados interactivos
- **WHEN** el usuario pasa, enfoca, presiona o deshabilita un botón
- **THEN** el botón SHALL mostrar un cambio visual perceptible de color, elevación, escala u opacidad
- **THEN** el indicador focus-visible SHALL ser visible y no depender solo del color

### Requirement: Inputs con diseño mejorado
El sistema SHALL presentar inputs, selects y checkboxes como controles de una misma familia visual, con labels claros, estados de foco, error y disabled, adaptados a ambos temas.

#### Scenario: Input enfocado
- **WHEN** un campo recibe foco
- **THEN** el borde y el focus ring SHALL usar el color de foco semántico con transición de 150-250ms
- **THEN** el foco SHALL ser visible con teclado y mouse

#### Scenario: Campos agrupados
- **WHEN** se renderiza el formulario o los filtros
- **THEN** cada control SHALL tener label asociado, separación consistente y altura mínima de 44px

#### Scenario: Input en tema oscuro
- **WHEN** el tema activo es oscuro
- **THEN** el control SHALL usar superficie, texto y borde de la variante nocturna

### Requirement: Tabla con jerarquía visual mejorada
El sistema SHALL presentar el reporte como una superficie de datos escaneable, con encabezado, columnas numéricas alineadas, estados de entrega visibles, acciones agrupadas y una representación de cards en móvil.

#### Scenario: Tabla moderna
- **WHEN** se renderiza la tabla de reporte en escritorio
- **THEN** el encabezado SHALL usar la superficie primaria y las filas SHALL tener padding, separación y contraste suficientes
- **THEN** precios, cantidades y totales SHALL mantener alineación numérica consistente
- **THEN** el estado de entrega y las acciones SHALL distinguirse del contenido principal

#### Scenario: Hover state en filas
- **WHEN** el usuario pasa el mouse sobre una fila
- **THEN** la fila SHALL cambiar de superficie de forma sutil con transición de 150-250ms

#### Scenario: Cards de reporte en móvil
- **WHEN** la aplicación se visualiza en móvil (ancho < 601px)
- **THEN** cada registro SHALL mostrarse como card vertical con superficie, radio y sombra consistentes
- **THEN** estado, total y acciones SHALL tener jerarquía visible sin scroll horizontal

#### Scenario: Card de totales
- **WHEN** se muestran los totales del reporte
- **THEN** SHALL existir una superficie destacada con borde o acento primario y valores con peso visual mayor

### Requirement: Iconografía SVG inline
El sistema SHALL usar SVG inline para iconos funcionales y decorativos, con tamaño, stroke y color consistentes.

#### Scenario: Iconos SVG para acciones
- **WHEN** se muestra una acción con icono
- **THEN** el icono SHALL ser SVG inline, heredar `currentColor` y tener tamaño coherente con el botón

#### Scenario: Iconos accesibles
- **WHEN** un icono comunica una acción
- **THEN** el control SHALL incluir una etiqueta accesible y el SVG decorativo SHALL usar `aria-hidden="true"`
