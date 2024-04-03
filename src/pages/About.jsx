import AboutData from '@/components/AboutData';
import ThemeSwitch from '@/components/ThemeSwitch';
import Image from 'next/image';
import React from 'react'
import { Italianno } from 'next/font/google'

const italianno = Italianno(
    {
        weight: ['400'],
        subsets: ['latin'],
    }
)

const About = async () => {
    const data = await AboutData();
    return (
        <div>
            <div className='flex justify-between'>
                <h1>{data.name}</h1>
                <ThemeSwitch />
            </div>
            <div className='pt-10 flex flex-col'>
                <div>
                    <div className=' w-52 text-center mx-auto'>
                        <p className='uppercase'> hello, my name is</p>
                        <span className='text-4xl'>
                            {data?.name.split(' ').map((word, index) => (
                                <React.Fragment key={index}>
                                    <span
                                        className={index === 0 ? 'text-green-500' : ' '}
                                        style={{ textShadow: '0 2px 5px rgba(0,0,0,0.5)' }}
                                    >
                                        {word}
                                    </span>
                                    {index !== data?.name.split(' ').length - 1 && <>&nbsp;</>}
                                </React.Fragment>
                            ))}
                        </span>
                        <p className={`text-3xl ${italianno.className}`}>i am {data?.title}</p>
                    </div>

                </div>
                <div className='flex flex-col-reverse '>
                    <div >
                        <p className='text-center'>{data?.description}</p>
                        <div className='text-black sm:text-center w-[75vw] mx-auto mt-3 bg-slate-200 p-1 rounded '>
                            <p>Address: {data?.address}</p>
                            <p>Phone Number: {data?.phoneNumber}</p>
                            <p>Email: {data?.contactEmail}</p>
                        </div>
                    </div>
                    <div>
                        <Image
                            src={(data.avatar.url) ? data.avatar.url : data?.alternateAvatars.url}
                            width={500}
                            height={500}
                            alt={`Picture of the ${data?.name}`}
                            className='rounded-full mx-auto'
                        />
                        <p className='w-[65vw] mx-auto p-2 bg-white text-sm text-black rounded-full shadow text-center '>{data?.quote}</p>
                        <div className='flex gap-2 p-2 w-72 mx-auto'>
                            <p className='bg-white text-sm text-black rounded-full shadow text-center w-40 '>
                                <span>{data?.exp_year}</span> <span className='text-green-500'>+</span> YEARS OF <span className='text-green-500'>EXPERIENCE</span>
                            </p>
                            <p className='bg-white text-sm text-black rounded-full shadow text-center w-40'>
                                <span>{data?.some_total}</span> COMPLETED  <span className='text-green-500'>PROJECTS</span>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default About;