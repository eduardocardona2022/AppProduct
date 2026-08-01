# AGENTS.md

## Project

Single-file HTML app (`InventarioApp/app.html`) for product registration with LocalStorage persistence. No build tools, no server, no dependencies. Open it directly in a browser (file://).

## OpenSpec Workflow

This repo uses OpenSpec (`openspec/`) for change management with schema `spec-driven`.

- Plan changes with `/opsx-propose`, implement with `/opsx-apply`, archive with `/opsx-archive`
- Config at `openspec/config.yaml`
- Archived changes go to `openspec/changes/archive/YYYY-MM-DD-<name>/`

## Conventions

- Spanish language for UI text and user-facing content
- All code (HTML/CSS/JS) lives in one file; no external CSS/JS files
- JavaScript organized by logical sections with comment headers (Utilidades, Storage, Formulario, Reporte, Navegacion)
