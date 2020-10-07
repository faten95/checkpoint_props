import React from 'react';
import PropTypes from "prop-types";


const MyProfile = (props) => {
    return (
        <div>
            
            <h1 onClick={() => props.handelName(props.name)} > {props.name}</h1>
            {props.children}
            <h6> {props.bio}</h6>
            <h4> {props.profession}</h4>
        </div>
    );
}
MyProfile.propTypes = {
    handelChange: PropTypes.any,
  };


MyProfile.defaultProps = {
    name: "XX",
    bio: "No bio",
    profession: "ingénieur"
   };

export default MyProfile;
