import React, { Component } from "react";
import { connect } from "react-redux";

export class UserList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.userHandler("http://jsonplaceholder.typicode.com/users");
  }
  userHandler = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        this.props.addUser(json);
      })
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <>
        <div>
          <h1>User List</h1>
          {this.props.userlist.map((user) => (
            <div key={user.id}>{user.name}</div>
          ))}
        </div>
        <button
          onClick={() =>
            this.userHandler("http://jsonplaceholder.typicode.com/users")
          }
        >
          AddUser-live
        </button>

        <button
          onClick={() => this.userHandler("http://localhost:8080/api.json")}
        >
          AddUser-local
        </button>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  userlist: state.users,
});

const addUser = (data) => {
  return {
    type: "USER_ACTION",
    payload: data,
  };
};

const mapDispatchToProps = {
  addUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
