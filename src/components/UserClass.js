import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
    //console.log(this.props.name+"Child Constructor");
  }

  async componentDidMount() {
    //console.log(this.props.name+"ComponentDid Mount is called");
    const data = await fetch("https://api.github.com/users/HemantKr48");
    const json = await data.json();
    console.log("json", json);
    this.setState({
      userInfo: json,
    });
  }
  render() {
    //console.log(this.props.name+"child render");
    const { name,location } = this.state.userInfo;
    return (
      <div>
        <h2>Name:{name}</h2>
       
        {/* <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Click
        </button> */}
        <h3>Location:{location}</h3>
        <h4>Contact:hemantkumar</h4>
      </div>
    );
  }
}

export default UserClass;
