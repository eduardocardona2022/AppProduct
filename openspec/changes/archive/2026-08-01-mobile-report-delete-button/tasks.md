## 1. CSS para cards de reporte en móvil

- [x] 1.1 Agregar estilos CSS para `.report-cards-container` (contenedor de cards en móvil): flex column, gap entre cards, visible solo en `@media (max-width: 600px)`
- [x] 1.2 Agregar estilos CSS para `.report-card` (card individual): fondo `var(--color-surface)`, border-radius 8px, box-shadow, padding 16px, margen inferior
- [x] 1.3 Agregar estilos CSS para los datos dentro de la card: formato vertical con `.report-card-label` (color secundario, font-size sm) y `.report-card-value` (color texto, font-weight 600)
- [x] 1.4 Agregar estilos CSS para `.report-card-actions`: sección inferior de la card con border-top sutil, padding superior, botón eliminar con ancho completo y min-height 44px
- [x] 1.5 Agregar estilos CSS para `.report-card-totals`: card de totales con fondo `var(--color-info-bg)`, border-top primario, valores con font-weight 700
- [x] 1.6 Agregar regla en `@media (max-width: 600px)` para ocultar `.table-container` y mostrar `.report-cards-container`; fuera del media query ocultar `.report-cards-container` por defecto

## 2. JavaScript - Generar markup de cards

- [x] 2.1 Crear función `dibujarCards(registros)` que genera el HTML de cards para móvil dentro de un nuevo contenedor `#contenedor-cards`
- [x] 2.2 Cada card SHALL incluir los campos: Fecha, Producto, Precio, Cantidad, Total en formato label/valor vertical
- [x] 2.3 Cada card SHALL incluir un botón eliminar con SVG icono + texto "Eliminar", clase `btn btn-danger btn-delete-card`, con `onclick="confirmarEliminar('<id>')"`
- [x] 2.4 Agregar card de totales al final con los valores acumulados de Precio, Cantidad y Total
- [x] 2.5 Modificar `dibujarTabla(registros)` para que también llame a `dibujarCards(registros)` y pueble ambos contenedores

## 3. HTML - Contenedor de cards

- [x] 3.1 Agregar `<div id="contenedor-cards" class="report-cards-container"></div>` en la vista de reportes, después del `contenedor-tabla`

## 4. Tema oscuro y verificación

- [x] 4.1 Verificar que las cards usen `var(--color-surface)` y se adapten correctamente al tema oscuro sin selectores adicionales
- [x] 4.2 Verificar que el botón eliminar en card tenga contraste adecuado en ambos temas
- [x] 4.3 Verificar que el área táctil del botón eliminar sea mínimo 44x44px en móvil
- [x] 4.4 Verificar que en escritorio (>=601px) solo se muestre la tabla y en móvil (<601px) solo se muestren las cards
