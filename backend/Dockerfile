FROM node:20-alpine

WORKDIR /app
RUN npm install -g pnpm

# 1. Kopiera manifest först
COPY package.json pnpm-lock.yaml ./

# 2. Kopiera all kod FÖRE install, så vi slipper overlay-skrivning
COPY . .

# 3. Sätt PNPM till klassiskt node_modules-format
RUN pnpm config set node-linker hoisted

# 4. Installera alla dependencies
RUN pnpm install --frozen-lockfile

# 5. Bygg TypeScript
RUN pnpm run build

EXPOSE 4000
CMD ["node", "dist/server.js"]
