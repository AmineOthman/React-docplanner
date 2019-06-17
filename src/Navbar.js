import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import './Navbar.css';
import logo1 from './docplanner-logo.PNG';

  class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="container NavBar">
        
        <Navbar color="none" light expand="md">
          <NavbarBrand href="/"><img src={logo1}/> </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/" style={{color:'#00b39b'}}>About us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Career</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Departments
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Marketing & PR
                  </DropdownItem>
                  <DropdownItem>
                    Custumer Success & Sales
                  </DropdownItem>
                  <DropdownItem>
                    IT, Product, Design & UX
                  </DropdownItem>
                  <DropdownItem>
                    Finance & Administration
                  </DropdownItem>
                  <DropdownItem>
                    HR & More
                  </DropdownItem>
                  
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
export default Example;
