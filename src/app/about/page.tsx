import Image from "next/image";

const logos = [
    {src:'/mcannlogo.png', alt:"MCann Erikson"},
    {src:'/ddblogo.png', alt:"DDB"},
    {src:'/ogilivylogo.png', alt:"Ogilivy"},
    {src:'/justdiggitlogo.png', alt:"Justdiggit"}
]
export default function AboutPage(){
    return(
        <div className="p-12 gap-5 grid">
            <div className="flex flex-col md:flex-row justify-between">
                <div>
                    <p>
                        I’m Alvas Onguru, a creative leader, strategist, and storyteller with over 25 years of experience
                        shaping brands and communication across Africa and beyond. My work lives at the intersection
                        of business strategy, creativity, and cultural insight—helping organizations translate their
                        purpose into powerful ideas that move people and drive growth.
                    </p>
                    <br/>
                    <p>
                        As a Creative Consultant, I partner with corporates and SMEs to build meaningful brands, guide
                        advertising and communication agencies seeking fresh creative direction, and support NGOs
                        and nonprofits in telling human-centered stories that inspire social and behavioral change.
                    </p>
                </div>
                <Image 
                src="https://picsum.photos/id/300/600/400" 
                alt="About Image"
                className="border"
                width={800}
                height={400}
                
                />
        </div>
            <p>
                    My career has spanned leadership roles in global and regional agencies — from McCann
                    Erickson and DDB, to Ogilvy and ZK Advertising, and as Chief Creative Officer and Managing
                    Partner at OG+A — where I led award-winning campaigns for development, finance, and
                    sustainability clients. Today, as Global Head of Communications &amp; Partnerships at Justdiggit
                    Foundation, I lead creative strategies that connect global audiences with climate action and
                    regeneration movements.
            </p>
            <div className="flex flex-col md:flex-row justify-between mx-10">
            {/* {logos.map((l) => (
                <Image 
                    key={l.src}
                    src={l.src} 
                    alt={l.alt}
                    width={300}
                    height={100}
                    />
            ))} */}
            </div>
            <p>
                An MBA graduate from the Berlin School of Creative Leadership, I’ve been a passionate student
                of the creative economy — exploring how creativity fuels innovation, entrepreneurship, and
                inclusive growth. I bring this lens to every project, blending design thinking, behavioral insight,
                and storytelling to deliver ideas that are not only beautiful but transformative.
                Whether you’re looking to build a brand from scratch, revitalize your communications, outsource
                creative work, or understand the dynamics of the creative economy, I bring clarity, creativity, and
                strategic depth to help your ideas thrive.
                Let’s create work that matters — and make creativity your business advantage.
            </p>
        </div>
    )
}