
"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const services = [
  {
    title: "Interior Design",
    description: "Our interior design services are tailored to create spaces that are not only beautiful but also functional and personal. We work closely with you to understand your vision and bring it to life, ensuring every detail reflects your style.",
  },
  {
    title: "Exterior Design",
    description: "We enhance the curb appeal of your property with our expert exterior design services. From landscaping to facade enhancements, we create a lasting first impression that complements the interior's elegance.",
  },
  {
    title: "Project Management",
    description: "Our comprehensive project management ensures a seamless execution of your design project. We handle all the details, from procurement to installation, to deliver your vision on time and within budget.",
  },
];

const Services = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section id="services" className="py-20 bg-luxury-dark text-luxury-text">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl font-algerian text-center text-luxury-gold mb-12"
        >
          Our Services
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : ""}
          className="grid md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-luxury-gray p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-algerian text-luxury-gold mb-4">{service.title}</h3>
              <p className="font-light tracking-wide">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
