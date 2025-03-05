import { motion } from "framer-motion";
import Hero from "@/components/sections/hero";
import Features from "@/components/sections/features";
import Demo from "@/components/sections/demo";
import Contact from "@/components/sections/contact";
import ParticleBackground from "@/components/particle-background";
import { fadeIn } from "@/lib/animations";

export default function Home() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="pt-14"
    >
      <ParticleBackground />
      <Hero />
      <Features />
      <Demo />
      <Contact />
    </motion.div>
  );
}
