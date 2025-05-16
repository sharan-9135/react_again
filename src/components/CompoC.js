import React from 'react';

import { useContext } from 'react';
import {userContext} from '../utils/userContext';
const CompoC = () => {
   const student = useContext(userContext)/*with the help of context api we have no need of 
   props drilling we can direwctly access data from the global variable in any component*/


  console.log(student); 

  return (
    <div style={{ border: '1px solid black' }}>
      CompoC
      <p>{student.name}</p>
      <p>{student.email}</p>
      <p>{student.roll}</p>
    </div>
  );
};

export default CompoC;
