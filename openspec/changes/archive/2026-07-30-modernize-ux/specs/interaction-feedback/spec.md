## ADDED Requirements

### Requirement: Animaciones de transición en interacciones
El sistema SHALL implementar transiciones suaves en cambios de estado visual (hover, focus, active).

#### Scenario: Transición en hover de botones
- **WHEN** el usuario pasa el mouse sobre un botón
- **THEN** el cambio de color de fondo SHALL tener una transición de 150-250ms
- **THEN** la transición SHALL usar easing function (ease o ease-in-out)

#### Scenario: Transición en focus de inputs
- **WHEN** un campo de entrada recibe focus
- **THEN** el cambio de border-color SHALL tener una transición de 150-250ms
- **THEN** la aparición del focus ring SHALL tener una transición suave

#### Scenario: Transición en hover de filas de tabla
- **WHEN** el usuario pasa el mouse sobre una fila de tabla
- **THEN** el cambio de background SHALL tener una transición de 150-250ms

### Requirement: Feedback visual en botones (active state)
El sistema SHALL proporcionar feedback visual cuando el usuario hace click en botones.

#### Scenario: Efecto de presión en botones
- **WHEN** el usuario hace click y mantiene presionado un botón
- **THEN** el botón SHALL escalar ligeramente hacia abajo (scale 0.98 o similar)
- **THEN** el efecto SHALL ser inmediato (sin delay perceptible)
- **THEN** el botón SHALL volver a su estado normal al soltar

### Requirement: Mensajes toast con animación
El sistema SHALL mostrar mensajes de feedback (éxito/error) con animación de entrada y salida.

#### Scenario: Animación de entrada de toast
- **WHEN** se muestra un mensaje toast
- **THEN** el mensaje SHALL animar desde fuera de pantalla (translateY(-100%)) hasta su posición
- **THEN** la animación SHALL incluir fade (opacity 0 a 1)
- **THEN** la duración SHALL ser 250-350ms

#### Scenario: Animación de salida de toast
- **WHEN** el toast va a desaparecer (después de 3 segundos)
- **THEN** el mensaje SHALL animar con fade-out (opacity 1 a 0)
- **THEN** la animación SHALL ser suave antes de remover el elemento

#### Scenario: Toast con icono
- **WHEN** se muestra un mensaje de éxito
- **THEN** el toast SHALL incluir un icono SVG de check
- **WHEN** se muestra un mensaje de error
- **THEN** el toast SHALL incluir un icono SVG de X o alerta

### Requirement: Modal con animación de apertura
El sistema SHALL animar la apertura del modal de confirmación con efecto de escala y fade.

#### Scenario: Animación de apertura de modal
- **WHEN** se abre el modal de confirmación
- **THEN** el overlay SHALL animar de opacity 0 a 0.5 (o similar)
- **THEN** el contenido del modal SHALL animar de scale(0.9) a scale(1)
- **THEN** ambas animaciones SHALL ocurrir simultáneamente
- **THEN** la duración SHALL ser 200-300ms

#### Scenario: Animación de cierre de modal
- **WHEN** se cierra el modal (click en Sí, No o fuera)
- **THEN** el modal SHALL animar de vuelta a scale(0.9) y opacity 0
- **THEN** el overlay SHALL animar de vuelta a opacity 0
- **THEN** la animación SHALL completarse antes de remover el elemento del DOM

### Requirement: Estados de focus accesibles
El sistema SHALL proporcionar indicadores de focus visibles y accesibles para navegación por teclado.

#### Scenario: Focus visible en botones
- **WHEN** un botón recibe focus (navegación por teclado)
- **THEN** SHALL aparecer un outline o ring visible alrededor del botón
- **THEN** el indicator SHALL tener contraste suficiente (3:1 mínimo)
- **THEN** el indicator SHALL ser claramente visible

#### Scenario: Focus visible en inputs
- **WHEN** un campo de entrada recibe focus
- **THEN** el border SHALL cambiar de color al color primario
- **THEN** SHALL aparecer un focus ring (box-shadow) alrededor del input
- **THEN** el focus ring SHALL ser visible y tener buen contraste

#### Scenario: Focus visible en links y elementos interactivos
- **WHEN** cualquier elemento interactivo recibe focus
- **THEN** SHALL haber un indicador visual claro de focus
- **THEN** el indicador SHALL ser consistente en toda la aplicación

### Requirement: Transiciones de navegación entre vistas
El sistema SHALL implementar transiciones suaves al navegar entre vistas (Registro ↔ Reporte).

#### Scenario: Transición al cambiar de vista
- **WHEN** el usuario navega de una vista a otra
- **THEN** la vista actual SHALL desvanecerse (fade-out) rápidamente
- **THEN** la nueva vista SHALL aparecer con fade-in
- **THEN** la transición total SHALL durar 200-300ms
- **THEN** NO SHALL haber parpadeo o salto visual

### Requirement: Hover feedback en botones de acción de tabla
El sistema SHALL proporcionar feedback visual claro en botones de acción dentro de la tabla.

#### Scenario: Hover en botón eliminar
- **WHEN** el usuario pasa el mouse sobre el botón de eliminar en una fila
- **THEN** el fondo del botón SHALL cambiar a un tono más oscuro
- **THEN** el cambio SHALL tener transición suave
- **THEN** el cursor SHALL cambiar a pointer
