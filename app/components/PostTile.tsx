import "../component-styles/Posts.scss";
import { Post } from "../types";

interface PostTileProps {
  post: Post
}


const PostTile = ({post}: PostTileProps) => {

  const postDateAsString = new Date(post.created).toLocaleDateString();

  return (
    <div className="post-tile">
      <a href={`posts/${post.id}`} className="post-tile__post-title">{post.title}</a>
      <p className="post-tile__post-date">{postDateAsString}</p>
      <p className="post-tile__post-subject">{post.subject}</p>
    </div>
  );
}

export default PostTile;
