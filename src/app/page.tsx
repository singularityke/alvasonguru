
import Hero from "./_components/hero";

export default function Home() {
	return (
			<main className="grid gap-20 p-3">
			
				<div className="flex justify-between mt-4">
					<div />
					<div className="w-1/3">
						<p>
							I'm a createive consultant
							 working with leaders to sharpen 
							 strategy and storytelling becuase I 
							 believe creativity is the most powerful 
							 force in business
						</p>
					</div>
				</div>

				<div className="flex justify-between gap-10  mx-auto">
					<div className="border w-full">
						{/* Profile image can go here */}
					</div>
					<div>
						<p className="text-gray-300">
							creative work that works
						</p>
						<p className="w-80">
							I help organizations unlock growth through strategic creativity, turning purpose into powerful
							ideas, stories and experiences that shift culture, move people
							and drive measurable results. If you're ready for clarity, impact and creative
							work that avtually works, you're in the right place.
						</p>
					</div>
					<div>
						<p className="text-gray-300">
							when i'm not creative consulting
						</p>
						<p className="w-80">
							I go fishing - 'coz I was born to fish, 
							but forced to work. Or read a book. Or watch a sports match. 
							Or write a novel. Or make a water colour painting.
						</p>
					</div>
				</div>
			</main>
	);
}
