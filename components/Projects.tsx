import {getProjects} from "@/sanity/sanity-utils"
import Image from "next/image";
import Link from "next/link";
async function Projects() {
  const projects = await getProjects() ;
  return (
    <div className='bg-[#7f705c] text-white min-h-screen flex justify-center items-center flex-col gap-6 py-[80px]'>
      <h1 className="text-[80px] md:text-[160px] lg:text-[200px] font-thin text-center">MY PROJECT!</h1>
      <div className="container mx-auto flex flex-col lg:flex-row justify-center items-start gap-8 px-4 ">
        {projects.map(project  => (
          <Link href={`/projects/${project._id}`} key={project._id} className="cursor-pointer  bg-black flex-1 flex flex-col  justify-center items-center  rounded-lg overflow-hidden">
            {project.image ?  <Image src={project.image} alt="image" width={550} height={550} className="" /> : <></>}   
            <div className="p-6 w-full">
              <h1 className="text-center text-3xl pb-[10px]">{project.name}</h1>
              <p>{project.slug}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Projects
