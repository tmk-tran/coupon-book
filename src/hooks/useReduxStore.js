import { useSelector } from "react-redux";

// ~~~~~~~~~~ Coupons Store ~~~~~~~~~~
const couponStore = () => {
  return useSelector((store) => store.coupons);
};

export { couponStore };
