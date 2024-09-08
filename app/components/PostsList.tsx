import { posts } from "../posts";
import PostTile from "./PostTile";
import "../component-styles/Posts.scss";
import { Post } from "../types";

interface PostListProps {
  limit?: number
}

const PostsList = ({limit}: PostListProps) => {

  let listLimit;
  
  if(limit) {
    listLimit = limit;
  } else {
    listLimit = posts.length;
  }

  const postsList = posts
  .sort((a: any, b: any) => b.created - a.created)
  .slice(0, listLimit)
  .map((post: Post, index: number) => {
    return <PostTile post={post} key={index} />
  });

  return (
    <div className="post-list">
      { postsList }
    </div>
  );
}

export default PostsList;
