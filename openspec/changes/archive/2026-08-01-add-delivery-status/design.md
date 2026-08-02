## Context

La aplicación es un único archivo HTML con CSS y JavaScript embebidos. Los registros se guardan como un arreglo JSON en `localStorage` bajo la clave `productos`, se renderizan como tabla en escritorio y como tarjetas en móvil. No existe una base de datos ni un backend que requiera migraciones.

El cambio cruza el formulario, el modelo persistido, los filtros y las dos representaciones del reporte. La solución debe conservar el comportamiento actual y evitar que los registros creados antes del cambio aparezcan como inválidos.

## Goals / Non-Goals

**Goals:**

- Representar el estado de entrega como un booleano `entregado`.
- Permitir establecer el estado al crear un registro mediante un checkbox.
- Mostrar el estado en tabla y tarjetas responsive.
- Filtrar por todos, entregados o no entregados, combinándolo con el rango de fechas.
- Tratar registros antiguos sin `entregado` como no entregados.
- Mantener el proyecto sin dependencias nuevas y compatible con apertura directa y build.

**Non-Goals:**

- No agregar autenticación, sincronización entre dispositivos ni backend.
- No crear una pantalla de edición de registros existentes.
- No cambiar la fórmula de totales ni eliminar registros existentes.
- No modificar el significado de los filtros de fecha.

## Decisions

### Modelo y compatibilidad

Cada registro nuevo incluirá `entregado: true` o `entregado: false`. Al leer registros, la ausencia del campo se interpretará como `false` mediante una normalización en memoria o una comprobación equivalente al renderizar y filtrar. No se reescribirán automáticamente todos los datos antiguos, evitando una migración destructiva.

Alternativa considerada: migrar inmediatamente todos los registros almacenados. Se descarta porque no aporta valor funcional y aumenta el riesgo al escribir datos existentes.

### Entrada del formulario

Se agregará un checkbox etiquetado como "Entregado", desmarcado por defecto al limpiar o iniciar el formulario. El valor se leerá al construir el objeto del registro y se reiniciará junto con los demás campos después de guardar.

Alternativa considerada: usar un selector de texto con estados "Entregado" y "No entregado". Se descarta porque el dominio solo requiere dos estados y un checkbox comunica mejor el valor booleano.

### Reporte y filtrado

El reporte mostrará una columna "Estado" en escritorio y un campo equivalente en cada tarjeta móvil. Se añadirá un selector de estado con las opciones "Todos", "Entregados" y "No entregados". La función de filtrado aplicará primero o conjuntamente las condiciones existentes de fecha y la condición de entrega, de modo que ambas restricciones puedan utilizarse a la vez.

Alternativa considerada: mostrar únicamente el estado sin filtro. Se descarta porque el objetivo es identificar rápidamente los pendientes en conjuntos de registros grandes.

### Totales

Los totales actuales continuarán calculándose sobre los registros que resulten del filtro seleccionado. Esto permite consultar, por ejemplo, el valor total pendiente de entrega sin introducir una segunda lógica de agregación.

## Risks / Trade-offs

- [Registros antiguos sin campo] -> Interpretar explícitamente la ausencia de `entregado` como `false` en filtros y renderizado.
- [Duplicación de lógica tabla/tarjetas] -> Mantener ambas vistas alimentadas por la misma colección filtrada y representar el mismo texto de estado.
- [Filtro de estado persistente durante navegación] -> Restablecer el filtro al entrar al reporte, igual que los filtros de fecha actuales.
- [Cambios solo en el archivo fuente] -> Ejecutar `npm run build` para regenerar `public/index.html` y mantener sincronizada la versión publicable.

## Migration Plan

1. Agregar el checkbox y el campo `entregado` al flujo de creación.
2. Actualizar el filtrado y las vistas del reporte para soportar los tres estados.
3. Ejecutar el build para actualizar `public/index.html`.
4. Verificar registros nuevos entregados y no entregados, filtros combinados, registros antiguos y vista móvil.

El rollback consiste en restaurar `InventarioApp/app.html` y regenerar `public/index.html`. Los datos existentes seguirán siendo legibles porque el campo adicional es opcional para registros antiguos.

## Open Questions

No hay decisiones funcionales pendientes para implementar esta propuesta.
