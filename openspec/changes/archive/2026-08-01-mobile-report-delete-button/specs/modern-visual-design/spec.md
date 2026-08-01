## MODIFIED Requirements

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
