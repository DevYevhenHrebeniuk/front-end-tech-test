const VideoArticle = () => {
    return (
        <section className="py-[70px]">
            <div className="mw">
                <h2 className="text-xlarge uppercase font-Monument text-white leading-title">Profiting Through</h2>
                <p className="flex justify-end font-Monument text-large bg-gradient-to-r from-lightBlue to-purple-650 text-transparent bg-clip-text uppercase"><span>AI Innovation & Decentralization</span></p>
                <div className="flex gap-10 items-center text-white pt-[30px]">
                    <div className="flex-basis-[67%]">
                        <video muted autoPlay loop className="w-full">
                            <source src="/videos/creon-logo.mp4" type="video/mp4"/>
                        </video>
                    </div>
                    <div className="px-[30px] border-l-[1px] border-darkGray border-r-[1px]">
                        <h3 className="font-SatoshiBold text-medium mb-[28px]">The dynamic community driven business model of the future.</h3>
                        <p className="text-small font-SatoshiRegular">At Creon, we blend the power of AI tools with the dynamic crypto and NFT markets, utilizing an innovative business model to drive profitability. This approach empowers our community, as our NFT and token holders directly benefit from the growth and prosperity of the Creon network, creating a win-win scenario for both our community and for the projects we launch.</p>
                    </div>
                </div>
            </div>
          </section>
    )
}

export default VideoArticle;