Challenge Meetups
====

App para crear y hicistir a distintas meetups.

## Proyectos

📁 `./` API con Node.js

📁 `./meetupapp` App con React.js

<br>

# Backend

## Herramientas

- Backend: Node
- Server: ExpressJS
- Base de Datos: MySQL

<br>

## Development

**Para iniciar el proyecto primero debemos tener instalado MySQL (desarrollado con la versión 14.14)**

Lo primero es crear la base datos y crear un usuario para realizar una conexión.

Para acceder a la consola de MySQL, desde la terminal utilizamos el siguiente comando (puede no hacer falta `sudo`)

```console
~/challengeMeetups$ sudo mysql
```

Una vez dentro, primero creamos la base de datos y luego añadimos un usuario y le otorgamos permisos.

<br>

## Utilizando `seed.sql`

Para obtener una base de datos semi-populada podemos ejecutar el siguiente comando

```sql
source seed.sql
```

<br>

## Creando Base de datos vacía

Simplemente ejecutamos el comando SQL para crear la base de datos

```sql
CREATE DATABASE challenge;
```

<br>

## Asignando permisos

Si ya se tiene un usuario predefinido para todo, podemos usar ese y saltearnos el primer comando. Sino, ejecutamos ambos. 

```sql
CREATE USER '<nombre>'@'localhost' IDENTIFIED BY '<password>';

GRANT ALL PRIVILEGES ON challenge TO '<nombre>'@'localhost';

GRANT ALL PRIVILEGES ON challenge.* TO '<nombre>'@'localhost';
```

> Reemplazamos solo aquello entre `"<"` y `">"`. 

> `localhost` se mantiene igual.


<br>

Para asegurarnos de que haya funcionado, podemos listar los permisos del usuario con el siguiente comando
```sql
SHOW GRANTS FOR '<nombre>'@'localhost';
```

<br>

## Variables de entorno

Copiamos el archivo `.env.template` y lo pegamos con el nombre `.env`.

Dentro reemplazamos los valores correspondientes de la base de datos.

```conf
PORT=8080
DB_NAME=challenge
DB_USER=<nombre>
DB_PASSWORD=<password>
```

<br>

## Node Modules

Luego instalamos todas las dependencias del proyecto

```console
~/challengeMeetups$ npm install
```

Finalmente ejecutamos el proyecto con el siguiente comando 

```console
~/challengeMeetups$ npm start
```

Esto nos levantará el server en http://localhost:8080 o en el puerto que hayamos definido en las variables de entorno.

<!-- Accediendo a `http://localhost:8080/eventos` ingresamos en la página del usuario final -->
<!-- Accediendo a `http://localhost:8080/admin` ingresamos en la página del usuario administrador -->

<br>

## Usuarios

Si todo funciona correctamente, ahora podríamos acceder a la web administrativa en `http://localhost:8080/app` con las siguientes credenciales


| Email           | Contraseña       |
|-----------------|------------------|
| admin@admin.com |  challengeadmin  |

<br>
<br>

# FrontEnd


## Herramientas

- Framework: [React](https://es.reactjs.org/)
- State manager: [Redux](https://es.redux.js.org/)
- Routing: [React Router](https://reactrouter.com/)

<br>

## Development

Para instalar las dependencias

```console
~/challenge/front$ npm install
```

Para iniciar el entorno de desarrollo en http://localhost:8081 ejecutamos el siguiente comando

```console
~/challengeMeetups/front$ npm start
```
> Dependiendo del puerto definido para el backend, te debería dar la opción de cambiar de puerto `8080` al puerto `8081`


<br>

## Build

Solo hace falta ejecutar el siguiente comando para buildear la aplicación detro de `front/build`.
```console
~/challengeMeetups/front$ npm run build
```
Luego, para que no interfiera con las rutas de los estáticos, hace falta eliminar el archivo en `/front/build/index.html` para que la app sirva los archivos de `build.html`.

<br>




## Contributors

[Rodrigo Ruiz Gerez](https://github.com/ruge23) 

*Ssr Full Stack Developer*