import { createBrowserRouter } from "react-router-dom";
import Signup from "../auth/Signup";
import Main from "../main/Main";

const routes = new createBrowserRouter(
    [
        {
            path: "/",
            element: <Main/>,
            children: [
                {
                    path: "/signup",
                    element: <Signup/>
                }
            ]
        },

    ]
)

export default routes