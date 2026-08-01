## ADDED Requirements

### Requirement: Botón toggle de tema oscuro/claro
El sistema SHALL proporcionar un botón toggle para alternar entre tema claro y oscuro, con iconos SVG de sol y luna.

#### Scenario: Botón visible en el header
- **WHEN** se renderiza la aplicación
- **THEN** SHALL existir un botón toggle posicionado en la parte superior del contenedor principal
- **THEN** el botón SHALL ser accesible desde todas las vistas (Registro y Reporte)
- **THEN** el botón SHALL tener un área táctil mínima de 44x44px

#### Scenario: Icono de sol en tema oscuro
- **WHEN** el tema activo es oscuro
- **THEN** el botón SHALL mostrar un icono SVG de sol
- **THEN** el SVG SHALL ser inline (sin dependencias externas)
- **THEN** el SVG SHALL usar `currentColor` o variables CSS para el color

#### Scenario: Icono de luna en tema claro
- **WHEN** el tema activo es claro
- **THEN** el botón SHALL mostrar un icono SVG de luna
- **THEN** el SVG SHALL ser inline (sin dependencias externas)
- **THEN** el SVG SHALL usar `currentColor` o variables CSS para el color

### Requirement: Transición animada entre iconos
El sistema SHALL animar la transición entre los iconos de sol y luna al alternar el tema.

#### Scenario: Animación al cambiar de tema
- **WHEN** el usuario hace click en el botón toggle
- **THEN** el icono SHALL tener una animación de transición (rotación, fade o scale)
- **THEN** la animación SHALL durar entre 200-400ms
- **THEN** la transición SHALL ser suave sin saltos visuales

### Requirement: Esquema de colores oscuro
El sistema SHALL implementar un esquema de colores oscuro completo redefiniendo las variables CSS.

#### Scenario: Variables CSS para tema oscuro
- **WHEN** el atributo `data-theme="dark"` está presente en `<html>`
- **THEN** las variables CSS de color SHALL tomar valores oscuros (fondos slate-900/slate-800, texto claro)
- **THEN** todos los componentes SHALL reflejar los colores oscuros sin cambios en sus selectores

#### Scenario: Tema claro por defecto
- **WHEN** no hay atributo `data-theme` o su valor es `"light"`
- **THEN** las variables CSS SHALL tener los valores claros actuales

### Requirement: Persistencia de preferencia de tema
El sistema SHALL guardar la preferencia de tema del usuario en localStorage.

#### Scenario: Guardar preferencia al alternar
- **WHEN** el usuario hace click en el botón toggle
- **THEN** el sistema SHALL guardar `"dark"` o `"light"` en localStorage bajo la clave `theme-preference`

#### Scenario: Cargar preferencia al iniciar
- **WHEN** se carga la aplicación
- **THEN** el sistema SHALL leer `theme-preference` de localStorage
- **THEN** si existe, SHALL aplicar el tema guardado inmediatamente

### Requirement: Detección de preferencia del sistema
El sistema SHALL detectar la preferencia de tema del sistema operativo como valor por defecto.

#### Scenario: Sin preferencia guardada
- **WHEN** se carga la aplicación y NO existe `theme-preference` en localStorage
- **THEN** el sistema SHALL consultar `prefers-color-scheme` del sistema
- **THEN** si el sistema indica `dark`, SHALL aplicar tema oscuro
- **THEN** si el sistema indica `light` o no hay preferencia, SHALL aplicar tema claro

#### Scenario: Preferencia guardada tiene prioridad
- **WHEN** existe `theme-preference` en localStorage
- **THEN** el sistema SHALL usar la preferencia guardada ignorando `prefers-color-scheme`

### Requirement: Prevención de flash de tema incorrecto
El sistema SHALL aplicar el tema correcto antes del primer renderizado para evitar flash visual.

#### Scenario: Script en head
- **WHEN** se carga la página
- **THEN** un script en el `<head>` SHALL aplicar el atributo `data-theme` antes de que el CSS se renderice
- **THEN** NO SHALL haber un flash de tema claro antes de mostrar el tema correcto
