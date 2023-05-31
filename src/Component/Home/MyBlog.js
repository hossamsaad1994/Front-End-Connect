import React, { Component } from "react";
import axios from "axios";


class MyBlog extends Component {

    state = {
        users : [],
    }

    componentDidMount(){
        axios.all([
            axios.get("https://localhost:44371/api/Appusers"),
            axios.get("https://localhost:44371/api/Comments"),
            axios.get("https://localhost:44371/api/Posts"),
            axios.get("https://localhost:44371/api/Roles")
        ])
        .then(res =>{
            console.log(res)
            this.setState({
                users : res
            });
        })

        }

    render(){
        return(
            <div>
                {this.setState.users};
            </div>
        )

    }
}

export default MyBlog ;