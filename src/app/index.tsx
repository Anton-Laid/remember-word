import { useEffect } from "react";
import "./styles/index.css";
import { AppRouter } from "../shared/router";
import { getLocalStorage } from "../shared/libs/utils";
import useAutorotation from "./store/useAutorotation";

function App() {
  const { setToken } = useAutorotation();

  useEffect(() => {
    const token = getLocalStorage("token");
    if (token) {
      setToken(true);
    }
  }, []);

  return (
    <>
      <AppRouter />
    </>
  );
}

export default App;
