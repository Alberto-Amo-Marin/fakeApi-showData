# fakeApi-showData

Este proyecto es una aplicación construida con **Angular 14** y **Angular Material** que simula una API para mostrar datos falsos generados aleatoriamente. Los datos se presentan en una tabla interactiva, con soporte de paginación y un botón de recarga.

---

## 📌 Características | Features

- 🚀 **Generación de datos dinámicos** | **Dynamic data generation**  
  Utiliza la librería **Chance.js** para generar datos aleatorios realistas como nombres, direcciones, teléfonos, etc.  
  Uses the **Chance.js** library to generate realistic random data such as names, addresses, phone numbers, etc.

- 📊 **Tabla con paginación** | **Table with pagination**  
  Los datos se presentan en una tabla de Angular Material con soporte para cambiar el tamaño de la página.  
  The data is displayed in an **Angular Material** table with support for changing the page size.

- 🔄 **Botón de recarga** | **Reload button**  
  Un botón flotante en la esquina inferior derecha permite recargar los datos de la tabla.  
  A floating button in the bottom right corner allows you to reload the table data.

- 🎨 **Interfaz limpia y atractiva** | **Clean and modern UI**  
  Utiliza componentes de **Angular Material** para un diseño moderno y minimalista.  
  Uses **Angular Material** components for a sleek and polished design.

---

## 🛠️ Tecnologías | Technologies

- **Angular 14** → Framework para la creación de aplicaciones web.  
  **Angular 14** → Framework for building web applications.

- **Angular Material** → Biblioteca de componentes UI basada en Material Design.  
  **Angular Material** → UI component library based on Material Design.

- **Chance.js** → Librería para generar datos falsos dinámicos.  
  **Chance.js** → Library for dynamically generating fake data.

---

## 🚀 Instalación y ejecución | Installation & Execution

Para ejecutar la aplicación en tu máquina local, sigue estos pasos:  
To run the application on your local machine, follow these steps:

### 1️⃣ Clonar el repositorio | Clone the repository

```bash
git clone https://github.com/Alberto-Amo-Marin/fakeApi-showData.git
```

### 2️⃣ Acceder al directorio del proyecto | Navigate to the project directory
```bash
cd fakeApi-showData
```

###3️⃣ Instalar las dependencias | Install dependencies
```bash
npm install
```

###4️⃣ Iniciar la aplicación | Start the application
```bash
ng serve
```

Después de ejecutar este comando, abre tu navegador y accede a:
After running this command, open your browser and go to:

http://localhost:4200

###5️⃣ Generar una build para producción | Build for production
```bash
ng build --configuration=production
```

Este comando generará los archivos necesarios en la carpeta dist/.
This command will generate the necessary files in the dist/ folder.

###6️⃣ Ejecutar pruebas unitarias | Run unit tests
```bash
ng test
```
