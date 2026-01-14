'use client'
import { motion } from "motion/react"
import { usePathname } from "next/navigation"

export default function Hero(){
    const pathname = usePathname();
    return(
        <motion.h1 
                key={pathname}
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="text-9xl font-bold text-center">
					{pathname === '/' ? 'alvas onguru' : pathname.slice(1)}
	    </motion.h1>
    )
}