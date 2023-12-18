// ~~~~~~~~~~ MUI ~~~~~~~~~~
import { Card, CardContent, Typography } from "@mui/material";
// ~~~~~~~~~~ Components ~~~~~~~~~~
import LineSpace from "../LineSpace/LineSpace";
import LinksSocial from "../LinksSocial/LinksSocial";
import BookNavBtns from "../BookNavBtns/BookNavBtns";

export default function Preface() {
  return (
    <div className="container">
      <Card elevation={6}>
        <CardContent>
          <Typography variant="h6" sx={{ padding: "20px", marginLeft: "5%" }}>
            WELCOME
          </Typography>
          <div style={{ display: "flex", padding: "20px", marginLeft: "5%" }}>
            <div className="preface-body-left" style={{ width: "50%" }}>
              <Typography sx={{ mt: 2 }}>
                Thank you for purchasing{" "}
                <strong>the Preferred Savings Guide</strong> and for supporting
                local groups and organizations.
                <LineSpace />
                <strong>The Preferred Savings Guide</strong> provides you the
                opportunity to enjoy savings at nationally known and local
                businesses all year long. Please follow all the rules pertaining
                to use of the coupons and any bonus offers.
                <LineSpace />
                Thank you for your business!
                <LineSpace />
                Wendy & Chris Allen
              </Typography>
            </div>
            <div style={{ flexGrow: 1 }}></div>
            <div className="preface-body-right" style={{ marginRight: "8%" }}>
              <Typography sx={{ mt: 2 }}>
                CONTACT US AND FOLLOW ON SOCIAL MEDIA
                <LineSpace />
                <a
                  href="mailto:Wendy@ThePreferredSavingsGuide.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wendy@ThePreferredSavingsGuide.com
                </a>
                <LineSpace />
                (701) 566-0527
                <LineSpace />
                <LinksSocial />
                {/* <LineSpace /> */}
                <br />
                Visit our website at: <br />
                <a
                  href="https://www.thepreferredsavingsguide.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  thepreferredsavingsguide.com
                </a>
              </Typography>
            </div>
          </div>
        </CardContent>
      </Card>
      <BookNavBtns />
    </div>
  );
}
