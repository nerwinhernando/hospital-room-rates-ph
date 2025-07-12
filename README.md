This is a project I started after my mother's hospitalization last July 10, 2025. My goal is to provide a place where people can find the room rates of a certain hospital.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## ENV

Update the .env.local file with your supabase url and key

NEXT_PUBLIC_SUPABASE_URL=....
NEXT_PUBLIC_SUPABASE_ANON_KEY=....

## Deployment

The application is deployed in Vercel.


## Supabase

With the provided supabasescript.sql file, copy the content in subapase's sql editor to populate the seed data.

To test the database connection, execute:
```
node test-db.js
```

## Notes

Application was bootstrapped using:
```
npx create-next-app@latest hospital-room-rates-ph --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
```
