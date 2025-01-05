import { useEffect, useState } from "react"
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import 'primeicons/primeicons.css';
import axios from 'axios'
import UpdateUser from "./UpdateUser";




const User=(props)=> {
    

    const id=props.user._id
    const deleteUser = async () => {
       
        try{
            
            const res = await axios({
                method: 'delete',
                url: `http://localhost:8005/users/${props.user._id}`,
                headers: {}, 
                // data: {
                //   _id: props.user._id , // This is the body part
                // }
              });
    
            if(res.status === 200){
                console.log(res.data);
                props.setUserData(res.data)
            }
        }catch(e){
            console.error(e);
        }
    };

    const [visible, setVisible] = useState(false);
    const header = (
        <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" />
    );
    const footer = (
        <> 
        <Button label="Update" onClick={() => {setVisible(true) }} severity="secondary" icon="pi pi-pencil" style={{ marginLeft: '0.5em' ,backgroundColor:'green'}} />
        
            <Button label="Delete" onClick={() => { deleteUser() }} severity="secondary" icon="pi pi-trash" style={{ marginLeft: '0.5em',backgroundColor:'red' }} />
           { visible && <UpdateUser setUserData={props.setUserData} setVisible={setVisible} visible={visible} user={props.user}  />}
         
           
        </>
    );

    return (
        <div className="card flex justify-content-center">
            <Card title={props.user.name} subTitle={props.user.username} footer={footer} header={header} className="md:w-25rem">
                <p className="m-0">
               
                email: {props.user.email}<br></br>
                   address: {props.user.address}<br></br>
                   phone: {props.user.phone}<br></br>
                   id: {props.user._id}

                </p>
            </Card>
        </div>
    )
}



export default User;
