# Envoy (Back-end)


## Contents
* [Design Patterns]
* [Dependencies](#dependencies)
* [Setup](#setup)
    * [Cloning (HTTPS/SSH)](#cloning-httpsssh)
    * [Installing the dependencies](#installing-the-dependencies)
    * [Setup local .env file](#setup-local-env-file)
    * [Setup Prisma](#setup-prisma)
* [Run](#run)
* [Endpoints](#endpoints)
* [License](#license)


### Design Patterns
 * Microservices
 * Middleware
 * MVC


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


##### Generate JWT token key
```bash
# Generate a random string of alphanumeric characters.
# Use the generate value as the `TOKEN_KEY` in your `.env` file.
echo -n <STRING> | sha256sum
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


### Endpoints
#### Faculty
| HTTP Request | Endpoint              | Description                  |
|--------------|-----------------------|------------------------------|
| POST         | /users/faculty/signup | Create new faculty user      |
| POST         | /users/faculty/signin | Login existing faculty user |
| GET          | /users/faculty/:email | Get user information         |
| POST         | /users/faculty/reset  | Reset password               |
| POST         | /users/faculty/update | Update faculty user          |

#### Student
| HTTP Request | Endpoint              | Description                  |
|--------------|-----------------------|------------------------------|
| POST         | /users/student/signup | Create new student user      |
| POST         | /users/student/signin | Login existing student user  |
| GET          | /users/student/:email | Get user information         |
| POST         | /users/student/reset  | Reset password               |
| POST         | /users/student/update | Update faculty user          |


#### Announcements
| HTTP Request | Endpoint                 | Description                              |
|--------------|--------------------------|------------------------------------------|
| POST         | /announcements/create    | Create new announcement                  |
| GET          | /announcements/list      | List all announcements                   |
| GET          | /announcements/:college  | List announcements from specific college |



### License
This program is provided under the [MIT License](./LICENSE)
