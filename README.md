# Hellodeck

### Short Description
Hellodeck is an end-to-end encrypted messaging and communication platform leveraging Cairo/Calimero SDK for peer-to-peer, self-sovereign data ownership and verified off-chain computing.

---

## Table of Contents
1. [Overview](#overview)  
2. [Key Features](#key-features)  
3. [Tech Stack](#tech-stack)  
4. [Getting Started](#getting-started)  
5. [Project Structure](#project-structure)  
6. [Short & Long Descriptions](#short--long-descriptions)  
7. [Next Steps & Roadmap](#next-steps--roadmap)  

---

## Overview
Hellodeck serves as a proof-of-concept for building decentralized, secure chat solutions. It demonstrates private text messages, user authentication, and modular expansions for future enhancements.

---

## Key Features
- Secure Messaging: AES-based encryption or Calimero SDK for E2E encryption.  
- Peer-to-Peer Data Ownership: Calimero’s framework ensures self-sovereign user data.  
- Flexible Authentication: next-auth integration with credentials or GitHub sign-in.  
- Group & Direct Chat: Seamlessly switch between private user chats and group channels.  
- Mobile-Responsive UI: SideBar toggles for compact screen support.  

---

## Tech Stack
- **Next.js & React**: Front-end and serverless API routes.  
- **NextAuth**: Simple credential and OAuth flows.  
- **Calimero SDK**: P2P encryption and verified off-chain computing.  
- **Prisma & SQLite**: Database ORM and local storage (or upgrade to Postgres).  
- **Tailwind CSS**: Flexible styling, glass morphism, animations.  

---

## Getting Started

1. **Clone the Repo**  
   ```bash
   git clone https://github.com/username/hellodeck.git
   cd hellodeck
   ```

2. **Install Dependencies**  
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**  
   Create a .env.local file in the root folder:  
   ```ini
   ENCRYPTION_KEY=01234567890123456789012345678901
   ENCRYPTION_IV=0123456789012345
   DATABASE_URL=file:./dev.db
   GITHUB_ID=your_github_client_id
   GITHUB_SECRET=your_github_client_secret

   # Calimero
   NEXT_PUBLIC_CALIMERO_NODE_URL=https://example-calimero-node.com
   NEXT_PUBLIC_CALIMERO_NETWORK_ID=calimero-testnet
   ```
   Adjust to your own secrets and keys.

4. **Database Setup**  
   ```bash
   npx prisma migrate dev
   ```
   This applies Prisma migrations, creating or updating your SQLite database.

5. **Run the Dev Server**  
   ```bash
   npm run dev
   ```
   Then visit http://localhost:3000 in your browser.

---

## Project Structure
Below is a simplified outline of main directories. Some folders and files are omitted for brevity:

```
hellodeck/
├─ src/
│  ├─ app/
│  │  ├─ api/
│  │  │  ├─ messages/
│  │  │  ├─ servers/
│  │  ├─ chat/[id]/
│  │  ├─ auth/
│  │  ├─ layout.tsx
│  │  └─ RootLayoutClient.tsx
│  ├─ components/
│  │  └─ SideBar.tsx
│  ├─ lib/
│  │  ├─ encryption.ts
│  │  └─ prisma.ts
│  └─ prisma/
│     └─ schema.prisma
├─ README.md
└─ package.json
```

---

## Short & Long Descriptions

**Short Description**:  
Hellodeck is an application for secure, end-to-end encrypted chat, with flexible authentication and peer-to-peer data integrity backed by Cairo/Calimero technology.

**Long Description**:  
The Hellodeck project showcases a robust foundation for messaging solutions in decentralized environments. By integrating Next.js, NextAuth, and the Calimero SDK, it explores how real-time communication, user autonomy, and cryptographic verifiability can coexist. Users can sign in with traditional credentials or GitHub, exchange encrypted messages in private or group chats, and confidently trust that their data remains in their own hands. The architecture is modular, encouraging further enhancements like media attachments, voice notes, or advanced cryptographic key management.

---

## Next Steps & Roadmap
1. **Advanced Calimero Integration**  
   - Replace local encryption with full Calimero peer-to-peer logic.  
   - Implement contract-based user identity or wallet connect for authentication.  
2. **Scaling**  
   - Move from SQLite to a production database like PostgreSQL.  
3. **UI Enhancements**  
   - Real-time messages (e.g., websockets).  
   - More polished design, emojis, file sharing, etc.  
4. **Testing & CI**  
   - Add integration tests with Jest, ESLint, and CI pipeline.  

---

**Enjoy building with Hellodeck!**  

For questions or contributions, open an issue or submit a pull request.
