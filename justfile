help:
	just --list

# Start the backend server (Deno)
backend:
	deno run --allow-net --allow-read backend/server.ts

# Start the frontend dev server (Vite)
frontend:
	cd frontend && deno task dev

# Build the frontend for production
build-frontend:
	cd frontend && deno task build

# Build the backend (if needed)
build-backend:
	# No build step needed for Deno backend
	echo "No backend build needed"

# Deploy to Deno Deploy (assumes deployctl is installed)
deploy:
	deployctl deploy --project=deno-codespace --entrypoint=backend/server.ts

# Format all code
fmt:
	deno fmt .

# Lint all code
lint:
	deno lint .
