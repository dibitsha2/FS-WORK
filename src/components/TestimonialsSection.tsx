
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
    {
        quote: "This is the best service I have ever used. I highly recommend it to everyone.",
        name: "John Doe",
        title: "CEO, Company Inc.",
    },
    {
        quote: "The team was amazing to work with. They delivered everything on time and exceeded my expectations.",
        name: "Jane Smith",
        title: "Marketing Manager, Another Co.",
    },
    {
        quote: "I was blown away by the quality of the work. I will definitely be coming back for more.",
        name: "Peter Jones",
        title: "Freelancer",
    },
    {
        quote: "A truly professional and reliable partner. They are the best in the business.",
        name: "Susan Williams",
        title: "Director, A Third Company",
    },
    {
        quote: "Working with them was a dream. Their attention to detail and creative vision are unparalleled. Our new headquarters is a masterpiece.",
        name: "Alistair Vanderbilt",
        title: "Chairman, Vanderbilt Holdings"
    },
    {
        quote: "The epitome of luxury and design excellence. They transformed our residence into a sanctuary of elegance and comfort.",
        name: "Isabella Rothschild",
        title: "Philanthropist"
    },
    {
        quote: "From the initial concept to the final execution, their team demonstrated exceptional professionalism and a deep understanding of our brand's ethos. The new boutique hotel is a testament to their genius.",
        name: "Santiago Montoya",
        title: "CEO, Celestial Hotels Group"
    },
    {
        quote: "Their architectural solutions are not just buildings; they are landmarks. The new corporate tower has become an iconic part of the city skyline.",
        name: "Eleanor Ainsworth",
        title: "Founder, Ainsworth Enterprises"
    },
    {
        quote: "A seamless and inspiring process. They captured the essence of our vision and elevated it beyond our wildest dreams. The private villa is a true work of art.",
        name: "Constantine Drakos",
        title: "Shipping Magnate"
    }
];

const TestimonialsSection = () => {
    return (
        <div className="py-20 bg-luxury-dark text-white">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12">
                    What Our Clients Say
                </h2>
                <Carousel
                    plugins={[
                        Autoplay({
                            delay: 2000,
                            stopOnInteraction: false,
                        }),
                    ]}
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-4">
                        {testimonials.map((testimonial, index) => (
                            <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                    <Card className="bg-transparent border-gray-700">
                                        <CardContent className="flex flex-col items-center justify-center p-6">
                                            <p className="text-lg text-center mb-4">"{testimonial.quote}"</p>
                                            <p className="font-bold">{testimonial.name}</p>
                                            <p className="text-sm text-gray-400">{testimonial.title}</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="text-white" />
                    <CarouselNext className="text-white" />
                </Carousel>
            </div>
        </div>
    );
};

export default TestimonialsSection;
