import React from 'react'
import CompoC from './CompoC'
import { useContext } from 'react'
import { teachercontext } from '../utils/userContext'
const  CompoB = ({student}) => {
    const teacher = useContext(teachercontext)
    console.log(teacher)
  return (
    <div style={{ border: '1px solid black' }}>CompoB
     <p>{teacher.name}</p>
     <p>{teacher.age}</p>
     <CompoC />
    </div>
  )
}

export default CompoB