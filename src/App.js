
import {Routes, Route, NavLink} from "react-router-dom"
import React from "react";
import Resume from "./Resume";
import Home from "./Home"
import Modeling from "./Modeling"
import Drone from "./Drone"

function App() {
    return (
        <div className="App">
            <div>
                <nav>
                    <ul>
                        <li>
                            <NavLink exact to={"/"} activeClassName="active" end>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to={"Resume"} activeClassName="active" end>
                                Resume
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to={"Modeling"} activeClassName="active" end>
                                3D Modeling
                            </NavLink>
                        </li>

                        <li>
                        </li>
                    </ul>
                </nav>
        </div>


        <div className={"main"}>

            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route exact path="Resume" element={<Resume />}></Route>
                <Route exact path="Modeling" element={<Modeling />}></Route>
                <Route exact path="Drone" element={<Drone />}></Route>
            </Routes>
        </div>

        </div>
    );
}

export default App;


