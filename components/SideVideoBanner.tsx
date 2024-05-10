const SideVideoBanner = () => {
    return (
        <section className="py-[80px]">
            <div className="wrapper  px-[15px] xl:flex xl:px-0 xl:items-center">
                <div className="xl:w-1/2 mb-6 xl:mb-0">
                    <h2 className="text-medium xl:text-xlarge uppercase font-Monument text-white leading-title mb-[40px]">Creon<br /> pass nft</h2>
                    <p className="font-SatoshiBold bg-gradient-to-r from-lightBlue to-purple-650 text-transparent bg-clip-text text-small xl:text-medium mb-[50px]">The Creon NFT pass unlocks access to AI projects, the Creon launchpad, and a ticket to generate passive income through AI-driven tools</p>
                    <ul className="mb-[55px]">
                        <li>
                            <span className="border-2 border-darkGray rounded-[6px] font-SatoshiRegular text-small text-white inline-block py-[12px] px-[18px] mb-[10px]">Pre-launch investment opportunities for upcoming AI projects</span>
                        </li>
                        <li>
                            <span className="border-2 border-darkGray rounded-[6px] font-SatoshiRegular text-small text-white inline-block py-[12px] px-[18px] mb-[10px]">Free and early access to Creon built AI projects</span>
                        </li>
                        <li>
                            <span className="border-2 border-darkGray rounded-[6px] font-SatoshiRegular text-small text-white inline-block py-[12px] px-[18px] mb-[10px]">Higher allocation limits on the Creon AI Launchpad</span>
                        </li>
                        <li>
                            <span className="border-2 border-darkGray rounded-[6px] font-SatoshiRegular text-small text-white inline-block py-[12px] px-[18px] mb-[10px]">Revenue share distribution from Creon built AI projects</span>
                        </li>
                    </ul>
                    <button className="bg-gradient-to-r transition-all duration-300 ease-in-out from-lightBlue to-purple-650 w-full xl:w-[453px] hover:bg-lightBlue hover:from-lightBlue hover:to-lightBlue text-center text-white font-SatoshiBold text-small rounded-md leading-[54px]">Buy Creon Pass</button>
                </div>
                <div className="xl:w-1/2">
                    <video muted autoPlay loop className="w-full">
                        <source src="/videos/nft-video.mp4" type="video/mp4"/>
                    </video>
                </div>
            </div>
        </section>
    )
}

export default SideVideoBanner;