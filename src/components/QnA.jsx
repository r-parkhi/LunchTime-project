function QnA({question = "Question", answer = "Answer"}){
    return(
        <div>
            <h3>Q: {question}</h3>
            <h3><span>A: </span></h3>      
            <h4><span>{answer}</span></h4>
        </div>
    );
}

export default QnA;