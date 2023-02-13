import { NavLink } from 'react-router-dom';
import { Container, Menu } from 'semantic-ui-react';

export default function NavBar() {

    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header>
                    <a href="#home">Home</a>
                </Menu.Item>
                <Menu.Item>
                    <a href="#aboutme">About me</a>
                </Menu.Item>
                <Menu.Item>
                    <a href="#experience">Experience</a>
                </Menu.Item>
                <Menu.Item>
                    <a href="#projects">Projects</a>
                </Menu.Item>
                <Menu.Item as={NavLink} to='/resume' name="Resume" />
            </Container>
        </Menu>
    )
}