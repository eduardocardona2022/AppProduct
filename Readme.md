# Inventario App

Aplicación web estática para registrar productos y consultar reportes de inventario. Los datos se almacenan localmente en el navegador mediante `localStorage`.

## Funcionalidades

- Registrar fecha, hora, producto, precio unitario y cantidad.
- Calcular automáticamente el total del registro.
- Validar los datos antes de guardarlos.
- Consultar reportes de todos los productos registrados.
- Filtrar reportes por fecha inicial y fecha final.
- Mostrar totales de precios, cantidades y valores acumulados.
- Eliminar registros con confirmación.
- Cambiar entre tema claro y oscuro.
- Adaptar el reporte a dispositivos móviles mediante tarjetas.
- Mantener los datos guardados entre sesiones en el mismo navegador.

## Tecnologías

- HTML5
- CSS3
- JavaScript sin frameworks ni dependencias externas
- `localStorage` para persistencia local
- Node.js para el proceso opcional de build y servidor local

## Estructura

```text
.
├── InventarioApp/
│   └── app.html          # Código fuente principal de la aplicación
├── public/
│   └── index.html        # Archivo generado para publicación
├── build.js              # Copia app.html hacia public/index.html
├── package.json          # Scripts del proyecto
├── vercel.json           # Configuración de despliegue en Vercel
└── Readme.md
```

## Uso directo

No es necesario instalar dependencias para usar la aplicación.

1. Abre `InventarioApp/app.html` directamente en un navegador.
2. Completa los datos del producto.
3. Pulsa **Guardar**.
4. Usa **Ir a Reportes** para consultar o eliminar registros.

## Desarrollo local

Se requiere Node.js 18 o superior.

Instala las dependencias del proyecto y ejecuta:

```bash
npm run dev
```

La aplicación quedará disponible en `http://localhost:3000`.

Para generar únicamente la versión publicable:

```bash
npm run build
```

El comando copia `InventarioApp/app.html` a `public/index.html`.

## Persistencia de datos

Los registros se guardan en el `localStorage` del navegador con la clave `productos`. La preferencia de tema se guarda con la clave `theme-preference`.

Los datos no se comparten entre navegadores o dispositivos y pueden perderse si se limpia el almacenamiento del navegador.

## Despliegue

El proyecto está configurado para Vercel:

- Comando de build: `npm run build`
- Directorio de salida: `public`

También puede publicarse en cualquier servicio que sirva archivos estáticos.

## Licencia

Este proyecto no especifica una licencia actualmente.
