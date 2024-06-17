import { HeaderFlex } from './Header'
import { Link, chakra } from '@chakra-ui/react'
import { Link as ReactRouterLink, useLocation } from 'react-router-dom'

const StyledLink = chakra(Link, {
  baseStyle: {
    padding: '10px',
    _hover: { textDecoration: 'underline' },
    textAlign: 'center',
    alignSelf: 'center',
  }
})
const isCurrentPage = (path) => {
  const currentPage = useLocation().pathname;
  if (currentPage !== path) {
    return null
  }
  return "page";
}

const Nav = () => {

  return (
    <nav>
      <ul>
        <li><StyledLink as={ReactRouterLink} to='/' aria-current={isCurrentPage('/')} >About Me</StyledLink></li>
      
        <li><StyledLink as={ReactRouterLink} to='/contact' aria-current={isCurrentPage('/contact')} >Contact</StyledLink></li>
      </ul>
    </nav>
  )
}

export default Nav