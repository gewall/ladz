import { createContext, useMemo, useReducer } from "react";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const [state, dispatch] = useReducer(props.reducer, props.initialState);

  const data = useMemo(() => {
    return { state, dispatch };
  }, [state]);

  return (
    <AppContext.Provider value={{ ...data }}>
      {props.children}
    </AppContext.Provider>
  );
};
