

export default function Footer() {
    return(
        <footer className="w-full flex p-8 justify-between bg-primary text-white items-center">
            <div className="">
                <p>email: alvas@onguru.africa</p>
                <p>based in: nairobi, kenya</p>
            </div>
            <div>
                <p className="text-muted">call me/whatsapp</p>
                <p>+254 720 304 147</p>
            </div>

            <div>
                <p className="text-muted">socials</p>
                <p>instagram</p>
                <p>x (twitter)</p>
                <p>linkedin</p>
                <p>substack</p>
            </div>
        </footer>
    )
}