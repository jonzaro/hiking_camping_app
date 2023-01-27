import React, {useState} from "react"
import HikeCard from "./HikeCard"
import AddHikeForm from "./AddHikeForm"

export default function Hiking({props}) {
    const {deleteHike, editHike}=props


    
    console.log(Object.keys(props), "props - hiking")
        const hikeItems = props.hikes?.length ? props.hikes.map(hike => {
        return(
            <>
                <HikeCard props={{...hike, editHike, deleteHike}}/>
            </>
        )
    }) 
    :
    []
  
    return(
        <>
            <div className="mainAreaLanding">
            </div>

            <h4>Filter By Difficulty:</h4>
            <select onChange ={props.handleHikeFilter} className="filter-form">
                <option value="reset">All Hikes</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
            
            <div className="hiking">
                {hikeItems}
            </div>
        </>
    )
}