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

The `.env` file contains the following variables:
* `DATABASE_URL`, this contains MongoDB's connection string.
* `EXPRESS_PORT`, this contains the port that the backend will be running from.
* `API_BASE_URL`, this contains the API's base url.


#### Setup Prisma
```bash
# Initialise Prisma by running the command below. Inside the prisma/ directory, replace 'postgresql' with 'mongodb'.
npx prisma init

# Update the Prisma by pulling the schema from an existing database.
npx prisma db pull

# or if prisma/prisma.schema file is already loaded, force override the file.
npx prisma db pull --force

# Generate Prisma artifacts.
npx prisma generate
```


### Run
```bash
pnpm dev
```


### Endpoints
The API currenlty has the following endpoints:
* Faculty
	* `GET`: `/api/v1/users/faculty/`
	* `GET`: `/api/v1/users/faculty/info`
	* `POST`: `/api/v1/users/faculty/create/`
	* `PATCH`: `/api/v1/users/faculty/disable`
	* `PUT`: `/api/v1/users/faculty/update`

* Users
	* `GET`: `/api/v1/users/student/`
	* `GET`: `/api/v1/users/student/info`
	* `POST`: `/api/v1/users/student/create/`
	* `PATCH`: `/api/v1/users/student/disable`
	* `PUT`: `/api/v1/users/student/update`

* Announcements
	* `GET`: `/api/v1/announcements/`
	* `POST`: `/api/v1/announcements/post/`


### License
This program is provided under the [MIT License](./LICENSE)
