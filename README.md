## IronBCN - NUWE - SCL

Built with ```ReactJS & NextJS```, styled with ```styled-components```, tested with ```Jest & React Testing Library``` and deployed in ```Vercel```.

## How it looks

🔗 [Live Demo]()


## 1- Download

```sh
git clone https://github.com/Silinde87/IronBCN-Nuwe-SCL.git

cd IronBCN-Nuwe-SCL

```

## 2- Usage with CLI
```sh
npm run build
npm run start 
```
- [Open localhost:3000/](http://localhost:3000/)

## 3- Testing
```sh
npm run test
```

## Project Structure
    .
    ├── components              # React Component and component styles
    │   ├── atoms
    │   └── molecules
    ├── pages                   # NextJS Pages and API
    │   ├── api
    │   │   ├── auth
    │   │   ├── events
    │   │   └── newsletters
    │   ├── auth
    │   │   ├── [id].js    
    │   │   ├── login.js
    │   │   └── signup.js
    │   ├── events
    │   │   ├── [id].js    
    │   │   └── index.js
    │   ├── newsletters
    │   │   ├── [id].js    
    │   │   └── index.js    
    │   ├── admin.js
    │   ├── _app.js
    │   ├── _document.js
    │   └── index.js
    ├── context                 # Context API
    │   └── auth.context.js
    ├── models                  # DB Model
    │   ├── User.js
    │   ├── Event.js
    │   └── Newsletter.js    
    ├── services                # Service that connects to the endpoint
    │   ├── user.service.js
    │   ├── event.service.js
    │   └── newsletter.service.js
    ├── public                  # Assets
    ├── styles                  # Global and pages styles
    ├── utils                   # Support functions and tools
    ├── package.json    
    └── README.md

## Models

User model

```javascript
{  
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minLength: 6 },
  name: { type: String },
  last_name: { type: Date },
  events: [ String ],
  role: { type: String, enum: ['user', 'admin'], required: true, default: 'user' },
}
```
Event model

```javascript
{  
  target_kilometers: { type: Number, required: true },
  current_kilometers: { type: Number, default: 0 },
  name: { type: String, required: true },
  Description: { type: String },
  start_date: { type: Date, required: true },
  end_date: { type: Date, required: true },
  is_active: { type: Boolean, default: false },
}
```
Newsletter model

```javascript
{  
  title: { type: String, required: true },
  text: { type: String, required: true },
  publish_date: { type: String, default: Date.now() },  
}
```

## Endpoint Table

### Client
Verb | Endpoint | Result
------------ | ------------- | -------------
GET | "/" | Home Page (index.js)
GET | "/admin" | Admin Page (admin.js)
GET | "/auth/login" | Login Page (/auth/login.js)
GET | "/auth/signup" | Signup Page (/auth/signup.js)
GET | "/auth/:id" | Profile Page (/auth/[id].js)
GET | "/events" | Events list Page (/events/index.js)
GET | "/events/:id" | Specific Event Page (/events/[id].js)
GET | "/newsletters" | Newsletters list Page (/newsletters/index.js)
GET | "/newsletters/:id" | Specific newsletter Page (/newsletters/[id].js)

### API
HTTP Method | Endpoint | Req. Body | Description
------------ | ------- | ------ | -------------
POST | "/api/auth/signup" | { email, password } | Signup user
POST | "/api/auth/login" | { email, password } | Login user
POST | "/api/auth/logout" | (empty) | Logout user
PUT | "/api/auth/edit/:id" | { email, password, name, last_name, events, role } | Edit user
DELETE | "/api/auth/delete/:id" | (empty) | Delete user
GET | "/api/auth/profile/:id" | | Returns profile user info
GET | "/api/events" | | Returns all events
GET | "/api/events/:id" | | Returns specific event
DELETE | "/api/events/:id" | (empty) |Deletes specific event
PUT | "/api/events/:id/user" | { current_kilometers } | Edits event info (user)
PUT | "/api/events/:id/user" | { target_kilometers, name, description, start_date, end_date, is_active } | Edits event info (admin)
POST | "/api/events/create" | { target_kilometers, name, description, start_date, end_date, is_active } | Creates an event
GET | "/api/newsletters" | | Returns all newsletters
GET | "/api/newsletters/:id" | | Returns specific newsletter
DELETE | "/api/newsletters/:id" | (empty) | Deletes specific newsletter
PUT | "/api/newsletters/:id" | { title, text } | Edits newsletter info (user)
POST | "/api/newsletters/create" | { title, text } | Creates a newsletter

