import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SideVideoBanner from "@/components/SideVideoBanner";
import VideoArticle from "@/components/VideoArticle";
import VisionSection from "@/components/VisionSection";
import Footer from "@/components/Footer";
import rawPosts from "./models/posts";
import RawPost from "@/components/RawPost";
import wallPosts from './models/thread';
import Wallpost from "@/components/Wallpost";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="z-[1] relative text-white">
        <Hero />
        <SideVideoBanner />
        <VideoArticle />
        <VisionSection />
        <div className="mw">
          <div className="flex justify-start gap-10 py-[60px]">
            {rawPosts.map((item, index)=>{
              return <RawPost key={index} {...item} />
            })}
          </div>
          <div className="py-[60px] relative">
            {wallPosts.map((item, index) => {
              return <Wallpost key={"wp-" + index} {...item} />
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
