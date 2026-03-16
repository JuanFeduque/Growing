🚀 Express + TypeScript Authentication API

Backend básico construido con Express y TypeScript que simula rutas de autenticación.

📦 Requisitos

Antes de ejecutar el proyecto debes tener instalado:

Node.js (recomendado versión 18 o superior)

npm

Puedes verificarlo con:

node -v
npm -v
📥 Clonar el repositorio
git clone https://github.com/TU-USUARIO/TU-REPO.git

Entrar al proyecto:

cd TU-REPO
📦 Instalar dependencias
npm install
▶️ Ejecutar el proyecto en modo desarrollo
npm run dev

El servidor iniciará en:

http://localhost:3000
🧪 Probar endpoints
🔐 Login

POST

http://localhost:3000/api/auth/login

Body JSON:

{
  "email": "user@example.com",
  "password": "password"
}
📝 Register

POST

http://localhost:3000/api/auth/register

Body JSON:

{
  "email": "test@test.com",
  "password": "123456"
}
🏗️ Build para producción

Compilar TypeScript a JavaScript:

npm run build

Ejecutar versión compilada:

npm start
📁 Estructura del proyecto
src/
 ├── index.ts
 ├── server.ts
 ├── router.ts

dist/

index.ts → Punto de entrada del servidor

server.ts → Configuración de Express

router.ts → Rutas de autenticación

👨‍💻 Autor

Proyecto desarrollado como ejercicio backend con Express y TypeScript.
