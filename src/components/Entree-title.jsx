
function Title({entreeName = "Title", entreeDescription = "Description", entreeImage = ""}){
    return(
        <div className="EntreeTop"> 
            <span><h1>{entreeName}</h1></span>
            <img src ={entreeImage}></img>
            <span>{entreeDescription}</span>
        </div>
    );
}
export default Title;