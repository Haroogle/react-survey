import { useState } from "react";
const initialState = {
  colour: "",
  // spendTime: { 0: false, 1: false, 2: false, 3: false },
  spendTime: [false, false, false, false],
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
      // Based on the targetName value, update respective position in array spendTime
      const clonedState = { ...formState };

      if (targetValue === "swimming") {
        clonedState.spendTime[0] = !clonedState.spendTime[0];
        clonedState.spendTime[3] = false;
        setFormState(clonedState);
      }
      // else if Bathing
      else if (targetValue === "bathing") {
        clonedState.spendTime[1] = !clonedState.spendTime[1];
        clonedState.spendTime[3] = false;
        setFormState(clonedState);
      }
      // else if Chatting
      else if (targetValue === "chatting") {
        clonedState.spendTime[2] = !clonedState.spendTime[2];
        clonedState.spendTime[3] = false;
        setFormState(clonedState);
      }
      // else dont like
      else {
        // if i dont like is false, set to true and the rest to false
        if (clonedState.spendTime[3] === false) {
          clonedState.spendTime[0] = false;
          clonedState.spendTime[1] = false;
          clonedState.spendTime[2] = false;
          clonedState.spendTime[3] = true;
        }
        // if checkbox is true, update to false
        else {
          clonedState.spendTime[3] = false;
        }
        setFormState(clonedState);
      }
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
                  <input
                    name="spend-time"
                    type="checkbox"
                    value="swimming"
                    checked={formState.spendTime[0]}
                    onChange={handleChange}
                  />
                  Swimming
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="spend-time"
                    type="checkbox"
                    value="bathing"
                    checked={formState.spendTime[1]}
                    onChange={handleChange}
                  />
                  Bathing
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="spend-time"
                    type="checkbox"
                    value="chatting"
                    checked={formState.spendTime[2]}
                    onChange={handleChange}
                  />
                  Chatting
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="spend-time"
                    type="checkbox"
                    value="noTime"
                    checked={formState.spendTime[3]}
                    onChange={handleChange}
                  />
                  I don't like to spend time with it
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
