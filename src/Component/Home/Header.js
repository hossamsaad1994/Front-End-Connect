import React from "react";
import './Header.css'


const Header =()=>{


          return(
            <div className="hossam">
              <h3>Add a new post</h3>

                <input className="text" type="text"  placeholder="what's in your mind ? "></input>
                <input className="submit" type="submit" value="Post"></input>
              <hr></hr>

              <h4>Post</h4>
                <p>   
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit   
                </p>
                <button>Add Comment</button>
                <button>Edit Post</button>
                <hr></hr>

                <h4>Post</h4>
                <p>   sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                       ea commodo consequat.
                </p>
                <button>Add Comment</button>
                <button>Edit Post</button>
                <hr></hr>

                <h4>Post</h4>
                <p>
                      Excepteur sint occaecat cupidatat non proident,
                </p>
                <button>Add Comment</button>
                <button>Edit Post</button>
                <hr></hr>

                <h4>Post</h4>
                <p>
                      sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <button>Add Comment</button>
                <button>Edit Post</button>
                  </div>
                
    )
};          

export default Header ;