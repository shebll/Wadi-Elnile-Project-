import { getProject } from "@/sanity/sanity-utils"

type props ={
  params : {id:string}
}
async function ProjectPage({params} : props) {

  const slug = params.id
  const project = await getProject(params.id)
  return (
    <div>
    </div>
  )
}

export default ProjectPage
