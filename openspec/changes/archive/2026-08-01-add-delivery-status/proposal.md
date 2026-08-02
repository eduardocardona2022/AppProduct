## Why

Actualmente los registros solo contienen información de fecha, producto, precio y cantidad, por lo que no es posible distinguir rápidamente qué productos ya fueron entregados. Incorporar un estado de entrega permitirá controlar el cumplimiento de cada registro desde el formulario y verificarlo en los reportes.

## What Changes

- Agregar un campo booleano `entregado` al formulario de registro mediante un checkbox.
- Guardar el estado de entrega junto con cada producto.
- Mostrar claramente en los reportes si cada producto fue entregado o está pendiente.
- Permitir filtrar los reportes por estado: todos, entregados o no entregados.
- Mantener los registros existentes funcionando, interpretando la ausencia del campo como `false`.
- Conservar la visualización responsive del estado en tabla y tarjetas móviles.

## Capabilities

### New Capabilities

- `delivery-status`: Registro, persistencia, visualización y filtrado del estado de entrega de los productos.

### Modified Capabilities

## Impact

- `InventarioApp/app.html`: formulario, modelo de registro, almacenamiento, filtros y renderizado de reportes.
- `public/index.html`: versión generada para publicación.
- `localStorage`: los nuevos registros incluirán `entregado`; los registros antiguos seguirán siendo válidos con estado no entregado por defecto.
- No se requieren dependencias nuevas, APIs externas ni cambios de servidor.
