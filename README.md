# Envoy (Back-end)


## Contents


### Dependencies
 * Node.js (LTS)
 * pnpm
 * Express.js
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

#### Setup local .env file
```bash
# Copy the env.example to .env and setup the environment variables.
cp -v env.example .env
```

**Note**: If you don't have pnpm, refer to the [install guide](https://pnpm.io/installation).


### Run
```bash
pnpm dev
```


### License
This program is provided under the [MIT License](./LICENSE)
