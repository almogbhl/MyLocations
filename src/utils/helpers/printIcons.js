import React from "react";

import { MdEdit, MdMap, MdSortByAlpha, MdShuffle } from "react-icons/md";

import {
  IoIosAdd,
  IoMdTrash,
  IoIosPricetags,
  IoMdLocate
} from "react-icons/io";

const printIcons = icon => {
  const toolButtonsStyle = {
    color: "white",
    fontSize: "35px",
    position: "absolute",
    top: "2px",
    left: "3px"
  };
  const mainButtonsStyle = {
    color: "white",
    fontSize: "4rem",
    position: "absolute",
    top: "7px",
    left: "10px"
  };

  switch (icon) {
    case "add":
      return <IoIosAdd style={toolButtonsStyle} />;
    case "remove":
      return <IoMdTrash style={toolButtonsStyle} />;
    case "edit":
      return <MdEdit style={toolButtonsStyle} />;
    case "map":
      return <MdMap style={toolButtonsStyle} />;
    case "category":
      return <IoIosPricetags style={mainButtonsStyle} />;
    case "location":
      return <IoMdLocate style={mainButtonsStyle} />;
    case "sorted":
      return <MdSortByAlpha style={toolButtonsStyle} />;
    case "unsorted":
      return <MdShuffle style={toolButtonsStyle} />;
    default:
      break;
  }
};

export default printIcons;
