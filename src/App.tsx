import { RouterProvider } from "react-router-dom";
import router from "./router";
import { ThemeProvider } from "./components/system/theme-provider";
function App() {
  return (
    <>
      <ThemeProvider>
        <RouterProvider router={router}></RouterProvider>
      </ThemeProvider>
    </>
  );
}
export default App;
