## 1. Control De Compartir

- [x] 1.1 Agregar el botón de compartir con logo SVG de WhatsApp en la vista de reportes, con `aria-label`, `title`, foco visible y área mínima de 44px.
- [x] 1.2 Agregar estilos para integrar el botón con los temas claro/oscuro y los layouts de escritorio y móvil.
- [x] 1.3 Mostrar el botón solo cuando el conjunto filtrado tenga registros y ocultarlo cuando el reporte esté vacío.

## 2. Contenido Del Reporte

- [x] 2.1 Implementar la generación de texto plano con registros filtrados, estado de entrega y totales.
- [x] 2.2 Codificar correctamente el contenido para la URL y conservar caracteres especiales de los productos.

## 3. Integracion Con Whatsapp

- [x] 3.1 Implementar la apertura de `whatsapp://send?text=...` para que WhatsApp permita elegir el contacto.
- [x] 3.2 Implementar detección best effort mediante `visibilitychange`, timeout y detección de popup bloqueado.
- [x] 3.3 Mostrar exactamente `no se puede compartir la información` cuando no se pueda iniciar o confirmar WhatsApp.
- [x] 3.4 Limpiar listeners y temporizadores después de un intento exitoso o fallido sin abandonar la vista de reportes.

## 4. Publicacion Y Verificacion

- [x] 4.1 Ejecutar `npm run build` para sincronizar `public/index.html` con `InventarioApp/app.html`.
- [x] 4.2 Verificar compartir con datos, reporte vacío, filtros activos y productos con acentos o caracteres especiales.
- [x] 4.3 Verificar comportamiento con WhatsApp disponible, esquema bloqueado, popup bloqueado, móvil, escritorio y teclado.
