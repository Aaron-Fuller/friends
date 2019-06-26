import React, { Component } from 'react';
import Friends from "./Friends"
import axios from 'axios';

 export default class FriendsList extends Component {
    constructor() {
        super();
        this.state = {
            friends: []
        };
    }

     componentDidMount() {
        axios
            .get('http://localhost:5000/friends')
            .then(response => {
                this.setState({ friends: response.data });
            })
            .catch(error => console.log(error));
    }

     
     render() {
        return (
            <div>
                <Friends
                    originalState={this.state}
                 />
            </div>
        );
    }
} 