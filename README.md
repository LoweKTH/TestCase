# IMR Sick Reporting – Prototyp

En enkel end-to-end-prototyp för att registrera och lista sjukanmälningar.

---

## 🧱 Stack

| Del | Teknik |
|-----|---------|
| **Frontend** | React (Vite + TypeScript) |
| **Backend** | Node.js (Express + TypeScript + Zod) |
| **Databas** | PostgreSQL |
| **Container-miljö** | Docker Compose (frontend, backend, db) |

---

## 🚀 Starta projektet (med Docker)

Kräver bara **Docker** installerat.  
Kör i terminalen:
docker compose up --build


Backend-struktur (layered architecture):
src/
 ├─ config/           # laddning av miljövariabler
 ├─ db/               # pool & migrering (skapar tabellen sick_reports)
 ├─ validation/       # Zod-validering av inkommande data
 ├─ repositories/     # SQL-frågor (manuella)
 ├─ services/         # logik mellan controller och repository
 ├─ controllers/      # API-endpoints
 ├─ routes/           # Express-routing
 └─ middleware/       # async- och error-hantering


Frontend-struktur:
src/
 ├─ features/sick_reports/
 │   ├─ components/   # ReportForm
 │   ├─ pages/        # ReportsPage
 │   ├─ api/          # anrop mot backend
 │   └─ utils/        # typer och formattering


🧠 Resonemang
Hur har du tänkt kring strukturen?
-Jag har delat upp backend i tydliga lager (controller, service, repository) för att göra koden lätt att förstå och bygga vidare på.
Frontend är organiserad per domän (“feature-folder”), vilket gör det enkelt att skala upp (skalbarhet har det tjatats mycket om under skolgången! :) ).

Vad hade du gjort annorlunda med mer tid?
-Jag hade lagt till autentisering, mer fälthantering (t.ex. orsak till frånvaro), och kanske använt ett ORM som Prisma istället för manuell SQL.
Och såklart lagt mer tid på en gedigen frontend, där det kanske finns flera olika sidor för användaren.

Hur skulle du kunna identifiera mönster i sjukfrånvaro?
-Genom att lagra fler attribut (t.ex. avdelning, längd på frånvaro, anställds ID) och analysera datan över tid.

Tankar kring integritet och dataskydd
-
