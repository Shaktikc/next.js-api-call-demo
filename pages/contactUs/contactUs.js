import React from "react";
import { ContactForm } from "../../components/ContactForm";
import { ContactInfo } from "../../components/ContactInfo";
import axios from "axios";
import { useQuery } from "react-query";
import { Flex } from "@chakra-ui/react";

const ContactUs = ({ res }) => {
  // const { data } = useQuery("posts", getPosts, {
  //   initialData: res,
  // });
  return (
    <Flex gap={"5rem"} mt="4rem">
      {" "}
      <ContactInfo getContactData={res.data} />
      <ContactForm />
    </Flex>
  );
};

export default ContactUs;

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
