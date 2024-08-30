import { useState } from "react";
import { NoteText } from "../service/api";

const InputText = () => {
  const [text, setText] = useState("");

  const onInputChange = e => {
    setText(e.target.value);
  };

  const data = { data: text };
  const onFormSubmit = async e => {
    e.preventDefault();

    await NoteText(data);
    setText("");
  };

  return (
    <div className="inputcontainer">
      <form className="form" onSubmit={onFormSubmit}>
        <input
          placeholder="  Take a note..."
          className="input"
          onChange={onInputChange}
          value={text}
        />
      </form>
    </div>
  );
};

export default InputText;
