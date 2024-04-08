import * as AdminJSMongoose from "@adminjs/mongoose";
import AdminJS from "adminjs";
import { User } from "../models/User.js";
import { Banner } from "../models/Banner.js";
AdminJS.registerAdapter({
  Resource: AdminJSMongoose.Resource,
  Database: AdminJSMongoose.Database,
});

const adminOptions = {
  branding: {
    companyName: "E-com Dashboard",
  },
  resources: [
    {
      resource: User,
      options: {
        navigation: null,
      },
    },
    {
      resource: Banner,
      options: {
        navigation: null,
      },
    },
  ],
};

// Create an instance of AdminJS with branding
export const admin = new AdminJS(adminOptions);
