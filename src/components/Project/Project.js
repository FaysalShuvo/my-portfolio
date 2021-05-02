import React from "react";
import { Button, Card } from "react-bootstrap";
import { ExternalLink } from "react-external-link/dist/index.cjs";

const Project = ({ project }) => {
  const { image, name, github, live } = project;
  return (
    <div className="project-body">
      <div className="col-md-4 mt-3">
        <Card style={{ width: "18rem", backgroundColor: "black" }}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title className="text-center">{name}</Card.Title>
            <div className="row">
              <div className="col-md-6 text-center">
                <Button variant="light">
                  <ExternalLink href={github}>GitHub</ExternalLink>
                </Button>
              </div>
              <div className="col-md-6  text-center">
                <Button variant="light">
                  <ExternalLink href={live}>Demo</ExternalLink>
                </Button>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Project;
