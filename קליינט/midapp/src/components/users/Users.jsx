import { useState, useEffect } from "react";
import axios from "axios";
import User from "./User";
import AddUser from "./AddUser";
import { Button } from 'primereact/button';

const Users = () => {
    const [userData, setUserData] = useState([]);


    const getUsers = async () => {
        try {
            const res = await axios.get("http://localhost:8005/users")
            if (res.status === 200) {
                setUserData(res.data)
            }
        } catch (e) {
            console.error("Error fetching users:", e);
        }
    };

    useEffect(() => {
        getUsers();
    }, [])

    const [visible, setVisible] = useState(false);
    return (
        <>
            <Button icon="pi pi-user-plus" onClick={() => setVisible(true)} style={{ marginLeft: '0.5em' }} />
            {visible && <AddUser  getUsers={getUsers} setVisible={setVisible} visible={visible} />}
            {userData.map((user) => (
                <User user={user}   setUserData={setUserData} />
            ))}
        </>
    );
};

export default Users;
