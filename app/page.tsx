import Hero from "@/components/layout/Hero";
import Navbar from "@/components/layout/Navbar";
import ShadeSlider from "@/components/ShadeSlider";
import { BRAND_COLORS } from "@/styles/colors";

export default function Home() {
  return (
    <>
      <ShadeSlider />
      <main
        className="w-full"
        style={{
          background: `linear-gradient(135deg,
            ${BRAND_COLORS.background.dark},
            ${BRAND_COLORS.background.mid},
            ${BRAND_COLORS.background.light}
          )`,
        }}
      >
        <Navbar />
        <Hero />
      </main>
    </>
  );
}
