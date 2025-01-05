
import React, { useRef } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import axios from 'axios'

; 
const UpdateTodo=(props)=>{
   
    const title = useRef("");
    const tags = useRef("");

    
    const UpDateTodo=async(title,tags)=>{
      
       
     
            props.todo.title=title.current.value?title.current.value:props.todo.title
            props.todo.tags= tags.current.value?tags.current.value:props.todo.tags
          
       
           try {
        const res = await axios.put(`http://localhost:8005/todos/${props.todo._id}`, props.todo);
        if (res.status === 200) {
            props.getTodos()
              
           // props.setTodosData.setTodosData(res.data)
        }
    } catch (e) {
        console.error("Error updating todo:", e);
    }
            
        };
    
    return(


        <div className="card flex justify-content-center">
        
        <Dialog style={{direction:"rtl"}}
            visible={props.visible}
            modal
            onHide={() => {if (!props.visible) return; props.setVisible(false); }}
            content={({ hide }) => (
                <div className="flex flex-column px-8 py-5 gap-4" style={{ borderRadius: '12px', backgroundImage: 'radial-gradient(circle at left top, var(--primary-400), var(--primary-700))' }}>

                    <div className="inline-flex flex-column gap-2">
                        <label htmlFor="title" className="text-primary-50 font-semibold">
                        title
                        </label>
                        <InputText id="title"  className="bg-white-alpha-20 border-none p-3 text-primary-50"  ref={title}></InputText>
                    </div>
                    <div className="inline-flex flex-column gap-2">
                        <label htmlFor="tags" className="text-primary-50 font-semibold">
                        tags
                        </label>
                        <InputText id="tags"  className="bg-white-alpha-20 border-none p-3 text-primary-50"  ref={tags}></InputText>
                    </div>
                    
                
                 
                    <div className="flex align-items-center gap-2">
                        
                        <Button label="save" onClick={(e) =>{UpDateTodo(title,tags); hide(e)} } text className="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"></Button>
                        <Button label="cancel" onClick={(e) => hide(e)} text className="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"></Button>
                    </div>
                </div>
            )}
        ></Dialog>
    </div>
    )
   
}
export default UpdateTodo;