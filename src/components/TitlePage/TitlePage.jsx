import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { Card, CardContent, Typography } from "@mui/material";
import LogoPSG from "../LogoPSG/LogoPSG";

function TitlePage() {
  const history = useHistory();
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div className="container">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h2>Welcome, {user.username}!</h2>
        {/* <p>Your ID is: {user.id}</p> */}
      </div>
      <Card elevation={6} onClick={() => history.push(`/preface`)}>
        <CardContent style={{ textAlign: "center" }}>
          <br />
          <LogoPSG />
          <br />
          <Typography variant="h6">
            FARGO / MOORHEAD / WEST FARGO
            <br />
            and Surrounding Communities
          </Typography>
          <br />
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div>
              <Typography variant="h5">$25</Typography>
            </div>
            <div style={{ flexGrow: 1 }}></div>
            <div>
              <Typography>EXPIRES: SEPTEMBER 1, 2024</Typography>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default TitlePage;
