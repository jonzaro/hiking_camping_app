import React, {useState, useEffect} from "react"
import AddCampForm from "./AddCampForm"

export default function CampCard({props}) {
    const {
        campsite, 
        state, 
        zipcode, 
        bathrooms, 
        cost, 
        size, 
        rating, 
        notes, 
        _id, 
        editCamp, 
        deleteCamp, 
        camp
        } = props
    const [editCampingToggle, setEditCampingToggle] =useState(false)


    useEffect(()=> { 
        setEditCampingToggle(false)
    }, [campsite, state, zipcode, bathrooms, cost, size, rating, notes])

    //small change for github
    return(
        <>
            <div key={_id}>
                <div className="card-container">
                    <>
                        
                        <h1>Name: {campsite}</h1>
                        <h2>State: {state}</h2>
                        <h3>Zipcode: {zipcode}</h3>    
                        <h4>Bathrooms: {bathrooms? "Yes" : "No"}</h4>            
                        <h4>Cost: {cost}</h4>
                        <h4>Size: {size}</h4>
                        <h4>Rating: {rating}</h4>
                        <p className="notes">Notes: {notes}</p>
                    </> 
                    { editCampingToggle ?
                    <>
                        <AddCampForm
                            key={_id}
                            hikeName={campsite}
                            state={state}
                            zipcode={zipcode}
                            bathrooms={bathrooms}
                            cost={cost}
                            size={size}
                            rating={rating}
                            notes={notes}
                            _id={_id}
                            btnText="Submit Edit"
                            submit={editCamp}
                        />
                        <button
                            onClick={() => setEditCampingToggle(prevToggle => !prevToggle)}>
                                Close
                            </button>
                    </> : null
                    }
                </div>
                <button
                    className="delete-button"
                    onClick={() => deleteCamp(_id)}>
                        Delete
                </button>
                <button
                    className="edit-button"
                    onClick={() => setEditCampingToggle(prevToggle => !prevToggle)}>
                        Edit
                </button>
            </div>

        </>       
    )
}