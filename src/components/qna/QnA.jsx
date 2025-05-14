import "./qna.css"

function QnA({ question = "Question", answer = <span>Answer</span> }) {
  return (
    <div>
      <h3><b>Q: {question}</b></h3>
      <b><span>A: </span></b>
      {answer}
    </div>
  );
}

export default QnA;