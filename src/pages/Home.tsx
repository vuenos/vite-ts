import React from 'react';
import Button from "../components/Button";

const Home = () => {
  const alarm = () => {
    alert("Hi~");
  }

  return (
    <div>
      <h1>Home</h1>
      <Button width={100} onClick={alarm}>
        <span>This is Button</span>
      </Button>
    </div>
  );
};

export default Home;
