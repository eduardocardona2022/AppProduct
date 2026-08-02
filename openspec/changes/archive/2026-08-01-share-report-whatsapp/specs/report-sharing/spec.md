## ADDED Requirements

### Requirement: Mostrar acción para compartir reporte
La aplicación SHALL mostrar un botón accesible con el logo SVG de WhatsApp en la vista de reportes cuando el conjunto de registros filtrado contenga al menos un registro. La aplicación SHALL ocultar el botón cuando no existan registros para compartir.

#### Scenario: Reporte con información
- **WHEN** el reporte contiene uno o más registros después de aplicar sus filtros
- **THEN** se muestra el botón de compartir con WhatsApp con etiqueta accesible

#### Scenario: Reporte sin información
- **WHEN** el reporte no contiene registros
- **THEN** el botón de compartir no se muestra y no se inicia ningún intento de apertura

### Requirement: Generar contenido del reporte
La aplicación SHALL generar un mensaje de texto con la información de los registros filtrados y sus totales, incluyendo fecha, producto, precio, cantidad, estado de entrega y total.

#### Scenario: Compartir reporte filtrado
- **WHEN** el usuario pulsa compartir después de aplicar filtros
- **THEN** el mensaje contiene únicamente los registros visibles y los totales correspondientes a ese resultado

#### Scenario: Productos con caracteres especiales
- **WHEN** un producto contiene espacios, acentos o caracteres reservados para URL
- **THEN** el contenido se codifica correctamente y conserva el texto legible al abrir WhatsApp

### Requirement: Abrir WhatsApp para seleccionar contacto
La aplicación SHALL intentar abrir WhatsApp mediante su esquema de aplicación con el mensaje del reporte codificado, dejando que WhatsApp permita seleccionar el contacto y confirmar el envío.

#### Scenario: WhatsApp disponible
- **WHEN** el usuario pulsa compartir y el dispositivo puede abrir WhatsApp
- **THEN** WhatsApp se inicia con el mensaje preparado y el usuario puede elegir el contacto destinatario

### Requirement: Informar cuando no se puede compartir
La aplicación SHALL mostrar exactamente `no se puede compartir la información` cuando el navegador bloquee la apertura, no pueda iniciar el esquema de WhatsApp o no confirme la apertura dentro del tiempo límite.

#### Scenario: WhatsApp no instalado
- **WHEN** el usuario pulsa compartir en un dispositivo sin WhatsApp instalado
- **THEN** la aplicación muestra `no se puede compartir la información`

#### Scenario: Popup o esquema bloqueado
- **WHEN** el navegador bloquea la nueva ventana o el esquema de WhatsApp
- **THEN** la aplicación muestra `no se puede compartir la información` y permanece en el reporte

### Requirement: Compartir responsive y accesible
El botón SHALL funcionar en escritorio y móvil, SHALL tener un área clickable mínima de 44px, SHALL incluir `aria-label`, `title`, foco visible y SHALL mantener contraste en los temas disponibles.

#### Scenario: Uso en móvil
- **WHEN** el reporte se visualiza en una pantalla móvil con información
- **THEN** el botón es visible, táctil y puede iniciar WhatsApp sin requerir scroll horizontal

#### Scenario: Uso con teclado
- **WHEN** el usuario navega hasta el botón con el teclado
- **THEN** el botón muestra un indicador de foco visible y puede activarse con Enter o Space
