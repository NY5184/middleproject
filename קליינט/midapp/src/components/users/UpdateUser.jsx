
import React, { useRef } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import axios from 'axios'

; 
const UpdateUser=(props)=>{
   
     const name = useRef("");
      const username = useRef("");
      const email = useRef("");
      const address= useRef("");
      const phone = useRef("");
    
    const upDateUser=async(title,body)=>{
      
       
     
            props.user.name=name.current.value?name.current.value:props.user.name
            props.user.username= username.current.value?username.current.value:props.user.username
            props.user.email=email.current.value?email.current.value:props.user.email
            props.user.address=address.current.value?address.current.value:props.user.address
            props.user.phone=phone.current.value?phone.current.value:props.user.phone
            
       
           try {
        const res = await axios.put(`http://localhost:8005/users/${props.user._id}`, props.user);
        if (res.status === 200) {
        
              
            props.setPostData.setPostData(res.data)
        }
    } catch (e) {
        console.error("Error updating user:", e);
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
                        <label htmlFor="name" className="text-primary-50 font-semibold">
                            name
                        </label>
                        <InputText id="name"  className="bg-white-alpha-20 border-none p-3 text-primary-50"  ref={name}></InputText>
                    </div>
                    <div className="inline-flex flex-column gap-2">
                        <label htmlFor="username" className="text-primary-50 font-semibold">
                        username
                        </label>
                        <InputText id="username"  className="bg-white-alpha-20 border-none p-3 text-primary-50"  ref={username}></InputText>
                    </div>
                    <div className="inline-flex flex-column gap-2">
                        <label htmlFor="email" className="text-primary-50 font-semibold">
                        email
                        </label>
                        <InputText id="email"  className="bg-white-alpha-20 border-none p-3 text-primary-50"  ref={email}></InputText>
                    </div>
                    <div className="inline-flex flex-column gap-2">
                        <label htmlFor="address" className="text-primary-50 font-semibold">
                        address
                        </label>
                        <InputText id="address"  className="bg-white-alpha-20 border-none p-3 text-primary-50"  ref={address}></InputText>
                    </div>
                    <div className="inline-flex flex-column gap-2">
                        <label htmlFor="phone" className="text-primary-50 font-semibold">
                        phone
                        </label>
                        <InputText id="phone"  className="bg-white-alpha-20 border-none p-3 text-primary-50"  ref={phone}></InputText>
                    </div>
                
                 
                    <div className="flex align-items-center gap-2">
                        
                        <Button label="save" onClick={(e) =>{upDateUser(name, username,email,address,phone); hide(e)} } text className="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"></Button>
                        <Button label="cancel" onClick={(e) => hide(e)} text className="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"></Button>
                    </div>
                </div>
            )}
        ></Dialog>
    </div>
    )
   
}
export default UpdateUser;