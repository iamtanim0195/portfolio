import AllData from "@/components/AllData";
import TestimonialSlide from "@/components/TestimonialSlide";

const Testimonials = async () => {
    const res = await AllData();
    const testimonials = res.testimonials;
    const data = testimonials.filter(testimonial => testimonial.enabled === true);
    return (
        <div className="mt-5">
            <TestimonialSlide data={data} />
        </div>
    )
}

export default Testimonials;