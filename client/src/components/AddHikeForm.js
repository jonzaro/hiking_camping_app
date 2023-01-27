import React, {useState} from 'react'

export default function AddHikeForm(props) {
    console.log(props, "props-addHikeForm")

    const initHikeInputs = {
        hikeName: props.hikeName || "",
        distance: props.distance || "",
        state: props.state || "",
        elevationGain: props.elevationGain || "",
        difficulty: props.difficulty || "",
        notes: props.notes || ""
    }
    const [hikeInputs, setHikeInputs] = useState(initHikeInputs)

    function handleHikeChange(e) {
        const {name, value} = e.target
        setHikeInputs(prevHikeInputs => ({...prevHikeInputs, [name]: value}))
    }

    function handleHikeSubmit(e) {
        e.preventDefault()
        props.submit(hikeInputs, props._id)
        setHikeInputs(initHikeInputs)
    }

    return(
        <form className="user-form" onSubmit={handleHikeSubmit}>
            <input
                type= "text"
                name= "hikeName"
                value={hikeInputs.hikeName}
                onChange={handleHikeChange}
                placeholder="Hike Name"
                className="form-entry"/>
            <input
                type="number"
                name="distance"
                value={hikeInputs.distance}
                onChange={handleHikeChange}
                placeholder="Distance"
                className="form-entry"/>
                <select className="state" value={props.state}>
                         <option>AL</option>
                         <option>AK</option>
                         <option>AZ</option>
                         <option>AR</option>
                         <option>CA</option>
                         <option>CO</option>
                         <option>CT</option>
                         <option>DE</option>
                         <option>DC</option>
                         <option>FL</option>
                         <option>GA</option>
                         <option>GU</option>
                         <option>HI</option>
                         <option>ID</option>
                         <option>IL</option>
                         <option>IN</option>
                         <option>IA</option>
                         <option>KS</option>
                         <option>KY</option>
                         <option>LA</option>
                         <option>ME</option>
                         <option>MD</option>
                         <option>MA</option>
                         <option>MI</option>
                         <option>MN</option>
                         <option>MS</option>
                         <option>MO</option>
                         <option>MT</option>
                         <option>NE</option>
                         <option>NV</option>
                         <option>NH</option>
                         <option>NJ</option>
                         <option>NM</option>
                         <option>NY</option>
                         <option>NC</option>
                         <option>ND</option>
                         <option>OH</option>
                         <option>OK</option>
                         <option>OR</option>
                         <option>PA</option>
                         <option>RI</option>
                         <option>SC</option>
                         <option>SD</option>
                         <option>TN</option>
                         <option>TX</option>
                         <option>UT</option>
                         <option>VT</option>
                         <option>VA</option>
                         <option>WA</option>
                         <option>WV</option>
                         <option>WI</option>
                         <option>WY</option>
            </select>
            <input 
                type="number"
                name="elevationGain"
                value={hikeInputs.elevationGain}
                onChange={handleHikeChange}
                placeholder="Elevation Gain"
                className="form-entry"/>
            <input 
                type="number"
                name="diffiuclty"
                value={hikeInputs.diffuclty}
                onChange={handleHikeChange}
                placeholder="Difficulty"
                className="form-entry"/>
            <input 
                type="text"
                name="notes"
                value={hikeInputs.notes}
                onChange={handleHikeChange}
                placeholder="Notes"
                className="form-entry"/>  
            <button>{props.btnText}</button>          
        </form>
    )
}