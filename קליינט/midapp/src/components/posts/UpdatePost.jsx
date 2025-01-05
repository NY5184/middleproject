
import React, { useRef } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import axios from 'axios'

; 
const UpdatePost=(props)=>{
   
    const title = useRef("");
      const body = useRef("");
    
    const UpDatePost=async(title,body)=>{
      
       
     
            props.post.title=title.current.value?title.current.value:props.post.title
            props.post.body= body.current.value?body.current.value:props.post.body
          
       
           try {
        const res = await axios.put(`http://localhost:8005/posts/${props.post._id}`, props.post);
        if (res.status === 200) {
        
            props.getPosts()
         //   props.setPostData.setPostData(res.data)
        }
    } catch (e) {
        console.error("Error updating post:", e);
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
                        <label htmlFor="body" className="text-primary-50 font-semibold">
                        body
                        </label>
                        <InputText id="body"  className="bg-white-alpha-20 border-none p-3 text-primary-50"  ref={body}></InputText>
                    </div>
                    
                
                 
                    <div className="flex align-items-center gap-2">
                        
                        <Button label="save" onClick={(e) =>{UpDatePost(title,body); hide(e)} } text className="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"></Button>
                        <Button label="cancel" onClick={(e) => hide(e)} text className="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"></Button>
                    </div>
                </div>
            )}
        ></Dialog>
    </div>
    )
   
}
export default UpdatePost;