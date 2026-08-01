## 1. Variables CSS para tema oscuro

- [x] 1.1 Agregar bloque `[data-theme="dark"]` en el CSS con redefinición de todas las variables de color (bg, surface, text, text-secondary, border, border-focus, primary, success, danger, info-bg y sus hover)
- [x] 1.2 Ajustar las sombras (`--shadow-sm`, `--shadow-md`, `--shadow-lg`) para ser visibles sobre fondos oscuros

## 2. Botón toggle HTML y estilos

- [x] 2.1 Agregar botón toggle con iconos SVG de sol y luna en el header, antes del título, accesible desde todas las vistas
- [x] 2.2 Agregar estilos CSS para el botón toggle (posición, tamaño, animación de rotación/fade en los iconos, hover y active states)
- [x] 2.3 Asegurar que el toggle tenga área táctil mínima de 44x44px y se vea correcto en móvil y escritorio

## 3. Lógica de tema en JavaScript

- [x] 3.1 Crear función `obtenerPreferenciaTema()` que lee localStorage y detecta `prefers-color-scheme`
- [x] 3.2 Crear función `aplicarTema(tema)` que setea `data-theme` en `<html>` y actualiza el icono del toggle
- [x] 3.3 Crear función `toggleTema()` que alterna entre claro/oscuro, guarda en localStorage y aplica el tema
- [x] 3.4 Agregar event listener al botón toggle para llamar `toggleTema()`
- [x] 3.5 Agregar script en `<head>` que aplica el tema correcto antes del renderizado para evitar flash

## 4. Mejoras móviles

- [x] 4.1 Ajustar media query existente para mejorar espaciado del header con el toggle en pantallas pequeñas
- [x] 4.2 Refinar padding del contenedor, cards y botones en móvil para mejor distribución visual
- [x] 4.3 Verificar que todos los touch targets cumplan 44x44px mínimo incluyendo el toggle

## 5. Verificación

- [x] 5.1 Verificar contraste WCAG AA en ambos temas (texto sobre fondos)
- [x] 5.2 Verificar que la preferencia persiste entre recargas de página
- [x] 5.3 Verificar que no hay flash de tema incorrecto al cargar
