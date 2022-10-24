import Dog from "./Dog";

function DogList({filteredDogs, setSelectedDog}) {
    let list = filteredDogs.map(dog => {
        return (
            <Dog key = {dog.id} dog = {dog} setSelectedDog = {setSelectedDog}/>
        )
    })
    return (
        <>
            {list}
        </>
    )
}

export default DogList