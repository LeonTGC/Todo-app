import Todo from './Todo';

const Card = (props) => {
    const taskList = props.tasks.map((task, index) => {
      return (
        <Todo
          task={task}
          key={index}
          index={index}
          removeHandler={props.removeHandler}
        />
      );
    });
    return <div className="taskList">{props.tasks && taskList}</div>;
  };
  
  export default Card;