# Backend challenge

The challenge is to create a crud where there is registration, editing, deletion, customer listing.

## What is inside?

This project uses lot of stuff as:

- [TypeScript](https://www.typescriptlang.org/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [MongoDb](https://www.mongodb.com/)

## Install dependencies

```bash
npm install
# or
yarn install
```

<br/>
<br/>

## ❗❗❗To perform the step below you need docker and docker-compose installed and running on your machine.

<br/>
<br/>

## ⚙️⚙️ run your application using docker

```bash
  docker-compose up -d
```

<br/>

## Api routes

## Add University

```bash
POST: http://localhost:5050/universities
Params: {
  alpha_two_code: string, maxLength: 2
  web_pages: Array<string>
  name: string
  country: string
  domains: Array<string>
  state-province: string
}

```

<br/>
<br/>

## Get Universities

```bash
GET: http://localhost:5050/auniversities?page=1&limit=${your university limit}

```

<br/>
<br/>

## Delete University

```bash
DELETE: http://localhost:5050/universities/${id_university}

```

<br/>
<br/>

## List Single Client

```bash
GET: http://localhost:5050/university/${id_university}

```

<br/>
<br/>

## Update

```bash
PUT: http://localhost:5050/university/${id_university}
Params: {
  alpha_two_code: string, maxLength: 2
  web_pages: Array<string>
  name: string
  country: string
  domains: Array<string>
  state-province: string
}

```
