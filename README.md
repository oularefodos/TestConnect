# coding_test
# coding_test

## features

### Signup endpoit -> POST -- localhost:PORT/api/users 
body : email, password minimun (1 lowercase, 1 uppercase, 1 number, 1 special character, 8 characters)

### Login endpoint -> POST -- localhost:PORT/api/auth
body : email, password

### Make a Post -> POST -- localhost:PORT/api/posts
headers : auth_token (Authaurization)
body : title, content, location

### Get posts -> GET -- localhost:PORT/api/posts
headers : auth_token (Authaurization)

### Comment a Post -> Post localhost:PORT/api/comments
headers : auth_token (Authaurization)
body : content, postId

### Get comment by id -> Get localhost:PORT/api/comments
headers : auth_token (Authaurization)
body : postId


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
