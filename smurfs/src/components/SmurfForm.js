import React, { useContext, useState } from 'react';
import useForm from 'react-hook-form';
import styled from 'styled-components/macro';
import { AppContext } from '../contexts/AppContext';

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  input:-webkit-autofill {
    background-color: transparent;
    color: inherit;
  }

  .formButton {
    display: block;
    align-self: flex-end;
    font-family: inherit;
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    background: indianred;
    padding: 2px;
    margin: 1rem 0;
    border: 0;
    border-radius: 35px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
    cursor: pointer;
    transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
    &:hover {
      box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
      transform: translate(0, -5px);
      cursor: pointer;
    }
    &:focus {
      outline: none;
    }
    span {
      color: #666;
      display: flex;
      justify-content: center;
      align-items: center;
      background: white;
      width: 100%;
      height: 100%;
      padding: 0.5rem 2rem;
      border-radius: 35px;
      transition: background 0.5s ease;
    }
  }
`;

const InputField = styled.div`
  position: relative;
  padding: 1rem 0;
  margin: 0 0.5rem;

  label {
    color: #666;
  }
  input {
    font-family: inherit;
    font-size: 1rem;
    color: inherit;
    background: transparent;
    width: 100%;
    padding-top: 1rem;
    border-top: 0;
    border-right: 0;
    border-bottom: 1px solid #111;
    border-left: 0;
    transition: border-bottom-color 0.25s ease-in;
    &::placeholder {
      color: #111;
      font-size: 1.5rem;
    }
    &::-webkit-autofill-selected {
      background-color: transparent;
      color: inherit;
    }
    &:focus {
      border-bottom: 2px solid purple;
      outline: 0;
    }
  }
`;

const SmurfForm = () => {
  const intialValues = {
    name: '',
    age: '',
    height: '',
  };

  const { register, handleSubmit } = useForm({});
  const [values, setValues] = useState(intialValues);
  const { addSmurf } = useContext(AppContext);

  const onSubmit = async (data, e) => {
    console.log(data);
    await addSmurf(data);
    setValues(intialValues);
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputField>
        <label htmlFor='name'>Name</label>
        <input name='name' type='text' ref={register} />
      </InputField>
      <InputField>
        <label htmlFor='age'>Age</label>
        <input name='age' type='text' ref={register} />
      </InputField>
      <InputField>
        <label htmlFor='height'>Height</label>
        <input name='height' type='text' ref={register} />
      </InputField>
      <button className='formButton' type='submit'>
        <span>Add Smurf</span>
      </button>
    </Form>
  );
};

export default SmurfForm;
