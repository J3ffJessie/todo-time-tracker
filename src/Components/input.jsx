import React, {useState} from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';


function CreateGoal(props){

  const [isExpanded, setExpanded] = useState(false);

  const [goal, setGoal] = useState({
    header:'',
    content:''
  });

  function handleChange(event) {
    const {name, value} = event.target;

    setGoal(prevGoal => {
      return {
        ...prevGoal,
        [name]: value
      };
    });
  }

  function submitGoal(event) {
    props.onAdd(goal);
    setGoal({
      title:'',
      content:''
    });
    event.preventDefault();
  }

  function expand(){
    setExpanded(true);
  }

  return(
    <div>
      <form className='create-goal'>
        {isExpanded && (
          <input
          name="title"
          onChange = {handleChange}
          value = {goal.title}
          placeholder="Title" />
        )}
        <textarea
        name='content'
        onClick={expand}
        onChange={handleChange}
        value={goal.content}
        placeholder="Whats your goal"
        rows={isExpanded ? 3: 1} />
        <Zoom in={isExpanded}>
          <Fab onClick={submitGoal}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );

}

export default CreateGoal;