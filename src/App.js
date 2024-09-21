import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/mainStore";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainContainer } from "./components/MainContainer";
import Watch from "./components/Watch";

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body/>,
    children: [
      {
        path: '/',
        element: <MainContainer/>
      },
      {
        path: '/watch',
        element: <Watch/>
      }
    ]
  }
])


function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <RouterProvider router={appRouter}>
          <Body />
        </RouterProvider>
      </div>
    </Provider>
  );
}

export default App;
