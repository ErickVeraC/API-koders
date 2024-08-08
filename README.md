# Estructura del proyecto

El proyecto sigue la siguiente estructura:

```
koders-api/
├── config/
│   ├── config.js
│   └── database.js
├── controllers/
│   ├── kodersController.js
│   └── mentorsController.js
├── models/
│   ├── koderModel.js
│   └── mentorModel.js
├── routes/
│   ├── kodersRoutes.js
│   └── mentorsRoutes.js
├── index.js
└── package.json
```

## Herramientas utilizadas

- **Node.js**: Es un entorno de ejecución de JavaScript que permite ejecutar código JavaScript en el servidor.
- **Express.js**: Es un framework de Node.js que facilita la creación de aplicaciones web y APIs.
- **MongoDB**: Es una base de datos NoSQL utilizada para almacenar los datos del proyecto.
- **Mongoose**: Es una biblioteca de modelado de objetos de MongoDB para Node.js, que proporciona una solución sencilla para trabajar con la base de datos.

## Archivos y su funcionalidad

- **config/config.js**: Este archivo contiene la configuración general de la aplicación, como la clave secreta para la autenticación, el puerto en el que se ejecutará el servidor, etc.
- **config/database.js**: Aquí se encuentra la configuración de la conexión a la base de datos MongoDB.
- **controllers/kodersController.js**: Este archivo contiene la lógica de negocio relacionada con los koders, como la creación, actualización y eliminación de koders.
- **controllers/mentorsController.js**: Aquí se encuentra la lógica de negocio relacionada con los mentores, como la creación, actualización y eliminación de mentores.
- **models/koderModel.js**: Este archivo define el esquema y el modelo de datos para los koders en la base de datos.
- **models/mentorModel.js**: Aquí se define el esquema y el modelo de datos para los mentores en la base de datos.
- **routes/kodersRoutes.js**: Este archivo define las rutas y los controladores asociados a las operaciones relacionadas con los koders.
- **routes/mentorsRoutes.js**: Aquí se definen las rutas y los controladores asociados a las operaciones relacionadas con los mentores.
- **index.js**: Este archivo es el punto de entrada de la aplicación, donde se configura el servidor Express y se establece la conexión con la base de datos.
- **package.json**: Aquí se encuentran las dependencias del proyecto y los scripts de ejecución.
