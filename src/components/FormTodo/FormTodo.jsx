import "./index.css";

const FormTodo = ({ state, onChange, children }) => {
  const handleChange = (e) => {
    onChange(e);
  };

  return (
    <div className="todo-input">
      <h2>Attività</h2>
      <label>Cosa Farai?</label>
      <input
        type="text"
        name="activity"
        placeholder="Inserire un'attività ♪"
        onChange={handleChange}
      />
      {/* activity */}
      <br />
      <label>Giorno:</label>
      <input
        type="date"
        className="date__input"
        name="date"
        onChange={handleChange}
      />
      {/* date */}
      <br />
      <label>Ora:</label>
      <input
        type="time"
        className="time__input"
        name="time"
        onChange={handleChange}
      />
      {/* time */}
      <br />

      {state.isError ? (
        <p className="message message--error">
          <strong>ERRORE</strong> : Non hai riempito alcuni campi!
        </p>
      ) : null}
      <br />

      {children}
    </div>
  );
};

export default FormTodo;
