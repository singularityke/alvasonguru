import Link from "next/link"


const menu = [
    {id:0, title:"alvas onguru", href:'/'},
    {id:1, title:"work", href:'work'},
    {id:2, title:"about", href:'about'},
    {id:3, title:"let's talk", href:'lets-talk'}
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