import React from 'react'
import PropTypes from 'prop-types'
import ToDoItem from "./ToDoItem"

const styles = {
  ul: {
    listStyle: 'none'
  }
}

function ToDoList (props) {
  return (
    <ul style={styles.ul}>
      {props.todo.map((todoItem,index) => {
        return <ToDoItem todo={todoItem} key={todoItem.id} index={index} onChange={props.onToggle} />
      })}
    </ul>
  )
}

ToDoList.propTypes = {
  todo: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func.isRequired
}
  
  export default ToDoList