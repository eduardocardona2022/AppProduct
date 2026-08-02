## Why

Los reportes pueden contener información que el usuario necesita enviar rápidamente a un contacto, pero actualmente debe copiarla manualmente. Un botón de compartir con WhatsApp permitirá enviar el reporte filtrado desde el celular y dará un mensaje claro cuando el dispositivo no pueda abrir la aplicación.

## What Changes

- Agregar un botón de compartir con logotipo SVG de WhatsApp en la vista de reportes.
- Mostrar el botón únicamente cuando el reporte actual contenga registros.
- Construir un resumen legible con los registros y totales visibles del reporte filtrado.
- Abrir WhatsApp mediante su enlace de compartir para que el usuario elija el contacto destinatario.
- Mostrar el mensaje `no se puede compartir la información` cuando no sea posible iniciar WhatsApp.
- Mantener la acción responsive y accesible en escritorio y móvil.

## Capabilities

### New Capabilities

- `report-sharing`: Compartir la información del reporte filtrado mediante WhatsApp con fallback de error.

### Modified Capabilities

## Impact

- `InventarioApp/app.html`: botón, estado de visibilidad, generación del texto y apertura/fallback de WhatsApp.
- `public/index.html`: versión generada para publicación.
- Navegador: uso del esquema/enlace de WhatsApp y eventos de visibilidad para detectar si la aplicación pudo abrirse.
- No se requieren dependencias nuevas, backend, autenticación ni almacenamiento adicional.
