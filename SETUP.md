# Setting Up Hellodeck

## Quick Start
```bash
# Clone the repository
git clone [repository-url]
cd hellodeck

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env.local

# Initialize database
npx prisma generate
npx prisma migrate dev

# Start development server
pnpm dev
```

## Detailed Setup Steps

### 1. Prerequisites
- Node.js 18+ installed
- pnpm or npm installed
- Git installed
- A GitHub account (for OAuth)
- A NEAR wallet (for Calimero integration)

### 2. Environment Variables
Create a `.env.local` file with these variables:
```env
# Database
DATABASE_URL="file:./dev.db"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-here"

# GitHub OAuth
GITHUB_ID="your-github-oauth-app-id"
GITHUB_SECRET="your-github-oauth-app-secret"

# Encryption (32 bytes hex for key, 16 bytes for IV)
ENCRYPTION_KEY="32-bytes-encryption-key-here-32-by"
ENCRYPTION_IV="16-bytes-iv-here!"

# Calimero
NEXT_PUBLIC_CALIMERO_SHARD_ID="your-shard-id"
NEXT_PUBLIC_WALLET_ENDPOINT_URL="https://wallet.calimero.network"
NEXT_PUBLIC_CALIMERO_ENDPOINT_URL="https://api.calimero.network"
NEXT_PUBLIC_CALIMERO_TOKEN="your-token-here"
```

### 3. Database Setup
The project uses Prisma with SQLite by default:
```bash
# Generate Prisma client
npx prisma generate

# Create database and run migrations
npx prisma migrate dev

# (Optional) View database with Prisma Studio
npx prisma studio
```

### 4. Running the Project
```bash
# Development mode
pnpm dev

# Production build
pnpm build
pnpm start
```

## Troubleshooting Common Issues

### Prisma Issues
1. "Database file not found":
   ```bash
   npx prisma migrate reset
   ```

2. "Prisma Client not generated":
   ```bash
   npx prisma generate
   ```

### NextAuth Issues
1. "NEXTAUTH_SECRET must be provided":
   - Ensure `.env.local` has NEXTAUTH_SECRET set
   - Generate a random secret: `openssl rand -base64 32`

2. "GitHub OAuth errors":
   - Verify GitHub OAuth app settings
   - Ensure callback URL matches your NEXTAUTH_URL

### Calimero Integration Issues
1. "Calimero SDK initialization failed":
   - Check NEAR wallet connection
   - Verify Calimero credentials in .env.local
   - Ensure valid shard access

2. "Invalid token":
   - Generate new Calimero token
   - Check token expiration

### Build Issues
1. "TypeScript errors":
   ```bash
   # Clean install dependencies
   rm -rf node_modules
   rm -rf .next
   pnpm install
   ```

2. "Port already in use":
   ```bash
   # Kill process using port 3000
   lsof -i :3000
   kill -9 <PID>
   ```

## Development Tips
- Use `npx prisma studio` to inspect/modify database
- Check `http://localhost:3000/api/auth/signin` for auth testing
- Monitor `.next/server/pages/api` for API routes
- Test messages in incognito for multi-user simulation

## Additional Resources
- [Prisma Docs](https://www.prisma.io/docs/)
- [NextAuth.js Docs](https://next-auth.js.org/)
- [Calimero SDK Docs](https://docs.calimero.network/)
- [Next.js Docs](https://nextjs.org/docs)
