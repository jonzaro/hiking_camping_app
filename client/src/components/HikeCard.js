import React, {useState, useEffect} from "react"
import AddHikeForm from "./AddHikeForm"

export default function HikeCard({props}) {
    const {
        hikeName, 
        distance, 
        zipcode, 
        state, 
        elevationGain, 
        difficulty, 
        notes, 
        _id, 
        editHike, 
        deleteHike, 
        hike
    } = props
    const [editHikingToggle, setEditHikingToggle] =useState(false)


    useEffect(()=> { 
        setEditHikingToggle(false)
    }, [hikeName, distance, zipcode, state, elevationGain, difficulty, notes])

    return(
        <>
            <div className="card-wrapper" key={_id}>
                <div className="card-container">
                    <>
                        <h1>Name: {hikeName}</h1>
                        <h2>Distance: {distance}</h2>
                        <h3>State: {state} </h3>
                        <h3>Zipcode: {zipcode}</h3>                
                        <h4>Elevation Gain: {elevationGain}</h4>
                        <h4>Difficulty: {difficulty}</h4>
                        <p className="notes">Notes: {notes}</p>
                    </> 
                    { editHikingToggle ?
                    <>
                        <AddHikeForm
                            key={_id}
                            hikeName={hikeName}
                            distance={distance}
                            state={state}
                            elevationGain={elevationGain}
                            difficulty={difficulty}
                            notes={notes}
                            _id={_id}
                            btnText="Submit Edit"
                            submit={editHike}
                        />
                        <button
                            onClick={() => setEditHikingToggle(prevToggle => !prevToggle)}>
                                Close
                            </button>
                    </> : null
                    }
                </div>
                <button
                    className="delete-button"
                    onClick={() => deleteHike(_id)}>
                        Delete
                </button>
                <button
                    className="edit-button"
                    onClick={() => setEditHikingToggle(prevToggle => !prevToggle)}>
                        Edit
                </button>
            </div>

        </>       
    )
}