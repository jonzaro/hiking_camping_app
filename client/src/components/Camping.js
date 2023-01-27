import React, {useState} from "react"
import CampCard from "./CampCard.js"


export default function Camping({props}) {
    const {deleteCamp, editCamp} = props
    
 
    console.log(Object.keys(props), "props - camping")
    const campItems = props.camps?.length ? props.camps.map(camp => {
        return(
            <>
                <CampCard props={{...camp, editCamp, deleteCamp}}/>
            </>
        )
    })
    :
    []
   
    return( 
        <>
            <div className="mainAreaLanding">
            </div>
            <h4>Filter By Bathrooms</h4>
            <select onChange={props.handleCampFilter} className="filter-form">
                <option value="reset">All Campsites</option>
                <option value="true">Bathrooms</option>
                <option value="false">No Bathrooms</option>
                </select>
            <div className="camping">
               
                {campItems}
            </div>
        </>
    )
}
