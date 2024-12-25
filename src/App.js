import Home from "./components/Home";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import PetDetail from "./components/PetDetail";
import PetItem from "./components/PetItem";
import PetList from "./components/PetList";
import { QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { useState } from "react";



 const queryClient = new QueryClient()

function App() {
 const [selectedPet, setSelectedPet] =useState()
  return ( 

  <QueryClientProvider  client={queryClient}> {/*client in provider as prop*/}
    <div className="font-mono">
      <Navbar />
      <Home />
      <PetList setSelectedPet = {setSelectedPet} />
      <PetDetail selectedPet ={selectedPet} />
    </div>
    </QueryClientProvider>
  
  );
}

export default App;
