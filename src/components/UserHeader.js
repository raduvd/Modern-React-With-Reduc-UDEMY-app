import React from "react";
import { connect } from "react-redux";

class UserHeader extends React.Component {
  render() {
    if (!this.props.user) {
      return null;
    } else {
      return <div className="header">{this.props.user.name}</div>;
    }
  }
}

const mapStoreToProps = (store, ownProps) => {
  return { user: store.users.find((user) => user.id === ownProps.userId) };
};
export default connect(mapStoreToProps, {})(UserHeader);
