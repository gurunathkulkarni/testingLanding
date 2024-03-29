import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Heading,
  Text,
  Button,
  Input,
  Textarea,
} from "theme-ui";
// import { FaAngleRight } from "react-icons/fa";
// import { Link } from "components/link";
import Image from "components/image";
import emailjs from '@emailjs/browser';

import img1 from "assets/ContactUs.jpeg";

const CustomerSupport = () => {
  const [ name, setName ] = useState();
  const [ subject, setSubject  ] = useState();
  const [ email, setEmail ] = useState();
  const [ message, setMessage ] = useState();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log('name',name, value);
    if (name === 'name') {
      setName(value);
    }
    if (name === 'email') {
      setEmail(value)
    }
    if (name === 'subject') {
      setSubject(value);
    }
    if (name === 'body') {
      setMessage(value);
    }
  }

 const handleSubmit = () => {
  if (!email) {
    alert('Please enter email id');
  } else if (!name) {
    alert('please enter name');
  } else if (!message) {
    alert('please enter message');
  } else if (!subject) {
    alert('please enter subject');
  } else {
    var templateParams = {
      email: email,
      name: name,
      message: message,
      subject: subject
  };
  
  const templateCode = 'template_e3nkkpp';
  const serviceCode = 'service_iu6oa3e';
  const publicCode = 'user_MlcnaiO6MkenFZmZlr0Jw';

  emailjs.send(serviceCode,templateCode, templateParams, publicCode)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
       setName('');
       setEmail('');
       setMessage('');
       alert('Thank you for submitting your form. We will get back to you shortly!')
       window.location.reload();
    }, function(err) {
       console.log('FAILED...', err);
    });
  }
  }



  return (
    <Box as="section" id="CustomerSupport" sx={styles.customerSupport}>
      <Container>
        <Grid sx={styles.row}>
          <Box sx={styles.col}>
            <Box sx={styles.content}>
              <Heading as="h3">Contact Us</Heading>
              <Text as="p">
                Mail us on Akshaayu.sup@gmail.com / hemangihere@gmail.com
              </Text>
              <Text as="p" sx={styles.specialText} style={{color:'#343D48',opacity:'1'}}>
                Call us on +91-9880272369
              </Text>
              <Text as="p" sx={styles.specialText} style={{color:'#343D48',opacity:'1'}}>
                <a href="https://www.linkedin.com/in/hemangikurapati/">
                  Connect us on linkedin
                </a>
              </Text>
              <Text as="p" sx={styles.specialText} style={{color:'#343D48',opacity:'1'}}>
                <a href="https://goo.gl/maps/FwvaLFbXxWGzZAAo7">
                  Google Reviews
                </a>
              </Text>
            </Box>
            <Box as="form" sx={styles.form} style={{width:"100%"}}>
              <Input
                onChange={(e) => handleChange(e)}
                name="name"
                id="name"
                placeholder="Name"
                sx={styles.form.input}
                style={{width:"50%",marginRight:'10px'}}
              />
              <Input
                onChange={(e) => handleChange(e)}
                name="email"
                id="email"
                placeholder="Email-id"
                sx={styles.form.input}
                style={{width:"50%",marginLeft:'10px'}}
              />
            </Box>
            <Input
              onChange={(e) => handleChange(e)}
              name="subject"
              id="subject"
              placeholder="Subject"
              sx={styles.form.input}
              style={{width:"100%",marginBottom:"20px"}}
            />
            <Textarea
              onChange={(e) => handleChange(e)}
              name="body"
              id="body "
              placeholder="Message"
              sx={styles.form.inputText}
              style={{width:"100%",marginBottom:"20px",fontSize:"16px"}}

            />
            <Button onClick={()=> handleSubmit()} style={{marginBottom:"20px"}}>Submit</Button>
          </Box>
          <Box sx={styles.col} style={{margin:'auto'}}>
            <Image src={img1} alt="" />
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default CustomerSupport;

const styles = {
  customerSupport: {
    overflow: "hidden",
    pt: ["75px", null, null, null, "0", "80px"],
    pb: ["75px", null, null, null, null, "120px", "210px"],
  },
  row: {
    display: "grid",
    gridGap: [0, null, null, null, "25px", null, "55px"],
    gridTemplateColumns: ["1fr", null, null, null, "1fr 1fr"],
  },
  col: {
    img: {
      maxWidth: ["100%", null, null, "60%", "100%", "none"],
      mx: [null, null, null, "auto", "0"],
      display: [null, null, null, "block"],
      mt: [null, null, null, null, "40px", "0"],
    },
  },
  content: {
    pt: [0, null, null, null, "160px", "10px"],
    mb: [null, null, null, "-40px", "0"],
    position: "relative",
    zIndex: 10,
    paddingLeft: ["12px", null, null, null, "0"],
    paddingRight: ["12px", null, null, null, "0", "75px", "0"],
    pb: ["10px"],
    maxWidth: [null, null, null, "590px", null, "100%"],
    width: ["100%"],
    mx: [null, null, null, "auto", null, "0"],
    textAlign: ["center", null, null, null, "left"],
    h3: {
      fontSize: [5, null, "21px", null, 7, "32px", 8],
      maxWidth: [null, null, null, "400px", "none"],
      mx: [null, null, null, "auto", "0"],
      color: "black",
      fontWeight: "bold",
      letterSpacing: ["-0.5px", null, null, null, null, null, "-1.5px"],
      lineHeight: [1.5, null, 1.25],
      mb: ["30px", null, null, null, "30px"],
    },
    p: {
      fontSize: [0, null, 2, null, "17px"],
      color: "text",
      lineHeight: ["26px", null, null, 1.8, null, 2.06],
      "+p": {
        mt: ["15px", null, null, null, "15px"],
      },
    },
  },
  specialText: {
    color: "heading",
    opacity: 0.6,
  },
  link: {
    color: "primary",
    fontSize: [1, null, 2],
    display: "inline-block",
    verticalAlign: "middle",
    fontWeight: "bold",
    mt: ["10px", null, null, null, "10px"],
    svg: {
      position: "relative",
      top: "3px",
    },
  },
  form: {
    mb: ["10px", null, null, null, null, "20px"],
    display: ["flex"],
    input: {
      borderRadius: ["4px"],
      backgroundColor: "#fff",
      width: ["240px", null, null, null, "315px", null, "375px"],
      height: ["45px", null, null, "55px", null, null, "65px"],
      padding: ["0 15px", null, null, "0 25px"],
      fontSize: [1, null, null, 2],
      border: "none",
      outline: "none",
      boxShadow: "0px 10px 50px rgba(48, 98, 145, 0.08)",
    },
    inputText: {
      borderRadius: ["4px"],
      backgroundColor: "#fff",
      width: ['600px'],
      height: ["245px", null, null, "100px", null, null, "265px"],
      padding: ["0 15px", null, null, "0 25px"],
      fontSize: [1, null, null, 2],
      border: "none",
      outline: "none",
      boxShadow: "0px 10px 50px rgba(48, 98, 145, 0.08)",
    },
    button: {
      fontSize: [1, null, null, null, 2, "20px"],
      borderRadius: ["4px"],
      padding: ["0 15px"],
      ml: ["10px"],
      width: ["auto", null, null, null, "180px"],
    },
  },
};
