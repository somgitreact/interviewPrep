import React, { useState } from "react";

const Displayname = () => {
  const [input, setInput] = useState({
    fnam: "",
    lnam: ""
  });
  const [text, setText] = useState("");

  const inpChang = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (input.fnam && input.lnam) {
      setText(`${input.fnam} ${input.lnam}`);
    } else {
      setText("");
    }
  };

  return (
    <div>
      <h2>Full Name Display</h2>

      <form onSubmit={submitHandler}>
        <div>
          First Name:
          <input
            type="text"
            name="fnam"
            value={input.fnam}
            onChange={inpChang}
          />
        </div>

        <div>
          Last Name:
          <input
            type="text"
            name="lnam"
            value={input.lnam}
            onChange={inpChang}
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      {text && <div className="fullname">Full Name: {text}</div>}
    </div>
  );
};

export default Displayname;
