import React, { useState } from 'react'

const StudentForm = () => {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [group,SetGroup] = useState("")
  return (
    <div>
        <input type="text" value={name} onChange={event => setName(event.target.value)}/>
        <input type="number" value={age} onChange={event => setAge(event.target.value)}/>

        <div>
            <button>Add Student</button>
        </div>
        <div>
          <Select></Select>
        </div>
        <select value={group} onChange={event => setName(event.target.value)}></select>
    
    </div>
  )
}

export default StudentForm
