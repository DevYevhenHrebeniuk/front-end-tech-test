const Hero = () => {
    return (
        <section className="bg-black w-full h-dvh relative overflow-hidden">
            <video muted autoPlay loop className="absolute max-w-none top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-full xl:w-full xl:h-auto">
                <source src="/videos/main-background-video.mp4" type="video/mp4"/>
            </video>
            <div className="absolute bottom-[30px] xl:bottom-[60px] left-[50%] translate-x-[-50%] wrapper px-[15px]">
                <h1 className="text-medium xl:text-xlarge uppercase font-Monument text-white leading-title mb-[20px] xl:mb-[40px]">The world&apos;s first platform for Tokenizing AI blockchain projects</h1>
                <span className="text-small font-SatoshiBold bg-gradient-to-r from-lightBlue to-purple-650 text-transparent bg-clip-text xl:text-medium inline-block py-2">
                    <span className="w-full block bg-gradient-to-r from-lightBlue to-purple-650 h-0.5"></span>
                    Hold the Creon Pass NFT and earn passive income from AI Tools
                    <span className="w-full block bg-gradient-to-r from-lightBlue to-purple-650 h-0.5"></span>
                </span>
            </div>
        </section>
    )
}

export default Hero;