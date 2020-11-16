import React from 'react';
import { useForm } from 'react-hook-form';

export default function MyForm() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="First Goal" name="First Goal" ref={register} />
      <input type="text" placeholder="Second Goal" name="Second Goal" ref={register} />
      <input type="text" placeholder="Third Goal" name="Third Goal" ref={register} />

      <input type="submit" />
    </form>
  );
}