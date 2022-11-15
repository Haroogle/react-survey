import { useState } from "react";
const initialState = {
  colour: "",
  spendTime: "",
  review: "",
  userName: "",
  email: "",
};
function Main() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [formState, setFormState] = useState(initialState);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("test string");
  };

  const handleChange = (event) => {
    const targetValue = event.target.value;
    const targetChecked = event.target.checked;
    const targetType = event.target.type;
    const targetName = event.target.name;
    if (targetName === "colour") {
      setFormState({ ...formState, colour: targetValue });
    }
    if (targetName === "spend-time") {
      setFormState({ ...formState, spendTime: targetValue });
    }
    if (targetName === "review") {
      setFormState({ ...formState, review: targetValue });
    }
    if (targetName === "username") {
      setFormState({ ...formState, userName: targetValue });
    }
    if (targetName === "email") {
      setFormState({ ...formState, email: targetValue });
    }
  };
  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
      </section>
      <section className="main__form">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            <ul>
              <li>
                <input
                  id="color-one"
                  type="radio"
                  name="colour"
                  value="1"
                  checked={formState.colour === "1"}
                  onChange={handleChange}
                />
                <label htmlFor="color-one">1</label>
              </li>
              <li>
                <input
                  id="color-two"
                  type="radio"
                  name="colour"
                  value="2"
                  checked={formState.colour === "2"}
                  onChange={handleChange}
                />
                <label htmlFor="color-two">2</label>
              </li>
              <li>
                <input
                  id="color-three"
                  type="radio"
                  name="colour"
                  value="3"
                  checked={formState.colour === "3"}
                  onChange={handleChange}
                />
                <label htmlFor="color-three">3</label>
              </li>
              <li>
                <input
                  id="color-four"
                  type="radio"
                  name="colour"
                  value="4"
                  checked={formState.colour === "4"}
                  onChange={handleChange}
                />
                <label htmlFor="color-four">4</label>
              </li>
            </ul>
          </div>
          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            <ul>
              <li>
                <label>
                  <input name="spend-time" type="checkbox" value="swimming" />
                  Swimming
                </label>
              </li>
              <li>
                <label>
                  <input name="spend-time" type="checkbox" value="bathing" />
                  Bathing
                </label>
              </li>
              <li>
                <label>
                  <input name="spend-time" type="checkbox" value="chatting" />
                  Chatting
                </label>
              </li>
              <li>
                <label>
                  <input name="spend-time" type="checkbox" value="noTime" />I
                  don't like to spend time with it
                </label>
              </li>
            </ul>
          </div>
          <label>
            What else have you got to say about your rubber duck?
            <textarea name="review" cols="30" rows="10"></textarea>
          </label>
          <label>
            Put your name here (if you feel like it):
            <input type="text" name="username" value="" />
          </label>
          <label>
            Leave us your email pretty please??
            <input type="email" name="email" value="" />
          </label>
          <input
            className="form__submit"
            type="submit"
            value="Submit Survey!"
          />
        </form>
      </section>
    </main>
  );
}

export default Main;
