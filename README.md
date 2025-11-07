# 🧭 IMR Sick Leave Prototype


---

---

## 🚀 Hur man kör applikationen

1. **Klona repot**
   ```bash
   git clone https://github.com/LoweKTH/TestCase.git
   cd TestCase


2. **Bygg och starta alla containers**
    I terminalen:
    docker compose up --build


3. **Öppna i webbläsaren**
Frontend: http://localhost:5173
Backend API: http://localhost:4000/api/reports (räcker att köra frontend i webläsaren såklart)



🧩 Struktur och tankar:

Projektet är uppdelat i frontend och backend, med tydlig separation mellan lager:
**Backend:** Express-API med routes, controllers, services och repository-lager, där flödet går controller -> service -> repository -> db
Fokus ligger på enkelhet och skalbarhet – SQL-frågor skrivs manuellt men kan senare ersättas av en ORM som Prisma om det skulle underlätta i större skala.
**Frontend:** React-app uppdelad i “feature-folders”, där logik, komponenter och API-anrop för en viss funktion (t.ex. sjukanmälan) ligger samlat.


💭 Resonemang

**Hur har du tänkt kring strukturen i lösningen?**
Strukturen är vald för att spegla hur ett skalbart fullstack-projekt skulle kunna byggas i praktiken. Backend är uppdelad i tydliga lager (controller, service, repository), medan frontend följer en feature-baserad struktur som enkelt kan byggas ut med fler vyer.

**Vad hade du gjort annorlunda med mer tid?**
Jag hade lagt till autentisering och fler attribut för sjukanmälningar, samt eventuellt visualisering för HR-användare.
Backendens SQL-lager hade kunnat ersättas med en ORM (t.ex. Prisma) för enklare modellhantering.

**Hur skulle du kunna identifiera mönster i sjukfrånvaro?**
Genom att lagra fler attribut (t.ex. avdelning, längd på frånvaro, anställds-ID) och analysera datan med SQL-aggregeringar eller BI-verktyg (Power BI, Metabase).
På sikt kanske även AI kan användas för att hitta trender eller förutse risk för långtidssjukskrivning.

**Tankar kring integritet och dataskydd:**
Eftersom sjukfrånvaro är känsliga uppgifter bör man lagra minimalt med data (eller snarare det som krävs för ändamålet), införa åtkomstkontroller, kryptering och tydlig transparens mot användaren.