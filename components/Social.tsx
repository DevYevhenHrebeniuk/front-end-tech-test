import TelegramIcon from "@/components/Icons/TelegramIcon";
import TwitterIcon from "@/components/Icons/TwitterIcon";
import DiscordIcon from "@/components/Icons/DiscordIcon";

type Social = {
    classes: string
}

const Social: React.FC<Social> = (props) => {
    return (
        <ul className={`${props.classes} flex gap-[10px]`}>
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
    )
}

export default Social;