import React, {useState} from 'react'

export default function AddCampForm(props) {
    
    const initCampInputs = {
        campsite: props.campsite || "",
        state: props.state || "",
        bathrooms: props.bathrooms || "",
        size: props.size || "",
        cost: props.cost || "",
        rating: props.rating || "",
        notes: props.notes || ""
    }
    const [campInputs, setCampInputs] = useState(initCampInputs)

    function handleCampChange(e){
        const {name, value} = e.target
        setCampInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    function handleCampSubmit(e){
        e.preventDefault()
        props.submit(campInputs, props._id)
        setCampInputs(initCampInputs)
    }

    return(
        <form className="user-form" onSubmit={handleCampSubmit}>
            <input
                type="text"
                name="campsite"
                value={campInputs.campsite}
                onChange={handleCampChange}
                placeholder="Campsite"
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
                type="text"
                name="bathrooms"
                value={campInputs.bathrooms}
                onChange={handleCampChange}
                placeholder="Bathrooms - True/False"
                className="form-entry"/>
             <input
                type="text"
                name="size"
                value={campInputs.size}
                onChange={handleCampChange}
                placeholder="Camp Size"
                className="form-entry"/>
             <input
                type="number"
                name="cost"
                value={campInputs.cost}
                onChange={handleCampChange}
                placeholder="Cost"
                className="form-entry"/>
             <input
                type="number"
                name="rating"
                value={campInputs.rating}
                onChange={handleCampChange}
                placeholder="Rating"
                className="form-entry"/>
             <input
                type="text"
                name="notes"
                value={campInputs.notes}
                onChange={handleCampChange}
                placeholder="Notes"
                className="form-entry"/>
            <button>{props.btnText}</button>
        </form>
    )
}