# 🐶 Pets Form

In this task, you are going to create a form to add a new pet to the pet's website.

## Setting up Axios

- install Axios using `npm i axios`
- Create a folder called `api` in the `src` directory
- inside this folder create a file called `index.js`
- inside `index.js` import `axios`
- use the bellow table to figure out what the `baseURL`
- Then create an instance using this `axios.create({baseURL: baseURL})`. refer to the docs for [axios](https://axios-http.com/docs/intro)
- export as default your `instance`
  Hint:

```js
import axios from "axios";

const instance = axios.create({
  baseURL: "https://pets-react-query-backen.herokuapp.com",
});

export default instance;
```

## Creating our first API

- create another file in API called `pets.js`
- inside `pets.js` import the instance you just created
- create a function for each endpoint

  - one for getting all the pets
  - one for getting one pet by ID
  - one for adding a new pet
  - one for updating a pet by ID
  - one for deleting a pet by ID

- In `PetList.js` call the API when the button is clicked and remove the petsData `It's no longer needed our data is now coming from the backend.`
- In `PetDetail.js` call the get by id function to get the pet and remove the `petsData` array
- In `PetDetail.js` make the delete button work

## Here are all the APIs

| Title          | Method   | Endpoint                                                         | Data required                      |
| -------------- | -------- | ---------------------------------------------------------------- | ---------------------------------- |
| Fetch all pets | `GET`    | `https://pets-react-query-backend.eapi.joincoded.com/pets`       |                                    |
| Fetch one pet  | `GET`    | `https://pets-react-query-backend.eapi.joincoded.com/pets/${id}` |                                    |
| Create a pet   | `POST`   | `https://pets-react-query-backend.eapi.joincoded.com/pets`       | `name`, `image`, `type`, `adopted` |
| Delete a pet   | `DELETE` | `https://pets-react-query-backend.eapi.joincoded.com/pets/${id}` |                                    |
# react-axios
