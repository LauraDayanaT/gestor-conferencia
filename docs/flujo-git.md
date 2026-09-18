# Flujo de trabajo con Git


## 🌳 Ramas del proyecto

| Rama | Propósito | Quién sube |
|---|---|---|
| `main` | Versión estable, solo releases | Nadie directo |
| `develop` | Integración del equipo | Nadie directo |
| `feature/usuarios` | Módulo Usuarios | Geraldin, Daniel |
| `feature/articulos` | Módulo Artículos y Versiones | Daniel Eduardo, Deisy |
| `feature/agenda` | Módulo Agenda y Dashboards | Enrique, Manuel |
| `docs/sprint-0` | Documentación | Laura |

## 🔄 Ciclo de trabajo diario

1. Actualizar develop:
   git checkout develop
   git pull origin develop

2. Cambiar a mi rama y traer cambios:
git checkout rama/mi-cambio
git merge develop

3. Hacer cambios, commit y push:
git add .
git commit -m "cambio(mi-cambio):funcion del cambio"
git push origin rama/mi-cambio

4. Abrir Pull Request en GitHub hacia `develop`

## 📝 Formato de commits (Conventional Commits)


Tipos:
- `feat` → nueva funcionalidad
- `fix` → corrección de bug
- `docs` → documentación
- `style` → formato, sin cambiar lógica
- `refactor` → reorganizar código
- `test` → añadir o modificar tests
- `chore` → tareas de mantenimiento

Ejemplos:
- `feat(usuarios): agregar login con CAPTCHA`
- `fix(articulos): corregir filtro por línea temática`
- `docs(bpmn): agregar diagrama de versiones`

## 🔀 Reglas de Pull Request

- Todo cambio va por PR (no push directo a `main` ni `develop`)
- Cada PR necesita 1 aprobación mínimo
- El PR debe describir qué hace y a qué módulo afecta
- Resolver conflictos antes de pedir revisión
- Al aprobar, hacer **squash and merge**

## ⛔ Prohibido

- Subir directo a `main` o `develop`
- Subir archivos `.env`, `node_modules/`, `venv/`
- Hacer `push --force` sobre ramas compartidas

## 🆘 Si me trabo

1. Avisar al equipo en el chat
2. No hacer cambios raros para "arreglar"
3. Pedir ayuda al equipo
