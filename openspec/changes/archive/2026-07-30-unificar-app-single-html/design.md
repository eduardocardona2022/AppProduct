## Context

La aplicación de registro de productos fue diseñada originalmente con una arquitectura multi-archivo (2 HTML, 1 CSS, 4 módulos JS). Esta estructura es adecuada para proyectos grandes, pero para una aplicación de alcance limitado como esta, introduce complejidad innecesaria en la distribución. El usuario debe copiar/mover múltiples archivos y mantener la estructura de directorios.

**Estado actual**: La aplicación funciona correctamente con archivos separados. No hay bugs ni problemas de rendimiento que motiven el cambio. La motivación es puramente operativa: simplificar distribución.

**Restricciones**:
- Un único archivo HTML autocontenido
- Sin dependencias externas (ni archivos locales ni CDN)
- Todas las funcionalidades existentes deben preservarse
- Compatible con navegadores modernos

## Goals / Non-Goals

**Goals:**
- Consolidar HTML, CSS y JavaScript en un solo archivo `app.html`
- Implementar navegación entre vistas (Registro/Reporte) con JavaScript
- Mantener todas las funcionalidades: formulario, validaciones, cálculo de totales, reporte, filtros, eliminación, LocalStorage
- Mantener diseño responsive
- El archivo debe funcionar abriéndolo directamente en el navegador (file://)

**Non-Goals:**
- Mejorar o cambiar funcionalidades existentes
- Agregar nuevas características
- Optimizar rendimiento (no es un objetivo en este cambio)
- Crear un sistema de plugins o extensión

## Decisions

**1. Navegación por vistas con mostrar/ocultar secciones**
- **Decisión**: Usar dos `<section>` dentro del mismo HTML, alternando visibilidad con `display: none/block`
- **Rationale**: Simple, sin hash routing, sin recarga de página, funciona con file://
- **Alternativas consideradas**:
  - Hash routing (#registro, #reporte): Más complejo, innecesario para 2 vistas
  - Iframe embebido: Rompe la idea de archivo único
  - SPA con history API: Requiere servidor para rutas limpias

**2. CSS en etiqueta `<style>` en el `<head>`**
- **Decisión**: Todo el CSS va en un solo bloque `<style>` dentro del `<head>`
- **Rationale**: Estándar HTML, sin archivos externos, cacheado con el documento
- **Alternativas consideradas**:
  - CSS inline en cada elemento: Difícil de mantener, repetitivo
  - CSS en `<body>`: Funciona pero no es semánticamente correcto

**3. JavaScript en etiqueta `<script>` al final del `<body>`**
- **Decisión**: Todo el JavaScript va en un solo bloque `<script>` antes de `</body>`
- **Rationale**: Garantiza que el DOM esté cargado, estándar para scripts inline
- **Alternativas consideradas**:
  - `<script>` en `<head>` con defer: Funciona pero menos compatible con file://
  - Múltiples bloques `<script>`: Innecesario, un solo bloque es más simple

**4. Organización del JavaScript por secciones lógicas**
- **Decisión**: Dentro del único `<script>`, organizar el código con comentarios de sección que reemplacen los módulos anteriores: Utilidades, Storage, Formulario, Reporte
- **Rationale**: Mantiene legibilidad sin necesidad de archivos separados
- **Alternativas consideradas**:
  - Todo en funciones sueltas sin organización: Difícil de navegar
  - IIFEs por módulo: Overkill para un archivo único

**5. Estructura del archivo**
- **Decisión**: Orden: `<!DOCTYPE html>` → `<head>` con `<style>` → `<body>` con secciones → `<script>`
- **Rationale**: Orden estándar HTML, CSS carga antes de render, JS carga después del DOM

## Risks / Trade-offs

**[Riesgo] Archivo grande difícil de mantener**
→ **Mitigación**: Organizar código con comentarios de sección claros. Para el alcance actual (~400-600 líneas), es manejable.

**[Trade-off] Sin separación de responsabilidades por archivos**
→ **Beneficio**: Distribución simplificada, un solo archivo
→ **Costo**: Menos modularidad. Aceptable para este alcance.

**[Trade-off] Sin cache separado de CSS/JS**
→ **Beneficio**: No hay problemas de versiones desincronizadas
→ **Costo**: El navegador no puede cachear CSS/JS independientemente. Irrelevante para archivo local.
