import React, { useEffect, useState, useReducer, createContext } from 'react';
import axios from 'axios';

const AppContext = createContext();

const Provider = ({ children }) => {
  const initialState = {
    smurfs: [],
    smurf: {},
    error: null,
    isFetching: false,
    isPosting: false,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'SMURFS_LOADING':
        return {
          ...state,
          isFetching: true,
          error: null,
        };
      case 'SMURFS_LOAD_SUCCESS':
        return {
          ...state,
          smurfs: action.payload,
          isFetching: false,
          error: null,
        };
      case 'SMURFS_LOAD_ERROR':
        return {
          ...state,
          smurfs: [],
          isFetching: false,
          error: action.payload,
        };
      case 'SMURF_POSTING':
        return {
          ...state,
          isPosting: true,
          error: null,
        };
      case 'SMURF_POSTED':
        return {
          ...state,
          smurf: action.payload,
          isPosting: false,
          error: null,
        };
      case 'SMURF_POST_ERROR':
        return {
          ...state,
          smurf: {},
          isPosting: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const addSmurf = async values => {
    try {
      dispatch({ type: 'SMURFS_POSTING' });
      const res = await axios.post('http://localhost:3333/smurfs', {
        name: values.name,
        age: values.age,
        height: values.height,
      });
      dispatch({ type: 'SMURFS_POSTED', payload: res.data });
      // return res.data;
    } catch (err) {
      console.log(err);
      dispatch({
        type: 'SMURF_POST_ERROR',
        payload: err.res,
      });
    }
  };

  const fetchSmurf = async () => {
    dispatch({ type: 'SMURFS_LOADING' });
    try {
      const res = await axios.get('http://localhost:3333/smurfs');

      const data = await res.data;
      dispatch({ type: 'SMURFS_LOAD_SUCCESS', payload: data });
    } catch (err) {
      dispatch({
        type: 'SMURF_LOAD_ERROR',
        payload: err.res,
      });
    }
  };

  useEffect(() => {}, []);

  return (
    <AppContext.Provider value={{ ...state, fetchSmurf, addSmurf }}>
      {children}
    </AppContext.Provider>
  );
};

export { Provider, AppContext };
