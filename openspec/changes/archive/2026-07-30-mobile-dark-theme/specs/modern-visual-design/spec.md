## MODIFIED Requirements

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
