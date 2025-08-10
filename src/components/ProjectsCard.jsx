import React from "react";

const ProjectsCard = ({ image, name, type, Technologies, link }) => {
  return (
  
    <div
      id="ProjectsCard"
      style={{
        height: "300px",
        backgroundColor: " #242424",
        width: "360px",
        borderRadius: "8px",
        overflow: "hidden",
        marginTop:"10px",
      }}
    >
      <div
        className="image"
        style={{
          height: "150px",
          margin: "15px",
          borderRadius: "8px",
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
    backgroundPosition: "center"
        }}
      >
        {" "}
        
      </div>
      <p
        id="name"
        style={{
          marginTop: "-4px",
          fontSize: "14px",
          marginLeft: "15px",
          color: "#a432f0ff",
          cursor: "pointer",
        }}
      >
        {name}
      </p>
      <p
        style={{
          marginTop: "-4px",
          fontSize: "14px",
          marginLeft: "15px",
          cursor: "pointer",
        }}
      >
        Type:{type}
      </p>
      <p
        style={{
          marginTop: "-4px",
          fontSize: "14px",
          marginLeft: "15px",
          cursor: "pointer",
        }}
      >
        Technologies:{Technologies}
      </p>
      <a href={link}>
        <button
          style={{
            width: "100%",
            fontSize: "14px",
            height: "30px",
            backgroundColor: "#a432f0ff",
            border: "none",
            marginTop: "2px",
            cursor: "pointer",
          }}
        >
          view
        </button>{" "}
      </a>
    </div>

    
    // e remov
  );
};

export default ProjectsCard;
