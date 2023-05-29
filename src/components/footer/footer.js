/** @jsx jsx */
import { jsx, Box, Text, Container,Flex } from 'theme-ui';

import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { Link } from 'components/link';
import Logo from 'components/logo';

import menuItems from '../header/header.data';
export default function Footer() {
  return (
    <footer
      sx={{
        variant: 'layout.footer',
        backgroundColor: '#fff',
      }}
    >
      <Container
        sx={{
          variant: 'layout.toolbar',
          justifyContent: ['center', null, null, 'space-between'],
          flexDirection: ['column', null, null, null, 'row'],
          paddingTop: [30, 40],
          paddingBottom: [30, 30],
        }}
      >
        <Box sx={styles.left}>
          <Logo />
          <Text as="p" style={{color:'black',opacity:'1'}}>
            &copy; {new Date().getFullYear()} Akshaayu Software Services Confidential. All Rights reserved.
          </Text>
        </Box>
        <Flex as="nav" sx={styles.nav}>
            {menuItems.map(({ path, label }, i) => (
              <ScrollLink
                activeClass="active"
                sx={styles.nav.navLink}
                to={path}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                key={i}
              >
                {label}
              </ScrollLink>
            ))}
          </Flex>
        {/* <Box sx={styles.right}>
          <Link path="/" label="Home" />
          <Link path="/" label="About us" />
          <Link path="/" label="Services" />
          <Link path="/" label="Testimonials" />
          <Link path="/" label="Contact Us" /> 
         <Link path="/" label="FAQ" />
        </Box> */}
      </Container>
    </footer>
  );
}

const styles = {
  left: {
    display: 'flex',
    flexDirection: ['column', null, 'row'],
    alignItems: 'center',
    p: {
      fontSize: [0, 1],
      color: 'black',
      opacity: 0.6,
      mt: ['10px', null, '0'],
    },
  },
  right: {
    display: ['none', null, null, null, 'flex'],
    fontSize: 2,
    alignItems: 'center',
    color: 'black',
    a: {
      transition: '500ms',
      '&:hover': {
        color: 'primary',
      },
    },
    'a+a': {
      marginLeft: '30px',
    },
  },
  nav: {
    marginLeft:'30px',
    //mx: 'auto',
    '@media screen and (max-width: 960px)': {
      display: 'none',
    },
    navLink: {
      fontSize: '16px',
      color: '#02073E',
      fontWeight: '400',
      cursor: 'pointer',
      lineHeight: '1.2',
      mr: '30px',
      transition: '500ms',
      float:'right',
      ':last-child': {
        mr: '0',
      },
      '&:hover, &.active': {
        color: 'primary',
      },
    },
  },
};
