import { createClient, groq } from "next-sanity";
import ProductMachineType from "@/types/Product";

/* fetching data using groq all projects */
async function getProducts(): Promise<ProductMachineType[]> {
  return createClient({
    projectId: "42h6u44a",
    apiVersion: "2023-07-19",
    dataset: "production",
  }).fetch(
    groq`*[_type=="Product"]
    {
      _id,
      _createdAt,
      name,
      "mainImage" : mainImage.asset->url,
      secImages,
      url,
      content,
      features,
      category,
      description,
    }`
  );
}

/* fetching data using groq specific projects */
async function getProduct(id: string): Promise<ProductMachineType> {
  return createClient({
    projectId: "42h6u44a",
    apiVersion: "2023-07-19",
    dataset: "production",
  }).fetch(
    groq`*[_type == "Product" && _id == $id][0]
    {
      _id,
      _createdAt,
      name,
      "mainImage" : mainImage.asset->url,
      secImages,
      url,
      content,
      features,
      description,
      category,
    }`,
    { id }
  );
}
async function getMachines(): Promise<ProductMachineType[]> {
  return createClient({
    projectId: "42h6u44a",
    apiVersion: "2023-07-19",
    dataset: "production",
  }).fetch(
    groq`*[_type=="Machine"]
    {
      _id,
      _createdAt,
      name,
      "mainImage" : mainImage.asset->url,
      secImages,
      url,
      content,
      features,
      category,
      description,
    }`
  );
}

/* fetching data using groq specific projects */
async function getMachine(id: string): Promise<ProductMachineType> {
  return createClient({
    projectId: "42h6u44a",
    apiVersion: "2023-07-19",
    dataset: "production",
  }).fetch(
    groq`*[_type == "Machine" && _id == $id][0]
    {
      _id,
      _createdAt,
      name,
      "mainImage" : mainImage.asset->url,
      secImages,
      url,
      content,
      features,
      description,
      category,
    }`,
    { id }
  );
}
async function getByName(name: string): Promise<ProductMachineType[]> {
  return createClient({
    projectId: "42h6u44a",
    apiVersion: "2023-07-19",
    dataset: "production",
  }).fetch(
    groq`*[name match $name]
    {
      _id,
      _createdAt,
      name,
      "mainImage" : mainImage.asset->url,
      secImages,
      url,
      content,
      features,
      description,
      category,
    }`,
    { name }
  );
}
export { getProducts, getProduct, getMachines, getMachine, getByName };
