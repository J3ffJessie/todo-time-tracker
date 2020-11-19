import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import '../form.css';
import { FormDebugger } from './debugger';


const GoalForm = () => {
        return (
            <Formik
            initialValues={{goal1: '', goal2:'', goal3: ''}}
            validationSchema={Yup.object({
                goal1: Yup.string()
                .max(35, 'Must be 35 characters or less')
                .required('Required'),
                goal2: Yup.string()
                .max(35, 'Must be 35 characters or less')
                .required('Required'),
                goal3: Yup.string()
                .max(35, 'Must be 35 characters or less')
                .required('Required'),
            })}
            onSubmit={(values, { setSubmitting}) => {
                setTimeout(() => {
                    console.log((JSON.stringify(values, null, 2)));
                    setSubmitting(false);
                }, 400);
            }}
           >
               {formik => (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="goal1">Goal 1: </label>
            <input
            id="goal1"
            name="goal1"
            type="text"
            onChange={formik.handleChange}
            onBlur= {formik.handleBlur}
            value={formik.values.goal1} />
            {formik.touched.goal1 && formik.errors.goal1 ? <div>{formik.errors.goal1}</div> : null}
            <label htmlFor="goal2">Goal 2: </label>
            <input
            id="goal2"
            name="goal2"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.goal2} />
            {formik.touched.goal2 && formik.errors.goal2 ? <div>{formik.errors.goal2}</div> : null}
            <label htmlFor="goal3">Goal 3: </label>
            <input
            id="goal3"
            name="goal3"
            type= "text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.goal3}/>
            {formik.touched.goal3 && formik.errors.goal3 ? <div>{formik.errors.goal3}</div> : null}
            <button type="submit">Submit</button>
            <FormDebugger />
        </form>
    )}
    </Formik>
        );
};


export default GoalForm;