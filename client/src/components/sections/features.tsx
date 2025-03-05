import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { fadeIn, staggerChildren } from "@/lib/animations";
import { Brain, Zap, Shield, BarChart, Workflow, Users, Lightbulb, TrendingUp } from "lucide-react";

const features = [
  {
    title: "Future-Focused Architecture",
    description: "Built on advanced AI multi-agent systems that adapt to emerging challenges and market conditions",
    icon: Brain
  },
  {
    title: "Real-time Intelligence",
    description: "Process and analyze massive datasets instantly, driving operational agility across departments",
    icon: Zap
  },
  {
    title: "Enterprise Security",
    description: "Military-grade security features ensuring data protection and regulatory compliance",
    icon: Shield
  },
  {
    title: "Predictive Analytics",
    description: "Harness AI-driven insights to anticipate market trends and optimize decision-making",
    icon: TrendingUp
  },
  {
    title: "Automated Workflows",
    description: "Streamline operations with intelligent process automation and task orchestration",
    icon: Workflow
  },
  {
    title: "Human Potential Amplifier",
    description: "Free your teams from routine tasks to focus on innovation and strategic thinking",
    icon: Users
  },
  {
    title: "Adaptive Learning",
    description: "Self-improving systems that evolve with your business needs and market dynamics",
    icon: Lightbulb
  },
  {
    title: "ROI Analytics",
    description: "Comprehensive analytics dashboard for tracking performance and business impact",
    icon: BarChart
  }
];

export default function Features() {
  return (
    <section id="features" className="py-16 md:py-24 bg-black/20">
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
              Transform Your Business
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              In a world where speed and data-driven precision define winners, ENSPYR AI gives you the competitive edge you need.
            </p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {features.map((feature) => (
              <motion.div key={feature.title} variants={fadeIn}>
                <Card className="hover:border-primary transition-colors duration-300 hover:bg-black/40">
                  <CardHeader>
                    <feature.icon className="w-12 h-12 text-primary mb-4" />
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}