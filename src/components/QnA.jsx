function QnA({question = "Question", answer = "Answer"}){
    return(
        <div>
            
            <p><b>Q: {question}</b></p>
            <b><span>A: </span></b>
            <span>{answer}</span>
        </div>
    );
}

export default QnA;