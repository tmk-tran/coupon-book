import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// ~~~~~~~~~~ MUI ~~~~~~~~~~
import { Card, CardContent, Typography } from "@mui/material";
// ~~~~~~~~~~ Helpers ~~~~~~~~~~
import { couponStore } from "../../hooks/useReduxStore";
// ~~~~~~~~~~ Components ~~~~~~~~~~
import BookNavBtns from "../BookNavBtns/BookNavBtns";
import Coupon from "../Coupon/Coupon";

export default function CouponsList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: "FETCH_COUPONS",
    });
  }, []);

  // const coupons = useSelector((store) => store.coupons);
  const coupons = couponStore();
  console.log(coupons); // confirmed

  return (
    <div className="container">
      <Card elevation={6}>
        <CardContent>
          <Typography variant="h6" sx={{ padding: "20px" }}>
            Coupons
          </Typography>
          <div>
            {coupons.map((coupon, i) => (
              <div key={i}>
                <Coupon coupon={coupon}/>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      <BookNavBtns />
    </div>
  );
}
