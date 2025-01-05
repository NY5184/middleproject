import { useEffect, useState } from "react"
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import 'primeicons/primeicons.css';
import axios from 'axios'
import UpdateTodo from './UpdateTodo'


        
import { Checkbox } from 'primereact/checkbox';
        




const Todo=(props)=> {
    

    
    const deleteTodo = async () => {
     
        try{
            
            const res = await axios({
                method: 'delete',
                url: `http://localhost:8005/todos/${props.todo._id}`,
                headers: {}, 
             
              });
    
            if(res.status === 200){
                console.log(res.data);
                props.getTodos()
                ///props.setTodosData.setTodosData(res.data)
            }
        }catch(e){
            console.error(e);

        }
    };
    const updateTodoComplete = async () => {
        try {
            const Id = props.todo._id
            const res = await axios.put(`http://localhost:8005/todos/Completed/${Id}`)

            if (res.status === 200) {
                console.log(res.data);
                props.getTodos()
            }
        }
        catch (e) {
            console.error(e);
        }
    }



    const [visible, setVisible] = useState(false);
    const header = (
        <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" />
    );
    const footer = (
        <> 
        <Button label="Update" onClick={() => {setVisible(true) }} severity="secondary" icon="pi pi-pencil" style={{ marginLeft: '0.5em' ,backgroundColor:'green'}} />
        
            <Button label="Delete" onClick={() => { deleteTodo() }} severity="secondary" icon="pi pi-trash" style={{ marginLeft: '0.5em',backgroundColor:'red' }} />
           { visible && <UpdateTodo setTodosData={props.setTodosData} setVisible={setVisible} visible={visible} todo={props.todo}  />}<br></br><br></br>
           <Button label="  Complete" icon={props.todo.completed===false?"pi pi-pencil":"pi pi-check"} onClick={updateTodoComplete} style={{ marginLeft: '0.5em',width:"35%" ,fontSize:"12px"}}/><br></br>
           
        </>
    );

    return (
        <div className="card flex justify-content-center">
            <Card title={props.todo.title} subTitle={props.todo.body} footer={footer} header={header} className="md:w-25rem">
                <p className="m-0">
                </p>
            </Card>
        </div>
    )
}



export default Todo;
