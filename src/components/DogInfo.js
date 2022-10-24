function DogInfo({selectedDog, editDog}) {
    return (
        <div>
            <img src = {selectedDog.image} alt = {selectedDog.name}/>
            <h2>{selectedDog.name}</h2>
            <button onClick = {() => {editDog(selectedDog)}}>{selectedDog.isGoodDog ? 'Good Dog!' : 'Bad Dog!'}</button>
        </div>
    )
}

export default DogInfo