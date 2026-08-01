## 1. Estructura Base del Archivo Unico

- [x] 1.1 Crear archivo InventarioApp/app.html con estructura HTML5 basica (DOCTYPE, head, body)
- [x] 1.2 Agregar etiqueta <meta charset="UTF-8"> y <meta name="viewport"> para responsive
- [x] 1.3 Agregar titulo de la aplicacion en <title>

## 2. Estilos CSS en etiqueta style

- [x] 2.1 Crear bloque <style> en <head> con estilos base (reset, tipografia, layout general)
- [x] 2.2 Estilizar formulario de registro (campos en columna, botones centrados)
- [x] 2.3 Estilizar tabla de reporte (bordes, encabezados, fila de totales)
- [x] 2.4 Estilizar botones de accion (Guardar, Limpiar, Buscar, Eliminar)
- [x] 2.5 Estilizar mensajes de exito y error
- [x] 2.6 Estilizar dialogo de confirmacion para eliminacion
- [x] 2.7 Agregar media queries para diseno responsive en moviles

## 3. Estructura HTML de las Vistas

- [x] 3.1 Crear seccion #vista-registro con formulario (Fecha/Hora, Producto, Precio, Cantidad, Total)
- [x] 3.2 Agregar botones Guardar, Limpiar e Ir a Reportes en el formulario
- [x] 3.3 Crear seccion #vista-reportes oculta por defecto (display: none)
- [x] 3.4 Agregar campos de filtro (Fecha Inicial, Fecha Final) y boton Buscar en vista-reportes
- [x] 3.5 Agregar contenedor para tabla de resultados en vista-reportes
- [x] 3.6 Agregar contenedor para totales generales en vista-reportes
- [x] 3.7 Agregar boton "Volver al Registro" en vista-reportes
- [x] 3.8 Crear contenedor para mensajes de notificacion

## 4. JavaScript - Seccion Utilidades

- [x] 4.1 Crear bloque <script> antes de </body> con seccion de Utilidades
- [x] 4.2 Implementar funcion formatearMoneda(valor) con separadores de miles
- [x] 4.3 Implementar funcion formatearFecha(fechaISO) a formato DD/MM/YY
- [x] 4.4 Implementar funcion parseFecha(fechaString) a objeto Date

## 5. JavaScript - Seccion Storage

- [x] 5.1 Definir constante STORAGE_KEY = "productos"
- [x] 5.2 Implementar funcion obtenerRegistros() que lea desde LocalStorage
- [x] 5.3 Implementar funcion guardarRegistro(registro) que agregue al arreglo
- [x] 5.4 Implementar funcion eliminarRegistro(id) que filtre por id
- [x] 5.5 Implementar funcion actualizarRegistros(arreglo) que serialice y guarde
- [x] 5.6 Agregar manejo de errores para LocalStorage lleno y no disponible

## 6. JavaScript - Seccion Formulario

- [x] 6.1 Implementar funcion generarId() usando crypto.randomUUID()
- [x] 6.2 Implementar funcion calcularTotal() que calcule Precio x Cantidad en tiempo real
- [x] 6.3 Implementar funcion validarFormulario() con todas las validaciones
- [x] 6.4 Implementar funcion guardar() que valide, calcule total, genere id y persista
- [x] 6.5 Implementar funcion limpiarFormulario() que restablezca campos con fecha actual
- [x] 6.6 Configurar fecha/hora predeterminada actual al cargar pagina
- [x] 6.7 Agregar event listeners para calculo automatico del total
- [x] 6.8 Mostrar mensajes de exito/error al usuario

## 7. JavaScript - Seccion Reporte

- [x] 7.1 Implementar funcion cargarReporte() que lea registros y muestre tabla
- [x] 7.2 Implementar funcion filtrar() por rango de fechas
- [x] 7.3 Implementar funcion dibujarTabla(registros) con datos formateados
- [x] 7.4 Implementar funcion calcularTotales(registros) con sumatorias
- [x] 7.5 Implementar funcion eliminar(id) con confirmacion
- [x] 7.6 Agregar boton de eliminacion con icono en cada fila
- [x] 7.7 Mostrar mensaje cuando no hay registros o sin resultados en filtro
- [x] 7.8 Agregar listener para evento 'storage' para actualizacion en tiempo real

## 8. JavaScript - Navegacion entre Vistas

- [x] 8.1 Implementar funcion navegarA(vista) que muestre/oculte secciones
- [x] 8.2 Configurar evento del boton "Ir a Reportes" para navegar a vista-reportes
- [x] 8.3 Configurar evento del boton "Volver al Registro" para navegar a vista-registro
- [x] 8.4 Cargar reporte automaticamente al navegar a vista-reportes

## 9. Inicializacion y Event Listeners

- [x] 9.1 Agregar event listeners de botones del formulario (Guardar, Limpiar)
- [x] 9.2 Agregar event listener del boton Buscar en reporte
- [x] 9.3 Inicializar fecha/hora actual al cargar la pagina
- [x] 9.4 Configurar listener para evento 'storage' para sincronizacion entre pestanas

## 10. Pruebas de Integracion

- [x] 10.1 Abrir app.html en navegador y verificar que carga vista de registro
- [x] 10.2 Registrar productos y verificar calculo de total en tiempo real
- [x] 10.3 Verificar que los datos se guardan en LocalStorage
- [x] 10.4 Navegar a Reporte y verificar que se muestran los registros
- [x] 10.5 Probar filtros por fecha y verificar totales
- [x] 10.6 Probar eliminacion de registros con confirmacion
- [x] 10.7 Probar validaciones con datos invalidos
- [x] 10.8 Probar formato de moneda con separadores de miles
- [x] 10.9 Probar diseno responsive en diferentes tamanos de pantalla
- [x] 10.10 Verificar que el archivo funciona con protocolo file://
