import { createClient } from "next-sanity";

import { dataset, projectId, apiVersion, useCdn } from "../sanity/env";

export const sanityClient = createClient({
  dataset: "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: "2024-12-31",
  useCdn: true,
});

