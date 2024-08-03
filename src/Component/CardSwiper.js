import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardImg } from "react-bootstrap";

function CardSwiper(props) {
  return (
    <>
      <Card className="p-0 overflow-hidden h-full shadow">
        <div className=" overflow-hidden rounded p-0">
          <CardImg variant="top" src="" />
        </div>
      </Card>
    </>
  );
}

export default CardSwiper;
