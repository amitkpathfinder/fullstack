import React, { Component } from "react";
import { connect } from "react-redux";

export class ServiceList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      servicename: "",
      username: "",
      password: "",
    };
  }

  componentDidMount() {
    this.userHandler("http://localhost:3004/services");
  }

  userHandler = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        this.props.addService(json);
      })
      .catch((error) => console.log(error));
  };

  handleSubmit = (event) => {
    const url = "http://localhost:3004/services";
    event.preventDefault();
    const { servicename, username, password } = this.state;

    const requestOptions = {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        service_name: servicename,
        username: username,
        password: password,
      }),
    };

    fetch(url, requestOptions)
      .then((response) => {
        console.log(response);
        this.userHandler(url);
        return response.json();
      })
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>Service Name</label>
          <input
            placeholder="Service Name"
            type="text"
            value={this.state.servicename}
            onChange={(e) => this.setState({ servicename: e.target.value })}
          />
          <label>Username</label>
          <input
            placeholder="username"
            type="text"
            value={this.state.username}
            onChange={(e) => this.setState({ username: e.target.value })}
          />
          <label>Password</label>
          <input
            placeholder="password"
            type="password"
            value={this.state.password}
            onChange={(e) => this.setState({ password: e.target.value })}
          />

          <input type="submit" value="Submit" />
        </form>
        <div>
          <h1>Service List</h1>
          {this.props.services.map((service) => (
            <div key={service.service_id}>{service.service_name}</div>
          ))}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  services: state.services,
});

const addService = (data) => {
  return {
    type: "SERVICE_ACTION",
    payload: data,
  };
};

const mapDispatchToProps = {
  addService,
};

export default connect(mapStateToProps, mapDispatchToProps)(ServiceList);
