import { useState, useEffect } from "react";
import axios from "axios";
import Todo from "./Todo";
import AddTodo from "./AddTodo";
import UpdateTodo from "./UpdateTodo";
import { Button } from 'primereact/button';

const Todos = () => {
    const [todosData, setTodosData] = useState([]);
    const [visible, setVisible] = useState(false);
    const getTodos = async () => {
        try {
            const res = await axios.get("http://localhost:8005/todos");
            if (res.status === 200) {
                const sortedTodos = res.data.sort((a, b) => a._id - b._id);
                setTodosData(sortedTodos);
            }
        } catch (e) {
            console.error(e);
            setTodosData([]);
        }
    };

    useEffect(() => {
        getTodos();
    }, []);


    
    return (
        
       
        
        <div>
       <Button icon="pi pi-user-plus" onClick={() => setVisible(true)} style={{ marginLeft: '0.5em' }} />
        {visible &&  <AddTodo getTodos={getTodos}  setVisible={setVisible} visible={visible}/>} 
          
            <div>
                {todosData.map((todo, index) => (
                    <Todo key={index} todo={todo} getTodos={getTodos} />
                ))}
            </div>
            <div>
                {todosData.map((todo, index) => (
                    <UpdateTodo key={index} todo={todo} getTodos={getTodos} />
                ))}
            </div>
        </div>
    );
};

export default Todos;
