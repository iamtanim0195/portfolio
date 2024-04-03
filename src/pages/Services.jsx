
import ServicesData from '@/components/ServicesData';
import Slider from '@/components/Slider';

const Services = async () => {
    const res = await ServicesData();
    const data = res.filter(service => service.enabled === true);
    console.log(data)
    return (
        <div className='mt-3 '>
            <Slider data={data} />
        </div>
    );
}

export default Services;
