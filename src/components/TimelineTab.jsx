"use client";
import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const TimelineTab = ({ education, experience }) => {
    return (
        <div>
            <Tabs>
                <TabList>
                    <div className='text-red-500 w-56 mx-auto'>
                        <Tab>Education</Tab>
                        <Tab>Experience</Tab>
                    </div>
                </TabList>

                <TabPanel>
                    <div className='max-sm:flex max-sm:flex-row max-sm:overflow-x-auto max-sm:w-full sm:grid gap-3 sm:grid-cols-3 2xl:grid-cols-4'>
                        {education.map((item, index) => (
                            <div key={index} className='p-3 shadow-lg w-96 '>
                                <p>Company Name: {item.company_name}</p>
                                <p>Company Name: {item.summary}</p>
                                <p>Company Name: {item.startDate}</p>
                                <p>Company Name: {item.endDate}</p>
                                <p>Company Name: {item.jobTitle}</p>
                                <p>Company Name: {item.jobLocation}</p>
                                <p>Bullet Points: {item.bulletPoints}</p>
                            </div>
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='max-sm:flex max-sm:flex-row max-sm:overflow-x-auto max-sm:w-full sm:grid gap-3 sm:grid-cols-3 2xl:grid-cols-4'>
                        {experience.map((item, index) => (
                            <div key={index} className='p-3 shadow-lg w-96 '>
                                <p>Company Name: {item.company_name}</p>
                                <p>Company Name: {item.summary}</p>
                                <p>Company Name: {item.startDate}</p>
                                <p>Company Name: {item.endDate}</p>
                                <p>Company Name: {item.jobTitle}</p>
                                <p>Company Name: {item.jobLocation}</p>
                                <p>Bullet Points: {item.bulletPoints}</p>
                            </div>
                        ))}
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default TimelineTab;
