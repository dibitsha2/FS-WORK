
import { useState } from 'react';

const reviews = [
    {
        quote: "Their architectural solutions are not just buildings; they are landmarks. The new corporate tower has become an iconic part of the city skyline.",
        name: "Eleanor Ainsworth",
        title: "Founder, Ainsworth Enterprises"
    },
    {
        quote: "A seamless and inspiring process. They captured the essence of our vision and elevated it beyond our wildest dreams. The private villa is a true work of art.",
        name: "Constantine Drakos",
        title: "Shipping Magnate"
    },
    {
        quote: "The epitome of luxury and design excellence. They transformed our residence into a sanctuary of elegance and comfort.",
        name: "Isabella Rothschild",
        title: "Philanthropist"
    },
    {
        quote: "Working with them was a dream. Their attention to detail and creative vision are unparalleled. Our new headquarters is a masterpiece.",
        name: "Alistair Vanderbilt",
        title: "Chairman, Vanderbilt Holdings"
    },
    {
        quote: "The new boutique hotel is a testament to their genius. From the initial concept to the final execution, their team demonstrated exceptional professionalism.",
        name: "Santiago Montoya",
        title: "CEO, Celestial Hotels Group"
    },
    {
        quote: "A truly professional and reliable partner. They are the best in the business.",
        name: "Susan Williams",
        title: "Director, A Third Company"
    },
    {
        quote: "I was blown away by the quality of the work. I will definitely be coming back for more.",
        name: "Peter Jones",
        title: "Freelancer"
    },
    {
        quote: "The team was amazing to work with. They delivered everything on time and exceeded my expectations.",
        name: "Jane Smith",
        title: "Marketing Manager, Another Co."
    },
    {
        quote: "This is the best service I have ever used. I highly recommend it to everyone.",
        name: "John Doe",
        title: "CEO, Company Inc."
    }
];

const ClientReviews = () => {
    const [selectedReview, setSelectedReview] = useState<number | null>(null);
    const duplicatedReviews = [...reviews, ...reviews, ...reviews, ...reviews];

    const handleReviewClick = (index: number) => {
        setSelectedReview(index);
    };

    const handleCloseReview = () => {
        setSelectedReview(null);
    };

    return (
        <section id="client-reviews" className="py-32 bg-luxury-dark-secondary font-calibri">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <span className="text-luxury-gold text-sm font-light tracking-[0.3em] uppercase mb-6 flex items-center justify-center">
                        <div className="w-12 h-0.5 bg-luxury-gold mr-4"></div>
                        Testimonials
                        <div className="w-12 h-0.5 bg-luxury-gold ml-4"></div>
                    </span>
                    <h2 className="text-5xl md:text-6xl font-algerian text-luxury-text mb-8">
                        What Our Clients Say About Us
                    </h2>
                </div>
                <div className="relative w-full overflow-hidden" onClick={handleCloseReview}>
                    <div className={`absolute left-0 top-0 bottom-0 w-64 bg-gradient-to-r from-luxury-dark-secondary to-transparent z-10 pointer-events-none ${selectedReview !== null ? 'hidden' : ''}`}></div>
                    <div className={`flex w-max ${selectedReview === null ? 'animate-scroll' : ''}`}>
                        {duplicatedReviews.map((review, index) => (
                            <div key={index} 
                                 className={`flex-shrink-0 w-96 mx-4 transform transition-transform duration-500 ${selectedReview !== null ? (selectedReview % reviews.length === index % reviews.length ? 'scale-125 z-20' : 'scale-75 blur-sm') : ''}`}
                                 onClick={(e) => { e.stopPropagation(); handleReviewClick(index); }}>
                                <div className="bg-luxury-dark p-8 rounded-2xl border border-luxury-gold/20 shadow-royal aspect-square flex flex-col justify-center items-center">
                                    <div className="text-center">
                                        <p className="text-luxury-text-muted italic text-lg mb-6">\"{review.quote}\"</p>
                                        <p className="font-algerian text-luxury-gold text-xl">{review.name}</p>
                                        <p className="text-luxury-text-muted text-sm">{review.title}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={`absolute right-0 top-0 bottom-0 w-64 bg-gradient-to-l from-luxury-dark-secondary to-transparent z-10 pointer-events-none ${selectedReview !== null ? 'hidden' : ''}`}></div>
                </div>
            </div>
        </section>
    );
};

export default ClientReviews;
