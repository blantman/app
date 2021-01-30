import React,{useState} from "react";
import PropTypes from 'prop-types'

function AddTask({ onCreate }) {
  const [value, setValue] = useState('')

  function submitHandler(Event) {
    Event.preventDefault()

    if (value.trim()) {
      onCreate(value)
      setValue('')
    }
  }

  return(
    <form onSubmit={submitHandler} >
      <input value={value} onChange={Event => setValue(Event.target.value)} />
      <button type='submit'>ADD</button>
    </form>
  )
}


AddTask.propTypes = {
  onCreate: PropTypes.func.isRequired
}

export default AddTask
