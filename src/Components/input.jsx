<<<<<<< HEAD
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
=======
import React from 'react';
 import { Formik, Form, Field, FieldArray } from 'formik';
import { FormDebugger } from './debugger';
 
 // Here is an example of a form with an editable list.
 // Next to each input are buttons for insert and remove.
 // If the list is empty, there is a button to add an item.
  const MyInput = () => (
   <div>
     <h1>Goals</h1>
     <Formik
       initialValues={{ goals: ['', '', ''] }}
       onSubmit={values =>
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
         }, 500)
       }
       render={({ values }) => (
         <Form>
           <FieldArray
             name="goals"
             render={arrayHelpers => (
               <div>
                 {values.goals && values.goals.length > 0 ? (
                   values.goals.map((goal, index) => (
                     <div key={index}>
                       <Field placeholder="Goals" name={`goals.${index}`} />
                     </div>
                   ))
                 )
                 )}
                 <div>
                   <button type="submit">Submit</button>
                 </div>
               </div>
             )}
           />
           <FormDebugger />
         </Form>
       )}
     />
   </div>
 );

 export default MyInput;
>>>>>>> 672e5904ecabc86e2dfa3717621019dc2c23786b
