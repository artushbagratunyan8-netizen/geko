import React from 'react'

const StudentCard = ({name, age, profession,color, onDelete}) => {

  return (
    <div syle={{color}}>
      <h1>{name}</h1>
      <p>{age}</p>
      <p>{profession}</p>
      <button onClick={onDelete}>Delete</button>
    </div>
  )
}

export default StudentCard
