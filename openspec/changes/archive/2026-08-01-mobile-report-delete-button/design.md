## Context

La tabla de reportes en `app.html` usa 6 columnas (Fecha, Producto, Precio, Cantidad, Total, Acción). En móvil (<600px), la tabla se mantiene como tabla con scroll horizontal, pero la columna de acción (90px) con el botón "Eliminar" (texto + SVG) queda comprimida o fuera de vista. El Redmi Note 10 Pro tiene un viewport de ~395px, insuficiente para 6 columnas + botón legible.

Actualmente la función `dibujarTabla()` genera el mismo markup HTML para todos los viewports. El CSS tiene una media query `@media (max-width: 600px)` que reduce padding y font-size pero no cambia la estructura.

## Goals / Non-Goals

**Goals:**
- El botón eliminar debe ser visible y accesible en móvil sin scroll horizontal
- El área táctil del botón eliminar debe cumplir 44x44px mínimo
- Los datos del registro deben ser legibles sin scroll horizontal
- Mantener la tabla tradicional intacta en escritorio (>=601px)
- Soportar ambos temas (claro/oscuro) en el nuevo layout móvil

**Non-Goals:**
- No cambiar la estructura de datos en localStorage
- No agregar funcionalidad de edición de registros
- No cambiar el comportamiento de filtros de fecha
- No modificar la vista de registro (formulario)

## Decisions

**1. Layout tipo card por registro en móvil**

En móvil (<600px), reemplazar la tabla por cards individuales por registro. Cada card muestra los datos en formato vertical (label: valor) y el botón eliminar en la parte inferior con ancho completo.

Alternativas consideradas:
- *Columna fija sticky*: Complejo con CSS, el botón seguiría siendo estrecho
- *Swipe-to-delete*: Requiere touch events complejos, no es estándar en apps sin framework
- *Icono-only button en tabla*: Menos descubrible, usuarios podrían no entenderlo

**2. Detección por CSS, no por JS**

Usar CSS media queries para mostrar/ocultar la tabla vs las cards. La función `dibujarTabla()` generará ambos markups (tabla + cards) y CSS controla cuál se muestra según viewport. Esto evita detección de viewport en JS y funciona correctamente en resize.

Alternativas consideradas:
- *Detección JS con matchMedia*: Más complejo, requiere re-render en resize
- *Solo generar el markup del viewport actual*: Problemas en resize cruzando breakpoint

**3. Botón eliminar con icono + texto en card**

En móvil, el botón eliminar usará icono SVG + texto "Eliminar" con ancho completo dentro de la card, asegurando área táctil de 44px mínimo y alta visibilidad.

## Risks / Trade-offs

- [Doble markup en DOM] → Impacto mínimo: solo afecta la vista de reportes, el rendimiento es aceptable para el volumen de datos típico en localStorage
- [Cards ocupan más espacio vertical que tabla] → Aceptable: cada registro es legible sin scroll horizontal, mejor UX general en móvil
- [Totales row en móvil] → Se mostrará como una card especial al final con los totales formateados similar a las cards de registros
