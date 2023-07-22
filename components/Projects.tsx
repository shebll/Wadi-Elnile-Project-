import {getProjects} from "@/sanity/sanity-utils"
import Image from "next/image";
import Link from "next/link";
async function Projects() {
  const projects = await getProjects() ;
  return (
    <div className='bg-[#7f705c] text-white'>
      <h1 className="text-[80px] md:text-[160px] lg:text-[260px] font-thin">MY PROJECT ...</h1>
      <div className="container mx-auto flex flex-col md:flex-row justify-center  gap-8">
        {projects.map(project  => (
          <Link href={`/projects/${project.slug}`} key={project._id} className="cursor-pointer p-6 rounded-lg bg-black">
            {project.image ?  <Image src={project.image} alt="image" width={550} height={120} /> : <></>}   
            <h1>{project.name}</h1>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Projects
