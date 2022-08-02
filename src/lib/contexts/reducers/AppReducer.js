export const initialState = [];

export const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SWITCH_FIXEDSIDEBAR":
      return { ...state, sidebar: { fixed: action.payload } };
    default:
      return state;
  }
};
