import Link from "next/link"


const menu = [
    {id:0, title:"alvas onguru", href:'/'},
    {id:1, title:"work", href:'work'},
    {id:2, title:"about", href:'about'},
    {id:3, title:"ad agencies read here", href:'ad-agencies-read-here'},
    {id:4, title:"why creativity is important", href:'why-creativity-is-important'},
    {id:5, title:"case studies", href:'case-studies'},
    {id:6, title:"blog", href:'blog'},
    
]


export default function Nav(){
    return(
        <nav className="w-full justify-between flex h-16 bg-primary text-white">
            {menu.map((item)=>(
                <Link 
                className="mx-4 hover:underline"
                href={`/${item.href}`} 
                key={item.id} 
                >
                    {item.title}
                </Link>
            ))}
        </nav>
    )
}