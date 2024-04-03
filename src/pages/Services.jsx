
import AllData from '@/components/AllData';
import Slider from '@/components/Slider';

const Services = async () => {
    const res = await AllData();
    const services = res.services;
    const data = services.filter(service => service.enabled === true);
    return (
        <div className='mt-3 '>
            <Slider data={data} />
        </div>
    );
}

export default Services;
