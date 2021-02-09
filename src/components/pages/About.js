import React from "react";

const About = () => {
  return (
    <div className="container">
      <div className="py-4">
        <h1>About this Project:</h1>
        <p className="lead">
        <h3> => This is React Based Application where Employee's of a particular orgnisation can be managed.<br></br> 
        => This whole project is backeup via a Mock BackEnd Server (json-server).<br></br> 
        => Routing between the pages is working proper.</h3>
        <h3> => The data can be Creatable, Readable, Updatable, and Deletable (CRUD)<br></br> 
        => A combination of Material-UI and ReactStrap has been used for UI<br></br> 
        => Inputs are Editable and Displayed in a Table which are featched via Hooks and Axios </h3>

        
        </p>

      </div>
    </div>
  );
};

export default About;
