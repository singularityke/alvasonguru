import {SiReact, SiWhatsapp, SiInstagram, SiX, SiSubstack} from '@icons-pack/react-simple-icons'
import {Phone, Mail, Pin} from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
    return(
        <footer className="w-full flex p-8 justify-between bg-primary text-white items-center">
            <div className="">
                <div className='flex gap-2 items-center'>
                        <Mail size={18} />
                        <p>alvas@onguru.africa</p>
                </div>
                 <div className='flex gap-2 items-center'>
                     <Pin size={18} />
                    <p>nairobi, kenya</p>
                 </div>
            </div>
            <div>
                <div className='flex gap-2 items-center'>
                        <Phone size={18} />
                        <p>+254 720 304 147</p>
                </div>
            </div>
            <div className='grid gap-3'>
                <SiInstagram size={20} />
                <SiX size={20} />
                <SiSubstack size={20} />
                <Image 
                src="/linkedin.svg"
                alt="Alvas Onguru LinkedIn"
                width={20}
                height={20}
                />
            </div>
        </footer>
    )
}