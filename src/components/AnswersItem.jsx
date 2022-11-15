// Components don't need to be separeted into individual files
// Here we have a smaller component that helps compose the AnswersItem below

const answersSet = [
  "Swimming",
  "Bathing",
  "Chatting",
  "I don't like to spend time with it",
];

function ItemsList({ list }) {
  return (
    <ul>
      {list.map((item, index) => {
        if (item === true) {
          <li>{answersSet[index]}</li>;
        }
      })}
    </ul>
  );
}

// This is the main component being exported from this file
export default function AnswersItem({ answerItem }) {
  return (
    <li>
      <article className="answer">
        <h3>{answerItem.userName || "Anon"} said:</h3>
        <p>
          <em>How do you rate your rubber duck colour?</em>
          <span className="answer__line">{answerItem.colour}</span>
        </p>
        <p>
          <em>How do you like to spend time with your rubber duck?</em>
          <ItemsList list={answerItem.spendTime} />
        </p>
        <p>
          <em>What else have you got to say about your rubber duck?</em>
          <span className="answer__line">{answerItem.review}</span>
        </p>
      </article>
    </li>
  );
}
