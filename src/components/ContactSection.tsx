import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Xabar muvaffaqiyatli yuborildi!",
        description: "Murojaat qilganingiz uchun rahmat. Tez orada javob beraman.",
      });
    }, 2000);
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-dark">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Bog'lanish
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8 rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Keling, kiberxavfsizlik ehtiyojlaringiz yoki potentsial hamkorlik 
            imkoniyatlari haqida gaplashaylik
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 bg-card border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Ism
                </label>
                <Input
                  id="name"
                  name="name"
                  required
                  className="bg-background border-border focus:border-primary transition-colors"
                  placeholder="To'liq ismingiz"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="bg-background border-border focus:border-primary transition-colors"
                  placeholder="sizning.emailingiz@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Xabar
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="bg-background border-border focus:border-primary transition-colors resize-none"
                  placeholder="Loyihangiz yoki xavfsizlik ehtiyojlaringiz haqida ayting..."
                />
              </div>
              
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-primary hover:shadow-cyber transition-all duration-300"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                    Jo'natilmoqda...
                  </div>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Xabar yuborish
                  </>
                )}
              </Button>
            </form>
          </Card>
          
          {/* Contact Info & Social */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <h3 className="text-xl font-semibold mb-6 text-foreground">
                Men bilan bog'laning
              </h3>
              
              <div className="space-y-4">
                <a 
                  href="mailto:asadbek@example.com"
                  className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:shadow-cyber transition-all duration-300 group"
                >
                  <Mail className="h-5 w-5 text-cyber-blue group-hover:animate-float" />
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-sm text-muted-foreground">seniorleo89@gmail.com</p>
                  </div>
                </a>
                
                <a 
                  href="https://github.com/UzEnRu"
                  className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:shadow-cyber transition-all duration-300 group"
                >
                  <Github className="h-5 w-5 text-cyber-green group-hover:animate-float" />
                  <div>
                    <p className="font-medium text-foreground">GitHub</p>
                    <p className="text-sm text-muted-foreground">@UzEnRu</p>
                  </div>
                </a>
                
                <a 
                  href="https://linkedin.com/in/asadbek-ashurov"
                  className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:shadow-cyber transition-all duration-300 group"
                >
                  <Linkedin className="h-5 w-5 text-cyber-purple group-hover:animate-float" />
                  <div>
                    <p className="font-medium text-foreground">LinkedIn</p>
                    <p className="text-sm text-muted-foreground">Asadbek Ashurov</p>
                  </div>
                </a>
              </div>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6">
              <h4 className="font-semibold mb-4 text-foreground">Xavfsizlik eslatmasi</h4>
              <p className="text-sm text-muted-foreground">
                Barcha muloqotlar xavfsiz tarzda amalga oshiriladi. Sizning ma'lumotlaringiz 
                shifrlangan va hech qachon uchinchi shaxslar bilan baham ko'rilmaydi. Nozik 
                muhokamalar uchun PGP shifrlashdan foydalaning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;