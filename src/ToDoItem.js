import React from 'React'

const styles = {
  li: {
    display: 'flex',
    justifyContent: 'space-between'
    alignItems: 'centre'
  }
}

export default function ToDoItem({ todo, index }) {
  return (
    <li style={styles.li}>
      <span>
        <input type="checkbox"/>
        <strong>{index + 1}</strong>
        {todo.title}
      </span>

      <button>ok</button>
    </li>
    )
}