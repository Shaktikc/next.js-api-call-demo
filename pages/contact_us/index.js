import React from "react";

import axios from "axios";
import { useQuery } from "react-query";
import { Flex } from "@chakra-ui/react";
import { ContactInfo } from "../../Components/contactUs/ContactInfo";
import { ContactForm } from "../../Components/contactus/ContactForm";

const ContactUs = ({ res }) => {
  //
  return (
    <Flex gap={"5rem"} mt="4rem">
      {/* this component is SG in build time by using getStaticProps */}
      <ContactInfo getContactData={res.data} />
      {/* this component is SG by default as inital value is already set */}
      <ContactForm />{" "}
    </Flex>
  );
};

export default ContactUs;

// by getStaticProps the page is available at build time ahead of a user’s request which helps in SEO
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library

  const { data: res } = await axios.get(
    `https://api.theyetitech.com/api/about/`
  );
  console.log("res", res);

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      res,
    },
  };
}
