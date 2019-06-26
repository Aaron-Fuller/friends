import React, { Component } from 'react';

 class Friends extends Component {
   constructor(props) {
      super(props);
      this.state = {
         name: '',
         age: '',
         email: ''
      };
      //console.log(this.props);
   }

    handleChange = e => {
      this.setState({ [e.target.name]: e.target.value });
   };

    render() {
      return (
         <div>
            <h1>Friends:</h1>
            <div className="friends">
               {this.props.originalState.friends.map(friend => {
                  return (
                     <p key={friend.id} className="friend">
                        <p>Name: {friend.name}</p>
                        <p>Age: {friend.age}</p>
                        <p>Email: {friend.email}</p>
                     </p>
                  );
               })}
            </div>
         </div>
      );
   }
}

 export default Friends; 