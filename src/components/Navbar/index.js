import React from 'react'
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileLink } from './NavbarStyledComponent'
import { FaBars } from 'react-icons/fa';
import { useTheme } from 'styled-components';

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const theme = useTheme()
  return (
      <Nav>
          <NavbarContainer>
              <NavLogo to='/'>
                  <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}>
                    <Span>Portfolio</Span>
                  </a>
              </NavLogo>
              <MobileIcon>
                  <FaBars onClick={() => {
                          setIsOpen(!isOpen)
                      }} 
                  />
              </MobileIcon>
              <NavItems>
                  <NavLink href="#about">About</NavLink>
                  <NavLink href='#skills'>Skills</NavLink>
                  <NavLink href='#projects'>Projects</NavLink>
                  <NavLink href='#education'>Education</NavLink>
              </NavItems>
              <ButtonContainer>
                  <GitHubButton href={'https://github.com/Ujala-355'} target="_blank">Github Profile</GitHubButton>
              </ButtonContainer>
              {
                isOpen &&
                <MobileMenu isOpen={isOpen}>
                    <MobileLink href="#about" onClick={() => {
                      setIsOpen(!isOpen)}} 
                    >
                        About
                    </MobileLink>
                    <MobileLink href='#skills' onClick={() => {
                      setIsOpen(!isOpen)}}
                    >
                        Skills
                    </MobileLink>
                    <MobileLink href='#projects' onClick={() => {
                      setIsOpen(!isOpen)}}
                    >
                        Projects
                    </MobileLink>
                    <MobileLink href='#education' onClick={() => {
                      setIsOpen(!isOpen)}}
                    >  
                        Education
                    </MobileLink>
                    <GitHubButton style={{padding: '10px 16px',background: `${theme.primary}`, color: 'white',width: 'max-content'}} href={'https://github.com/Ujala-355'} target="_blank">Github Profile</GitHubButton>
                </MobileMenu>
              }
          </NavbarContainer>
      </Nav>
  )
}
export default Navbar;