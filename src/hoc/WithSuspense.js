import React from "react";
import Loading from "../components/common/Loading/Loading";

export const withSuspense = (Component) => {
    return (props) => {
        return <React.Suspense fallback={<div><div>Loading...</div><div><Loading /></div></div>}>
            <Component {...props}/>
        </React.Suspense>
    };
}