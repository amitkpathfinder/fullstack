import React, { Component } from "react";

import style from "./style.module.css";
import ButtonContainer from "./container/buttonContainer";
import { InputContainer } from "./container/inputContainer";
import ModalContainer from "./container/modalContainer";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Profiles from "./components/profile";
import Button from "./components/button";
import { WelcomeCard } from "./components/welcomeCard";
import UserList from "./components/userList";
import SubUserList from "./components/userList/subUserList";
import ServiceList from "./components/postdata";

export default class App extends Component {
  constructor() {
    super();
    this.state = { users: [], currentUser: [] };
  }

  componentDidMount() {
    console.log("component did mount");
    this.ajaxCallForUsers("http://jsonplaceholder.typicode.com/users");
    this.ajaxCallForCurrentUser(1);
  }

  ajaxCallForUsers = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        this.setState({ users: json });
      })
      .catch((error) => console.log(error));
  };

  ajaxCallForCurrentUser = (
    id,
    url = "http://jsonplaceholder.typicode.com/users?id="
  ) => {
    console.log("id", id);
    fetch(url + id)
      .then((res) => res.json())
      .then((json) => {
        this.setState({ currentUser: json });
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
    console.log(this.state.users.length);
    return (
      <div>
        <SubUserList />
        <ServiceList />
        <UserList />
        <WelcomeCard userInfo={this.state.currentUser} />
        <Profiles
          ajaxCallForCurrentUser={this.ajaxCallForCurrentUser}
          ajaxCallForUsers={this.ajaxCallForUsers}
          sdata={this.state.users}
        />
        <Button text={"Local Api"} onClick={this.localApiUrl} />
        <Button text={"Live Api"} onClick={this.lieApiUrl} />
        <Header />
        <ButtonContainer />
        <InputContainer />
        <ModalContainer
          childComponent={<Profiles sdata={this.state.users} />}
          title={"This is the modal title..."}
        />
        <h3>This is my ffd</h3>
        <div className={style.loader}></div>
        <pre>
          <code>My pre-formatted code... here.</code>
        </pre>
        <code>
          <div>Hi</div>
        </code>
        <pre className={style.hello}>hello</pre>
        <Footer />
      </div>
    );
  }
}
