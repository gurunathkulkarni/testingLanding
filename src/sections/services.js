import React from 'react';
import { Box, Container, Grid, Heading, Text } from 'theme-ui';
import BlockTitle from 'components/block-title';
import Image from 'components/image';

import icon1 from 'assets/app/manual.png';
import icon2 from 'assets/app/selenium.png';
import icon3 from 'assets/app/performance.png';
import icon4 from 'assets/app/api.png';

const SERVICES_DATA = [
  {
    icon: icon1,
    title: 'Manual Testing',
    text:
      'Manual Testing is one of the most basc of testing processes.It requires lot of time and efforts but it helps to get confidence in your product, thats its working as expected and there are less bugs or no bugs in main work flows. Manual testing is very much important as "100% automation is not possible." It involves different testing techniques. like Exploratory testing , smoke testing, regression testing. Also creating testcases,test matrix to make sure no requirement is missed.',
  },
  {
    icon: icon2,
    title: 'Test Automation',
    text:
      'Selenium helps us to automate daily monotonus/regular work into script and focus on testing new features. Selenium is a open source automated testing framework used to validate web applications. It supports automation across multiple browsers including headless execution, platforms and programming languages. Selenium Web driver is most popular with Java, C# and python.',
  },
  {
    icon: icon3,
    title: 'Performance testing',
    text:
      'JMeter is used to analyze and measure the performance of web application or a variety of services. Performance Testing means testing checking response time to load a page or test heavy load, multiple and concurrent user traffic. It can also be used for functional test, database server test. Jmeter is entirely written in Java, used to test both web and FTP applications as long as the system supports a Java Virtual Machine (JVM).',
  },
  {
    icon: icon4,
    title: 'API Testing',
    text:
      'API(application programming interfaces) testing involves testing middle layer between the presentation (UI) and the database layer to determine if they meet expectations for functionality, reliability, performance, and security. Different tools like Postman / REST-assured / Ready API / katalon platform and Jmeter are used for api automation testing.There are four different types of APIs commonly used in web services: public, partner, private and composite. Benifits of api testings are its fast ,language and GUI-independent.',
  },
];

const Services = () => {
  return (
    <Box sx={styles.services} id="services">
      <Container>
        <BlockTitle
          
          title="Quality Services provided"
          styles={styles.blockTitle}
        />
        <Grid sx={styles.grid}>
          {SERVICES_DATA.map((service, index) => (
            <Box
              className="service-card"
              sx={styles.serviceCard}
              key={`service-post-${index}`}
            >
              <Box className="service-icon" sx={styles.icon}>
                <Image src={service.icon} alt="" />
              </Box>
              <Heading as="h3">{service.title}</Heading>
              <Text>{service.text}</Text>
            </Box>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  services: {
    pt: ['80px', null, null, null, null, null, '140px'],
    '.service-card:nth-of-type(2)': {
      '.service-icon': {
        backgroundImage:
          'linear-gradient(320.89deg, #25D9D9 10.83%, rgba(37, 217, 217, 0.5) 88.7%)',
      },
    },
    '.service-card:nth-of-type(3)': {
      '.service-icon': {
        backgroundImage:
          'linear-gradient(319.4deg, #0898E7 5.17%, rgba(8, 152, 231, 0.5) 94.34%)',
      },
    },
    '.service-card:nth-of-type(4)': {
      '.service-icon': {
        backgroundImage:
          'linear-gradient(322.63deg, #FF9066 9.94%, rgba(255, 144, 102, 0.5) 91.14%)',
      },
    },
  },
  blockTitle: {
    textAlign: 'center',
  },
  grid: {
    display: 'grid',
    gridGap: ['20px', null, null, null, null, '50px'],
    gridTemplateColumns: [
      '1fr',
      null,
      null,
      '1fr 1fr',
      null,
      // '1fr 1fr 1fr 1fr',
    ],
  },
  icon: {
    display: 'flex',
    ml: 'auto',
    mr: 'auto',
    width: ['80px', null, null, '110px'],
    height: ['80px', null, null, '110px'],
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: ['20px', null, null, '40px'],
    backgroundImage:
      'linear-gradient(323.91deg, #FFCC40 7.09%, rgba(255, 204, 64, 0.5) 88.82%)',
  },
  serviceCard: {
    textAlign: 'center',
    h3: {
      margin: 0,
      fontSize: ['18px', null, null, 3],
      fontWeight: 'bold',
      lineHeight: 1,
      color: 'black',
      mt: ['30px', null, null],
      mb: ['20px', null, null],
    },
    p: {
      margin: 0,
      fontSize: [0, null, null, '15px'],
      color: 'heading_secondary',
      width: '100%',
      maxWidth: [null, null, null, null, '84%', '100%'],
      mx: [null, null, null, null, 'auto', '0'],
    },
  },
};
