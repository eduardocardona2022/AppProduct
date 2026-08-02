## Why

El reporte actual permite eliminar registros, pero las acciones ocupan espacio, no existe forma de corregir un registro guardado y el orden no ayuda a encontrar las capturas más recientes. Mejorar estas interacciones hará más rápida la operación diaria y reducirá errores de edición y navegación.

## What Changes

- Convertir el botón **Eliminar** de tabla y tarjetas en una acción de solo icono, conservando `aria-label` y `title` para accesibilidad y comprensión.
- Agregar una acción **Editar** para modificar todos los campos del registro, incluyendo fecha, producto, precio, cantidad y estado de entrega.
- Reutilizar el formulario actual para editar sin crear registros duplicados, cambiando sus acciones y mensajes según el modo registro/edición.
- Ordenar los reportes por fecha y hora descendente para mostrar primero los registros más recientes.
- Organizar las acciones de cada registro en un grupo consistente para escritorio y móvil, manteniendo objetivos táctiles accesibles.
- Mantener la confirmación antes de eliminar y la compatibilidad con registros existentes.

## Capabilities

### New Capabilities

- `record-management`: Edición completa, acciones de registro y ordenamiento por recencia en los reportes.

### Modified Capabilities

- `responsive-ux`: Las tarjetas móviles deberán mostrar acciones de editar y eliminar de forma clara, accesible y táctil, sustituyendo el botón eliminar textual por un control iconográfico.

## Impact

- `InventarioApp/app.html`: formulario, estado de edición, acciones de reporte, ordenamiento y estilos responsive.
- `public/index.html`: versión generada para publicación.
- `localStorage`: se actualizarán registros existentes por su `id`; no se cambia el formato de los campos actuales.
- No se requieren dependencias nuevas, APIs externas ni cambios de servidor.
