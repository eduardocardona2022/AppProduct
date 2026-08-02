# record-management

## Purpose

Define the requirements for editing, updating, canceling, deleting, and ordering product records in the report.

## Requirements

### Requirement: Editar un registro existente
La aplicación SHALL permitir seleccionar un registro desde el reporte y cargar todos sus campos editables en el formulario: fecha y hora, producto, precio unitario, cantidad y estado `entregado`.

#### Scenario: Cargar registro para edición
- **WHEN** el usuario pulsa la acción editar de un registro
- **THEN** la aplicación muestra el formulario con los valores actuales del registro y conserva su `id` para actualizarlo

#### Scenario: Editar todos los campos
- **WHEN** el usuario cambia fecha, producto, precio, cantidad o estado de entrega y confirma la actualización
- **THEN** la aplicación guarda los nuevos valores en el mismo registro sin crear un registro adicional

### Requirement: Confirmar actualización del registro
La aplicación SHALL validar un registro editado con las mismas reglas de creación y SHALL mostrar un mensaje de éxito al actualizarlo correctamente.

#### Scenario: Actualización válida
- **WHEN** el usuario confirma una edición con todos los campos válidos
- **THEN** la aplicación actualiza el registro persistido, muestra "Registro actualizado correctamente" y sale del modo edición

#### Scenario: Actualización inválida
- **WHEN** el usuario confirma una edición con un campo obligatorio vacío, precio no válido o cantidad no válida
- **THEN** la aplicación no modifica el registro y muestra el mensaje de validación correspondiente

### Requirement: Cancelar edición
La aplicación SHALL ofrecer una acción clara para cancelar la edición sin modificar el registro persistido.

#### Scenario: Cancelar cambios
- **WHEN** el usuario cancela una edición antes de actualizar
- **THEN** la aplicación limpia o restablece el formulario, sale del modo edición y conserva intacto el registro original

### Requirement: Acciones compactas y accesibles
La aplicación SHALL mostrar un grupo de acciones para editar y eliminar cada registro. El botón eliminar SHALL mostrar únicamente su icono SVG visible y ambos botones SHALL incluir `aria-label`, `title`, foco visible y objetivos táctiles accesibles.

#### Scenario: Acciones en tabla
- **WHEN** el reporte se muestra en escritorio
- **THEN** cada fila contiene botones de editar y eliminar agrupados en la columna de acciones, sin texto visible en eliminar

#### Scenario: Acciones en tarjeta
- **WHEN** el reporte se muestra en móvil
- **THEN** cada tarjeta contiene las acciones de editar y eliminar sin scroll horizontal y cada control tiene al menos 44px de área clickable

#### Scenario: Eliminar conserva confirmación
- **WHEN** el usuario pulsa el botón eliminar
- **THEN** la aplicación abre el modal de confirmación existente antes de borrar el registro

### Requirement: Reporte ordenado por recencia
La aplicación SHALL ordenar los registros mostrados por `fechaHora` descendente, colocando primero los registros más recientes después de aplicar los filtros.

#### Scenario: Reporte general
- **WHEN** el usuario abre el reporte sin filtros restrictivos
- **THEN** los registros aparecen del más reciente al más antiguo

#### Scenario: Reporte filtrado
- **WHEN** el usuario aplica filtros de fecha o estado de entrega
- **THEN** los registros que cumplen los filtros aparecen del más reciente al más antiguo
