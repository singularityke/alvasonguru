import { Minus } from "lucide-react";
import Hero from "../_components/hero";


const text1 = [
    {text:'restructure'},
    {text:'rebrand'},
    {text:'digitize'},
    {text:'automate'},
]

const text2 = [
    {text:'Agencies keep chasing efficiency when clients are starving for growth'},
    {text:'CFOs cut costs'},
    {text:'agencies downsize'},
    {text:'strategists are replaced by dashboards'},
    {text:'AI takes over the dashboards'}

]

export default function AdAgenciesPage(){
    return(
        <div className="p-6 md:p-12 grid gap-12 md:gap-20 text-lg md:text-xl">


            <div className="">
                <h1 className="text-3xl md:text-5xl font-bold ">The Death of the Old Agency Model </h1>
                <h1 className="text-3xl md:text-5xl font-bold ">And the Rise of the Creative Consultant</h1>
            </div>
           

           <div className="flex-row justify-center">
            <p className="text-left">
                The advertising industry isn’t just changing it’s collapsing under the weight of an outdated
                model. When global brands stopped growing, agencies stopped mattering. The response from
                holding companies has been predictable restructure, rebrand, digitize, automate.
            </p>

          
            <p className="text-left mt-12 md:mt-18">but not transformative.</p>
           </div>

           
            <h1 className="text-2xl md:text-3xl mt-12 md:mt-18">We're solving for the wrong problem.</h1>

            <div className="">
            {text2.map((t)=> (
                <p
                key={t.text}
                >
                    {"- "+t.text}
                </p>
            ))}
            </div>

            <div>
                <p>
                    Meanwhile, Meta and OpenAI are clear about the direction
                </p>
                <p className="underline">
                    by 2026, brands will input an
                    objective and a budget, and the machines will handle the rest. 
                </p>
            </div>

            <p className="text-left">You cannot out-technology the technology companies.</p>

            <div className="mt-10">
                <h1 className="text-2xl md:text-3xl mt-12 md:mt-18">The real opportunity lies elsewhere - in the creative growth consultancy</h1>
                  <p>Imagine a lean model</p>
            </div>
            <section className="flex flex-col gap-8 md:gap-14 md:flex-row justify-between ">
                <div className="md:w-full">
                     <h1><span className="text-xl md:text-2xl font-bold">15 - 20</span> senior experts</h1>
                    <p>no juniors, no bloated overhead</p>
                </div>
               
                <div className="md:w-full">
                    <h1>combining the analytical rigor of <span className="text-xl md:text-2xl font-bold">McKinsey</span> with the creative audacity of <span className="text-xl md:text-2xl font-bold">Wieden+Kennedy</span>.</h1>
                </div>

                <div className="md:w-full">
                    <h1 className="text-xl md:text-2xl font-bold">Strategy consultants, behavioral economists, and data scientists </h1>
                    <p>diagnose why brands aren’t growing.</p>
                </div>
                <div className="md:w-full">
                    <h1>Then, seasoned creative leaders craft ideas that <span className="text-xl md:text-2xl font-bold">reignite demand</span> and <span className="text-xl md:text-2xl font-bold">build cultural relevance.</span></h1>
                </div>
            </section>
            <div>
                <p>
                    AI handles the execution; humans deliver the breakthrough thinking.
                </p>
                <p>
                    This is where the creative consultant comes in, not as a vendor, but as a growth partner.
                    A consultant who understands brand, behavior, and business. One who can look a CEO in the eye
                    and say:
                </p>
            </div>

            <h1 className="text-xl md:text-2xl text-center mt-10">“You’ve grown 0.6% a year for 15 years. Cost-cutting won’t save you. Creativity will.”</h1>



            <div>
                <p>
                    The future of advertising doesn’t look like advertising. It looks like a small, expert collective
                    growth-obsessed, insight-driven, creativity-led. It’s time for agency owners to stop defending the
                    past and start designing what comes next. The old model is dying. The creative consultancy
                    model agile, intelligent, and deeply human is what’s next.
                </p>
            </div>
     

    
        </div>
    )
}