import React, { Component } from "react";
import Button from "../button";
import Profile from "./profile";

class Profiles extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [], parentUsers: this.props.sdata };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ parentUsers: nextProps.sdata });
  }

  componentDidMount() {
    console.log("component did mount");
    this.ajaxCallForUsers("http://jsonplaceholder.typicode.com/users");
  }

  ajaxCallForUsers = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        this.setState({ users: json });
      })
      .catch((error) => console.log(error));
  };

  localApiUrl = () => {
    this.ajaxCallForUsers("http://localhost:8080/api.json");
  };

  lieApiUrl = () => {
    this.ajaxCallForUsers("http://jsonplaceholder.typicode.com/users");
  };

  render() {
    console.log("Render");
    return (
      <>
        <div
          onClick={() =>
            this.props.ajaxCallForUsers("http://localhost:8080/api.json")
          }
        >
          Click Me
        </div>
        <div>
          {this.state.parentUsers.map((tag) => (
            <Profile
              ajaxCallForCurrentUser={this.props.ajaxCallForCurrentUser}
              key={tag.id}
              tag={tag}
            />
          ))}
        </div>
        <div>
          {this.state.users.map((tag) => (
            <Profile
              ajaxCallForCurrentUser={this.props.ajaxCallForCurrentUser}
              key={tag.id}
              tag={tag}
            />
          ))}
        </div>

        <Button text={"Profile page Local Api"} onClick={this.localApiUrl} />
        <Button text={"Profile page Live Api"} onClick={this.lieApiUrl} />
      </>
    );
  }
}

export default Profiles;
