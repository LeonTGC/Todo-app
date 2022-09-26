const UserInput = ({ handleSubmit, setInput, input}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="inputBox"
          type="text"
          value={input}
          placeholder="add new task"
          onChange={(event) => {
            setInput(event.target.value);
          }}
        ></input>
        <div className="submitWrapper">
          <button className="submitButton">submit</button>
        </div>
      </form>
    </div>
  );
};

export default UserInput;
