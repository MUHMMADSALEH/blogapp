**Blog Application**

*Description:* This is a full stack blog application.

**Step to Setup locally:**


1. Step 1 : clone the repo
    
**Step to Setup Backend:**
1. Step 2 : Run cd backend
1. Step 3 : Run this command ```npm install```
1. Step 4 : Create a ```.env``` file.
1. Step 5 : Add mongodb database url in  ```.env``` ```DATABASE_URL=```
1. Step 6 : Run this command to start the server ```npm start```

**Step to Setup Frontend:**
1. Step 2 : Run cd frontend
1. Step 3 : Run this command ```npm install```
1. Step 4 : Run this command to start the server ```npm run dev```

***Important***
1. To use the endpoints you first need to signup and then signin with username and password because i have implemented JWT for security.
 
**Auth endpoints**

api/auth/signup

api/auth/signin

**Blog endpoints**

api/blog : Add a blog

api/blog : Get all blog

api/blog/id : Get a perticular blog

api/blog/id  : Update a perticular blog

api/blog/id  : Delete a blog


