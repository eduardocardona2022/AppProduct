## Why

La aplicación funciona, pero su presentación visual todavía se percibe como un formulario genérico y no comunica con suficiente claridad el estado del inventario. Una renovación visual coherente permitirá una experiencia más actual, memorable y fácil de escanear sin cambiar los flujos ni la persistencia existentes.

## What Changes

- Renovar la paleta de colores, superficies, tipografía, sombras, bordes y jerarquía visual con un lenguaje de dashboard moderno.
- Rediseñar el encabezado, las cards, los campos, botones, filtros, estados y reportes para mejorar el escaneo de información.
- Aplicar una composición visual diferenciada para registro y reporte, con énfasis en totales y estados de entrega.
- Mejorar el tema claro/oscuro manteniendo contraste accesible y una identidad visual consistente.
- Añadir microinteracciones sutiles para hover, focus, carga, navegación y acciones exitosas sin afectar el rendimiento.
- Mantener la experiencia responsive en móvil, tablet y escritorio, incluyendo targets táctiles y lectura sin zoom.
- No cambiar el modelo de datos, las funciones del inventario ni la arquitectura de archivo único.

## Capabilities

### New Capabilities

### Modified Capabilities

- `modern-visual-design`: Actualizar el sistema visual, paleta, componentes, estados y jerarquía de la aplicación.
- `responsive-ux`: Ajustar la composición visual y el comportamiento responsive para la nueva interfaz.

## Impact

- `InventarioApp/app.html`: CSS embebido, estructura visual y clases de presentación.
- `public/index.html`: versión generada para publicación.
- No se requieren dependencias nuevas, fuentes externas, APIs ni cambios en `localStorage`.
- Los usuarios conservarán sus datos y los flujos actuales de registro, reporte, edición y compartir.
