# MsgApi
Este proyecto fue creado con NodeJS versión 22.9.0 y  y se conecta a una Base de datos Mongo Atlas, al momento de descargar este proyecto, instale las dependencias con npm install, para ejecutar npm run dev, la aplicación corre en: `http://localhost:3000/`. La aplicación se recargará automáticamente si cambia alguno de los archivos de origen.

## MsgApi

MsgApi es una Api Rest que fue creada como proyecto de prueba para la vacante como Desarrollador dentro de una empresa dedicada a préstamos a sus clientes, es una API en base a información recibida, codifica y decodifica un mensaje proveniente del FrontEnd.

![](/imagenes/01A.png)

## Métodos y rutas:

POST: https://msg-api-dpvt.vercel.app/api/messages
Inserta un nuevo mensaje codificado.

![](/imagenes/01.png)

GET: https://msg-api-dpvt.vercel.app/api/messages
Obtiene el listado general de mensajes

![](/imagenes/02.png)

POST:  https://msg-api-dpvt.vercel.app/api/messages/findById
Obtiene un mensaje decodificado según su ID.

![](/imagenes/03.png)

DELETE: https://msg-api-dpvt.vercel.app/api/messages
Elimina mensaje según su ID

![](/imagenes/04.png)

Cluster de la BD Mongo Atlas:

![](/imagenes/05.png)

Despliegue en Vercel

![](/imagenes/06.png)

`© 2025 Copyright: GMayaS C:\>_Desarrollo en Sistemas.`