## ADDED Requirements

### Requirement: Archivo HTML unico autocontenido
El sistema SHALL consistir en un unico archivo `app.html` que contenga todo el HTML, CSS y JavaScript necesario para la aplicacion completa.

#### Scenario: Un solo archivo distribuido
- **WHEN** se distribuye la aplicacion
- **THEN** el sistema SHALL consistir en un unico archivo `app.html`
- **THEN** el archivo SHALL funcionar abriendolo directamente en el navegador (protocolo file://)

#### Scenario: Sin dependencias de archivos externos
- **WHEN** se abre `app.html` en el navegador
- **THEN** el sistema SHALL funcionar sin requerir ningun archivo externo (CSS, JS, imagenes)

### Requirement: CSS incrustado en etiqueta style
El sistema SHALL incluir todo el CSS dentro de una etiqueta `<style>` en el `<head>` del documento.

#### Scenario: Estilos contenidos en el documento
- **WHEN** se inspecciona el archivo `app.html`
- **THEN** todo el CSS SHALL estar dentro de una etiqueta `<style>` en el `<head>`
- **THEN** NO SHALL existir referencia a archivos CSS externos

### Requirement: JavaScript incrustado en etiqueta script
El sistema SHALL incluir todo el JavaScript dentro de una etiqueta `<script>` antes del cierre de `</body>`.

#### Scenario: Scripts contenidos en el documento
- **WHEN** se inspecciona el archivo `app.html`
- **THEN** todo el JavaScript SHALL estar dentro de una etiqueta `<script>` antes de `</body>`
- **THEN** NO SHALL existir referencia a archivos JS externos

### Requirement: Navegacion entre vistas Registro y Reporte
El sistema SHALL proporcionar navegacion entre las vistas de Registro y Reporte dentro del mismo archivo, sin recargar la pagina.

#### Scenario: Vista de registro activa por defecto
- **WHEN** el usuario abre `app.html`
- **THEN** el sistema SHALL mostrar la vista de Registro (formulario)
- **THEN** la vista de Reporte SHALL estar oculta

#### Scenario: Navegar a vista de Reporte
- **WHEN** el usuario presiona el boton "Ir a Reportes"
- **THEN** el sistema SHALL ocultar la vista de Registro
- **THEN** el sistema SHALL mostrar la vista de Reporte
- **THEN** NO SHALL recargarse la pagina

#### Scenario: Navegar a vista de Registro desde Reporte
- **WHEN** el usuario presiona un boton "Volver al Registro" o equivalente en la vista de Reporte
- **THEN** el sistema SHALL ocultar la vista de Reporte
- **THEN** el sistema SHALL mostrar la vista de Registro
- **THEN** NO SHALL recargarse la pagina

### Requirement: Organizacion del codigo por secciones logicas
El sistema SHALL organizar el JavaScript en secciones logicas claramente identificadas con comentarios.

#### Scenario: Secciones identificables en el codigo
- **WHEN** se inspecciona el bloque `<script>` del archivo
- **THEN** el codigo SHALL estar organizado en secciones: Utilidades, Storage, Formulario, Reporte
- **THEN** cada seccion SHALL estar precedida por un comentario descriptivo

### Requirement: Preservacion de funcionalidades existentes
El sistema SHALL mantener todas las funcionalidades de la aplicacion original multi-archivo.

#### Scenario: Formulario funcional
- **WHEN** el usuario esta en la vista de Registro
- **THEN** el sistema SHALL permitir registrar productos con validaciones, calculo automatico de total y persistencia en LocalStorage

#### Scenario: Reporte funcional
- **WHEN** el usuario esta en la vista de Reporte
- **THEN** el sistema SHALL permitir filtrar por fechas, mostrar tabla con totales generales y eliminar registros con confirmacion

#### Scenario: Persistencia en LocalStorage
- **WHEN** se registran o eliminan productos
- **THEN** el sistema SHALL almacenar los datos en localStorage bajo la clave "productos"
- **THEN** los datos SHALL persistir entre sesiones del navegador

### Requirement: Diseno responsive en archivo unico
El sistema SHALL mantener el diseno responsive para dispositivos moviles y escritorio dentro del archivo unico.

#### Scenario: Responsive en movil
- **WHEN** el usuario abre `app.html` en un dispositivo movil
- **THEN** el sistema SHALL adaptar el layout a pantallas pequenas
- **THEN** los campos, botones y tabla SHALL ser legibles y usables

#### Scenario: Responsive en escritorio
- **WHEN** el usuario abre `app.html` en un escritorio
- **THEN** el sistema SHALL mostrar un layout centrado y proporcionado
