import React from 'react';
import { Box, Container, Grid, Button, Input, Heading, Text } from 'theme-ui';


import Image from 'components/image';

import img1 from 'assets/app/client1.png';
import img2 from 'assets/app/client2.png';
import img3 from 'assets/app/client3.png';
import img4 from 'assets/app/client4.png';
import img5 from 'assets/app/client5.png';
import img6 from 'assets/app/client6.png';


import bannerImg from 'assets/app/banner.jpg';
import CarouselComponent from 'components/Carousel';

const Banner = () => {
  return (
    <Box sx={styles.banner} id="banner">
      <Container sx={styles.container}>
        <Grid sx={styles.grid}>
          <Box sx={styles.content}>
            <Heading as="h3">
              Great software is built with amazing Testers
            </Heading>
            <Text as="p">
            At Akshaayu Software services, we are a startup focused on providing best software testing services with the highest levels of customer satisfaction. we will do everything we can to meet your expectations. With a variety of offerings to choose from, we’re sure you’ll be happy working with us. Look around our website and if you have any comments or questions, please feel free to contact us. We hope to see you again! Check back later for new updates to our website. There’s much more to come!
            </Text>
            {/* <Box as="form" sx={styles.form}>
              <Box as="label" htmlFor="subscribe" variant="styles.srOnly">
                subscribe
              </Box>
              <Input
                name="subscribe"
                id="subscribe"
                placeholder="Subscribe newsletter"
                sx={styles.form.input}
              />
              <Button type="submit" sx={styles.form.button}>
                Subscribe
              </Button>
            </Box> */}
            
              <Heading as="h6" style={{textAlign:'center'}}>Clients</Heading>
              <Box sx={styles.partner}>
              <Box as="div">
                <Image src={img1} alt=""/>
              </Box>
              <Box as="div">
                <Image src={img2} alt="" />
              </Box>
              <Box as="div">
                <Image src={img3} alt="" />
              </Box>
              <Box as="div">
                <Image src={img4} alt="" />
              </Box>
              <Box as="div">
                <Image src={img5} alt="" />
              </Box>
              <Box as="div">
                <Image src={img6} alt="" />
              </Box>
            </Box>
          </Box>
          <Box sx={styles.image}>
            <Image src={bannerImg} alt="" />
          </Box>
        </Grid>
        {/* <CarouselComponent /> */}
      </Container>
    </Box>
  );
};

export default Banner;

const styles = {
  banner: {
    pt: ['120px', null, null, null, '150px', '200px'],
    pb: ['50px', null, null, null, '60px', null, '0'],
    backgroundColor: '#fffff',
    overflow: 'hidden',
  },
  container: {
    width: [null, null, null, null, null, null, '1390px'],
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: ['1fr', null, null, '1fr 1fr'],
    gridGap: '0',
  },
  content: {
    h3: {
      color: 'black',
      fontWeight: 'bold',
      lineHeight: [1.39],
      letterSpacing: ['-.7px', '-1.5px'],
      mb: ['15px', null, null, null, '20px'],
      width: ['100%'],
      maxWidth: ['100%', null, null, '90%', '100%', '540px'],
      fontSize: [6, null, null, '36px', null, '55px', 9],
    },
    p: {
      fontSize: [1, null, null, 2, null, 3],
      lineHeight: ['26px', null, null, null, 2.33],
      color: 'text_secondary',
      mb: ['20px', null, null, null, null, '30px'],
      width: ['100%'],
      maxWidth: ['100%', null, null, null, null, '410px'],
      br: {
        display: ['none', null, null, null, 'inherit'],
      },
    },
  },
  form: {
    mb: ['30px', null, null, null, null, '60px'],
    display: ['flex'],
    input: {
      borderRadius: ['4px'],
      backgroundColor: '#fff',
      width: ['240px', null, null, null, '315px', null, '375px'],
      height: ['45px', null, null, '55px', null, null, '65px'],
      padding: ['0 15px', null, null, '0 25px'],
      fontSize: [1, null, null, 2],
      border: 'none',
      outline: 'none',
      boxShadow: '0px 10px 50px rgba(48, 98, 145, 0.08)',
    },
    button: {
      fontSize: [1, null, null, null, 2, '20px'],
      borderRadius: ['4px'],
      padding: ['0 15px'],
      ml: ['10px'],
      width: ['auto', null, null, null, '180px'],
    },
  },
  image: {
    img: {
      display: 'flex',
      mixBlendMode: 'darken',
      position: 'relative',
      top: ['0', null, null, null, null, '-40px'],
      maxWidth: ['100%', null, null, null, null, null, '100%'],
    },
  },
  partner: {
    display: 'flex',
    // flexWrap: 'wrap',
    alignItems: 'center',
    // width: '100px',
    mb: ['40px'],
    '> div + div': {
      ml: ['10px', null, null, '20px', null, '30px'],
    },
    img: {
        height: '50px',
      // display: 'flex',
      // width: '300px',
      // height: '100px'
    },
    span: {
      fontSize: [1, null, null, null, 2],
      color: '#566272',
      lineHeight: [1],
      opacity: 0.6,
      display: 'block',
      mb: ['20px', null, null, null, '0px'],
      mr: [null, null, null, null, '20px'],
      flex: ['0 0 100%', null, null, null, '0 0 auto'],
    },
  },
};
