## ADDED Requirements

### Requirement: Registro del estado de entrega
La aplicación SHALL mostrar un checkbox "Entregado" en el formulario de registro y SHALL guardar su valor como un booleano `entregado` junto con cada producto. El checkbox MUST estar desmarcado por defecto al iniciar y limpiar el formulario.

#### Scenario: Crear producto entregado
- **WHEN** el usuario completa un registro y marca el checkbox "Entregado"
- **THEN** el registro guardado contiene `entregado: true`

#### Scenario: Crear producto no entregado
- **WHEN** el usuario completa un registro y deja desmarcado el checkbox "Entregado"
- **THEN** el registro guardado contiene `entregado: false`

### Requirement: Compatibilidad con registros existentes
La aplicación SHALL interpretar como `entregado: false` cualquier registro almacenado que no tenga la propiedad `entregado`.

#### Scenario: Leer registro legado
- **WHEN** el reporte carga un registro creado antes de esta funcionalidad
- **THEN** el registro se muestra como "No entregado" y puede incluirse en ese filtro

### Requirement: Visualización del estado en reportes
La aplicación SHALL mostrar el estado de entrega de cada registro como "Entregado" o "No entregado" tanto en la tabla de escritorio como en las tarjetas móviles.

#### Scenario: Mostrar estado en tabla
- **WHEN** el reporte se visualiza en una pantalla de escritorio
- **THEN** cada fila incluye una columna de estado con el texto correspondiente

#### Scenario: Mostrar estado en tarjeta
- **WHEN** el reporte se visualiza en una pantalla móvil
- **THEN** cada tarjeta incluye un campo de estado con el texto correspondiente

### Requirement: Filtrar reportes por estado de entrega
La aplicación SHALL ofrecer un filtro con las opciones "Todos", "Entregados" y "No entregados". El filtro SHALL combinarse con los filtros de fecha existentes y SHALL actualizar los registros mostrados y sus totales.

#### Scenario: Ver solo pendientes
- **WHEN** el usuario selecciona "No entregados" y ejecuta la búsqueda
- **THEN** el reporte muestra únicamente registros cuyo estado sea `false` o no esté definido

#### Scenario: Ver solo entregados
- **WHEN** el usuario selecciona "Entregados" y ejecuta la búsqueda
- **THEN** el reporte muestra únicamente registros cuyo estado sea `true`

#### Scenario: Combinar estado y fechas
- **WHEN** el usuario selecciona un estado y un rango de fechas
- **THEN** el reporte muestra únicamente los registros que cumplen ambas condiciones

#### Scenario: Ver todos los estados
- **WHEN** el usuario selecciona "Todos"
- **THEN** el reporte incluye registros entregados y no entregados dentro del rango de fechas seleccionado

### Requirement: Reinicio del filtro al entrar al reporte
La aplicación SHALL restablecer el filtro de estado a "Todos" al navegar desde el registro hacia la vista de reportes.

#### Scenario: Entrar al reporte
- **WHEN** el usuario abre la vista de reportes
- **THEN** el filtro de estado inicia en "Todos" y se muestran todos los registros sin restricción de estado
