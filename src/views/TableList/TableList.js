import React, { useState } from "react";

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

export default function TableList() {
  const [data] = useState([{}, {}, {}, {}, {}, {}, {}, {}]);
  return (
    <GridContainer>
      {data.map(() => (
        <GridItem key={""} xs={12} sm={4} md={3}>
          <div className="card mt-3" style={{ width: "15rem" }}>
            <img className="card-img-top" src="..." alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text"></p>
              <a href="#" className="btn btn-primary">
                See Detail
              </a>
            </div>
          </div>
        </GridItem>
      ))}
    </GridContainer>
  );
}
