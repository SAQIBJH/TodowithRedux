import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: []
}

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
                const todo = {
                    id: nanoid(),
                    text: action.payload,
                    completed:false,
            }
            console.log("first")
                    state.todos.unshift(todo);
                },
        deleteTodo: (state,action) => {
            state.todos = state.todos.filter(todo => todo.id!== action.payload)
        },

        updateTodo: (state, action) => {
            const [id, updtodo ] = action.payload
            state.todos = state.todos.map(todo=> todo.id===id ? updtodo : todo)
        },

        toggleComplete: (state, action) => {
            state.todos = state.todos.map(todo=>(todo.id===action.payload ? {...todo, completed:!todo.completed} : todo))
        },
        setTodos: (state, action) => {
            state.todos = action.payload
        }

    }
})

export const { addTodo, deleteTodo, updateTodo, toggleComplete, setTodos } =
  todoSlice.actions;
export default todoSlice.reducer;