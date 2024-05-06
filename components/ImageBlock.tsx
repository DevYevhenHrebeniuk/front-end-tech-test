import Image from "next/image";

const ImageBlock: React.FC<{src: string, alt: string, width: number, height: number}> = (props) => {
    return (
        <Image src={props.src} alt={props.alt} width={props.width} height={props.height}/>
    )
}

export default ImageBlock;