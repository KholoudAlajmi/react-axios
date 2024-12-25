import instance from "./index"; 

async function getAllPets(){
    const response = await instance.get("https://pets-react-query-backend.eapi.joincoded.com/pets"); //we can just write URL /pets before it all from URL in the index.js for AXIOS code
    return response;
}

async function getPetById(id){
    const response = await instance.get(`https://pets-react-query-backend.eapi.joincoded.com/pets/${id}`); //back tik `` because of id we need it to be blue
    return response;
}

async function addPet(data){
    const response = await instance.post("https://pets-react-query-backend.eapi.joincoded.com/pets", data);
    return response;
}

async function deletePet(id){
    const response = await instance.delete(`https://pets-react-query-backend.eapi.joincoded.com/pets/${id}`);
    return response;
}

export {getAllPets,getPetById,addPet,deletePet  }