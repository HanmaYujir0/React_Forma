import { useState } from "react";
import style from "./app.module.css";


function App() {

  const [text, setText] = useState("");
  const [textDirty, setTextDirty] = useState(false);
  const [textError, setTextError] = useState("Поле ввода не может быть пустым");
  const [isEmpty, setIsEmpty] = useState("");
  const [active, setActive] = useState(true)

  const handleText = (e) => {
    setText(e.target.value);
    if (!e.target.value) {
      setTextError("Поле ввода не может быть пустым");
      setActive(true)
      setIsEmpty('')
    } else {
      setTextError("");
      setActive(false)
    }
  };

  const handleClick = (e) => {
    e.preventDefault()
    if (text !== "") {
      e.preventDefault()
      setIsEmpty("Сообщение отправлено");
      console.log(text);
      setText("");
    }
  };

  const handleChangeText = () => {
    if (!text) {
      setTextError("Поле ввода не может быть пустым");
      setTextDirty(true);
      setIsEmpty("");
      setActive(true)
    }
  };


    const buttonActiv = () => active ? style.buttonOff : style.button

  
  return (
    <div className={style.container}>
      <div className={style.input_button_cont}>
        <form onSubmit={(e) => handleClick(e)}>
          <input
            className={style.input}
            name='text'
            type="text"
            placeholder="Введите текст ..."
            value={text}
            onChange={e => handleText(e)}
            onBlur={e => handleChangeText(e)}
          />
          <button
            className={buttonActiv()}
            onClick={(e) => handleClick(e)}
            type='button'
            disabled={active}
          >
            Отправить
          </button>
        </form>
      </div>
      {(textDirty && textError) && <div style={{color: 'red'}}>{textError}</div>}
      {isEmpty && <div style={{ color: "green" }}>{isEmpty}</div>}
    </div>
  );
}

export default App;
