import Link from "next/link";

const Button = () => {
    return (
        <Link className="group hover:bg-lightBlue hover:border-lightBlue  font-SatoshiBold border-2 rounded-md overflow-hidden h-[44px] text-center block px-[30px] pt-[5px]" href="/">
            <span className="group-hover:translate-y-[-44px] block transition-transform mb-11">Connect</span>
            <span className="group-hover:translate-y-[-70px] block transition-transform">Connect</span>
        </Link>
    )
}

export default Button;