import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Routes";
import { Provider } from "react-redux";
import appStore from "./utils/store/appStore";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
