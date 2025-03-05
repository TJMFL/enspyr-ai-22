import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/">
          <a className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-xl">ENSPYR AI</span>
          </a>
        </Link>
        <div className="flex items-center justify-between flex-1">
          <div className="flex gap-6 md:gap-10">
            <Link href="#features">
              <a className="text-sm font-medium transition-colors hover:text-primary">
                Features
              </a>
            </Link>
            <Link href="#demo">
              <a className="text-sm font-medium transition-colors hover:text-primary">
                Demo
              </a>
            </Link>
            <Link href="#contact">
              <a className="text-sm font-medium transition-colors hover:text-primary">
                Contact
              </a>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost">Documentation</Button>
            <Button>Get Started</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
