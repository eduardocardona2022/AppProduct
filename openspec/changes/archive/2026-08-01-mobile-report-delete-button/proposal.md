## Why

En el Redmi Note 10 Pro (~395px viewport) la tabla de reportes tiene 6 columnas y el botón "Eliminar" queda en una columna de solo 90px con texto + icono SVG, lo que hace que no se muestre correctamente o sea difícil de tocar. Los usuarios no pueden eliminar registros desde el móvil.

## What Changes

- Rediseñar la tabla de reportes en móvil para que el botón eliminar sea visible y accesible
- En móvil, mostrar cada registro como una card con los datos y un botón eliminar claramente visible
- Mantener la tabla tradicional en escritorio sin cambios
- Asegurar que el área táctil del botón eliminar cumpla 44x44px mínimo en móvil

## Capabilities

### New Capabilities

(none)

### Modified Capabilities

- `responsive-ux`: El requirement de "Tabla responsive en móvil" cambia para usar un layout tipo card por registro en lugar de tabla con scroll horizontal, asegurando visibilidad del botón eliminar
- `modern-visual-design`: El requirement de "Tabla con jerarquía visual mejorada" se extiende para incluir el estilo de cards de reporte en móvil con botón eliminar integrado

## Impact

- `InventarioApp/app.html`: Sección CSS (media query móvil + nuevos estilos de card-report), función `dibujarTabla()` en JS para generar markup diferente según viewport, HTML del contenedor de tabla
- Sin dependencias externas nuevas
- Sin cambios en localStorage ni estructura de datos
