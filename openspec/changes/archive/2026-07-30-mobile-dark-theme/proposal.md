## Why

La aplicación actualmente solo soporta un tema claro y el diseño móvil, aunque funcional, puede mejorarse para ofrecer una experiencia más pulida en pantallas pequeñas. Agregar un modo oscuro con un toggle visual atractivo (sol/luna) mejora la usabilidad en entornos con poca luz y moderniza la percepción general de la app.

## What Changes

- Agregar un botón toggle de tema oscuro/claro con iconos SVG animados de sol y luna, posicionado de forma accesible en el header
- Implementar un sistema de tema oscuro completo redefiniendo las variables CSS para modo oscuro
- Persistir la preferencia de tema en localStorage
- Mejorar el layout móvil: espaciado, tamaños de fuente, touch targets y distribución de elementos
- Detectar preferencia del sistema operativo (`prefers-color-scheme`) como valor por defecto

## Capabilities

### New Capabilities
- `theme-toggle`: Botón de alternancia entre tema claro y oscuro con iconos SVG de sol/luna, persistencia en localStorage y detección de preferencia del sistema

### Modified Capabilities
- `modern-visual-design`: Nuevas variables CSS para el esquema de colores oscuro aplicadas a todos los componentes
- `responsive-ux`: Mejoras en layout móvil, touch targets y distribución visual en pantallas pequeñas

## Impact

- **CSS**: Nuevas variables CSS bajo `[data-theme="dark"]` que sobreescriben los valores de `:root`. Estilos adicionales para el botón toggle.
- **HTML**: Nuevo elemento botón toggle en el header de la app.
- **JavaScript**: Lógica para toggle de tema, lectura/escritura de localStorage (`theme-preference`), y detección de `prefers-color-scheme`.
- **LocalStorage**: Nueva clave `theme-preference` para persistir la selección del usuario.
- **Sin dependencias externas**: Todo se mantiene en el archivo único `app.html`.
