import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import BuyElectricityPage from "../pages/BuyElectricityPage";
import addmeter from "../pages/addmeter";
import addclient from "../pages/addclient";

export default function PageRoutes() {
    return (
        <Router>
            {/* <div className="App"> */}
            {/* <NavbarComponent /> */}
            <Route exact path="/" component={BuyElectricityPage} />
            <Route path="/addclient" component={addclient} />
            <Route path="/addmeter" component={addmeter} />
            {/* </div> */}
        </Router>
    )
}
