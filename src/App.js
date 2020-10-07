import React from 'react';
import './App.css';
import MyProfile from './Profile/Profile component/MyProfile';
import Myimage from './Assests/cvimg.jpg' ;


function App() {
  const profileStyle = {
    color:"#FFFFFF",
    margin: "40px",
    backgroundColor: "#A56D42",
    border: "5px solid",
    borderRadius: "25px",
  };

  const handelName = (name) => {
    alert(name);
  };

  return (
    <div className="App" style={profileStyle}>
      <MyProfile name="FATEN CHMENGUI" 
      bio="Je suis Faten Chmengui, ingénieur en génie electronique diplomé de FST en juillet 2018." 
      profession="Ingénieur systèmes embarqués" handelName={handelName}>
        <img className="img" src={Myimage} alt ="user" width="200px" height="200px" style={{marginTop:"100px",borderRadius: "50%"}}/>  
        </MyProfile>
    </div>
  );
}

export default App;
