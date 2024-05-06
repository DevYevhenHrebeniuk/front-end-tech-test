import TelegramIcon from "./Icons/TelegramIcon";
import TwitterIcon from "./Icons/TwitterIcon";
import DiscordIcon from "./Icons/DiscordIcon";
import FooterLogo from "./Icons/FooterLogo";

const Footer = () => {
    return (
        <footer className="flex justify-between text-white pt-[30px] pb-[50px] font-SatoshiRegular text-[16px] relative">
            <div className="mw flex justify-between justify-items-center z-[1]">
                <div className="flex items-center gap-10">
                    <span className="">© Creon 2023. All rights reserved.</span>
                    <ul className="flex gap-[10px]">
                        <li>
                            <a href="/" target="_blank">
                                <TelegramIcon />
                            </a>
                        </li>
                        <li>
                            <a href="/" target="_blank">
                                <DiscordIcon />
                            </a>
                        </li>
                        <li>
                            <a href="/" target="_blank">
                                <TwitterIcon />
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <p className="flex items-center gap-1">Powered by <a href="/" target="_blank" className="footer-logo"><FooterLogo /></a></p>
                </div>
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