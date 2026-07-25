import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import StatusBar from "@/components/StatusBar";
import Hero from "@/components/Hero";
import SocialLinks from "@/components/SocialLinks";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#090909] text-white">

      <Background />

      <Navbar />

      <section className="mx-auto flex min-h-screen max-w-5xl flex-col items-center px-6">

        <div className="mt-32">
          <StatusBar />
        </div>

        <div className="mt-14">
          <Hero />
        </div>

        <div className="mt-20 w-full max-w-xl">
          <SocialLinks />
        </div>

      </section>

    </main>
  );
}