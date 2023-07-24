import { PortableTextBlock } from "sanity";

type Page = {
  map(arg0: (project: any) => import("react").JSX.Element): import("react").ReactNode;
  _id:string,
  createdAt:Date,
  title:string,
  slug:string,
  content:PortableTextBlock[],
}

export default Page ;