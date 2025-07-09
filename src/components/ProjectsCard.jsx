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
          color: "#a273c2",
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
            backgroundColor: "#a273c2",
            border: "none",
            marginTop: "2px",
            cursor: "pointer",
          }}
        >
          view
        </button>{" "}
      </a>
    </div>
  );
};

export default ProjectsCard;
