import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import routes from "./routes";
import { Toaster } from "sonner";

function App() {
  const router = createBrowserRouter(routes);
  return (
    <div className="App" style={{ overflow: "hidden" }}>
      <RouterProvider router={router} />
      <Toaster />
    </div>
  );
}

export default App;
