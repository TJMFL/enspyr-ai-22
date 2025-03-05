import { motion } from "framer-motion";
import { fadeIn, staggerChildren } from "@/lib/animations";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Network, Cpu } from "lucide-react";

const AIVisualizer = ({ type }: { type: string }) => {
  return (
    <div className="relative h-80 bg-black/40 rounded-lg overflow-hidden">
      {type === "multiAgent" && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <Brain className="w-24 h-24 text-primary animate-pulse" />
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute w-3 h-3 bg-primary rounded-full animate-ping" style={{ top: '20%', left: '80%' }} />
              <div className="absolute w-3 h-3 bg-primary rounded-full animate-ping" style={{ top: '80%', left: '20%' }} />
              <div className="absolute w-3 h-3 bg-primary rounded-full animate-ping" style={{ top: '50%', left: '50%' }} />
            </div>
          </div>
        </div>
      )}

      {type === "realTime" && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Network className="w-24 h-24 text-blue-500" />
          <div className="absolute inset-0">
            <div className="w-full h-full flex justify-between items-center px-12">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-1 bg-blue-500/50 rounded-full transform origin-bottom transition-all duration-1000"
                  style={{
                    height: `${Math.random() * 60 + 20}%`,
                    animationDelay: `${i * 0.2}s`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {type === "automation" && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Cpu className="w-24 h-24 text-purple-500" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-48 h-48 border-4 border-purple-500/30 rounded-full animate-spin" />
            <div className="absolute w-32 h-32 border-4 border-purple-500/50 rounded-full animate-spin-slow" />
          </div>
        </div>
      )}
    </div>
  );
};

export default function Demo() {
  return (
    <section id="demo" className="py-16 md:py-24">
      <div className="container px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="space-y-12"
        >
          <motion.div variants={fadeIn} className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
              Enterprise AI in Action
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the power of our multi-agent AI system through these interactive demonstrations
            </p>
          </motion.div>

          <motion.div variants={fadeIn} className="grid gap-8 md:grid-cols-3">
            <Card className="overflow-hidden hover:border-primary transition-all duration-300">
              <CardContent className="p-6">
                <AIVisualizer type="multiAgent" />
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">Multi-Agent System</h3>
                  <p className="text-muted-foreground">
                    Coordinated AI agents working together to process and analyze complex data streams
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:border-primary transition-all duration-300">
              <CardContent className="p-6">
                <AIVisualizer type="realTime" />
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">Real-time Analysis</h3>
                  <p className="text-muted-foreground">
                    Instant processing and visualization of market trends and business metrics
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:border-primary transition-all duration-300">
              <CardContent className="p-6">
                <AIVisualizer type="automation" />
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">Smart Automation</h3>
                  <p className="text-muted-foreground">
                    Intelligent workflow automation that adapts to your business needs
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}