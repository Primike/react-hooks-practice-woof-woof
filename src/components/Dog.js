
function Dog({dog, setSelectedDog}) {
    return (
        <>
            <span onClick = {() => {setSelectedDog(dog)}}>{dog.name}</span>
        </>
    )
}

export default Dog