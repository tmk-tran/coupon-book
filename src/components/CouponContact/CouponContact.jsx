import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// ~~~~~~~~~~ MUI ~~~~~~~~~~
import { Card, CardContent, Typography } from "@mui/material";
// ~~~~~~~~~~ Helpers ~~~~~~~~~~
import { couponStore } from "../../hooks/useReduxStore";
// ~~~~~~~~~~ Components ~~~~~~~~~~
import BookNavBtns from "../BookNavBtns/BookNavBtns";

export default function CouponContact() {
  const coupons = couponStore();
  console.log(coupons);

  return (
    <div className="container">
      <Card elevation={6}>
        <CardContent>
          <Typography variant="h6" sx={{ padding: "20px" }}>
            Coupons
          </Typography>
          <div>
            {coupons.map((coupon, i) => (
              <div key={i}>{coupon.business_name}</div>
            ))}
          </div>
        </CardContent>
      </Card>
      <BookNavBtns />
    </div>
  );
}
