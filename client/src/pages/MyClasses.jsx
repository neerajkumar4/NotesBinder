import React from "react";
import { ClassCard } from "../components";

const MyClasses = ()=>{
    return(
        <div className="p-3 mx-auto max-w-full">
            <h1 className="text-3xl font-semibold text-center my-7 profile-txt">My Classes</h1>
            <ClassCard />
        </div>
    )
}

export default MyClasses;