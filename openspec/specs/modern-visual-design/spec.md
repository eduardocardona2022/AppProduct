# modern-visual-design

## Purpose

Define the modern visual design system including CSS variables, color palette, typography, component styles, and SVG iconography.

## Requirements

### Requirement: Sistema de variables CSS para diseño
El sistema SHALL implementar un sistema de diseño usando CSS Custom Properties (variables) en `:root` para colores, espaciado, tipografía y sombras, con soporte para tema oscuro mediante redefinición bajo `[data-theme="dark"]`.

#### Scenario: Variables CSS definidas en root
- **WHEN** se inspecciona el CSS del archivo `app.html`
- **THEN** el sistema SHALL definir variables CSS en el selector `:root`
- **THEN** las variables SHALL incluir: colores primarios, secundarios, de fondo, texto y bordes
- **THEN** las variables SHALL incluir: espaciado (xs, sm, md, lg, xl)
- **THEN** las variables SHALL incluir: radios de borde (sm, md, lg)
- **THEN** las variables SHALL incluir: sombras (sm, md, lg)
- **THEN** las variables SHALL incluir: transiciones (fast, normal)

#### Scenario: Uso consistente de variables en componentes
- **WHEN** se renderizan los componentes de la aplicación (botones, cards, inputs)
- **THEN** los componentes SHALL usar las variables CSS definidas en `:root`
- **THEN** NO SHALL haber valores de color hardcodeados fuera de las variables
- **THEN** los cambios en las variables SHALL reflejarse en todos los componentes

#### Scenario: Variables oscuras bajo data-theme
- **WHEN** el elemento `<html>` tiene el atributo `data-theme="dark"`
- **THEN** las variables de color SHALL redefinirse con valores oscuros
- **THEN** las variables de espaciado, radios y transiciones SHALL mantenerse iguales
- **THEN** las sombras SHALL ajustarse para ser visibles sobre fondos oscuros

### Requirement: Paleta de colores moderna
El sistema SHALL usar una paleta de colores moderna con mejor contraste y armonía visual, incluyendo una variante oscura con contraste adecuado.

#### Scenario: Colores primarios actualizados
- **WHEN** se renderiza la aplicación
- **THEN** el color primario SHALL ser #2563eb o similar (azul moderno)
- **THEN** el color de éxito SHALL ser #10b981 o similar (verde esmeralda)
- **THEN** el color de peligro SHALL ser #ef4444 o similar (rojo moderno)
- **THEN** los colores SHALL tener estados hover definidos con tonos más oscuros

#### Scenario: Contraste accesible
- **WHEN** se muestra texto sobre fondos
- **THEN** el contraste SHALL cumplir con WCAG AA (4.5:1 para texto normal)
- **THEN** el texto primario SHALL ser #1f2937 o similar (gris oscuro)
- **THEN** el texto secundario SHALL ser #6b7280 o similar (gris medio)

#### Scenario: Contraste accesible en tema oscuro
- **WHEN** el tema activo es oscuro
- **THEN** el contraste de texto sobre fondos SHALL cumplir con WCAG AA (4.5:1)
- **THEN** el texto primario SHALL ser claro (#f1f5f9 o similar) sobre fondos oscuros
- **THEN** el texto secundario SHALL ser (#94a3b8 o similar) sobre fondos oscuros

### Requirement: Tipografía mejorada
El sistema SHALL implementar una jerarquía tipográfica clara con mejor legibilidad.

#### Scenario: Escala tipográfica consistente
- **WHEN** se muestran títulos y texto
- **THEN** los tamaños de fuente SHALL seguir una escala consistente (ej: 0.875rem, 1rem, 1.25rem, 1.5rem)
- **THEN** los títulos SHALL tener font-weight 600-700
- **THEN** el texto body SHALL tener font-weight 400
- **THEN** el line-height SHALL ser 1.5-1.6 para mejor legibilidad

### Requirement: Cards con diseño moderno
El sistema SHALL rediseñar las cards con sombras, bordes redondeados y espaciado modernos, adaptándose a ambos temas.

#### Scenario: Card visual mejorada
- **WHEN** se renderiza una card (formulario, reporte)
- **THEN** la card SHALL tener `border-radius` de al menos 8px
- **THEN** la card SHALL tener `box-shadow` sutil (elevación visual)
- **THEN** la card SHALL tener padding interno de al menos 20px
- **THEN** la card SHALL tener fondo con color de superficie (`var(--color-surface)`)

#### Scenario: Card en tema oscuro
- **WHEN** el tema activo es oscuro
- **THEN** la card SHALL usar el color de superficie oscuro como fondo
- **THEN** la sombra SHALL ser visible pero sutil sobre el fondo oscuro

### Requirement: Botones con estilo moderno
El sistema SHALL rediseñar los botones con colores, bordes y estados hover/active modernos.

#### Scenario: Botón primario moderno
- **WHEN** se renderiza un botón primario
- **THEN** el botón SHALL tener fondo con color primario (#2563eb)
- **THEN** el botón SHALL tener `border-radius` de al menos 6px
- **THEN** el botón SHALL tener padding de al menos 10px 20px
- **THEN** el texto SHALL ser blanco con font-weight 600

#### Scenario: Estados hover y active
- **WHEN** el usuario pasa el mouse sobre un botón
- **THEN** el fondo SHALL cambiar a un tono más oscuro
- **WHEN** el usuario hace click en el botón
- **THEN** el botón SHALL tener un efecto visual de presión (scale o cambio de color)

### Requirement: Inputs con diseño mejorado
El sistema SHALL rediseñar los campos de entrada con mejor feedback visual y accesibilidad, adaptándose a ambos temas.

#### Scenario: Input con focus visible
- **WHEN** un campo de entrada recibe focus
- **THEN** el border SHALL cambiar de color al color primario
- **THEN** SHALL aparecer un ring de focus (box-shadow) sutil
- **THEN** la transición SHALL ser suave (150-250ms)

#### Scenario: Labels claros
- **WHEN** se muestra un campo de entrada
- **THEN** el label SHALL tener font-weight 600
- **THEN** el label SHALL tener color de texto oscuro (`var(--color-text)`)
- **THEN** el label SHALL estar encima del input con margen inferior

#### Scenario: Input en tema oscuro
- **WHEN** el tema activo es oscuro
- **THEN** el input SHALL tener fondo oscuro (`var(--color-surface)`)
- **THEN** el texto SHALL ser claro y legible
- **THEN** el border SHALL ser visible con el color de borde oscuro

### Requirement: Tabla con jerarquía visual mejorada
El sistema SHALL rediseñar la tabla con mejor legibilidad y estados visuales, incluyendo un layout alternativo tipo cards para móvil.

#### Scenario: Tabla moderna
- **WHEN** se renderiza la tabla de reporte
- **THEN** el header SHALL tener fondo con color primario y texto blanco
- **THEN** las filas SHALL tener padding de al menos 10px 12px
- **THEN** las filas SHALL tener border-bottom sutil
- **THEN** las filas alternas SHALL tener fondo ligeramente diferente (opcional)

#### Scenario: Hover state en filas
- **WHEN** el usuario pasa el mouse sobre una fila de datos
- **THEN** la fila SHALL cambiar de fondo sutilmente
- **THEN** la transición SHALL ser suave (150-250ms)

#### Scenario: Cards de reporte en móvil
- **WHEN** la aplicación se visualiza en móvil (ancho < 601px)
- **THEN** cada registro SHALL mostrarse como una card con fondo de superficie (`var(--color-surface)`)
- **THEN** la card SHALL tener `border-radius` de al menos 8px
- **THEN** la card SHALL tener `box-shadow` sutil y padding de al menos 16px
- **THEN** los datos SHALL mostrarse en formato vertical con labels en `var(--color-text-secondary)` y valores en `var(--color-text)`
- **THEN** el botón eliminar SHALL estar en la parte inferior de la card con ancho completo

#### Scenario: Card de totales en móvil
- **WHEN** se muestran los totales en móvil
- **THEN** SHALL mostrarse como una card con fondo destacado (`var(--color-info-bg)`)
- **THEN** los valores totales SHALL tener font-weight 700
- **THEN** la card SHALL tener border-top con color primario

#### Scenario: Card de reporte en tema oscuro
- **WHEN** el tema activo es oscuro y se visualiza en móvil
- **THEN** las cards de reporte SHALL usar el color de superficie oscuro
- **THEN** el texto SHALL ser claro y legible
- **THEN** el botón eliminar SHALL mantener contraste adecuado

### Requirement: Iconografía SVG inline
El sistema SHALL usar SVG inline para iconos en lugar de emojis o icon fonts.

#### Scenario: Iconos SVG para acciones
- **WHEN** se muestra un botón de eliminar
- **THEN** el icono SHALL ser un SVG inline (no emoji)
- **THEN** el SVG SHALL tener tamaño consistente (ej: 16x16px o 1em)
- **THEN** el SVG SHALL heredar el color del texto actual (currentColor)

#### Scenario: Iconos accesibles
- **WHEN** se renderiza un icono SVG
- **THEN** el SVG SHALL incluir un elemento `<title>` descriptivo
- **THEN** el SVG SHALL tener `aria-hidden="true"` si es decorativo
- **THEN** el SVG SHALL tener `role="img"` y `aria-label` si es funcional
