## Context

La aplicación genera el reporte completamente en el navegador a partir de los registros filtrados. No existe backend ni dependencia para compartir contenido. El reporte tiene una tabla en escritorio y tarjetas en móvil, por lo que el control de compartir debe integrarse con ambas vistas sin duplicar la información.

Los navegadores no ofrecen una API fiable para preguntar si una aplicación concreta está instalada. La solución debe intentar abrir WhatsApp mediante su esquema de aplicación y usar la visibilidad de la página junto con un tiempo límite para mostrar el fallback solicitado cuando la apertura no pueda confirmarse.

## Goals / Non-Goals

**Goals:**

- Mostrar un botón con logo SVG de WhatsApp cuando el reporte actual tenga registros.
- Compartir únicamente los registros y totales que resulten de los filtros actuales.
- Abrir la aplicación WhatsApp instalada para que el usuario seleccione el contacto.
- Mostrar `no se puede compartir la información` si no se puede confirmar la apertura de WhatsApp.
- Mantener el botón accesible, responsive y compatible con tema claro/oscuro.

**Non-Goals:**

- No seleccionar automáticamente un contacto ni enviar mensajes sin confirmación del usuario.
- No integrar la API oficial de WhatsApp Business ni un backend.
- No persistir el reporte ni la información compartida.
- No sustituir la vista de reportes por un enlace externo cuando WhatsApp no esté instalado.

## Decisions

### Fuente del contenido

La función de compartir recibirá la colección filtrada actual y generará un texto plano con título, fecha, producto, precio, cantidad, estado y total por registro, seguido de los totales acumulados. El texto se codificará con `encodeURIComponent` antes de construir la URL.

Alternativa considerada: compartir solo un enlace al reporte. Se descarta porque los datos viven en `localStorage` y el enlace no permitiría al contacto ver la información.

### Integración con WhatsApp

Se abrirá `whatsapp://send?text=<texto codificado>` mediante una nueva ventana o contexto de navegación. WhatsApp mostrará su selector de contacto y el usuario confirmará el envío.

Alternativa considerada: usar únicamente `https://wa.me/?text=...`. Se descarta porque puede abrir una página web o una instalación alternativa y no permite distinguir de forma útil el caso solicitado de WhatsApp no instalado.

### Detección de apertura y fallback

Al iniciar el intento se registrará un listener temporal de `visibilitychange` y un temporizador corto. Si la página pasa a segundo plano, se considerará que el sistema entregó el control a WhatsApp; si el tiempo vence sin ese cambio, se mostrará el mensaje exacto `no se puede compartir la información`. El listener y el temporizador se limpiarán en ambos caminos.

Esta detección es best effort: los navegadores pueden bloquear esquemas personalizados o no reportar la visibilidad de forma uniforme. El diseño prioriza no bloquear la aplicación ni generar una navegación permanente cuando la apertura falla.

### Visibilidad y accesibilidad

El botón se mostrará solo cuando la colección filtrada tenga al menos un registro y se ocultará cuando el reporte esté vacío. Tendrá `aria-label`, `title`, SVG inline y un área táctil mínima de 44px. Se ubicará junto a los filtros o acciones principales del reporte y conservará contraste en ambos temas.

## Risks / Trade-offs

- [Detección imperfecta de aplicación instalada] -> Usar `visibilitychange` y timeout; documentar que el fallback depende del comportamiento del navegador.
- [Texto demasiado extenso] -> Generar un formato compacto por registro y compartir solo el conjunto filtrado actual.
- [Caracteres especiales en productos] -> Codificar siempre el texto de la URL y mantener el contenido en texto plano.
- [Popup bloqueado] -> Tratar una referencia nula de `window.open` como fallo y mostrar el mensaje solicitado.
- [Reporte vacío] -> Ocultar el botón y evitar intentos de compartir datos inexistentes.

## Migration Plan

1. Agregar el botón de compartir y sus estilos al reporte.
2. Implementar la generación de texto y la apertura/fallback de WhatsApp.
3. Actualizar el renderizado de tabla y tarjetas para controlar la visibilidad del botón según los registros filtrados.
4. Ejecutar `npm run build` para sincronizar `public/index.html`.
5. Verificar reportes con datos, reportes vacíos, caracteres especiales, móvil, escritorio y ausencia de WhatsApp.

El rollback consiste en retirar el botón y las funciones de compartir de `InventarioApp/app.html` y regenerar `public/index.html`. No se requiere migración de datos.

## Open Questions

No hay decisiones funcionales pendientes.
