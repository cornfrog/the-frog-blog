"use client";

import "../component-styles/Post.scss";

import { useState } from "react";

const PostPage = () => {

  const [ loggedIn, setLoggedInState ] = useState(false);

  return (
    <>
      <LoginForm setLoggedInState={setLoggedInState} isLoggedIn={loggedIn}/>
      { loggedIn ? <PostForm /> : ""}
    </>
  );
}

const LoginForm = ({isLoggedIn, setLoggedInState}: any) => {


  const login = async (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const response = await fetch("/api/validate", {
      method: "POST",
      body: formData
    });
    const responseData = await response.json();
    if(responseData.success) {
      setLoggedInState(true);
    }
  }

  return (
    <form className={ !isLoggedIn ? "login-form" : "hide"} onSubmit={login}>
      <label className="login-form__label">
        Username:
        <input className="login-form__label__input" type="text" name="username"/>
      </label>
      <label className="login-form__label">
        Password:
        <input className="login-form__label__input" type="password" name="password"/>
      </label>
      <input
        id="login-button"
        type="submit"
        value="Login"
      />
    </form>
  );
}

const PostForm = () => {
  const postBlog = async (event: any) => {
    event.preventDefault();
    const postData = new FormData(event.currentTarget) 
    console.log(postData);
    const response = await fetch("/api/post-blog", {
      method: "POST",
      body: postData
    });
  }

  return (
    <form className="post-form" onSubmit={postBlog}>
      <label className="post-form__post-label">
        Post Title:
        <input className="post-form__post-label__input" type="text" name="title" />
      </label>
      <label className="post-form__post-label">
        Post Subject:
        <input className="post-form__post-label__input" type="text" name="subject" />
      </label>
      <label className="post-form__post-label">
        Post Data:
      </label>
      <textarea className="post-form__post-label__input" id="post-content" name="data"></textarea>
      <input 
        id="post-button"
        type="submit"
        value="Post"
      />
    </form>
  );
}

export default PostPage;
