import AllData from '@/components/AllData';
import Image from 'next/image';

const Skills = async () => {
    const res = await AllData();
    const skills = res.skills;
    const data = skills.filter(skill => skill.enabled === true);
    return (
        <div className='mt-10'>
            <div className='text-center'>
                <p>PROFESSIONAL SKILLS</p>
                <p><span className='text-green-500'>MY</span> Talent</p>
            </div>
            <div className='max-sm:flex max-sm:flex-row max-sm:overflow-x-auto max-sm:w-full sm:grid gap-3 sm:grid-cols-3 2xl:grid-cols-4'>
                {data?.map((skill, index) => (
                    <div key={index} className='mx-auto flex-shrink-0'>
                        <div className="relative group">
                            <Image src={skill.image.url} alt={skill.name} width={200} height={200} className="group-hover:scale-125 transition duration-300 ease-in-out" />
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-50 opacity-0 hover:opacity-100 transition duration-300">
                                <p className="rounded text-white bg-red-400 text-2xl">{skill.percentage} %</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


        </div>
    )
}

export default Skills;