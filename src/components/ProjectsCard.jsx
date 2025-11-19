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
      <div style={{
    padding: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }}>
      <p
        id="name"
        style={{
          marginTop: "-4px",
          fontSize: "16px",
          fontWeight: "600",
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
          fontSize: "12px",
          marginLeft: "15px",
          cursor: "pointer",
        }}
      >
        Type:{type}
      </p>
      </div>
      <p
        style={{
          marginTop: "-6px",
          fontSize: "12px",
          marginLeft: "15px",
          cursor: "pointer",
        }}
      >
        Technologies : {Technologies}
      </p>
     
      <a href={link}>
        <button
          style={{
            width: "100%",
            height: "fit-content",
            fontSize: "14px",
            height: "34px",
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
