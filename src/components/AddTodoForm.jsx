import { useEffect, useState } from 'react';
import TodoList from "./TodoList"

const AddTodoForm = () => {

    const [item, setItem] = useState('')

    // useState with empty todos array
    // const [todos, setTodos] = useState([]);

    //useState with localStorage values
    const [todos, setTodos] = useState(() => {
        const localTodos = localStorage.getItem('Item');
        if (localTodos === null) return []
        return JSON.parse(localTodos)
    });

    //useEffect Hook to store todos in Local Storage
    useEffect(() => {
        localStorage.setItem('Item', JSON.stringify(todos))
    }, [todos])

    // function to handle form submit
    const handleFormSubmit = (e) => {
        e.preventDefault();
        // {
        //     (!todos) ?
        //         setTodos([{ id: crypto.randomUUID(), title: item, completed: false }])
        //         :
        //         setTodos([...todos, { id: crypto.randomUUID(), title: item, completed: false }])
        // }
        setTodos([...todos, { id: crypto.randomUUID(), title: item, completed: false }])
        setItem('');
    };

    // function to handle checkbox toggle
    const handleToggle = (todoId, checked) => {

        const updateTodosToggle = todos.map((todo) => {
            if (todo.id === todoId) {
                return { ...todo, completed: checked }
                // return {...todo, completed:!todo.completed}
            }
            return todo;
        })
        setTodos(updateTodosToggle)
    }

    // function to handle delete
    const handleDelete = (todoId) => {
        // const updatedTodos = todos.filter((todo) => todo.id !== todoId)
        // setTodos(updatedTodos)
        // OR
        setTodos((currentTodos) => currentTodos.filter(todo => todo.id !== todoId))
    }


    return (
        <>
            <form action="/" onSubmit={handleFormSubmit} className="new-item-form">
                <div className="form-row">
                    <label htmlFor="todo-name">New Item</label>
                    <input type="text" id="todo-name" value={item} name='todoName' onChange={(e) => setItem(e.target.value)} />
                </div>
                <button className="btn">ADD</button>
            </form>
            <TodoList todos={todos} handleToggle={handleToggle} handleDelete={handleDelete} />
        </>
    )
}


export default AddTodoForm