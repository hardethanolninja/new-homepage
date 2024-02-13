import Image from "next/image";

import SkillUsed from "./SkillUsed";
import Link from "next/link";

const ProjectBox = ({ image, title, description, technologies, link }) => {
  return (
    <Link href={link}>
      <div className='m-8 overflow-hidden bg-gray-100 rounded-md shadow-xl'>
        <Image
          className='shadow-md'
          style={{
            width: "90%",
            height: "250px",
            objectFit: "cover",
            objectPosition: "100% 15%",
            margin: "auto",
            marginTop: "12px",
            borderRadius: "10px",
          }}
          src={image}
          alt={title}
        />
        <div className='px-6 py-4'>
          <div className='mb-2 text-xl font-bold text-gray-800'>{title}</div>
          <p className='text-base text-gray-700'>{description}</p>
        </div>
        <div className='px-6 pt-4 pb-2'>
          <div className='flex flex-wrap'>
            {technologies.map((tech, index) => (
              <SkillUsed key={index} skill={tech} />
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectBox;
