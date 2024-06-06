import { createClient } from "@sanity/client";

// TODO: put sanity values in .env file
const client = createClient({
  projectId: "21fy9g0s",
  dataset: "production",
  apiVersion: "2021-03-25",
  useCdn: true,
});

export default client;
