# Test Connect
  TestConnect is a cutting-edge social networking platform showcasing proficiency in unit testing. Incorporates robust unit testing practices to ensure reliability and stability of features.
## Features

### Signup Endpoint

- **Method:** POST
- **URL:** `localhost:PORT/api/users`
- **Body:**
  - `email`
  - `password` (Minimum requirements: 1 lowercase, 1 uppercase, 1 number, 1 special character, 8 characters)

### Login Endpoint

- **Method:** POST
- **URL:** `localhost:PORT/api/users/auth`
- **Body:**
  - `email`
  - `password`

### Create a Post

- **Method:** POST
- **URL:** `localhost:PORT/api/posts`
- **Headers:**
  - `auth_token` (Authorization)
- **Body:**
  - `title`
  - `content`
  - `location`

### Get Posts

- **Method:** GET
- **URL:** `localhost:PORT/api/posts`
- **Headers:**
  - `auth_token` (Authorization)

### Comment on a Post

- **Method:** POST
- **URL:** `localhost:PORT/api/comments`
- **Headers:**
  - `auth_token` (Authorization)
- **Body:**
  - `content`
  - `postId`

### Get Comment by ID

- **Method:** GET
- **URL:** `localhost:PORT/api/comments`
- **Headers:**
  - `auth_token` (Authorization)
- **Body:**
  - `postId`

## Get Started 

```
    git clone git@github.com:oularefodos/coding_test.git
```

```
    cd server
```

```
    npm install
```
### create a file in main route named .env and add 

```
    PORT=YOUR_PORT
    DATABASE_URL="file:./data.db"
    JWT_SECRET=YOUR_SECRET
```

### Migration 

```
npx prisma migrate dev --name "dev"
npx prisma migrate dev
```

### Run the following command to get started

```
    npm run dev
```

