import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { fadeIn, staggerChildren } from "@/lib/animations";

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-3.5rem)] flex items-center relative overflow-hidden">
      <div className="container px-4 py-16 md:py-24">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center justify-center max-w-5xl mx-auto space-y-12"
        >
          <motion.div variants={fadeIn} className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-primary">
                The Future of Enterprise AI
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Transform your business with our advanced multi-agent AI system. Process complex data streams in real-time and unlock unprecedented insights.
            </p>
          </motion.div>

          <motion.div 
            variants={fadeIn}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full p-8 rounded-lg bg-black/20 backdrop-blur"
          >
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-primary animate-pulse" />
              </div>
              <h3 className="text-xl font-semibold">Real-time Processing</h3>
              <p className="text-muted-foreground">Process massive datasets instantly</p>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-blue-500 animate-ping" />
              </div>
              <h3 className="text-xl font-semibold">Adaptive Learning</h3>
              <p className="text-muted-foreground">Self-improving AI systems</p>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-purple-500 animate-bounce" />
              </div>
              <h3 className="text-xl font-semibold">Enterprise Security</h3>
              <p className="text-muted-foreground">Military-grade protection</p>
            </div>
          </motion.div>

          <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg">
              Start Transformation
            </Button>
            <Button size="lg" variant="outline" className="text-lg">
              Watch Demo
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}