import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  // constructor(props) {
  //   super(props);
  //   //console.log("Parent Constructor");
  // }

  // componentDidMount(){
  //  //console.log ("Parent ComponentDid Mount is called");
  // }


  render() {
    //console.log("render Constructor");
    return (
      <div>
        <h1>What things are you buying</h1>
        <User name={"HemantKumar(function)"} />
        <UserClass name={" Hemant Kumar(Class)"} />
       

      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>What things are you buying</h1>
//       <User name={"HemantKumar(function)"} />
//       <UserClass name={" Hemant Kumar(Class)"} />
//     </div>
//   );
// };

export default About;

/*
-Parent Constructor
-Parent render
  
     -first constructor
     -first render

     -second constructor
     -second render
      

     <DOM UPDATED IN SINGLE BATCH>
     -first componentDidMount
     -Second ComponentDidMount

 - Parent ComponentDidMount     



*/