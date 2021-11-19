const initialState = [];

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADDITEM":
      return [...state, action.payload];

    case "DELLITEM":
      return (state = state.filter((item) => item.id !== action.payload.id));

    default:
      return state;
  }
};

export default itemReducer;
