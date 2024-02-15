import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AuthLayout from "../components/HOC/AuthLayout";
import SignIn from "../modules/auth/SignIn";
import SignUp from "../modules/auth/SignUp";
// import DraftContainerSwicther from "../modules/draft/Switcher";
import DraftLayout from "../components/HOC/DraftLayout";
// import Connect from "../modules/metamask/test";
import CollectionLayout from "../components/HOC/CollectionLayout";
import CreateCollection from "../modules/collection/CreateCollection";

function Routes() {
    const Routers = createBrowserRouter([
        {
            path: "/", Component: AuthLayout, children: [
                { path: "signin", element: <SignIn /> },
                { path: "signup", element: <SignUp /> },
            ]
        },
        // {
        //     path: "/", Component: DraftLayout, children: [
        //         { path: "draft", element: <DraftContainerSwicther /> },
        //     ]
        // },
        // {
        //     path: "/", children: [
        //         { path: "connect", element: <Connect /> } 
        //     ]
        // },
        {
            path: "/collection", Component: CollectionLayout, children: [
                { path: "create", element: <CreateCollection /> }
            ]
        }
    ]);

    return <RouterProvider router={Routers} />;
}

export default Routes;