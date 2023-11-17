import { useDispatch, useSelector } from "react-redux";
import TodoForm from "./componenets/TodoForm";
import TodoItem from "./componenets/TodoItems";
import { useEffect } from "react";
import { setTodos } from "./features/todo/TodoSlice";

function App() {

  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      
      const storedTodos = JSON.parse(localStorage.getItem("todos"));
      // console.log("first", typeof storedTodos)
      // console.log(storedTodos.length)
      if (storedTodos && storedTodos.length > 0) {
        dispatch(setTodos(storedTodos));
      }
    } catch (error) {
      console.log(error)
    }
  },[])

  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  return (
    <>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm/>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {
              todos.map((todo) => (
                <div key={todo.id} className="w-full">

                <TodoItem todo={todo} />
                </div>
              ))
            }
         
          </div>
        </div>
      </div>
    </>
  );
}

export default App
