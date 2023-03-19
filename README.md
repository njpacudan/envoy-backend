# Envoy (Back-end)


## Contents
* [Dependencies](#dependencies)
* [Setup](#setup)
	* [Cloning (HTTPS/SSH)](#cloning-httpsssh)
	* [Installing the dependencies](#installing-the-dependencies)
	* [Setup local .env file](#setup-local-env-file)
	* [Setup Prisma](#setup-prisma)
* [Run](#run)
* [Endpoints](#endpoints)
* [License](#license)


### Dependencies
 * Node.js (LTS)
 * pnpm
 * Express.js
 * MongoDB Atlas
 * Prisma
 * Insomnia/Postman (Optional)


### Setup
#### Cloning (HTTPS/SSH)
```bash
# Git clone the repository with HTTPS.
git clone https://github.com/IT3R4/envoy-backend.git

# or with SSH.
git clone git@github.com:IT3R4/envoy-backend.git
```

#### Installing the dependencies
```bash
# Go to the repository's directory and install the dependencies.
cd envoy-backend
pnpm install
```

**Note**: If you don't have pnpm, refer to the [install guide](https://pnpm.io/installation).

#### Setup local .env file
```bash
# Copy the env.example to .env and setup the environment variables.
cp -v env.example .env
```


#### Setup Prisma
```bash
# or if prisma/prisma.schema file is already loaded, force override the file.
npx prisma db pull --force --schema ./src/models/schema.prisma

# Generate Prisma artifacts.
npx prisma generate --schema ./src/models/schema.prisma
```


### Run
```bash
pnpm dev
```


### License
This program is provided under the [MIT License](./LICENSE)
