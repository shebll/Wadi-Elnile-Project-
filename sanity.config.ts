import { defineConfig } from "sanity";
import {deskTool} from "sanity/desk";
import schemas from "./sanity/schemas/index";


const config = defineConfig({
  projectId: "42h6u44a",
  dataset:"production",
  title:"personal blog",
  basePath:"/admin",
  apiVersion:"2023-19-07",
  plugins :[deskTool()],
  schema:{ types:schemas}
});
export default config;