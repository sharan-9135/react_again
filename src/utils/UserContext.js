import { createContext } from "react";

const student = {
    name:"shubham",
    roll: 168,
    email: "sk26@gmail.com"
 }

  const teacher = {
     name:"priyesh gupta",
     age:30,
     
  }
  export const userContext = createContext(student)
  export const teachercontext   = createContext(teacher)