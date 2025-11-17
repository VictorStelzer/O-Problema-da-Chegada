import App from "./App";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { GlobalAlert } from "./components/GlobalAlert";
import { ThemeProvider } from "./context/ThemeContext";

import { GlobalAlertDataProvider } from './context/GlobalAlertData';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ThemeProvider>
      <GlobalAlertDataProvider>
        <>
          <App />
          <GlobalAlert />
        </>
      </GlobalAlertDataProvider>
    </ThemeProvider>
  </BrowserRouter>
);
