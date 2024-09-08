import { posts } from "@/app/posts";
import { marked } from "marked";
import "../../component-styles/PostPage.scss";
import { Post } from "@/app/types";

interface PostPageProps {
  params: Post
}

const PostPage = ({params}: PostPageProps) => {

  const postToRender = posts.find(post => post.id === Number(params.id));

  const postDateAsString = new Date(postToRender!.created).toLocaleDateString();

  const html = marked(postToRender!.data);

  return (
    <div className="post-page">
      <h1 className="post-page__post-title">{postToRender?.title}</h1>
      <p className="post-page__post-date">{postDateAsString}</p>
      <p className="post-page__post-subject">{postToRender?.subject}</p>
      <div className="post-page__post-data" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}

export default PostPage;
