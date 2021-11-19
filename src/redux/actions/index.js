export const addItem = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};

export const dellItem = (product) => {
  return {
    type: "DELLITEM",
    payload: product,
  };
};
