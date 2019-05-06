# Fullstack Landscape Services Web App

## Vision (Why am I building this?)

I am building this to strengthen my knowledge of:

- Databases (using sqlite3, knex, express)
- Serverside routing
- React and Redux
- Auth (JWT)
- API's
- Testing: Jest and Enzyme
- Form to messaging notification service

## Goals (Personal)

- I want to produce a functional full-stack app, utilising the concepts as listed above.

## User Stories (Users)

1. As a user I want to see a clear landing page with a company name, a navbar with links to services, previous projects, contact info, and a logo.
2. Users should be able to click on the links and be taken to each page, previous projects will access the database and display for each project; an image, description and location.
3. The contact link should be clearly visible: this will have the company information and a form to submit to request a quote.
4. As a user I would like to enter my information (name, location, enquiry) in to a form and have it submit to text notification (Use Nexmo or Amazon SNS)
5. As admin I would like to be able to login, and be able to add information to the projects, delete or edit where necessary.

## Todos

- [x] Write the ReadMe
- [x] Setup Database migrations
- [ ] Setup Database routes
- [ ] Setup Database functions
- [ ] Setup internal API
- [ ] Setup Hashrouter
- [ ] Setup components
- [ ] Create reducers and actions
- [ ] test!

```
yarn
yarn dev/start


yarn knex migrate:latest
yarn knex seed:run

```
