import React from "react";
import { Button, Icon, Menu } from "semantic-ui-react";
import {Link} from 'react-router-dom'
function Header() {
  return (
    <div>
      <Menu secondary pointing>
        <Menu.Item as={Link} to="/contacts/create"  style={{fontSize:24}}>New App</Menu.Item>
        <Menu.Item  position="right">
            <Button as={Link} to="/contacts/create" basic primary icon>
                <Icon name="add"></Icon>
            
            Create Contact</Button></Menu.Item>
        <Menu.Item>
            <Button color="red" basic icon>
                <Icon name="log out"></Icon>
            Logout
            </Button>
            </Menu.Item>
      </Menu>
    </div>
  );
}

export default Header;
