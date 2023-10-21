import React from 'react'
import { Container,Navbar,Nav, } from 'react-bootstrap'
import AddBlog from './AddBlog'

function Header({setuploadBlogServerResponse}) {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand><i class="fa-solid fa-blog fa-beat m-2"></i>Travel Blog</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <AddBlog setuploadBlogServerResponse={setuploadBlogServerResponse}/>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header