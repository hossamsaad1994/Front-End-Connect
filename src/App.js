import './App.css';
import Home from './Component/Home/Home';
import MyBlog from './Component/Home/MyBlog';
import Posts from './Component/Posts/Posts';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <Posts />
      <Home />
    </Fragment>
    
  );
}

export default App;
