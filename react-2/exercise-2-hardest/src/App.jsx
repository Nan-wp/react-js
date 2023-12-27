import "./App.css";

function App() {
  return (
    <div id="app">
      <h1>Enter Data</h1>
      <PostContainer />
      <FeedSection />
    </div>
  );
}

const PostContainer = () => {
  return (
    <div className="post-container">
    <div className="post-header">
      <img className="post-avatar" src="avatar.jpg" alt="Your Avatar" />
      <div className="post-author">You</div>
    </div>
    <div className="post-content">
      <textarea
        className="post-input"
        placeholder="What's on your mind?"
      ></textarea>
    </div>
    <div className="post-actions">
      <button className="post-button">Post</button>
    </div>
  </div>
  
  );
};

const FeedSection = ({posts}) => {
  return (
    <div className="feed">
      {posts.map((post) =>{
        return(
          <Post 
      author={post.author}
      time={post.time}
      content= {post.content}
      avatar={post.avatar}
      image={post.image}
      />
        )
      })}
    </div>
  );
};

const Post = (props) => {
  const {author , time , content , avatar , image} = props;
  return (
    <div class="post">
        <div class="post-header">
          <img
            class="post-avatar"
            src={avatar}
            alt="User 1"
          />
          <div>
            <div class="post-author">{author}</div>
            <div class="post-time">{time}</div>
          </div>
        </div>
        <div class="post-content">{content}</div>
        <img
          class="post-image"
          src={image}
          alt="Post 1"
        />
        <button>DELETE</button>
      </div>
  )
}

export default App;
