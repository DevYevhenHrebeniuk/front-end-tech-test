import ImageBlock from "./ImageBlock";
import Accordion from "./Accordion/Accordion";

const VisionSection = () => {
    return (
        <section>
            <div className="wrapper px-[15px] xl:flex justify-between">
                <div className="w-full max-w-[699px]">
                    <h2 className="uppercase font-Monument text-medium xl:text-large mb-[32px]">
                        <span className="text-white">Our vision is to support the innovation of AI blockchain projects</span> <span className="bg-gradient-to-r from-lightBlue to-purple-650 text-transparent bg-clip-text">while prioritizing communities and democratizing profits</span>
                    </h2>
                    <div className="xl:ml-[120px]">
                        <ImageBlock src="/images/vision-section.png" alt="Ceron logo" width={836} height={502}/>
                    </div>
                    
                </div>
                <div className="xl:w-[552px] shrink-0">
                    <Accordion />
                </div>
            </div>
        </section>
    )
}

export default VisionSection;