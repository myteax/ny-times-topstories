import React from "react";
import { Card, Badge } from "react-bootstrap";
import ReactMarkdown from "react-markdown";

const Cards = (props) => {
  return (
    <Card>
      {/* <div > */}
      <Card.Img
        className=""
        style={{ width: "100%" }}
        src={props.data?.multimedia[0].url}
      />
      <Card.Body>
        <div>
          <Card.Title>{props.data?.title} - </Card.Title>
          {props.data?.byline}
        </div>
        <Badge variant="primary">{props.data?.section} </Badge>
        {/* <Card.Text> */}
        <ReactMarkdown>{props.data?.abstract}</ReactMarkdown>
        <a href={props.data?.url}>Read More </a>
        {/* </Card.Text> */}
      </Card.Body>
      {/* </div> */}
    </Card>
  );
};

export default Cards;
