import Link from "next/link";

const ConnectButton = () => {
    return (
        <Link className="group hover:bg-lightBlue hover:border-lightBlue font-SatoshiBold border-2 rounded-md overflow-hidden h-[42px] xl:h-[44px] text-center block px-[22px] xl:px-[30px]" href="/">
            <span className="group-hover:translate-y-[-38px] block transition-transform h-[38px] leading-[38px]">Connect</span>
            <span className="group-hover:translate-y-[-38px] block transition-transform h-[38px] leading-[38px]">Connect</span>
        </Link>
    )
}

export default ConnectButton;