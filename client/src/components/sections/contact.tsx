import { motion } from "framer-motion";
import { fadeIn, staggerChildren } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { register, handleSubmit, reset } = useForm();
  const { toast } = useToast();

  const onSubmit = async (data: any) => {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast({
      title: "Message sent",
      description: "We'll get back to you soon."
    });
    reset();
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-black/20">
      <div className="container px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="max-w-3xl mx-auto space-y-12"
        >
          <motion.div variants={fadeIn} className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-muted-foreground">
              Get in touch with our enterprise team
            </p>
          </motion.div>

          <motion.div variants={fadeIn}>
            <Card>
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you shortly.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Input
                        placeholder="Name"
                        {...register("name", { required: true })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Input
                        placeholder="Email"
                        type="email"
                        {...register("email", { required: true })}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Input
                      placeholder="Company"
                      {...register("company", { required: true })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Textarea
                      placeholder="Message"
                      {...register("message", { required: true })}
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
