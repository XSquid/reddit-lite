import logo from './logo.svg';
import './App.css';
import RedditHeader from './Component/Header/header';
import PostList from './Component/PostList/postList';
import Subreddit from './Component/Subreddit/subreddit';

function App() {
  return (
    <div>
      <RedditHeader />
      <div className='postContainer'>
        <PostList />
        <Subreddit />
      </div>
    </div>
  );
}

export default App;
