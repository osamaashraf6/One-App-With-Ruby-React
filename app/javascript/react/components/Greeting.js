
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetings } from '../redux/greetings/greetingSlice';

const Greetings = () => {
  const dispatch = useDispatch();
  const { loading, greeting, error } = useSelector((state) => state.greetings);

  useEffect(() => {
    dispatch(fetchGreetings());
  }, [dispatch]);

  if (loading) {
    return <p>It is loading...</p>;
  }

  if (error) {
    return <p>{ error }</p>;
  }

  return (
    <p>{ greeting }</p>
  );
};

export default Greetings;