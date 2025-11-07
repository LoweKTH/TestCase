# ---------- Build ----------
FROM node:20-bullseye AS build
WORKDIR /app

# 1. Install pnpm
RUN npm install -g pnpm@9

# 2. Kopiera manifest
COPY package.json pnpm-lock.yaml ./

# 3. Installera alla dependencies inklusive dev
#    (pnpm 9: --dev behövs inte, NODE_ENV=development räcker)
ENV NODE_ENV=development
RUN pnpm config set node-linker hoisted
RUN pnpm install --no-frozen-lockfile

# 4. Kopiera resten av koden
COPY . .

# 5. Bygg projektet
RUN npx tsc -b && npx vite build

# ---------- Runtime ----------
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY --from=build /app/dist ./
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
