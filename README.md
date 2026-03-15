# Deno + Vue 3 Full Stack Project

## Requirements
- Deno v2.7.5
- No Node.js required

## Structure
- `backend/` — Deno HTTP server (serves frontend and API)
- `frontend/` — Vue 3 SPA (built with Vite, all TypeScript)
- `justfile` — All commands for dev/build/deploy

## Usage

### Development
- Start backend: `just backend`
- Start frontend dev server: `just frontend`

### Build
- Build frontend: `just build-frontend`
- Backend does not require build

### Deploy
- Deploy to Deno Deploy: `just deploy`

## Formatting & Linting
- Format: `just fmt`
- Lint: `just lint`

---

- All dependencies are loaded via URL imports (Deno/ESM.sh)
- No Node.js or npm required
- Ready for Deno Deploy
