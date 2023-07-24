import Project from "@/types/Projects"
import {createClient, groq} from "next-sanity"


/* fetching data using groq all projects */
async function getProjects() : Promise<Project[]> {
  return createClient({
    projectId:"42h6u44a",
    apiVersion:"2023-07-19",
    dataset:"production"
  }).fetch( 
    groq`*[_type=="project"]
    {
      _id,
      _createdAt,
      name,
      "slug":slug.current,
      "image" : image.asset->url,
      url,
      content
    }`
    )
  }
  
  
/* fetching data using groq specific projects */
async function getProject(id :string) : Promise<Project> {
  return createClient({
    projectId:"42h6u44a",
    apiVersion:"2023-07-19",
    dataset:"production"
  }).fetch( 
    groq`*[_type == "project" && _id == $id][0]
    {
      _id,
      _createdAt,
      name,
      "slug":slug.current,
      "image" : image.asset->url,
      url,
      content
    }`,
    { id }
  );
}

export  {getProject ,getProjects }