import React, { useEffect } from "react";


 export const Thoughts = ({thoughts, removeThought})=>{
     
    return (
        <div className="thoughtContainer">
            {
               thoughts.map(thought => <Thought thought={thought} removeThought={removeThought} key={thought.id}/>) 
            }
        </div>
    );
}
const Thought = ({thought, removeThought})=>{
    const handleRemove = (thoughtId)=>{
        removeThought(thoughtId)
     }
     
    useEffect(()=>{
        const timeRemain = thought.expireAt-Date.now();
        
        const timeout = setTimeout(()=>{
            removeThought(thought.id)
        },timeRemain)
        return ()=>{
            clearTimeout(timeout)
        }
    },[removeThought])
     return (
         <div className="thoght" key={thought.id} >
             <p>{thought.title}</p>
             <span onClick={()=> handleRemove(thought.id)}>X</span>
         </div>
     )
 }