const couponsReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_COUPONS":
      return action.payload;
    default:
      return state;
  }
};

export default couponsReducer;
