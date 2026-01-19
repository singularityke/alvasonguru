'use client'
import { SiApple, SiTesla } from "@icons-pack/react-simple-icons";
import Image from "next/image";
import {motion} from "motion/react";

const important = [
    {
        title:'Drives Innovation and Problem-Solving', 
        description:'Creativity fuels new ideas, products, services, and processes. It helps teams look at challenges from fresh angles and develop innovative solutions that improve efficiency, reduce costs, or create entirely new opportunities.',
        example:'Example: Companies like Apple and Tesla thrive because they continually reimagine products and user experiences.',
        icons:[ SiApple, SiTesla]
    },
     {
        title:'Builds Competitive Advantage', 
        description:'A creative business stands out in crowded markets. When products, branding, or customer experiences are distinctive and emotionally engaging, they attract attention and loyalty. Creativity differentiates a brand from “just another option” to “the only choice that feels right.”',
    },
    {
        title:'Encourages Agility and Adaptation', 
        description:'Creative thinking allows businesses to pivot quickly in response to market shifts, new technologies, or crises. It promotes experimentation, flexibility, and resilience in uncertain times.',
    },
     {
        title:'Inspires Employee Engagement and Retention', 
        description:'Workplaces that value creativity empower employees to contribute ideas and feel ownership over outcomes. This boosts morale, motivation, and job satisfaction—key factors in retaining top talent.',
    },
    {
        title:'Enhances Marketing and Storytelling', 
        description:'Creativity brings brand stories to life. It transforms data and messages into emotionally resonant campaigns that connect deeply with audiences and influence behavior. Great marketing is not just about information—it’s about imagination.',
    },
    {
        title:'Fuels Growth and Profitability', 
        description:'Creative innovations often open up new revenue streams, markets, or partnerships. They also enhance brand equity, allowing companies to command higher prices and customer loyalty.',
    },
     {
        title:'Strengthens Culture and Vision', 
        description:'A creative culture encourages curiosity, collaboration, and continuous learning. Businesses that nurture creativity tend to be more visionary—thinking not just about today’s profits but tomorrow’s possibilities.',
    },

]

export default function WhyCreativityIsImportantPage(){
    return(
        <div className="p-6 md:p-12 grid gap-12 md:gap-20 text-lg md:text-xl">
            <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            >
            <h1 className="text-3xl md:text-5xl font-bold text-left">Why Creativity is Important</h1>

            </motion.div>
            
            <div className="flex justify-between">
                <p className="">
                Creativity is vital to business because it drives innovation, differentiation, and long-term
                success. In today’s fast-changing world, where markets, technologies, and customer
                expectations evolve constantly, creativity enables businesses to adapt, stay relevant, and lead
                rather than follow.

                Businesses should embrace creativity not as a “nice-to-have,” but as a strategic necessity. It
                transforms ordinary organizations into pioneering, resilient, and inspiring brands capable of
                shaping the future.
                </p>
            
            </div>

            <h1 className="text-xl md:text-xl font-bold ">In other words, here’s why creativity is important — and why businesses should embrace it:</h1>

            <div>
                {important.map((imp, index) => (
                    <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    key={imp.title}
                    className="mb-10"
                    >
                        <h2 className="text-2xl md:text-3xl font-semibold mb-2">
                            <span className="text-4xl font-bold">{imp.title.charAt(0)}</span>
                            {imp.title.slice(1)}
                        </h2>
                        <p className="mb-2">{imp.description}</p>
                        {imp.example && (
                            <p className="italic mb-2">Example: {imp.example}</p>
                        )}
                    </motion.div>
                ))}
            </div>






        </div>
    )
}