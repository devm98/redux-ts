import App from "./App";
import ReactDom from "react-dom";
import { store } from "./state";
import { Provider } from "react-redux";

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
