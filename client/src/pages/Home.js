import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Card, Header, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom"
import MyPosts from "./MyPosts";


export default function Home() {

  const [posts, setPosts] = useState([]);


  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      let res = await axios.get("/api/posts");
      setPosts(res.data)
    } catch (err) {
      alert(err);
    }
  };

  const removePost = (id) => {
    setPosts(posts.filter((p) => p.id !== id));
  }

  const upVote = async (id) => {
    try {
      let res = await axios.put(`/api/posts/${id}`);
      removePost(id);
    } catch (err) {
    alert(err)
    }
  }

  const renderPost = () => {
    if (posts.length === 0) {
      return (
        <>
          {" "}
          <p>No posts left</p>
        </>
      );
    }
    let index = Math.floor(Math.random() * posts.length)
    let post = posts[index]
    return (
      <div>
      <br />
      <Header as='h1'>Posts</Header>
      <br />
      <Card key={post.id}>
        <Card.Content>
          <Card.Header>
            { post.description }
          </Card.Header>
          {/* <Card.Description>
            { post.description }
          </Card.Description> */}
        </Card.Content>
        <Card.Content extra>
          <Button color="red" icon basic onClick={() => removePost(post.id)}>
            <Icon name="thumbs down" />
          </Button>
          <Button color="green" icon basic onClick={() => upVote(post.id)}>
            <Icon name="thumbs up" />
          </Button>
        </Card.Content>
      </Card>
    </div>
    )
  }

  return (
    <div>
      {renderPost()}
      <br />
      <Link to="/my_posts">
        <Button color="blue">
          My Posts
        </Button>
      </Link>
    </div>
  );
}