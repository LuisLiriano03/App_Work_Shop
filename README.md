# Sistema de Gestión de Proyectos en Angular 14.2.0

Este proyecto es un Sistema de Gestión de Proyectos desarrollado en Angular 14.2.0 con roles de administrador y usuario. El administrador puede asignar proyectos, gestionar usuarios y proyectos asignados, además de agregar, editar y eliminar usuarios. Los usuarios tienen acceso a la lista de proyectos asignados por el administrador.

**Características Principales**

1. **Roles de Usuario:**

	- **Administrador:** Accede a funciones de asignación de proyectos, gestión de usuarios y proyectos asignados. Puede agregar, editar, eliminar usuarios y proyectos.
	
	- **Usuario: ** Accede a la lista de proyectos asignados por el administrador, visualizando únicamente los proyectos asignados personalmente.

2. **Asignación de Proyectos:**

	- El administrador puede asignar proyectos a usuarios específicos.
	
	- Se proporciona una interfaz para agregar una descripción del proyecto y seleccionar el usuario al que se desea asignar.

3. **Gestión de Usuarios:**

	- El administrador puede agregar, editar y eliminar usuarios, controlando el acceso al sistema.

4. **Lista de Proyectos Asignados:**

	- Los usuarios tienen acceso a una lista de proyectos asignados, mostrando únicamente los proyectos asignados por el administrador.

**Entorno de desarrollo**

- Visual Studio Code 2022

**Versión de la aplicación**

- Angular CLI: 14.2.0
- Node: 16.15.0
- Package Manager: npm 8.5.5

**Tecnologías Utilizadas**

- Angular
- TypeScript
- HTML
- CSS (Bootstrap)

**Configuración del Proyecto**

**Instalación**

1. **Descargar e instalar versiones necesarias:**
	-  [Node.js v16.15.](http://https://nodejs.org/en/blog/release/v16.15.0 "Node.js v16.15.")

![Anotación 2024-01-26 165430](https://github.com/LuisLiriano03/App_Work_Shop/assets/89108238/27bfbc7c-52ff-40db-b40a-feba1343a112)


	- Actualizar npm: npm i -g npm@8.5.5
 
	- Instalar Angular CLI v14.2.0: npm i @angular/cli@14.2.0

2. **Clonar el repositorio:**
	- git clone https://github.com/LuisLiriano03/App_Work_Shop.git

3. **Instalar dependencias:**
	- cd App_Work_Shop
	- npm install

**Configuración Adicional**

1. **Descargar paquetes adicionales utilizados en la aplicación:**
	- ng add @angular/material@14.2.7
	
		- Would you like to preceed? (Y/n) Y.
		
		- Choose a prebuilt theme name, or "custom" for a custom theme: "Indigo/Pink".
		
		- Set up global Angular Material typography styles? (y/N) y.
		
		- Include the Angular animations module? "Incluide and enable animations".
		
	- npm install sweetalert2@11.6.16
	
	- npm install moment@2.29.4 --save
	
	- npm i @angular/material-moment-adapter@14.2.7
	
	- npm install chart.js@3.9.1

**Iniciar la Aplicación**

- Ejecutar el siguiente comando para iniciar la aplicación:

	- ng serve --open

Esto abrirá la aplicación en el navegador predeterminado. ¡Listo para gestionar proyectos!

**Nota:** Asegurarse de tener todas las dependencias y configuraciones antes de iniciar la aplicación.**

# 
**Imagenes de la app**

Login

![0](https://github.com/LuisLiriano03/App_Work_Shop/assets/89108238/5c7cde81-3dbe-4d11-8383-d4805db28639)

Validaciones por si el usuario no ingresa su correo o clave, hasta que no lo haga y sean datos correctos  y existente no se avilitara el boton de ingresar.


![1](https://github.com/LuisLiriano03/App_Work_Shop/assets/89108238/05cad42e-d174-49b4-9c2b-b99a09df0d05)

Aqui vemos si ingresa unas credenciales que no existen aunque ingrese su correo y clave.

![2 0](https://github.com/LuisLiriano03/App_Work_Shop/assets/89108238/298da804-c4e1-4317-9af4-ce0c256bbec6)

Administrador en su seccion. 

![2](https://github.com/LuisLiriano03/App_Work_Shop/assets/89108238/05236a9b-981b-4c7e-b60a-888adf10a3ff)

Paginacion usuario

![3](https://github.com/LuisLiriano03/App_Work_Shop/assets/89108238/7fe2fe97-9886-4aea-9979-5b31c630f017)

Agregar usuario, editarlo y eliminarlo, haicendo uso de validaciones si deja un campo vacio.
- Si el Administrador va a eliminar un proyectos cual tiene un usuario asignado no podra borrar porque tiene un proyecto asignado, debera primero desvincular ese usuario de todos los proyectos que esta asignado como eliminar los proyectos o cambiar de usuario para delegarle esos proyectos.

![4](https://github.com/LuisLiriano03/App_Work_Shop/assets/89108238/34c6bf90-9c49-4482-a260-a64713a159bf)

![5](https://github.com/LuisLiriano03/App_Work_Shop/assets/89108238/8d0d5154-c979-4b2a-9296-c1d170056a31)

![6](https://github.com/LuisLiriano03/App_Work_Shop/assets/89108238/18194117-f29a-4322-ba57-9afe2d3e4063)

![7](https://github.com/LuisLiriano03/App_Work_Shop/assets/89108238/02a9a2b2-9612-438e-8207-9c9091732251)

![8](https://github.com/LuisLiriano03/App_Work_Shop/assets/89108238/9377585e-74bc-456f-8605-c2b0f8c66eb5)

![9](https://github.com/LuisLiriano03/App_Work_Shop/assets/89108238/1abd2a81-4b40-4b1c-b2dd-31dd77acd984)

Paginacion asignar proyectos a usuarios.

![10](https://github.com/LuisLiriano03/App_Work_Shop/assets/89108238/18452009-e2e7-49e0-99d7-051cfa8ab320)

Agregar usuario, editarlo y eliminarlo, haciendo uso de validaciones si deja descripcion vacio.

![11](https://github.com/LuisLiriano03/App_Work_Shop/assets/89108238/5bbc5621-96f0-4c0f-b165-894ef282d59a)

![12](https://github.com/LuisLiriano03/App_Work_Shop/assets/89108238/76dbb0c7-a784-43ee-99f6-269e9414914c)

![13](https://github.com/LuisLiriano03/App_Work_Shop/assets/89108238/3da1ac52-e8ec-4855-9611-7ffa7c4e5f6b)

Paginacion proyectos asignados a usuarios.

- El administrador no tiene proyectos asignados.

![14](https://github.com/LuisLiriano03/App_Work_Shop/assets/89108238/57c319a8-55cb-4aa8-a008-c1f473f7cffb)

Paginacion proyectos asignados, ahora los usuarios cuando ingresen a su cuenta veran sus proyectos asignados por el administrador.

Veremos usuarios tanto como Carlos, Karen y Luisa tienen proyectos asignados. 

![15](https://github.com/LuisLiriano03/App_Work_Shop/assets/89108238/77ca1fba-ca44-475a-a006-83a8f665abb3)

![16](https://github.com/LuisLiriano03/App_Work_Shop/assets/89108238/e2e3e9f7-11b1-48aa-8074-31aa97d51c59)

![17](https://github.com/LuisLiriano03/App_Work_Shop/assets/89108238/f0157d4e-6cf4-4dc6-9052-c50e4b397442)




























