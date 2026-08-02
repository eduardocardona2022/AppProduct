## 1. Modelo Y Formulario

- [x] 1.1 Agregar el checkbox "Entregado" al formulario de `InventarioApp/app.html`, desmarcado por defecto.
- [x] 1.2 Incluir el valor booleano `entregado` al construir cada nuevo registro y restablecer el checkbox al limpiar el formulario.
- [x] 1.3 Implementar la lectura compatible del estado para tratar registros sin `entregado` como no entregados.

## 2. Reportes

- [x] 2.1 Agregar el filtro de estado con las opciones "Todos", "Entregados" y "No entregados".
- [x] 2.2 Combinar el filtro de estado con los filtros de fecha existentes y recalcular los totales usando los registros filtrados.
- [x] 2.3 Mostrar "Entregado" o "No entregado" en la columna de estado de la tabla de escritorio.
- [x] 2.4 Mostrar el estado y la acción de eliminación correctamente en las tarjetas de reporte móvil.
- [x] 2.5 Restablecer el filtro de estado a "Todos" al entrar en la vista de reportes.

## 3. Publicacion Y Verificacion

- [x] 3.1 Ejecutar `npm run build` para sincronizar `public/index.html` con `InventarioApp/app.html`.
- [x] 3.2 Verificar un registro entregado, uno no entregado y un registro legado sin la propiedad `entregado`.
- [x] 3.3 Verificar filtros por estado, filtros combinados con fechas, totales y visualización responsive.
