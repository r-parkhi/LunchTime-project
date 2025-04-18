import "./qna.css"

function QnA({ question = "Question", answer = "Answer" }) {
  return (
    <div>
      <h3><b>Q: {question}</b></h3>
      <b><span>A: </span></b>
      <span>{answer}</span>
    </div>
  );
}

export default QnA;