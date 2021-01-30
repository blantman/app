import React from 'react'
import PropTypes from 'prop-types'



const styles = {
  li: {
    display: 'flex',
    justifyContent: 'space-between'
  }
}


function ToDoItem({ todo, index, onChange }) {
  const classes = []

  if (todo.completed){
    classes.push('end')
  }


  return (
    <li style={styles.li}>
      <span className={classes.join(' ')}>
        <input type="checkbox"
         checked={todo.completed}
          onChange={() => onChange(todo.id) } />
        <strong>{index + 1}</strong>
        {todo.titile}
      </span>
      <button>clicks</button>

    </li>
  )
}

ToDoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired
}


export default ToDoItem

