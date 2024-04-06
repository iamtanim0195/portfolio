import TimelineTab from "@/components/TimelineTab";
import AllData from "../components/AllData";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const Timeline = async () => {
    const res = await AllData();
    const timeline = res.timeline;
    const education = timeline.filter(timeline => timeline.enabled === true && timeline.forEducation === true);
    const experience = timeline.filter(timeline => timeline.enabled === true && timeline.forEducation === false);
    return (
        <div>
            <TimelineTab education={education} experience={experience} />
        </div>
    );
}

export default Timeline;