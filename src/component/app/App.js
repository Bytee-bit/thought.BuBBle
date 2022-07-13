import React, {useState} from "react";
import { PassingThought } from "../PassingThought";
import { Thoughts } from "../thoughts/Thoughts";

export default function App(){
  const [thoughts, setThoughts] = useState([]);

  const AddThought = (thought)=>{
    console.log(thought.expireAt)
    const title = thought.title;
    if(!title) return;    
    setThoughts(prev => {
      return [thought, ...prev];
    })
  }
  const removeThought = (id)=>{
    setThoughts(thoughts.filter(thought => thought.id !== id));
  }

  return (
    <div className="appContainer">
      <h1>Thoughts... BuBBle💭</h1>
      <PassingThought AddThought = {AddThought}/>
      <Thoughts thoughts={thoughts} removeThought = {removeThought}/>
    </div>
  );
}