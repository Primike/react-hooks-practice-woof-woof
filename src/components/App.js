import React, { useState, useEffect } from "react";
import DogList from "./DogList";
import DogInfo from "./DogInfo"

function App() {
  const [dogs, setDogs] = useState([])
  const [selectedDog, setSelectedDog] = useState(false)
  const [filteredDogs, setFilteredDogs] = useState([])
  const [filterGoodDogs, setFilterGoodDogs] = useState(false)

  useEffect(() => {
    fetchDogs()
  }, [])

  function fetchDogs() {
    fetch(`http://localhost:3001/pups`)
      .then(response => response.json())
      .then(json => {
        setDogs(json)
        setFilteredDogs(json)
        if(filterGoodDogs === true) {
          setFilterGoodDogs(!filterGoodDogs)
        }
      })
  }

  function editDog(dog) {
    fetch(`http://localhost:3001/pups/${dog.id}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isGoodDog: !dog.isGoodDog,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        fetchDogs()
        setSelectedDog(json)
      });
  }

  function filterDogs() {
    setFilterGoodDogs(!filterGoodDogs)
  }

  useEffect(() => {
    let list = dogs.filter(dog => {
      if(filterGoodDogs === true) {
        return dog.isGoodDog === filterGoodDogs
      } else {
        return dog
      }
    })
    setFilteredDogs(list)
  }, [filterGoodDogs])
  
  return (
    <div className="App">
      <div id="filter-div">
        <button id="good-dog-filter" onClick = {filterDogs}>Filter good dogs: {filterGoodDogs ? 'ON' : 'OFF'}</button>
      </div>
      <div id="dog-bar">
        <DogList filteredDogs = {filteredDogs} setSelectedDog = {setSelectedDog}/>
      </div>
      <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <div id="dog-info">
          {selectedDog ? <DogInfo selectedDog = {selectedDog} editDog = {editDog}/> : ''}
        </div>
      </div>
    </div>
  );
}

export default App;
