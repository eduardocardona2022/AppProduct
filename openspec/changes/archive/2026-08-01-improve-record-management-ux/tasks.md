## 1. Modo Edicion

- [x] 1.1 Agregar el estado `idEditando` y helpers para cambiar entre modo registro y modo edición en `InventarioApp/app.html`.
- [x] 1.2 Implementar la carga por `id` de fecha, producto, precio, cantidad y `entregado` en el formulario.
- [x] 1.3 Implementar la actualización persistida por `id`, conservando el identificador y evitando registros duplicados.
- [x] 1.4 Cambiar el botón principal y las acciones del formulario según el modo, incluyendo una acción clara para cancelar edición.
- [x] 1.5 Mantener las validaciones actuales y mostrar mensajes diferenciados para guardar, actualizar o fallar una edición.

## 2. Acciones Del Reporte

- [x] 2.1 Agregar botones de editar y eliminar en la columna de acciones de la tabla.
- [x] 2.2 Sustituir el texto visible de eliminar por un icono SVG y añadir `aria-label`, `title` y estados de foco/hover.
- [x] 2.3 Agregar el grupo equivalente de acciones en las tarjetas móviles, con controles mínimos de 44px y separación accesible.
- [x] 2.4 Mantener la confirmación modal antes de eliminar y refrescar el reporte después de actualizar o eliminar.

## 3. Ordenamiento Y UX

- [x] 3.1 Ordenar los registros por `fechaHora` descendente después de aplicar los filtros de fecha y estado.
- [x] 3.2 Revisar títulos, textos y estados visuales para distinguir registro nuevo, edición y cancelación sin ambigüedad.
- [x] 3.3 Verificar que editar desde el reporte navega al formulario y que volver al reporte refleja los cambios ordenados.

## 4. Publicacion Y Verificacion

- [x] 4.1 Ejecutar `npm run build` para sincronizar `public/index.html` con `InventarioApp/app.html`.
- [x] 4.2 Verificar creación, edición de todos los campos, cancelación y ausencia de duplicados.
- [x] 4.3 Verificar eliminación con confirmación, acciones iconográficas accesibles y orden descendente.
- [x] 4.4 Verificar tabla de escritorio, tarjetas móviles, objetivos táctiles y compatibilidad con registros existentes.
