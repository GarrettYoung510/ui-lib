// // import the css file
// import "./test.css";
// console.log("test");

import Tooltip from "./ui/tooltip";
import Dropdown from "./ui/dropdown";
import Tabs from "./ui/tabs";
import Snackbar from "./ui/snackbar";

// create a tooltip
const tooltip = new Tooltip(document.querySelector(".tooltip"));

tooltip.init();

// create dropdowns
const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(dropdown => {
  const instance = new Dropdown(dropdown);
  instance.init();
});

// create tabs
const tabs = new Tabs(document.querySelector(".tabs"));
tabs.init();

// snackbar

const snackbar = new Snackbar();
snackbar.init();

// trigger for snackbar
const button = document.querySelector("button");
button.addEventListener("click", () => {
  snackbar.show("you clicked me!");
});
