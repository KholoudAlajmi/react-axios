import React from "react";
import {deletePet, getPetById} from "../API/pets"
import { useMutation, useQuery } from "@tanstack/react-query";


const PetDetail = ({selectedPet}) => {
  const {deta, isFetching, isSuccess, refetch}=useQuery({
    queryKey:["pets", selectedPet],  //we have to change the name of the key for each key i putted 
    queryFn:()=> getPetById(selectedPet),
  });


  // const pet = deta;
  const mutation = useMutation ({
    mutationFn:()=>deletePet(selectedPet),
  })

  const handleDelete = () => mutation.mutate(selectedPet);

  return (
    <div className="bg-[#F9E3BE] w-screen h-[100vh] flex justify-center items-center">
      <div className="border border-black rounded-md w-[70%] h-[70%] overflow-hidden flex flex-col md:flex-row p-5">
        <div className="h-full w-full md:w-[35%]">
          <img
            src={deta?.image} //? before . because when call data will take time so wait don't print if you don't have data wait until come to you
            alt={deta?.name}
            className="object-contain w-full h-full"
          />
        </div>
        <div className="w-full md:w-[65%] h-full pt-[30px] flex flex-col p-3">
          <h1>Name: {deta?.name}</h1>
          <h1>Type: {deta?.type}</h1>
          <h1>adopted: {deta?.adopted}</h1>

          <button className="w-[70px] border border-black rounded-md  hover:bg-green-400 mb-5"  >
            Adobt
          </button>

          <button 
          onClick = {handleDelete}
            className="w-[70px] border border-black rounded-md  hover:bg-red-400" > 
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default PetDetail;
