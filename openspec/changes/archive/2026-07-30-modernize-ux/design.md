## Context

La aplicación actual es un archivo HTML único (`app.html`) con funcionalidad completa de registro y reporte de productos. La UI funciona pero tiene un aspecto visual básico con:
- Paleta de colores limitada (azul primario, grises)
- Sin variables CSS para temas
- Animaciones mínimas (solo transiciones básicas de border)
- Iconos de texto (emoji) en lugar de SVG
- Sombras y bordes básicos
- Sin estados de focus/hover diferenciados para accesibilidad

El usuario quiere una experiencia moderna sin perder funcionalidad ni romper la arquitectura de archivo único.

## Goals / Non-Goals

**Goals:**
- Modernizar la apariencia visual con patrones de diseño actuales
- Mejorar el feedback visual en interacciones (botones, formularios, mensajes)
- Implementar un sistema de diseño con variables CSS para consistencia
- Agregar animaciones sutiles que mejoren la percepción de calidad
- Mantener 100% la funcionalidad existente (registro, reporte, filtrado, eliminación)
- Conservar la arquitectura de archivo único sin dependencias externas
- Mejorar la accesibilidad con mejores estados de focus y contraste

**Non-Goals:**
- Cambiar funcionalidad existente (validaciones, persistencia, cálculos)
- Agregar nuevas características de negocio
- Introducir frameworks CSS externos (Bootstrap, Tailwind)
- Usar librerías de iconos externas (Font Awesome, etc.)
- Cambiar la estructura de navegación entre vistas
- Modificar el modelo de datos o la lógica de storage

## Decisions

### 1. Sistema de diseño con CSS Custom Properties (Variables)

**Decisión**: Implementar un sistema de variables CSS en `:root` para colores, espaciado, tipografía y sombras.

**Rationale**: 
- Permite consistencia visual en toda la aplicación
- Facilita ajustes futuros y dark mode (aunque no se implementará ahora)
- Soportado en todos los navegadores modernos
- Alternativa considerada: Preprocesador CSS (SASS) - rechazado porque requeriría build step

**Variables definidas**:
```css
:root {
  --color-primary: #2563eb;
  --color-primary-hover: #1d4ed8;
  --color-success: #10b981;
  --color-danger: #ef4444;
  --color-warning: #f59e0b;
  --color-text: #1f2937;
  --color-text-secondary: #6b7280;
  --color-bg: #f9fafb;
  --color-surface: #ffffff;
  --color-border: #e5e7eb;
  
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
  
  --radius-sm: 6px;
  --radius-md: 8px;
  --radius-lg: 12px;
  
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
  --shadow-md: 0 4px 6px rgba(0,0,0,0.07);
  --shadow-lg: 0 10px 15px rgba(0,0,0,0.1);
  
  --transition-fast: 150ms ease;
  --transition-normal: 250ms ease;
}
```

### 2. Iconografía SVG inline

**Decisión**: Reemplazar emojis (🗑️) con SVG inline para iconos de acciones.

**Rationale**:
- SVG inline no requiere dependencias externas
- Mejor control de tamaño y color vía CSS
- Más accesible (puede incluir `<title>` para screen readers)
- Escala perfectamente en cualquier resolución
- Alternativa considerada: Icon fonts - rechazado porque requiere archivos externos

**Iconos necesarios**:
- Trash icon (para eliminar)
- Search icon (para buscar)
- Arrow left (para volver)
- Plus icon (para guardar/agregar)

### 3. Animaciones con CSS Transitions y Keyframes

**Decisión**: Usar CSS transitions para estados hover/focus y keyframes para mensajes toast y modales.

**Rationale**:
- Transitions son más performantes que JavaScript animations
- GPU-accelerated cuando se usan `transform` y `opacity`
- No requieren librerías externas
- Alternativa considerada: Web Animations API - rechazada por complejidad innecesaria

**Animaciones clave**:
- Toast messages: slide-in desde arriba con fade
- Modal: scale-up con fade
- Botones: scale-down en active state
- Inputs: border-color transition en focus
- Filas de tabla: background transition en hover

### 4. Paleta de colores moderna

**Decisión**: Migrar de la paleta actual (#1a73e8) a una paleta inspirada en Tailwind CSS.

**Rationale**:
- Paletas modernas tienen mejor contraste y armonía
- Tailwind palette es ampliamente probada y accesible
- Mejores tonos para estados hover/active
- Alternativa considerada: Mantener paleta actual - rechazada porque se ve desactualizada

**Nueva paleta**:
- Primary: #2563eb (blue-600) → hover: #1d4ed8 (blue-700)
- Success: #10b981 (emerald-500) → hover: #059669 (emerald-600)
- Danger: #ef4444 (red-500) → hover: #dc2626 (red-600)
- Background: #f9fafb (gray-50)
- Surface: #ffffff
- Text: #1f2937 (gray-800)
- Border: #e5e7eb (gray-200)

### 5. Componentes visuales mejorados

**Decisión**: Rediseñar cards, botones, inputs y tabla con sombras, bordes y espaciado modernos.

**Rationale**:
- Cards con sombras sutiles crean jerarquía visual
- Botones con mejor feedback táctil (scale en active)
- Inputs con labels más claros y mejor focus state
- Tabla con filas alternadas y hover state para mejor legibilidad

**Cambios específicos**:
- Cards: `box-shadow: var(--shadow-md)`, `border-radius: var(--radius-lg)`
- Botones: `transition: all var(--transition-fast)`, `transform: scale(0.98)` en active
- Inputs: `border: 2px solid var(--color-border)`, focus: `border-color: var(--color-primary)`
- Tabla: filas con `transition: background var(--transition-fast)`, hover: `background: var(--color-bg)`

### 6. Mensajes toast mejorados

**Decisión**: Rediseñar mensajes con animación slide-in, iconos SVG y mejor jerarquía visual.

**Rationale**:
- Animación de entrada/salida hace los mensajes más notables
- Iconos ayudan a identificar rápidamente el tipo (éxito/error)
- Mejor posicionamiento y espaciado
- Alternativa considerada: Alertas estáticas - rechazada porque son menos notables

**Implementación**:
- Animación `@keyframes slideIn` desde `translateY(-100%)` a `translateY(0)`
- Icono SVG inline (check para éxito, X para error)
- Fondo con gradiente sutil
- Auto-dismiss con fade-out antes de remover

## Risks / Trade-offs

**[Riesgo] Compatibilidad con navegadores antiguos** → Mitigación: CSS variables requieren navegadores modernos (Chrome 49+, Firefox 31+, Safari 9.1+). Esto es aceptable para 2026. Documentar en README si existe.

**[Riesgo] Performance de animaciones en dispositivos low-end** → Mitigación: Usar solo `transform` y `opacity` (GPU-accelerated). Evitar animar `width`, `height`, `top`, `left`. Testear en dispositivo móvil básico.

**[Trade-off] Tamaño de archivo aumentará con SVG inline** → Aceptable: SVG inline agrega ~2-3KB total. Compensado por mejor UX. No usar icon fonts que requieren archivos externos.

**[Riesgo] Cambios visuales pueden romper layout responsive** → Mitigación: Probar exhaustivamente en móvil (320px-768px) y escritorio. Mantener media queries existentes y ajustar solo valores, no estructura.

**[Trade-off] Tiempo de implementación mayor que un rediseño con framework** → Aceptable: Mantener archivo único sin dependencias es un requisito del proyecto. CSS custom es más rápido que aprender/configurar un framework.
