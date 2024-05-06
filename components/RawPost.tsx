import { Span } from "next/dist/trace";
import Image, { StaticImageData } from "next/image";

type rawPostProps = {
    id: string,
    badge?: boolean,
    title: string,
    subtitle: string,
    image: StaticImageData,
    text: string
}

const RawPost = ({id, badge, title, subtitle, image, text}: rawPostProps) => {
    return (
        <div className="group width-[1/3] flex-1  bg-darkGray bg-opacity-60 pb-[34px] relative">
            {badge && <span className="absolute bg-white text-xs  font-SatoshiBold inline-block rounded-[6px] top-[-8px] right-[30px] text-black uppercase px-[6px] leading-[19px]">coming soon</span>}
            <h3 className="font-Monument text-large uppercase px-[30px] pt-[30px] mb-4">{title}</h3>
            <p className="bg-gradient-to-r from-lightBlue to-purple-650 text-transparent bg-clip-text font-SatoshiBold px-[30px] min-h-[58px] mb-[30px]">{subtitle}</p>
            <div className="overflow-hidden w-[93%] mb-7">
                <Image src={image} alt="image" className="transform transition duration-500 group-hover:scale-[1.1]"/>
            </div>
            <p className="px-[30px]">{text}</p>
        </div>
    )
}

export default RawPost;