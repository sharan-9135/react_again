import React from 'react';
import CompoB from './CompoB';

const CompoA = () => {
     const student = {
        name:"shubham",
        roll: 168,
        email: "sk26@gmail.com"
     }
  return (
    <div style={{ border: '1px solid black' }}>
      CompoA
      <CompoB  student = {student}/>
    </div>
  );
};

export default CompoA;
