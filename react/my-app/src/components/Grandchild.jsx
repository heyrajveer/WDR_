import React from 'react'

const Grandchild = (props) => {
    console.log(props);
  return (
    <div>
        <h1>Grandchild</h1>
        <p>Parent se child then granchild :{props.data}</p>
    </div>

  )
}

export default Grandchild