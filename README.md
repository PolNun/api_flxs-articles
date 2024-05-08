# Entrevista técnica Flexxus: API de productos

Esta es una API con un CRUD de productos. Permite operaciones como: leer, desactivar, actualizar o buscar productos.

## Requisitos

- Node.js (18+)
- PostgreSQL
    - Es recomendable correrlo en Docker bajo la imágen **postgres:15** si solo es para revisar el proyecto.
    - Esta API está desarrollada con base en PostgreSQL, pero se puede usar otro motor si se configura en el
      app.module.ts.

## Inicialización

1. Clonar el repositorio: ```git clone https://github.com/polnun/api_flxs-articles.git```
2. Moverse a la carpeta del proyecto: ```cd api_flxs-articles```
3. Instalar las dependencias: ```npm install```

## Configuración de base de datos

En el archivo app.module.ts, se debe modificar el objeto de configuración para poner tus credenciales, nombre de base de
datos, etc.

```typescript
@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: "postgres", // cambiar si se desea otro motor
      host: "localhost",
      port: 5432, // cambiar si se desea otro motor
      username: "usuario", // cambiar
      password: "contraseña", // cambiar
      database: "base de datos", // cambiar
      autoLoadModels: true,
      synchronize: true,
      dialectOptions: {
        useUTC: false,
        timezone: "America/Argentina/Buenos_Aires"
      },
      timezone: "America/Argentina/Buenos_Aires"
    }),
    ArticlesModule,
    SecurityModule
  ]
})
export class AppModule {
}
```

## Uso

1. Construir el proyecto: ``npm run build`` ó ``nest build``
2. Ejecutarlo en modo producción: ``npm run start:prod``
    - Opcionalmente, se puede ejecutar en modo dev: ```npm run start:dev```
3. El servidor debería estar corriendo en http://localhost:3044

# Documentación de la API

Para acceder a la documentación hecha con Swagger, ir a: http://localhost:3044/api#/