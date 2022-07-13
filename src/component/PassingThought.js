import React,{useState} from "react";
import { getExpirationTime, generatedId } from "./utilities";

export const PassingThought = ({AddThought})=>{
    const [inputTerm, setInputTerm] = useState("");


    const handleTermChange = ({target})=>{
        setInputTerm(target.value);
    }
    // id: generatedId(),
    //         title: target.value,
    //         expireAt: getExpirationTime()

    const handleAddThought = (e)=>{
        e.preventDefault();
        AddThought({
            id: generatedId(),
            title: inputTerm,
            expireAt: getExpirationTime()
        });
    }
    return (
        <form className="inputForm">
            <input className="inputThought" 
            type={"text"} 
            placeholder = {"What's in your mind ?"} 
            onChange = {handleTermChange}
            value={inputTerm}
            />
            <button onClick={handleAddThought}>thought</button>
        </form>
    );
}