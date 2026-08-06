import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ImageSlider from "@/components/ImageSlider";
import LoginCard from "@/components/LoginCard";
import WaveBackground from "@/components/WaveBackground";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <WaveBackground />
      <Header />

      <main className="relative z-10 flex flex-1 items-center justify-center px-4 py-6 sm:px-8">
        <div className="flex w-full max-w-6xl flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] shadow-2xl backdrop-blur-sm lg:flex-row lg:p-3">
          <LoginCard />
          <ImageSlider />
        </div>
      </main>

      <Footer />
    </div>
  );
}
