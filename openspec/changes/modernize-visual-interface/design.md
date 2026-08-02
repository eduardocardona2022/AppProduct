## Context

La aplicación es un HTML único con CSS y JavaScript embebidos. Ya cuenta con tema claro/oscuro, reportes responsive, edición, estado de entrega y compartir por WhatsApp, pero la composición actual sigue siendo lineal y genérica. La renovación debe mejorar la percepción visual sin cambiar eventos, datos, navegación ni el almacenamiento local.

El diseño se aplicará en `InventarioApp/app.html` y se publicará mediante el build existente. No se incorporarán frameworks, imágenes externas ni fuentes que dependan de red.

## Goals / Non-Goals

**Goals:**

- Crear una identidad visual distintiva de dashboard de inventario, no solo cambiar colores aislados.
- Mejorar la jerarquía entre título, formulario, filtros, estado de entrega, totales y acciones.
- Usar una paleta Aurora con índigo, menta y superficies neutras en claro, más una variante nocturna coherente.
- Crear componentes consistentes con bordes suaves, elevación sutil, estados de foco y microinteracciones.
- Mantener legibilidad WCAG AA, targets táctiles de 44px y uso cómodo en 320px-1440px.
- Respetar `prefers-reduced-motion` y evitar animaciones que bloqueen la interacción.

**Non-Goals:**

- No cambiar la estructura de datos, validaciones, filtros, reportes ni acciones existentes.
- No añadir un framework CSS, sistema de componentes externo o dependencia de CDN.
- No reemplazar los SVG inline ni introducir imágenes remotas.
- No crear nuevas vistas de negocio ni alterar la persistencia en `localStorage`.

## Decisions

### Sistema visual semántico

Se ampliarán las variables CSS existentes con roles semánticos para fondo de aplicación, superficie elevada, superficie destacada, texto, borde, acento, estado de entrega y acciones. Los componentes usarán las variables en lugar de valores directos para que el tema oscuro sea una reasignación controlada.

Alternativa considerada: definir colores directamente en cada selector. Se descarta porque dificulta mantener coherencia entre temas y estados.

### Lenguaje visual Aurora

La interfaz usará un fondo neutro con halos de color muy sutiles, cards con radios de 18px, bordes translúcidos y sombras de baja intensidad. El índigo identificará la acción primaria, la menta los estados positivos y el coral las acciones destructivas. Los gradientes se limitarán a fondos decorativos y no a texto, para preservar contraste.

Alternativa considerada: glassmorphism intenso. Se descarta porque reduce legibilidad, aumenta el ruido visual y funciona peor en pantallas pequeñas.

### Jerarquía de contenido

El encabezado tendrá una identidad compacta y el formulario se organizará como una superficie principal con el total como elemento destacado. En reportes, filtros y compartir serán un bloque de herramientas; la tabla, tarjetas, estado de entrega y totales tendrán separación visual clara. La estructura HTML existente se conservará cuando sea suficiente, agregando clases de presentación mínimas.

### Tipografía y movimiento

Se usará una pila local `Inter, ui-sans-serif, system-ui, sans-serif` con `clamp()` para títulos y una escala consistente para texto. Las transiciones serán de 150-250ms; las entradas de vistas y cards tendrán movimiento corto y se desactivarán mediante `prefers-reduced-motion: reduce`.

Alternativa considerada: cargar una fuente web externa. Se descarta porque la aplicación debe funcionar offline y abrirse directamente con `file://`.

### Responsive por composición

En móvil se conservarán las tarjetas de reporte, los botones se apilarán cuando sea necesario y el header evitará competir con el título. En tablet se utilizarán grids fluidos; en escritorio el contenido tendrá un ancho máximo más generoso y filtros alineados. La tabla nunca será el único medio de acceso a la información en pantallas pequeñas.

## Risks / Trade-offs

- [Rediseño demasiado llamativo] -> Limitar gradientes, usar roles semánticos y validar contraste antes de cerrar el cambio.
- [Cambios visuales afectan controles existentes] -> Mantener IDs, listeners y estructura funcional; modificar solo clases, estilos y envoltorios necesarios.
- [Bajo contraste en tema oscuro] -> Definir colores específicos para tema nocturno y revisar texto, bordes, estados y botones por separado.
- [Animaciones incómodas] -> Mantener duraciones cortas, no animar layout crítico y respetar `prefers-reduced-motion`.
- [Ruptura en viewport pequeño] -> Verificar 320px, 390px, 768px y escritorio con tabla, tarjetas, modal y botones de compartir.

## Migration Plan

1. Reorganizar variables CSS y estilos base en `InventarioApp/app.html`.
2. Actualizar header, cards, formulario, filtros, tabla, tarjetas, estados y botones sin cambiar sus IDs.
3. Añadir ajustes responsive y reduced motion.
4. Ejecutar `npm run build` para regenerar `public/index.html`.
5. Revisar visualmente ambos temas y validar contraste, foco, responsive y flujos existentes.

El rollback consiste en restaurar los estilos y estructura visual anteriores y volver a ejecutar el build. No se requiere migración de datos.

## Open Questions

No hay decisiones funcionales pendientes.
