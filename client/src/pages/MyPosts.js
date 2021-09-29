import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Header } from "semantic-ui-react";


export default function MyPosts() {

  const [posts, setPosts] = useState([]);


  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      let res = await axios.get("/api/my_posts");
      setPosts(res.data)
    } catch (err) {
      alert(err);
    }
  };


  const renderPosts = () => {
    if (posts.length === 0) {
      return <p>No liked posts</p>
    }

    return posts.map((post) => {

      return (
        <div>
        <Card key={post.id}>
          <Card.Content>
            <Card.Header>
              { post.description }
            </Card.Header>
            {/* <Card.Description>
              { post.description }
            </Card.Description> */}
          </Card.Content>
        </Card>
      </div>
      )
    })
  }

  return (
    <div>
      <Header as='h1'>Posts</Header>
        <br />
      {renderPosts()}
    </div>
  );
}