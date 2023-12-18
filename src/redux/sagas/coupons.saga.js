import axios from "axios";
import { takeEvery, put } from "redux-saga/effects";

function* fetchCoupons() {
  try {
    const response = yield axios.get("/api/coupons");
    console.log("FETCH request fetchCouponBooksSaga");
    yield put({ type: "SET_COUPONS", payload: response.data });
  } catch (err) {
    console.log("error in fetching coupons", err);
  }
}

function* addCoupons(action) {
  try {
    console.log(action.payload);
    yield axios.put("/api/coupons", action.payload);
    yield put({ type: "FETCH_COUPONS" });
  } catch (err) {
    console.log("Error in adding a new coupon", err);
  }
}

export default function* coupons() {
  yield takeEvery("FETCH_COUPONS", fetchCoupons);
  yield takeEvery("ADD_COUPONS", addCoupons);
}
