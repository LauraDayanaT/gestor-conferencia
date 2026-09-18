# Convenciones del proyecto

## 🐍 Backend (Python / Django)

### Nombres
- Variables y funciones: `snake_case` → `crear_usuario`, `nombre_completo`
- Clases y modelos: `PascalCase` → `Usuario`, `Articulo`, `VersionArticulo`
- Constantes: `MAYUSCULAS` → `ESTADO_ACEPTADO`, `LINEA_SISTEMAS`
- Archivos: `snake_case` → `usuarios_views.py`, `articulos_models.py`

### Estructura Django
- Cada app en `backend/apps/<nombre>/`
- Modelos en `models.py`
- Serializers en `serializers.py`
- Vistas en `views.py`
- URLs en `urls.py`
- Tests en `tests.py`

### Estilo
- Indentación: 4 espacios
- Longitud máxima de línea: 100 caracteres
- Comillas dobles para strings: `"hola"`
- Docstrings en funciones y clases importantes

## ⚛️ Frontend (React)

### Nombres
- Componentes: `PascalCase` → `LoginForm.jsx`, `UsuarioCard.jsx`
- Funciones y variables: `camelCase` → `handleSubmit`, `nombreUsuario`
- Constantes: `MAYUSCULAS` → `API_URL`, `MAX_INTENTOS`
- Archivos de componentes: `PascalCase.jsx`
- Archivos de hooks: `useAlgo.js`

### Estructura

src/
├── components/ # Componentes reutilizables
├── pages/ # Vistas/páginas
├── services/ # Llamadas a la API
├── hooks/ # Custom hooks
├── utils/ # Funciones auxiliares
└── assets/ # Imágenes, estilos

text

### Estilo
- Indentación: 2 espacios
- Punto y coma al final: sí
- Comillas simples: `'texto'`
- Funciones flecha cuando aplique

## 🔤 Idioma

- Código (variables, funciones, clases): español
- Comentarios: español
- Mensajes de commit: español
- UI (textos que ve el usuario): español

## 📏 Límites

- Función: máximo 50 líneas
- Archivo: máximo 400 líneas
- Si te pasas, divide en partes más pequeñas

## ✅ Antes de hacer PR

- Revisa que tu código siga estas convenciones
- No dejes `console.log` ni `print()` de debug
- No subas archivos `.env`, `node_modules/`, `venv/`
- Verifica que no haya código comentado sin razón

## 🆘 Dudas

Preguntar en el chat del equipo antes de inventar un estilo nuevo.
