import { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post";
import AddPost from "./AddPost";
import { Button } from 'primereact/button';

const Posts = (props) => {
  const [postData, setPostData] = useState([]);
  const [visible, setVisible] = useState(false);

  const getPosts = async () => {
    try {
      const res = await axios.get("http://localhost:8005/posts");
      if (res.status === 200    ) {
        setPostData(res.data);
      }
 
     
    } catch (e) {
      console.error("Error fetching posts:", e);
      setPostData([]);
    

    }
  };

  useEffect(() => {
    getPosts();
}, [])

  return (
    <>
      <Button icon="pi pi-user-plus" onClick={() => setVisible(true)} style={{ marginLeft: '0.5em' }} />
      {visible && <AddPost setPostData={setPostData}  getPosts={getPosts} setVisible={setVisible} visible={visible} />}
      {postData.map((post) => (
        <Post key={post._id} post={post}  getPosts={getPosts} setPostData={setPostData} />
      ))}
    </>
  );
};

export default Posts;
