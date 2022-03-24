import React, { Component } from "react";
import { connect } from "react-redux";
import style from "./style.module.css";

export class SubUserList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className={style.subUserList}>
          <h1>Sub User List</h1>
          <ul>
            {this.props.userlist.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  userlist: state.users,
});

export default connect(mapStateToProps)(SubUserList);
