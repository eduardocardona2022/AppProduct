## Context

La aplicación es un único archivo HTML con CSS y JavaScript embebidos. Los registros se almacenan en `localStorage` como objetos identificados por `id` y se muestran en una tabla de escritorio o tarjetas en móvil. Actualmente el formulario solo crea registros y el reporte ofrece una acción de eliminación con texto.

El cambio afecta el ciclo completo del registro: presentación de acciones, navegación desde el reporte hacia el formulario, actualización del arreglo persistido y orden de los resultados. La solución debe conservar los campos existentes, incluido `entregado`, y seguir funcionando sin backend ni dependencias nuevas.

## Goals / Non-Goals

**Goals:**

- Permitir editar todos los campos de un registro existente sin crear un registro adicional.
- Reutilizar el formulario actual con un modo explícito de edición y una forma clara de cancelarlo.
- Mostrar primero los registros más recientes en reportes, respetando los filtros aplicados.
- Convertir eliminar en un botón iconográfico accesible y agrupar editar/eliminar de forma consistente.
- Mantener objetivos táctiles de al menos 44px en móvil y confirmar las eliminaciones.

**Non-Goals:**

- No agregar historial de cambios, deshacer ni auditoría.
- No cambiar la estructura de persistencia ni generar nuevos identificadores durante una edición.
- No introducir rutas, backend, autenticación ni dependencias externas.
- No cambiar las reglas de validación actuales ni el cálculo de totales.

## Decisions

### Modo de edición dentro del formulario existente

Se mantendrá un identificador `idEditando` en memoria. Al pulsar editar, la aplicación cargará por `id` fecha, producto, precio, cantidad y `entregado` en los controles del formulario, cambiará el texto del botón principal a "Actualizar" y mostrará una acción para cancelar. El guardado validará los mismos campos y actualizará el objeto existente conservando su `id`.

Alternativa considerada: crear un modal independiente para editar. Se descarta porque duplicaría controles, validaciones y estilos, además de ser menos apropiado para móvil.

### Actualización persistida

La actualización reemplazará únicamente el registro cuyo `id` coincida y escribirá el arreglo completo mediante la función de almacenamiento existente. Si el registro ya no existe, se mostrará un error y no se crearán datos nuevos.

Alternativa considerada: eliminar el registro anterior y agregar uno nuevo. Se descarta porque cambiaría el orden, el identificador y podría producir duplicados o pérdida de referencias.

### Orden de reportes

Los registros se ordenarán por `fechaHora` descendente antes de renderizar la tabla y las tarjetas. El orden se aplicará después de filtrar, de modo que cada resultado muestre primero la captura más reciente dentro del conjunto consultado.

Alternativa considerada: ordenar solo al guardar. Se descarta porque los datos históricos pueden estar en cualquier orden y los registros editados necesitan conservar el criterio de reporte.

### Acciones iconográficas accesibles

La tabla y las tarjetas usarán un grupo de acciones con botones de editar y eliminar. El botón eliminar no tendrá texto visible, pero ambos botones tendrán `aria-label`, `title`, foco visible y SVG inline. En móvil, cada botón conservará un área mínima de 44px y el grupo evitará que las acciones se confundan con los datos.

Alternativa considerada: conservar texto en móvil y ocultarlo solo en escritorio. Se descarta porque la interfaz tendría patrones distintos y el usuario solicitó una acción eliminar compacta en todos los reportes.

## Risks / Trade-offs

- [Perder cambios al cancelar edición] -> Cancelar solo restablecerá el formulario y nunca escribirá en `localStorage`; se mostrará el modo actual en el título/botón.
- [Registro eliminado mientras se edita] -> Validar que el `id` siga existiendo antes de actualizar y mostrar un mensaje de error si no existe.
- [Botones icon-only menos reconocibles] -> Usar SVG consistente, `title`, `aria-label`, estados hover/focus y colores diferenciados para editar/eliminar.
- [Fechas inválidas o antiguas] -> Ordenar con `new Date(fechaHora).getTime()` y conservar un desempate estable basado en la posición original.
- [Desincronización de publicación] -> Ejecutar `npm run build` después de modificar `InventarioApp/app.html`.

## Migration Plan

1. Agregar el estado de edición y la actualización por `id` en `InventarioApp/app.html`.
2. Añadir la acción editar, sustituir eliminar por icono y ordenar los reportes.
3. Regenerar `public/index.html` con `npm run build`.
4. Verificar creación, edición de todos los campos, cancelación, eliminación, orden descendente y vistas responsive.

El rollback consiste en restaurar el archivo fuente y regenerar `public/index.html`. No se requiere migración porque los registros actuales mantienen el mismo formato.

## Open Questions

No hay decisiones funcionales pendientes.
