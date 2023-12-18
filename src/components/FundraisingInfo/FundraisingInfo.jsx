// ~~~~~~~~~~ MUI ~~~~~~~~~~
import { Card, CardContent, Typography } from "@mui/material";
// ~~~~~~~~~~ Components ~~~~~~~~~~
import LineSpace from "../LineSpace/LineSpace";
import BookNavBtns from "../BookNavBtns/BookNavBtns";
import FundraisingInfoContactList from "../FundraisingInfoContactList/FundraisingInfoContactList";

export default function FundraisingInfo() {
  return (
    <div className="container">
      <Card elevation={6}>
        <CardContent>
          <Typography variant="h6" sx={{ padding: "20px" }}>
            FUNDRAISING INFORMATION
          </Typography>
          <div style={{ display: "flex", padding: "20px" }}>
            <div className="fundraiser-info-left" style={{ width: "65%", marginRight: "25px", paddingRight: "20px" }}>
              <Typography sx={{ mt: 2 }}>
                Are you interested in selling The Preferred Savings Guide as a
                fundraiser?
                <LineSpace />
                The Preferred Savings Guide has been in the Fargo / Moorhead
                area since 1974. The Blue Coupon Book is very recognizable in
                our community, and has withstood the test of time.
                <LineSpace />
                The Preferred Savings Guide is a low risk, high reward option as
                you will receive the books with no upfront costs and you can
                return any unsold books at the end of the sales period.
              </Typography>
            </div>
            <div className="fundraiser-info-right" style={{ marginLeft: "30px", paddingLeft: "20px" }}>
              <Typography sx={{ mt: 2 }}>
                I'd love to visit with you about the selling opportunities that
                are available for you, your organization, or group.
                <LineSpace />
                Feel free to reach out to me.
                <LineSpace />
                <FundraisingInfoContactList />
              </Typography>
            </div>
          </div>
        </CardContent>
      </Card>
      <BookNavBtns />
    </div>
  );
}
