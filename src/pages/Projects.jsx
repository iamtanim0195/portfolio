"use client"

import { useState, useEffect } from 'react';
import AllData from '@/components/AllData';
import Modal from '@/components/Modal';
import Image from 'next/image';

const Projects = ({ projectsData }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        if (projectsData) {
            const filteredData = projectsData.filter(project => project.enabled === true);
            setData(filteredData);
        }
    }, [projectsData]);

    return (
        <div>
            <p className='text-center'>My Recent Work</p>
            <div className='max-sm:flex max-sm:flex-row max-sm:overflow-x-auto max-sm:w-full sm:grid gap-3 sm:grid-cols-3 2xl:grid-cols-4'>
                {data.map((project, index) => (
                    <div key={index} className='mx-auto shadow p-2 transform transition-transform hover:scale-105'>
                        <Image src={project.image.url} alt={project.title} width={500} height={500} />
                        <p>{project.title}</p>
                        <div className="w-32 bg-blue-500 text-white px-4 py-2 rounded-md">
                            <Modal techStack={project.techStack} title={project.title} githuburl={project.githuburl} description={project.description} liveUrl={project.liveurl} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
