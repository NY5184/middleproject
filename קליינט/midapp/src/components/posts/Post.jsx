import { useEffect, useState } from "react"
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import 'primeicons/primeicons.css';
import axios from 'axios'
import UpdatePost from './UpdatePost'




const Post=(props)=> {
    

    
    const deletePost = async () => {
     
        try{
            
            const res = await axios({
                method: 'delete',
                url: `http://localhost:8005/posts/${props.post._id}`,
                headers: {}, 
             
              });
    
            if(res.status === 200){
                console.log(res.data);
                props.getPosts()
                console.log("aaa");
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
        
            <Button label="Delete" onClick={() => { deletePost() }} severity="secondary" icon="pi pi-trash" style={{ marginLeft: '0.5em',backgroundColor:'red' }} />
           { visible && <UpdatePost setpostData={props.setpostData}  setVisible={setVisible} visible={visible} post={props.post}  />}
         
           
        </>
    );

    return (
        <div className="card flex justify-content-center">
            <Card title={props.post.title} subTitle={props.post.body} footer={footer} header={header} className="md:w-25rem">
                <p className="m-0">
               
              
                </p>
            </Card>
        </div>
    )
}



export default Post;
