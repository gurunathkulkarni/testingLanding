import React from "react";
import { Box, Container, Grid, Heading, Text } from "theme-ui";
import BlockTitle from "components/block-title";
import Image from "components/image";

import icon1 from "assets/app/client1.png";
import icon2 from "assets/app/client3.png";
import icon3 from "assets/app/performance.png";
import icon4 from "assets/app/api.png";

const SERVICES_DATA = [
  {
    icon: icon1,
    title: "ROBERT PROCTOR (CEO - President,MultiSoft Corporation)",
    text: "On behalf of MultiSoft Corporation, we are honrored to provide a testimonial / review of working with Hemangi D.K. and her company(Akshaayu software services) for the past 1.5 years. In looking for a QA tester to do some part time review of some of our projects, we were fortunate to find Hemangi.After working together for a couple months of we recognized the value and attention to detail she brought to our team and brought her on full time QA. Her mission was simply -'make our developers cry', which I don't know if they have, however I do know their attention to higher quality output of work has improved as has our software. As an owner and developer of software for over 34 years, we have never had an individual so adept at Quality Assurance, User Approved Testing, Documentation, and Tracking work completed as Hemangi. We have several departments in our company with different areas of software architecture and UI. Hemangi has the uncanny ability to pickup and understand all aspects of quality software development and proper testing, whether it be from a scrum or agile level of development.If you are looking to work with a QA / Testing individual and / or team we can not highly recommend Hemangi more. I assure you you will not be disappointed with the quality of work.",
  },
  {
    icon: icon2,
    title: "LEANDER BILTGES (CEO DoeeX)",
    text: "For over a year I worked with Akshaayu software services on a very complicated big data project where the QA was our main system tester. In this position she worked close with our lead developer and managed our other testers. During the time we worked with Akshaayu software services, they not only came with solutions, but also with new ideas how to make our system, better, faster and more user friendly. If I would ever need a new UX or UI tester, Akshaayu software services would be the one I would hire instantly..",
  },
  {
    // icon: icon3,
    title: "PATRICK ERIS (Founder)",
    text: "Akshaayu software services did an excellent job testing our Windows application. The turnaround was quick and all specs were followed to our satisfaction. Akshaayu software services even pointed out a few usability issues with one of our UI components!",
  },
  {
    // icon: icon4,
    title: " AMAN K. (SaaS Development, USA)",
    text: "We have hired Akshaayu software services multiple times for full functional testing of significant features in our SaaS application. The work also involved defining and tabulating test cases through UI exploration as well as identifying the test conditions and assertions for each test.They have always exceeded our expectations in all our projects. We were impressed with both the quality and the timeliness. The testing was thorough and systematic. The delivered results included detailed repro-steps, screen-recordings, and issue filings. Most importantly, her work helped us catch and fix important issues before our production releases. Sincerely looking forward to working together again.",
  },
];

const Testimonials2 = () => {
  return (
    <Box sx={styles.services} id="testimonials2">
      <Container>
        <BlockTitle
          // slogan="Testimonials"
          title="Testimonials"
          styles={styles.blockTitle}
        />
        <Grid sx={styles.grid}>
          {SERVICES_DATA.map((service, index) => (
            <Box
              className="service-card"
              sx={styles.serviceCard}
              key={`service-post-${index}`}
            >
              {service.icon ? (
                <Box className="service-icon" sx={styles.icon}>
                  <Image src={service.icon} alt="" />
                </Box>
              ) : null}

              <Heading as="h3">{service.title}</Heading>
              <Text>{service.text}</Text>
            </Box>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials2;

const styles = {
  services: {
    pt: ["80px", null, null, null, null, null, "140px"],
    ".service-card:nth-of-type(2)": {
      ".service-icon": {
        // backgroundImage:
        //   'linear-gradient(320.89deg, #25D9D9 10.83%, rgba(37, 217, 217, 0.5) 88.7%)',
      },
    },
    ".service-card:nth-of-type(3)": {
      ".service-icon": {
        // backgroundImage:
        //   'linear-gradient(319.4deg, #0898E7 5.17%, rgba(8, 152, 231, 0.5) 94.34%)',
      },
    },
    ".service-card:nth-of-type(4)": {
      ".service-icon": {
        // backgroundImage:
        //   'linear-gradient(322.63deg, #FF9066 9.94%, rgba(255, 144, 102, 0.5) 91.14%)',
      },
    },
  },
  blockTitle: {
    textAlign: "center",
  },
  grid: {
    display: "grid",
    gridGap: ["20px", null, null, null, null, "50px"],
    gridTemplateColumns: [
      // '1fr',
      null,
      null,
      // '1fr 1fr',
      null,
      // '1fr 1fr 1fr 1fr',
    ],
  },
  icon: {
    display: "flex",
    ml: "auto",
    mr: "auto",
    width: ["100px", null, null, "110px"],
    height: ["100px", null, null, "110px"],
    justifyContent: "center",
    alignItems: "center",
    // borderRadius: ['20px', null, null, '40px'],
    // backgroundImage:
    //   'linear-gradient(323.91deg, #FFCC40 7.09%, rgba(255, 204, 64, 0.5) 88.82%)',
  },
  serviceCard: {
    textAlign: "center",
    h3: {
      margin: 0,
      fontSize: ["18px", null, null, 3],
      fontWeight: "bold",
      lineHeight: 1,
      color: "black",
      mt: ["30px", null, null],
      mb: ["20px", null, null],
    },
    p: {
      margin: 0,
      fontSize: [0, null, null, "15px"],
      color: "heading_secondary",
      width: "100%",
      maxWidth: [null, null, null, null, "84%", "100%"],
      mx: [null, null, null, null, "auto", "0"],
    },
  },
};
