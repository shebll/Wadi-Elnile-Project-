"use client";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./sanity/schemas/index";
import imageUrlBuilder from "@sanity/image-url";
const config = defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET as string,
  title: "personal blog",
  basePath: "/admin",
  apiVersion: "2023-19-07",
  plugins: [deskTool()],
  schema: { types: schemaTypes },
  useCdn: true,
});
export const builder = imageUrlBuilder(config);

// Example usage: Get the URL for a specific Sanity image asset
// const imageUrl = builder.image(source).url();
export default config;
