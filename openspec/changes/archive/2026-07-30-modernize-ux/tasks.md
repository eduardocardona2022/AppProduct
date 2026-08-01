## 1. Sistema de diseño con CSS variables

- [x] 1.1 Definir variables CSS en `:root` para colores (primario, éxito, peligro, texto, fondo, bordes)
- [x] 1.2 Definir variables CSS para espaciado (xs, sm, md, lg, xl)
- [x] 1.3 Definir variables CSS para radios de borde (sm, md, lg)
- [x] 1.4 Definir variables CSS para sombras (sm, md, lg)
- [x] 1.5 Definir variables CSS para transiciones (fast, normal)

## 2. Actualización de paleta de colores y tipografía

- [x] 2.1 Reemplazar color primario #1a73e8 con #2563eb y definir estado hover #1d4ed8
- [x] 2.2 Reemplazar color de éxito con #10b981 y estado hover #059669
- [x] 2.3 Reemplazar color de peligro con #ef4444 y estado hover #dc2626
- [x] 2.4 Actualizar colores de texto a #1f2937 (primario) y #6b7280 (secundario)
- [x] 2.5 Actualizar color de fondo a #f9fafb y superficie a #ffffff
- [x] 2.6 Implementar escala tipográfica consistente (0.875rem, 1rem, 1.25rem, 1.5rem)

## 3. Rediseño de componentes base

- [x] 3.1 Rediseñar cards con border-radius 12px, box-shadow md, padding 24px
- [x] 3.2 Rediseñar botones primarios con nuevo color, border-radius 8px, padding 12px 24px
- [x] 3.3 Agregar estados hover y active (scale 0.98) a botones
- [x] 3.4 Rediseñar inputs con border 2px, border-radius 8px, padding 12px
- [x] 3.5 Agregar focus ring visible a inputs con transición suave
- [x] 3.6 Mejorar labels con font-weight 600 y color oscuro
- [x] 3.7 Rediseñar tabla con header moderno y filas con hover state

## 4. Iconografía SVG inline

- [x] 4.1 Crear SVG inline para icono de eliminar (trash) reemplazando emoji
- [x] 4.2 Agregar elemento `<title>` a SVGs para accesibilidad
- [x] 4.3 Configurar SVGs con currentColor para heredar color del texto

## 5. Animaciones y transiciones

- [x] 5.1 Agregar transiciones a hover de botones (150ms ease)
- [x] 5.2 Agregar transiciones a focus de inputs (200ms ease)
- [x] 5.3 Agregar transiciones a hover de filas de tabla (150ms ease)
- [x] 5.4 Crear @keyframes slideIn para mensajes toast (entrada desde arriba)
- [x] 5.5 Crear @keyframes fadeOut para mensajes toast (salida suave)
- [x] 5.6 Agregar animación de apertura a modal (scale 0.9 a 1, fade)
- [x] 5.7 Agregar animación de cierre a modal (scale 1 a 0.9, fade)
- [x] 5.8 Agregar iconos SVG a mensajes toast (check para éxito, X para error)

## 6. Mejoras responsive

- [x] 6.1 Ajustar padding de contenedor en móvil (12px-16px)
- [x] 6.2 Ajustar padding de cards en móvil (16px)
- [x] 6.3 Asegurar que botones ocupen 100% ancho en móvil
- [x] 6.4 Asegurar touch targets mínimos de 44x44px en móvil
- [x] 6.5 Apilar filtros verticalmente en móvil
- [x] 6.6 Ajustar tamaños de fuente para legibilidad en móvil (mínimo 14px body, 12px tabla)
- [x] 6.7 Adaptar modal para móvil (90% ancho, botones apilados si es necesario)
- [x] 6.8 Adaptar mensajes toast para móvil (90% ancho máximo)

## 7. Estados de accesibilidad

- [x] 7.1 Agregar focus visible a todos los botones (outline o ring)
- [x] 7.2 Agregar focus visible a todos los inputs (border + ring)
- [x] 7.3 Verificar contraste de colores cumple WCAG AA (4.5:1)
- [x] 7.4 Agregar aria-hidden="true" a SVGs decorativos

## 8. Pruebas y verificación

- [x] 8.1 Probar funcionalidad de registro (guardar, validar, limpiar)
- [x] 8.2 Probar funcionalidad de reporte (filtrar, eliminar, totales)
- [x] 8.3 Probar navegación entre vistas (Registro ↔ Reporte)
- [x] 8.4 Probar responsive en móvil (320px-600px)
- [x] 8.5 Probar responsive en escritorio (1024px+)
- [x] 8.6 Probar navegación por teclado (tab, enter, escape)
- [x] 8.7 Verificar que NO hay dependencias externas (CSS, JS, fonts, imágenes)
