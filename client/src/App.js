import React, { useState, useEffect} from "react"
import './App.css';
import Hiking from "./components/Hiking"
import Camping from './components/Camping';
import LandingPage from './components/LandingPage';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import axios from "axios";
import AddHikeForm from "./components/AddHikeForm";
import AddCampForm from "./components/AddCampForm";


function App() {
  const [hikes, setHikes] = useState([])
  const [camps, setCamps] = useState([])

  function getHike(){
    axios.get("/hiking")
    .then(res => setHikes(res.data))
    .catch(err => console.log(err.response.data.errMsg))
  }
 
  function addHike(newHike){
    axios.post("/hiking", newHike)
    .then(res => {
      setHikes(prevHike => [...prevHike, res.data])
    })
    .catch(err => console.log(err))
  }

  function deleteHike(hikingId){
    axios.delete(`/hiking/${hikingId}`)
    .then(res => {
        setHikes(prevHike => prevHike.filter(hike => hike._id !== hikingId))
    })
    .catch(err => console.log(err))
}

function editHike(updates, hikeId){
  axios.put(`/hiking/${hikeId}`, updates)
  .then(res => {
      setHikes(prevHike => prevHike.map(hike => hike._id !== hikeId ? hike : res.data))
  })
  .catch(err => console.log(err))
}

function handleHikeFilter(e){
  if(e.target.value === "reset"){
      getHike()
  } else {
  axios.get(`/hiking/search/difficulty?difficulty=${e.target.value}`)
  .then(res => setHikes(res.data))
  .catch(err => console.log(err))
  }
}

function getCamp(){
  axios.get("/camping")
  .then(res => setCamps(res.data))
  .catch(err => console.log(err.response.data.errMsg))
}

function addCamp(newCamp){
  axios.post("/camping", newCamp)
  .then(res => {
    setCamps(prevCamp => [...prevCamp, res.data])
  })
  .catch(err => console.log(err))
}

function deleteCamp(campId){
  axios.delete(`/camping/${campId}`)
  .then(res => {
      setCamps(prevCamp => prevCamp.filter(camp => camp._id !== campId))
  })
  .catch(err => console.log(err))
}

function editCamp(updates, campId){
axios.put(`/camping/${campId}`, updates)
.then(res => {
  setCamps(prevCamp => prevCamp.map(camp => camp._id !== campId ? camp : res.data))
})
.catch(err => console.log(err))
}

function handleCampFilter(e){
if(e.target.value === "reset"){
    getCamp()
} else {
axios.get(`/camping/search/bathrooms?bathrooms=${e.target.value}`)
.then(res => setCamps(res.data))
.catch(err => console.log(err))
}
}

useEffect(() => {
  getHike()
  getCamp()
}, [])

  return (
    <div className="App">
      <Router>
        {/* <Header /> */}

        <nav className="topNavbar">
          <img src="./Vector.png" alt="logo" style={{width: 50, height: 50, padding: 5}}/>
          Wildland Research Group
          <Link to="/" style={{padding: 5}}>About Us</Link>
          <Link to="/hiking" style={{padding: 5}}>Hiking</Link>
          <Link to="/camping" style={{padding: 5}}>Camping</Link>


        </nav>

        <Routes>

          <Route path="/" element={<LandingPage />}  />
          <Route path="/hiking" element={
          <>
            
          <Hiking props={{deleteHike, editHike, handleHikeFilter, getHike, hikes}}/>
          <AddHikeForm
          submit={addHike}
          //submitEdit={editHike}
          btnText="Add Hike"/>
          </>
        } />
          <Route path="/camping" element={
          <>
          <Camping props={{deleteCamp, editCamp, handleCampFilter, getCamp, camps}}/>
          <AddCampForm 
            submit={addCamp}
            btnText="Add Camp"/>
          </>
          }/>

        </Routes>

        <Footer />

      </Router>



    </div>
  );
}

export default App;
