
import Social from "@/components/Social";
import FooterLogo from "@/components/Icons/FooterLogo";

const Footer = () => {
    return (
        <footer className="flex justify-between text-white pt-[30px] pb-[50px] font-SatoshiRegular text-[16px] relative">
            <div className="wrapper flex flex-col xl:flex-row justify-between justify-items-center z-[1]">
                <div className="flex flex-col xl:flex-row items-center gap-5
                 xl:gap-10">
                    <span className="order-2">© Creon 2023. All rights reserved.</span>
                    <Social classes="order-1 xl:order-2"/>
                </div>
                <p className="flex justify-center items-center gap-1">Powered by <a href="/" target="_blank" className="footer-logo"><FooterLogo /></a></p>
            </div>
            <div className="w-full absolute z-0 left-0 right-0 bottom-0">
                <div className="absolute w-full h-full left-0 right-0 bottom-0 after:content after:absolute after:left-0 after:w-full after:top-0 after:h-full after:bg-gradient-to-t after:from-[rgba(0,0,0,0)] after:to-[rgba(0,0,0,1)]"></div>
                <video muted autoPlay loop className="w-full">
                    <source src="/videos/roadmap-video.mp4" type="video/mp4"/>
                </video>
            </div>
        </footer>
    )
}

export default Footer;