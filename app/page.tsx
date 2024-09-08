import "./component-styles/Homepage.scss";
import PostsList from "./components/PostsList";

export default function Home() {
  return (
    <div className="homepage">
      <div className="homepage__message-of-the-day">
        <p className="homepage__message-of-the-day__text">
          Message of the day here...
        </p>
      </div>
      <h2 className="homepage__welcome">Welcome!</h2>
      <div className="homepage__message">
        <p>
          Hello and welcome to The Frog Blog!
        </p>
        <p>
          Here, you&apos;ll find updates on my ongoing projects
          and explore various topics related to technology.
          Whether you’re here for project insights or tech
          discussions, I hope you find something that piques
          your interest.
        </p>
        <p>
          Thanks for visiting, and enjoy the content!
        </p>
      </div>
      <h2 className="homepage__recent-posts" >Recent Posts:</h2>
      <PostsList limit={5}/>
    </div>
  );
}
