import { useEffect } from "react";
import { AppContextProvider } from "./lib/contexts";
import { AppReducer, initialState } from "./lib/contexts/reducers";
import { AppRoutes } from "./routes";

function App() {
  useEffect(() => {
    if (
      localStorage.getItem("color-theme") === "dark" ||
      (!("color-theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <AppContextProvider reducer={AppReducer} initialState={initialState}>
      <AppRoutes />
    </AppContextProvider>
  );
}

export default App;

