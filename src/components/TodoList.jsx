import TodoItem from "./TodoItem"
import PropTypes from 'prop-types';

const TodoList = ({ todos, handleToggle, handleDelete }) => {
    return (
        <>
            {<h1 className="header">Todo List</h1>}
            <ul className="list">
            {todos.length === 0 && <p style={{color:'red'}}>No Todos</p>}
                {
                    todos.map((todo, index) =>
                        <TodoItem key={index} todo={todo} handleToggle={handleToggle} handleDelete={handleDelete}  />
                    )
                }
            </ul>
        </>
    )
}

TodoList.propTypes = {
    todos: PropTypes.array,
    handleToggle: PropTypes.func,
    handleDelete: PropTypes.func
}

export default TodoList