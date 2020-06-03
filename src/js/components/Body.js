// eslint-disable-next-line no-unused-vars
import React from "react";

import Profile from "./Profile";
import TabContent from "./TabContent";

const Body = () => {
  // eslint-disable-next-line no-unused-vars
  const omniObject = [
    {
      tabName: "Faculty",
      profile: [
        {
          imgPath: "image.jpg",
          name: "John Doe",
          profession: "Toilet Maker",
          overlaySummary: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
        },
        {
          imgPath: "image.png",
          name: "Jack Green",
          profession: "Software Engineer"
        },
        {
          imgPath: "image.svg",
          name: "John Blue",
          profession: "Toilet Maker Helper"
        }
      ]
    },
    {
      tabName: "About",
      profile: [
        {
          imgPath: "image.jpg",
          name: "John Yellow",
          profession: "Toilet Maker"
        },
        {
          imgPath: "image.png",
          name: "Jack Orange",
          profession: "Warlock"
        },
        {
          imgPath: "image.svg",
          name: "John Blue",
          profession: "MAth Wizard"
        }
      ]
    }
  ];

  return (
    <TabContent>
      <Profile name="John Doe" profession="Math Wizard Warrior" />
      <Profile name="John Doe" profession="Math Wizard Warrior" />
      <Profile name="John Doe" profession="Math Wizard Warrior" />
      <Profile name="John Doe" profession="Math Wizard Warrior" />
      <Profile name="John Doe" profession="Math Wizard Warrior" />
      <Profile name="John Doe" profession="Math Wizard Warrior" />
      <Profile name="John Doe" profession="Math Wizard Warrior" />
    </TabContent>
  );
};

export default Body;
