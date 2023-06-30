import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from './redux/greetingsSlice';

function Greeting() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  const greetingData = useSelector((state) => state.greeting.data);
  return (
    <>
      <h2> Hello</h2>
      <h1>{greetingData}</h1>
    </>
  );
}

export default Greeting;
