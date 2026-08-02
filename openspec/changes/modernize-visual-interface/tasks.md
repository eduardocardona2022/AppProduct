## 1. Sistema Visual

- [x] 1.1 Reorganizar las variables CSS de `InventarioApp/app.html` en roles semánticos para superficies, acentos, estados, tipografía, radios, sombras y transiciones.
- [x] 1.2 Definir la paleta Aurora para tema claro y nocturno, incluyendo estados hover, focus, entrega, error y compartir.
- [x] 1.3 Actualizar la tipografía local, escala fluida, line-height y jerarquía de títulos sin dependencias externas.

## 2. Componentes Y Jerarquia

- [x] 2.1 Rediseñar header, fondo, cards y superficies del formulario con la nueva identidad visual.
- [x] 2.2 Mejorar inputs, selects, checkbox, labels, focus rings y mensajes para una familia visual consistente.
- [x] 2.3 Rediseñar botones primarios, secundarios, de compartir, editar, eliminar e iconográficos con estados accesibles.
- [x] 2.4 Mejorar tabla, tarjetas de reporte, estados de entrega, acciones, totales y controles de compartir para facilitar el escaneo.
- [x] 2.5 Añadir microinteracciones de 150-250ms y estilos `prefers-reduced-motion` sin alterar los listeners existentes.

## 3. Responsive Y Temas

- [x] 3.1 Ajustar la composición para 320px, 390px, 768px y escritorio, evitando desbordamiento horizontal.
- [x] 3.2 Verificar tema claro y oscuro en formulario, reportes, modal, toasts, acciones y botón WhatsApp.
- [x] 3.3 Revisar contraste WCAG AA, foco visible y targets táctiles mínimos de 44px.

## 4. Publicacion Y Verificacion

- [x] 4.1 Ejecutar `npm run build` para sincronizar `public/index.html` con `InventarioApp/app.html`.
- [x] 4.2 Compilar los scripts inline y verificar que no cambien los flujos de registro, edición, eliminación, filtros y compartir.
- [x] 4.3 Revisar visualmente móvil y escritorio, incluyendo estados vacíos, datos, errores, reduced motion y ambos temas.
