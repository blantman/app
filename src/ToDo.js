import React from 'React'
import ToDoItem from "./ToDoItem"

const styles = {
    ul: {
        listStyle: 'none'
    }
}

export default function ToDoList (props) {
    return (
        <ul style={styles.ul}>
            { props.todo.map((todo,index) => {
                return <ToDoItem todo={todo} key={todo.id} index={index} />
            })}
        </ul>
    )
}