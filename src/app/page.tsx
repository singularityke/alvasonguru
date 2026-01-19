
import Image from "next/image";
import Hero from "./_components/hero";

export default function Home() {
	return (
			<main className="grid gap-20 p-3 md:p-6 lg:p-8">
					<Hero />
				<div className="grid grid-cols-3 self-center md:flex-row mx-auto justify-between gap-10 w-full">
					{/* {new Array(6).fill(null).map((_, index) => (
						<Image 
						key={index}
						src={`https://picsum.photos/id/${index+200}/300/300`} 
						alt={`Hero Image ${index + 1}`}
						width={300}
						height={300}

						/>
					))} */}
				</div>
			
			

				<div className="flex flex-col lg:flex-row justify-between gap-6 md:gap-8 lg:gap-10 mx-auto w-full">
					<div className="border w-full lg:w-1/3">
						{/* Profile image can go here */}
					</div>
					<div className="w-full lg:w-1/3">
						<p className="text-gray-300 text-lg md:text-sm">
							creative work that works
						</p>
						<p className="text-sm md:text-base">
							I help organizations unlock growth through strategic creativity, turning purpose into powerful
							ideas, stories and experiences that shift culture, move people
							and drive measurable results. If you're ready for clarity, impact and creative
							work that avtually works, you're in the right place.
						</p>
					</div>
					<div className="w-full lg:w-1/3">
						<p className="text-gray-300 text-lg md:text-sm">
							when i'm not creative consulting
						</p>
						<p className="text-lg md:text-base">
							I go fishing - 'coz I was born to fish, 
							but forced to work. Or read a book. Or watch a sports match. 
							Or write a novel. Or make a water colour painting.
						</p>
					</div>
				</div>
			</main>
	);
}
