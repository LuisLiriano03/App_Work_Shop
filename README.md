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
	
		- Responder "Y" para proceder.
		
		- Elegir el tema preconstruido "Indigo/Pink".
		
		- Responder "Y" para configurar estilos globales de tipografía de Angular Material.
		
		- Elegir la opción para incluir y habilitar animaciones.
		
	- npm install sweetalert2@11.6.16
	
	- npm install moment@2.29.4 --save
	
	- npm i @angular/material-moment-adapter@14.2.7
	
	- npm install chart.js@3.9.1

**Iniciar la Aplicación**

- Ejecutar el siguiente comando para iniciar la aplicación:

	- ng serve --open

Esto abrirá la aplicación en el navegador predeterminado. ¡Listo para gestionar proyectos!

**Nota:** Asegurarse de tener todas las dependencias y configuraciones antes de iniciar la aplicación.**


