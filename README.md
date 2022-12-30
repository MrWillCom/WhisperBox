# WhisperBox

## Getting Started

### Setup environment

```sh
pnpm install
cp .env.example .env
```

Fill the blanks in `.env` then:

```sh
pnpm migrate
```

### Start development server

```sh
pnpm dev
```

### Build for production

```sh
pnpm build
```

### Start in production environment

Make sure you have built for production.

```sh
pnpm start
```

### Generate Prisma Client

This is not required for the first time after `pnpm install`, but if the schema is modified in the future, you need to run the following manually:

```sh
pnpm generate
```
