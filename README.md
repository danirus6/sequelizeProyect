# SequelizeProyect

## Introducción

Este proyecto de backend tiene como objetivo desarrollar una API REST para una tienda online (e-commerce) utilizando las tecnologías Node.js, Express, y MySQL/Sequelize.

## Tecnologías Utilizadas

- Node.js
- Express
- MVC
- MySQL con Sequelize
- Bcrypt para cifrado de contraseñas
- JSON Web Token (JWT) para autenticación
- Git para control de versiones

## Estructura del Proyecto

El proyecto se organizará en ramas, con al menos dos ramas al final: `main`. Se utilizará Git para el control de versiones, con commits de calidad y mensajes descriptivos para analizar la evolución del proyecto.

## Configuración de la Base de Datos

El esquema de la base de datos debe reflejar las relaciones entre las entidades del sistema (usuarios, productos, categorías, pedidos, etc.).

## Endpoints

### Productos

- CRUD de productos
- Listar productos con categorías
- Buscar producto por ID
- Filtrar productos por nombre
- Filtrar productos por precio
- Ordenar productos de mayor a menor precio
- Validación al crear productos: todos los campos deben completarse
- Operaciones de productos solo disponibles para usuarios autenticados

### Categorías

- CRUD de categorías
- Ver todas las categorías con productos asociados
- Buscar categoría por ID
- Filtrar categorías por nombre

### Pedidos

- Ver pedidos con productos asociados
- Crear pedidos

### Usuarios

- Registro de usuarios utilizando Bcrypt
- Login con Bcrypt y JWT
- Información del usuario conectado con pedidos y productos asociados
- Logout
- Validación al registrar usuario: todos los campos deben completarse

### Seeders

- Crear 5 productos con un seeder

## README del Proyecto

A continuación, se presenta un pequeño tutorial para clonar y ejecutar el proyecto:

1. Clonar el repositorio y instalar el cli de sequelize:

```bash
git clone https://github.com/tu-usuario/tu-proyecto.git
npm install sequelize-cli -g
```

2. Instalar Dependencias:

```powershell
npm install
```

3. Creamos la BBDD, sequelize:

```bash
sequelize db:create
```

4. Migramos los modelos sequelize:

```bash
sequelize db:migrate
```

5. Lanzamos los seeders para tener datos

```bash
sequelize db:seed:all
```

6. Inicializamos localhost

```powershell
npm start
```

7. Utilizamos localhost con postman para probar los endpoints


## Autores
Adrian y Dani
