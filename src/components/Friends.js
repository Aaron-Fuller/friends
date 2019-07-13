import React, { Component } from 'react';

 class Friends extends Component {
   constructor(props) {
      super(props);
      this.state = {
         name: '',
         age: '',
         email: ''
      };
   }

   updateFriend = (id,updatedFriend) => {
      axios
      .post(`http://localhost:5000/friends/${id}`, updatedFriend)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

   deleteFriend = id => {
      axios
      .post(`http://localhost:5000/friends/${id}`, id)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

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