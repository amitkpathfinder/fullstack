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
        <div className="is-relative pb-20 has-background-dark">
          <nav
            className="navbar is-transparent py-5"
            style={{ backgroundColor: "transparent" }}
          >
            <div className="container is-fluid">
              <div className="navbar-brand">
                <a className="navbar-item" href="#">
                  <span className="navbar-item px-0 title is-5 has-text-white">
                    <img
                      src="zeus-assets/logo/logo-zeus-white.svg"
                      alt=""
                      style={{ height: "28px" }}
                      width="auto"
                    />
                  </span>
                </a>
                <a
                  className="navbar-menu-open navbar-burger has-text-light"
                  role="button"
                  type="button"
                  data-toggle="side-menu"
                >
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                </a>
              </div>
              <div className="navbar-menu">
                <div className="navbar-end">
                  <ul className="navbar-item">
                    <li>
                      <a className="navbar-item has-text-light" href="#">
                        About
                      </a>
                    </li>
                    <li>
                      <a className="navbar-item has-text-light" href="#">
                        Company
                      </a>
                    </li>
                    <li>
                      <a className="navbar-item has-text-light" href="#">
                        Services
                      </a>
                    </li>
                    <li>
                      <a className="navbar-item has-text-light" href="#">
                        Testimonials
                      </a>
                    </li>
                  </ul>
                  <div className="navbar-item is-hidden-mobile pl-0">
                    <a className="button is-primary" href="#">
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <img
            className="is-absolute is-left-0 is-top-0 mt-32 is-hidden-touch"
            src="zeus-assets/icons/dots/yellow-dot-left-bars.svg"
            alt=""
          />
          <img
            className="is-absolute is-right-0 is-top-0 mt-80 is-hidden-touch"
            src="zeus-assets/icons/dots/red-dot-right-shield.svg"
            alt=""
          />
          <section className="is-relative section">
            <div className="container has-text-centered">
              <span className="is-size-7">
                <small className="has-text-info has-text-weight-semibold">
                  What's new at Shuffle
                </small>
              </span>
              <h2 className="has-mw-5xl mx-auto mt-8 mb-8 mb-12-desktop title is-1 is-size-2-mobile has-text-white">
                Take care of your performance every day.
              </h2>
              <p className="has-mw-3xl mx-auto mb-8 mb-12-desktop is-size-5 has-text-grey-dark">
                Build a well-presented brand that everyone will love. Take care
                to develop resources continually and integrity them with
                previous projects.
              </p>
              <div className="buttons is-centered">
                <a className="button is-primary" href="#">
                  Try for free
                </a>
                <a className="button is-info" href="#">
                  Watch demo
                </a>
              </div>
            </div>
          </section>
          <div
            className="is-hidden navbar-side is-fixed is-top-0 is-bottom-0 is-left-0 has-mw-md"
            style={{ width: "75%", zIndex: "9999" }}
          >
            <div
              className="navbar-backdrop is-fixed is-inset-0 has-background-dark"
              style={{ opacity: "75%", zIndex: "50" }}
            ></div>
            <aside
              className="menu is-relative is-flex is-flex-direction-column py-6 px-6 has-background-white"
              style={{
                width: "100%",
                height: "100%",
                zIndex: "50",
                overflowY: "auto",
              }}
            >
              <div className="is-flex is-align-items-center mb-10">
                <a className="mr-auto mb-0" href="#">
                  <span className="navbar-item px-0 title is-5 has-text-dark">
                    <img
                      src="zeus-assets/logo/logo-zeus-red.svg"
                      alt=""
                      style={{ height: "28px" }}
                      width="auto"
                    />
                  </span>
                </a>
                <button
                  className="navbar-close button is-text p-0 mb-2"
                  type="button"
                  aria-label="Close"
                >
                  <svg
                    style={{ width: "18px", height: "18px" }}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewbox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>
              <ul className="menu-list is-size-7">
                <li className="mb-2">
                  <a href="#">About</a>
                </li>
                <li className="mb-2">
                  <a href="#">Company</a>
                </li>
                <li className="mb-2">
                  <a href="#">Services</a>
                </li>
                <li className="mb-2">
                  <a href="#">Testimonials</a>
                </li>
              </ul>
              <div className="mt-auto">
                <div className="py-6">
                  <a className="button is-primary is-fullwidth" href="#">
                    Contact Us
                  </a>
                </div>
                <p className="mb-4 has-text-centered has-text-grey-dark">
                  <span>© 2021 All rights reserved.</span>
                </p>
              </div>
            </aside>
          </div>
        </div>
        <h1 className="outline-black shadow-outline">Digital India Startup</h1>
        <h1 className="cred mx-3 text-3xl border border-gray-50 border-solid font-bold md:p-1 shadow-xl underline">
          Hello world!
        </h1>
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
