// import React from "react"
// // import './App.css'

// const userData=[
//   {
//       name:"Dison T",
//       city:"Nagercoil",
//       description:"FullStackDeveloper",
//       skills:["JavaScript","React JS with Redux","Python with Flask","Sql","Git","Firebase","Bootstrap","Linux"],
//       online:true ,
//       profile:"images/dys.jpg"
//   }
//   // ,{name:"Suthan",
//   //   city:"Nagercoil",
//   //   description:"FullStackDeveloper",
//   //   skills:["JavaScript","React JS with Redux","Python with Flask","Sql","Git","Firebase","Bootstrap","Linux"],
//   //   online:false,
//   //   profile:"images/6223982957589282755.jpg"},{
//   //     name:"Mathan",
//   //     city:"Nagercoil",
//   //     description:"FullStackDeveloper",
//   //     skills:["JavaScript","React JS with Redux","Python with Flask","Sql","Git","Firebase","Bootstrap","Linux"],
//   //     online:false ,
//   //     profile:"images/6226556965849512852.jpg"
//   //   },{
//   //     name:"Anish",
//   //     city:"Nagercoil",
//   //     description:"FullStackDeveloper",
//   //     skills:["JavaScript","React JS with Redux","Python with Flask","Sql","Git","Firebase","Bootstrap","Linux"],
//   //     online:false ,
//   //     profile:"images/6223982957589282743.jpg"
//   //   }
// ]

// function User(props){
//   return(
//     <div className="container">
//     <span className={props.online ? "pro online" : "pro offline"}>{
//       props.online ? "Online" : "Offline"}</span>
//     <img src={props.profile} alt="user" className="img"/>
//     <h3>{props.name}</h3>
//     <h3>{props.place}</h3>
//     <p>{props.description}</p>
//     <div className="buttons">
//       <button className="primary">Message</button>
//       <button className="primary outline">Following</button>
//     </div>
//     <div className="skills">
//       <h6>Skills</h6>
//       <ul>
//         {
//           props.skills.map((value,index)=>(
//             <li key={index}>{value}</li>
//           ))
//         }
//       </ul>
//     </div>
//     <div>
//     </div>
//     </div>
//   )
// }

// const App =()=>{
//   return(
//   <>
//       {userData.map((user,index)=>(
//         <User key={index} name={user.name} place={user.city} description={user.description} skills={user.skills}
//         online={user.online} profile={user.profile}/>
//       ))}

//   </>
    
//   )
// }
// export default App

// ************************************************************************************************

import React, { useState } from "react";
import './App.css';

const App = () => {
  // Initialize the state to store user data
  const [users, setUsers] = useState([]);
  const [userInput, setUserInput] = useState({
    name: '',
    city: '',
    description: '',
    skills: '',
    online: false,
    profile: ''
  });

  // Handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add the new user data to the users array
    setUsers([...users, { ...userInput, skills: userInput.skills.split(',') }]);
    // Reset the form input
    setUserInput({
      name: '',
      city: '',
      description: '',
      skills: '',
      online: false,
      profile: ''
    });
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUserInput({
      ...userInput,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  return (
    <div className="App">
      <h1>User Information</h1>
      <form onSubmit={handleSubmit} className="input-form">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={userInput.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={userInput.city}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={userInput.description}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="skills"
          placeholder="Skills (command separated)"
          value={userInput.skills}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="profile"
          placeholder="Profile Image URL"
          value={userInput.profile}
          onChange={handleChange}
          required
        />
        <label>
          Online:
          <input
            type="checkbox"
            name="online"
            checked={userInput.online}
            onChange={handleChange}
          />
        </label>
        <button type="submit" className="submit-btn">Add User</button>
      </form>

      {/* Display the list of users */}
      <div className="user-list">
        {users.map((user, index) => (
          <User
            key={index}
            name={user.name}
            place={user.city}
            description={user.description}
            skills={user.skills}
            online={user.online}
            profile={user.profile}
          />
        ))}
      </div>
    </div>
  );
};

function User(props) {
  return (
    <div className="container">
      <span className={props.online ? "pro online" : "pro offline"}>
        {props.online ? "Online" : "Offline"}
      </span>
      <img src={props.profile} alt="user" className="img" />
      <h3>{props.name}</h3>
      <h3>{props.place}</h3>
      <p>{props.description}</p>
      <div className="buttons">
        <button className="primary">Message</button>
        <button className="primary outline">Following</button>
      </div>
      <div className="skills">
        <h6>Skills</h6>
        <ul>
          {props.skills.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
