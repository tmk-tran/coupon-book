// ~~~~~~~~~~ MUI ~~~~~~~~~~
import { Card, CardContent, Typography } from "@mui/material";
// ~~~~~~~~~~ Components ~~~~~~~~~~
import LineSpace from "../LineSpace/LineSpace";
import BookNavBtns from "../BookNavBtns/BookNavBtns";

export default function Rules() {
  return (
    <div className="container">
      <Card elevation={6}>
        <CardContent>
          <Typography variant="h6" sx={{ padding: "20px" }}>
            RULES OF USE
          </Typography>
          <div style={{ display: "flex", gap: "25px", padding: "20px"}}>
            <div className="rules-section-left">
              <Typography sx={{ mt: 2 }}>
                1. COUPONS: You need not carry the entire book with you. Detach
                the coupon and present it prior to your bill being totaled. Read
                each coupon carefully before using. Discounts apply only to the
                items and terms specified in the offer.
                <LineSpace />
                2. DINING OUT...HOW IT WORKS: When ordering two main courses,
                entrees, or items, the restaurant will deduct the price of the
                LEAST EXPENSIVE main course, entree, or item, up to the maximum
                dollar value stated on the coupon. Your coupon need not be
                presented until you finish dining, however, wait staff should be
                informed before the bill is totaled.
                <LineSpace />
                3. HOLIDAYS: Usually are excluded (including Mother's Day,
                Father's Day, Valentine's Day, New Year's Eve, Etc.) Check with
                the establishment with questions since many do welcome your
                holiday business.
              </Typography>
            </div>
            <div className="rules-section-right">
              <Typography sx={{ mt: 2 }}>
                4. OTHER PROMOTIONAL DISCOUNTS: Coupons may not be used with
                other promotional discount offers such as discount priced daily
                specials, special discounted senior citizen rates, early bird
                specials, etc. If in doubt, please check with the establishment.
                <LineSpace />
                5. RMS ENTERPRISES, LLC., (dba Preferred Savings Guide) and/or
                its subsidiaries shall not be responsible if any establishment
                breaches its contract or refuses to accept coupons; however, we
                will attempt to secure compliance. RMS ENTERPRISES, LLC and/or
                its subsidiaries shall not be responsible in the acts of God,
                fire casualties, strike, or other events beyond its control.
              </Typography>
            </div>
          </div>
        </CardContent>
      </Card>
      <BookNavBtns />
    </div>
  );
}
