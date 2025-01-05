import React, { useRef } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import axios from 'axios'




const AddUser = (props) => {
 

    const name = useRef("");
    const username = useRef("");
    const email = useRef("");
    const phone = useRef("");
    const address = useRef("");

    const createUser = async () => {
        const newUser = {
            "name": name.current.value,
            "username": username.current.value,
            "email": email.current.value,
           " phone": phone.current.value,
           " address": address.current.value,
        };
        console.log(newUser);
        try{
            const res = await axios.post('http://localhost:8005/users', newUser)
            if(res.status === 200  ||res.status === 201   ){
               props.getUsers()
                //props.setUserData.setUserData(res.data)
            }
        }catch(e){
            alert("there are reqire field")
            console.error(e);
        }
    };


    return (
       
        <div className="card flex justify-content-center">
          
        <Dialog
            visible={props.visible}
            modal
            onHide={() => {if (!props.visible) return; props.setVisible(false); }}
            
            content={({ hide }) => (
                <div className="flex flex-column px-8 py-5 gap-4" style={{ borderRadius: '12px', backgroundImage: 'radial-gradient(circle at left top, var(--primary-400), var(--primary-700))' }}>

                    <div className="inline-flex flex-column gap-2">
                        <label htmlFor="name" className="text-primary-50 font-semibold">
                            name
                        </label>
                        <InputText id="name" className="bg-white-alpha-20 border-none p-3 text-primary-50" ref={name}></InputText>
                    </div>
                    <div className="inline-flex flex-column gap-2">
                        <label htmlFor="username" className="text-primary-50 font-semibold">
                            username
                        </label>
                        <InputText id="username" className="bg-white-alpha-20 border-none p-3 text-primary-50" ref={username}></InputText>
                    </div>
                    <div className="inline-flex flex-column gap-2">
                        <label htmlFor="email" className="text-primary-50 font-semibold">
                            email
                        </label>
                        <InputText id="email" className="bg-white-alpha-20 border-none p-3 text-primary-50" ref={email}></InputText>
                    </div>
                    <div className="inline-flex flex-column gap-2">
                        <label htmlFor="address" className="text-primary-50 font-semibold">
                            address
                        </label>
                        <InputText id="address" className="bg-white-alpha-20 border-none p-3 text-primary-50" ref={address}></InputText>
                    </div>
                    <div className="inline-flex flex-column gap-2">
                        <label htmlFor="phone" className="text-primary-50 font-semibold">
                            phone
                        </label>
                        <InputText id="phone" className="bg-white-alpha-20 border-none p-3 text-primary-50" ref={phone}></InputText>
                    </div>


                    <div className="flex align-items-center gap-2">
                    <Button label="add" onClick={(e) => { createUser (name, username, email, address, phone); hide(e) }} text className="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"></Button>
                        <Button label="cancel" onClick={(e) => hide(e)} text className="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"></Button>
                    </div>
                </div>
            )}
        ></Dialog>
    </div>
    );
};

export default AddUser;




