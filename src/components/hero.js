import React from "react";
import {NavLink} from 'react-router-dom'
import {Navbar,Nav} from 'react-bootstrap'
import Employee from "./employee";
const Hero =({handleLogout})=>
{
    return(
        <section className="hero">
            <Navbar>
                
                
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <NavLink className = "p-2 text-white" to="/">
                            Home
                        </NavLink>
                        
                        <NavLink className = "p-2 text-white" to="/department">
                            Department
                        </NavLink>
                        <NavLink className = "p-2 text-white" to="/employee">
                            Employee
                        </NavLink>

                        
                    </Nav>


                </Navbar.Collapse>
                
                <NavLink className = "butt" to="/" onClick={handleLogout}>
                            Logout
                </NavLink>
            </Navbar>
         
        </section>
    )
}

export default Hero