import React from "react";
import { useHistory } from "react-router-dom";
// ~~~~~~~~~~ MUI ~~~~~~~~~~
import { Button, Card, CardContent, Typography } from "@mui/material";
import AssistantDirectionIcon from '@mui/icons-material/AssistantDirection';
// ~~~~~~~~~~ Hooks ~~~~~~~~~~
import {
  allCaps,
  centerDiv,
  centerText,
  styleImage,
} from "../../hooks/helpers";
// ~~~~~~~~~~ Components ~~~~~~~~~~
import LineSpace from "../LineSpace/LineSpace";

export default function Coupon({ coupon }) {
  const history = useHistory();
  return (
    <div className="container">
      <Card elevation={6}>
        <CardContent>
            {/* <Button><AssistantDirectionIcon /></Button> */}
          <div>
            <div style={centerDiv}>
              <img
                src={coupon.logo}
                alt={`Logo for ${coupon.business_name}`}
                style={styleImage}
              />
            </div>
            <LineSpace />
            <div style={centerText}>
              <Typography>{allCaps(coupon.promotion)}</Typography>
              <br />
              <Typography variant="body2">
                {coupon.comment_one ? allCaps(coupon.comment_one) : <></>}
              </Typography>
              <Typography variant="body2">
                {coupon.comment_two ? allCaps(coupon.comment_two) : <></>}
              </Typography>
              <Typography variant="body2">
                {coupon.comment_three ? allCaps(coupon.comment_three) : <></>}
              </Typography>
            </div>
          </div>
          <Button onClick={() => history.push("/coupon-contact")}><AssistantDirectionIcon /></Button>
        </CardContent>
      </Card>
    </div>
  );
}
