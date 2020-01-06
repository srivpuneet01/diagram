import React from "react"
import Header from "./Header"
import Diagram from "../Diagram"
import Sidebar from "./Sidebar"

const Content = ()=>{
    return(<div>
        <Header/>
        <Sidebar/>
        <Diagram/>
    </div>)
}

export default Content