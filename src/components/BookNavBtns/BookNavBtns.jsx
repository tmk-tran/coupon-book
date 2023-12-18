import React from "react";
import { useHistory } from "react-router-dom";
// ~~~~~~~~~~ MUI ~~~~~~~~~~
import { Button } from "@mui/material";
// ~~~~~~~~~~ Hooks ~~~~~~~~~~
import { btnStyle } from "../../hooks/helpers";
// ~~~~~~~~~~ Components ~~~~~~~~~~
import LineSpace from "../LineSpace/LineSpace";

export default function BookNavBtns() {
  const history = useHistory();

  const prevPage = () => {
    history.goBack(); // Navigate the user back to the previous page
  };

  return (
    <>
      <LineSpace />
      <div style={btnStyle}>
        <Button onClick={prevPage}>Back</Button>
        <Button onClick={() => history.push("/rules")}>Rules</Button>
        <Button onClick={() => history.push("/fundraising")}>Fundraising Information</Button>
        <Button onClick={() => history.push("/coupons")}>Coupons</Button>
      </div>
    </>
  );
}
