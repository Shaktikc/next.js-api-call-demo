import React from "react";
import axios from "axios";
import { useQuery, useMutation } from "react-query";

const baseUrl = "https://api.theyetitech.com";
export const useContactApi = () => {
  async function getContact() {
    const res = await axios.get(`${baseUrl}/api/about/`);
    return res.data.data;
  }
  const {
    data: getContactData,
    error,
    isError: isErrorGetContact,
    isLoading: isLoadingGetContact,
  } = useQuery("getContact", getContact);

  async function postContact(values) {
    const res = await axios.post(`${baseUrl}/api/contact-us/`, values);
    return res;
  }

  const postContactMutation = useMutation(postContact);

  return {
    isErrorGetContact,
    isLoadingGetContact,
    getContactData,
    postContactMutation,
  };
};
