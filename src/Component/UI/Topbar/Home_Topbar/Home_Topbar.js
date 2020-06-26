import React, { useState } from 'react';
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
  DropdownItem,
  NavbarText
} from 'reactstrap';

const HomeTopbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const projectList =  [
    { value: 'Project_1', name: 'Project 1' , active: 'true'},
    { value: 'Project_2', name: 'Project 2' },
    { value: 'Project_3', name: 'Project 3' },
    { value: 'Project_4', name: 'Project 4' }
];

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/home">Infosys IaaC Platform</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/Applications">Applications</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/blueprint">BluePrints</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/newresource">Resources</NavLink>
            </NavItem>
{/*             <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Resources
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="/newresource">
                  Create Resource
                </DropdownItem>
                <DropdownItem>
                  Show existing Resources
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
 */}          </Nav>
          <Nav  navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Projects
              </DropdownToggle>
              <DropdownMenu right>
              {projectList.map((e, key) => {
                                    return <DropdownItem
                                        key={key}
                                        value={e.value}
                                        active={e.active}
                                        
                                    >{e.name}</DropdownItem>;
                                })}
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavLink href="/" style={{cursor: 'pointer'}}>Logout</NavLink>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default HomeTopbar;