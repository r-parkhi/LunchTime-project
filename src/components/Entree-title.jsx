function Title({entreeName = "Title", entreeDescription = "Description"}){
    return(
        <div>
            <h1>{entreeName}</h1>
            <p>{entreeDescription}</p>
            <img src = "https://placehold.co/300x300"></img>
        </div>
    );
}

export default Title;