import React, { useState } from "react";
import PetItem from "./PetItem";
import { addPet, getAllPets } from "../API/pets";
import Modal from "./Modal";
import {  useMutation, useQuery } from "@tanstack/react-query";




const PetList = ({setSelectedPet}) => {
  const [query, setQuery] = useState(""); //mostly for navbar
  const [showModal, setShowModal] = useState(false);
  
  const{data,isFetching, isSuccess, refetch}=useQuery({
    queryKey:["pets"],
    queryFn:getAllPets,
    enabled:false, //if the screen open don't work immediately
  });

const mutation = useMutation({
  mutationFn: (newPetData) => addPet(newPetData)
})



//I want the data come from  the functions i did in pets.js
  const petList = data
  //before . we put ? to tell the filter filtering after the queryFn work and get all the data. Make sure not null to make filtring
  ?.filter((pet) => pet.name.toLowerCase().includes(query.toLowerCase()))
  .map((pet) => <PetItem pet={pet} key={pet.id} setSelectedPet={setSelectedPet}/>);
  
  
  return (
    <>
      <div className="bg-[#F9E3BE] flex flex-col justify-center items-center ">
        <div className="w-[76vw] flex h-[30px] mb-[30px] mt-[30px]">
          <input
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            placeholder="Search"
            className="w-[70%] flex justify-start items-center border border-black rounded-md"
          />
          <button
            className="ml-auto w-[25%] px-3 py-2 rounded-md text-sm md:text-xl border border-black  flex justify-center items-center bg-green-400 hover:bg-green-600"
            onClick={() => {
              setShowModal(true);
            }}
          >
            Add pet
          </button>
          <button onClick={refetch}
            className="ml-auto w-[25%] px-3 py-2 rounded-md text-sm md:text-xl border border-black  flex justify-center items-center bg-green-400 hover:bg-green-600">
            Fetch All Pets</button>
        </div>
        <div className=" flex flex-col flex-wrap md:flex-row gap-[20px] w-[76vw]  justify-center items-center mb-[50px]">
          {petList}
        </div>
      </div>
      <Modal show={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default PetList;
