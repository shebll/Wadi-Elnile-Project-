import Image  from "next/image" 
import { PortableText } from "@portabletext/react"
import { getProject } from "@/sanity/sanity-utils"

type props ={
  params : {id:string}
}
async function ProjectPage({params} : props) {

  const id = params.id
  const project = await getProject(params.id)

  // console.log(params.id)
  // console.log(project)
  return (
    <div className="bg-gray-800">
      <Image src={project.image} alt="image" width={1920} height={550} className="absolute -z-10 hidden lg:block " />
      <div className="container mx-auto py-20 px-[10px]">
        <h1 className="text-8xl font-bold text-[#d6c1a5;] py-8 " > {project.name} .... </h1>
        <p  className="text-2xl text-gray-200 py-8 " >{project.slug} </p>
        <a href={project.url} target="_blank" rel="noopener noreferrer" 
            className="bg-blue-500 text-white px-5 py-4 rounded-[30px] text-lg font-semibold"> VIEW PROJECT </a>
        <div className="text-2xl text-gray-200 py-4"><PortableText value={project.content} /></div>
      </div>
    </div>
  )
}

export default ProjectPage
