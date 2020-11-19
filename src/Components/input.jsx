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