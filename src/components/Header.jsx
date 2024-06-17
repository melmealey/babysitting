import { Flex, chakra } from '@chakra-ui/react';
import Nav from './Nav';
import { Link as ReactRouterLink } from 'react-router-dom';



export const HeaderFlex = chakra(Flex, {
    baseStyle: {
      backgroundColor: '#6cdae7',
      padding: '15px',
      justifyContent: 'space-around',
      flexDirection: 'column', 
      alignItems: 'center',
    }
  });

export const Header = () => {
    return (
    
        <HeaderFlex>
          <p className='honk-header'>Brynn Pearce</p>
          <Nav />
        </HeaderFlex>
        
       
    );
  };
  
  export default Header;