/* eslint-disable react/prop-types */
import { nanoid } from "nanoid";
import { createContext } from "react";

export const StoreContext = createContext(null);
export const defaultStore = {
  fullName: "John Doe",
  email: "email@address.com",
  phone: "123456789",
  address: "123 fake st",
  education: [
    {
      id: nanoid(),
      schoolName: "ABC University",
      degree: "Masters in Cool",
      start: "10/20/2020",
      end: "present",
      location: "Massachusetts, USA",
    },
    {
      id: nanoid(),
      schoolName: "ABCDEFG University",
      degree: "Masters in Cool",
      start: "10/20/2020",
      end: "present",
      location: "Massachusetts, USA",
    },
  ],
  experience: [
    {
      id: nanoid(),
      companyName: "Aperature Science",
      title: "Lead Scientist",
      start: "1/6/1970",
      end: "6/18/1976",
      location: "5 miles NW of Menominee, MI",
      description: "Worked with test subjects",
    },
  ],
};
