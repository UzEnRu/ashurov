import { Button } from "@/components/ui/button";
import { ArrowDown, Download, ExternalLink } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/60" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Asadbek Ashurov
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Kiberxavfsizlik mutaxassisi va Backend dasturchi
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
            Ishonchli backend yechimlari bilan raqamli infratuzilmani himoyalash. 
            Laravel, Python va penetratsiya testlashda mutaxassis.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
           <a href="https://github.com/UzEnRu" target="_blank" rel="noopener noreferrer">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-cyber transition-all duration-300 animate-glow-pulse"
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              Ishlarimni ko'rish
            </Button></a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Download className="mr-2 h-5 w-5" />
              Rezyumeni yuklab olish
            </Button></a>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <ArrowDown className="h-6 w-6 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;