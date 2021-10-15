import React from 'react'

function Part({name, exercise}) {
    console.log('name, exercises', name, exercise)
    return (
      <p>
        {name} {exercise}
      </p>
    );
}

export default Part
