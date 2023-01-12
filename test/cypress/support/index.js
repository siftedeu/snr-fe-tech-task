import "./commands";
import "cypress-pipe";
require("dotenv").config();

Cypress.config({
  baseUrl: Cypress.env("APP_URL"),
  defaultCommandTimeout: 15000, //adding this as the standard default of 4 seconds often isn't enough in headless mode
});
