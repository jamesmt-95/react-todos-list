import PropTypes from 'prop-types';
const TodoItem = ({ todo, handleToggle, handleDelete }) => {
    return (
        <>
            <li>
                <label htmlFor={`todo-item-${todo.id}`}><input type="checkbox" onChange={(e)=> handleToggle(todo.id, e.target.checked)} name="" defaultChecked={todo.completed} id={`todo-item-${todo.id}`} />{todo.title}</label>
                <button className="btn btn-danger" onClick={()=>handleDelete(todo.id)}>Delete</button>
            </li>
        </>
    )
}



TodoItem.propTypes = {
   todo: PropTypes.object,
   handleToggle: PropTypes.func,
   handleDelete: PropTypes.func
}

export default TodoItem