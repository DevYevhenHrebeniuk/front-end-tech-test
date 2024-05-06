import Image, { StaticImageData } from "next/image";

type wallPostProps = {
    title: string,
    image: StaticImageData,
    text: string
}

const Wallpost = ({title, image, text}: wallPostProps) => {
    return (
        <div className="flex mb-5">
            <div className="pt-[30px] pb-[60px] px-[40px] bg-darkGray bg-opacity-60 rounded-l-[6px]">
                <h3 className="font-Monument text-large mb-[15px]">{title}</h3>
                <p className="text-small">{text}</p>
            </div>
            <div className="w-[453px] shrink-0 rounded-r-[6px] overflow-hidden">
                <Image src={image} alt="Post image" className="block h-full object-cover"/>
            </div>
        </div>
    )
}

export default Wallpost;