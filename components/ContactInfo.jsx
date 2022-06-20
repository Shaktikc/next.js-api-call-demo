import React from "react";
import { Box, Flex, Text, Link } from "@chakra-ui/react";
// import { useContactApi } from "../pages/contactUs/useContactApi";

export const ContactInfo = ({ getContactData }) => {
  console.log("getContactData", getContactData);
  // const { getContactData } = useContactApi();
  // console.log("getContactData", getContactData);
  return (
    <Flex direction={"column"} textAlign="end">
      <Text lineHeight="2rem">{getContactData?.site_name}</Text>
      <Text lineHeight="2rem">
        {getContactData?.location1}

        {getContactData?.location2 !== "null" && getContactData?.location2}
      </Text>
      <Text lineHeight="2rem">
        {getContactData?.contact1}
        {getContactData?.contact2 !== "null" && getContactData?.contact2}
      </Text>
      <Text lineHeight="2rem">
        {getContactData?.email1}
        <Box>{getContactData?.email2 !== "null" && getContactData?.email2}</Box>
      </Text>
      <Text lineHeight="2rem">
        <Link to={getContactData?.facebook_link}>
          {getContactData?.facebook_link}
        </Link>
      </Text>
      <Text lineHeight="2rem">{getContactData?.youtube_link}</Text>
      <Text lineHeight="2rem">{getContactData?.instagram_link}</Text>
    </Flex>
  );
};
