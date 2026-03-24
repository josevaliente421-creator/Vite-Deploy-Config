import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

declare global {
  interface Window {
    gtag_report_conversion?: (url?: string) => boolean;
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

createRoot(document.getElementById("root")!).render(<App />);
