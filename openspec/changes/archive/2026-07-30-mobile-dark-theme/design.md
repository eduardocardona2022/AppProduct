## Context

La app es un archivo único `app.html` con CSS variables en `:root`, diseño responsive básico (media query a 600px), y persistencia en localStorage. No existe mecanismo de tema oscuro ni botón de toggle. El diseño móvil es funcional pero puede pulirse en espaciado, distribución del toggle y adaptación de componentes.

## Goals / Non-Goals

**Goals:**
- Agregar toggle de tema oscuro/claro con iconos SVG animados de sol y luna
- Implementar esquema de colores oscuro completo redefiniendo variables CSS
- Persistir preferencia de tema en localStorage
- Detectar `prefers-color-scheme` del sistema como valor por defecto
- Mejorar el layout móvil: espaciado, touch targets, distribución visual

**Non-Goals:**
- Temas personalizados más allá de claro/oscuro
- Cambios en la lógica de negocio (formulario, reportes, persistencia de productos)
- Dependencias externas o frameworks CSS

## Decisions

### 1. Mecanismo de tema: atributo `data-theme` en `<html>`

**Decisión**: Usar `data-theme="dark"` en el elemento `<html>` para activar el tema oscuro, con variables CSS sobreescribidas bajo `[data-theme="dark"]`.

**Alternativas consideradas**:
- Clase CSS `.dark` en body: menos semántico, más propenso a conflictos con selectores existentes.
- Media query `prefers-color-scheme` únicamente: no permite override manual del usuario.

**Razón**: `data-theme` permite control programático, persistencia sencilla y coexistencia con la detección del sistema.

### 2. Posición del toggle: esquina superior derecha del header

**Decisión**: Colocar el botón toggle como un elemento fijo o relativo en la parte superior del contenedor, antes del título.

**Alternativas consideradas**:
- Footer: poco descubrible.
- Dentro del formulario: confunde el flujo de registro.

**Razón**: Posición visible e intuitiva, accesible desde cualquier vista.

### 3. Iconos SVG: sol y luna con transición CSS

**Decisión**: Dos SVG inline (sol y luna) dentro del botón, con transición de rotación y opacidad al alternar.

**Razón**: Sin dependencias externas, coherente con la arquitectura single-file, animación suave con CSS transitions.

### 4. Persistencia: localStorage con clave `theme-preference`

**Decisión**: Guardar `"dark"` o `"light"` en localStorage. Al cargar, leer la preferencia; si no existe, usar `prefers-color-scheme`.

**Razón**: Simple, sin servidor, coherente con el patrón de persistencia existente (`productos`).

### 5. Variables oscuras: paleta con fondos gris oscuro y texto claro

**Decisión**: Redefinir las mismas variables CSS de `:root` bajo `[data-theme="dark"]` con valores oscuros:
- `--color-bg`: #0f172a (slate-900)
- `--color-surface`: #1e293b (slate-800)
- `--color-text`: #f1f5f9 (slate-100)
- `--color-border`: #334155 (slate-700)
- Ajustes en sombras y colores de acento para contraste en fondo oscuro.

**Razón**: Reutiliza todo el CSS existente sin cambios en selectores de componentes. Solo cambian los valores de las variables.

### 6. Mejoras móviles: espaciado y distribución refinados

**Decisión**: Ajustar media query existente para mejorar padding del contenedor, tamaño del toggle en móvil, y espaciado entre secciones del formulario.

## Risks / Trade-offs

- **[Flash de tema incorrecto al cargar]** → Aplicar el tema inmediatamente en un `<script>` en el `<head>` antes del renderizado para evitar flash de tema claro.
- **[Contraste insuficiente en modo oscuro]** → Verificar que todos los colores cumplan WCAG AA (4.5:1) en ambos temas.
- **[Toggle interfiere con layout en móvil]** → Posicionar el toggle con flexbox para que no rompa el flujo del título en pantallas pequeñas.
