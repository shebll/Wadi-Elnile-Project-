import { PortableTextBlock } from "sanity";

type Project = {
  map(arg0: (project: any) => import("react").JSX.Element): import("react").ReactNode;
  _id:string,
  createdAt:Date,
  name:string,
  slug:string,
  image:string,
  url:string,
  content:PortableTextBlock,
}

export default Project ;