import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Lock, Globe, Database, Shield, Book, Send, DatabaseIcon } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Maktab.uz - Masofaviy ta'lim platformasi",
      description: "O'quv dasturlari, video darslar va interaktiv ta'lim materiallari bilan ta'minlangan masofaviy o'qitish platformasi, o'quvchilar, ota-onalar va o'qituvchilar uchun qulay foydalanish imkoniyati.",
      technologies: ["HTML", "JavaScript", "PHP(Laravel)", "Responsive Design"],
      icon: <Globe className="h-6 w-6" />,
      color: "cyber-blue",
      github: "https://github.com/UzEnRu", 
      demo: "https://maktab.uz"
    },
    {
  title: "KSHR Group – Consulting & Innovation Centre",
  description: "Toshkent shahrida joylashgan konsultatsiya va innovatsiya markazi: korxona rivoji, sotsiologik tadqiqotlar va trening dasturlari bo‘yicha xizmatlar.",
  technologies: ["Database Architecture", "API Development", "Cloud Infrastructure", "System Design"],
  icon: <DatabaseIcon className="h-6 w-6" />,
  color: "cyber-blue",
  github: "https://github.com/UzEnRu",
  demo: "https://kshrglobal.com"
},
    {
      title: "IDU University Bot",
      description: "Imtihon natijalarini ko‘rish, universitet hayoti va yangiliklardan xabardor bo‘lish uchun mo‘ljallangan Telegram boti.",
      technologies: ["Python", "Telegram Bot API", "Aiogram", "SQLite"],
      icon: <Send className="h-6 w-6" />,
      color: "cyber-blue",
      github: "https://github.com/UzEnRu", 
      demo: "https://t.me/iduz_bot"
    },
    {
      title: "InternetBorUz Bot",
      description: "O'z hududingizdagi Wi-Fi provayderlari haqida tezkor ma'lumot beruvchi Telegram boti.",
      technologies: ["Python", "Telegram Bot API", "Requests", "BeautifulSoup"],
      icon: <Send className="h-6 w-6" />,
      color: "cyber-blue",
      github: "https://github.com/UzEnRu", 
      demo: "https://t.me/wifi_internet_bor_bot"
    },
    {
      title: "Kitobxon.com – Elektron kutubxona va onlayn kitob magazini",
      description: "Elektron va audio kitoblarni o‘qish, yuklab olish yoki buyurtma berish imkonini beruvchi, turli janr va formatdagi asarlarni taklif etuvchi onlayn kutubxona va savdo platformasi.",
      technologies: ["Web Reader", "PDF/FB2/MP3 Formats", "E-Commerce", "Responsive UI"],
      icon: <Book className="h-6 w-6" />,
      color: "cyber-green",
      github: "https://github.com/UzEnRu", 
      demo: "https://kitobxon.com"
    },
    {
      title: "Xavfsiz API Gateway",
      description: "Ilg'or xavfsizlik xususiyatlari, cheklovlar va autentifikatsiya mexanizmlari bilan korxona darajasidagi API gateway Laravel va Redis yordamida qurilgan.",
      technologies: ["Laravel", "Redis", "JWT", "OAuth2", "Docker"],
      icon: <Lock className="h-6 w-6" />,
      color: "cyber-green",
      github: "#",
      demo: "#"
    },
    {
      title: "Zaiflik skaneri",
      description: "OWASP Top 10 xavfsizlik zaifliklarini aniqlaydigan va batafsil hisobotlar tayyorlaydigan avtomatlashtirilgan web-dastur zaiflik skaneri.",
      technologies: ["Python", "Selenium", "BeautifulSoup", "PostgreSQL"],
      icon: <Shield className="h-6 w-6" />,
      color: "cyber-orange",
      github: "#",
      demo: "#"
    },
    {
      title: "E-tijorat xavfsizlik auditi",
      description: "Yirik miqyosli e-tijorat platformasining to'liq xavfsizlik auditi va penetratsiya testlash, muhim zaifliklarni aniqlash va tuzatish.",
      technologies: ["PHP", "MySQL", "Burp Suite", "OWASP ZAP"],
      icon: <Globe className="h-6 w-6" />,
      color: "cyber-blue",
      github: "#",
      demo: "#"
    },
    {
      title: "Shifrlangan ma'lumotlar oqimi",
      description: "Python va ilg'or kriptografiya yordamida nozik moliyaviy ma'lumotlar uchun end-to-end shifrlash bilan yuqori unumdorlikli ma'lumotlar qayta ishlash oqimi.",
      technologies: ["Python", "Kafka", "AES-256", "RSA", "MongoDB"],
      icon: <Database className="h-6 w-6" />,
      color: "cyber-purple",
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Taniqli loyihalar
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8 rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Men yaratgan kiberxavfsizlik yechimlari va backend tizimlarining namoyishi
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-cyber transition-all duration-300 animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`text-${project.color} group-hover:animate-float`}>
                  {project.icon}
                </div>
                <div className="flex gap-2">
                  {project.github && project.github !== "#" && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 hover:bg-secondary"
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                    </a>
                  )}
                  {project.demo && project.demo !== "#" && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 hover:bg-secondary"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </a>
                  )}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="https://github.com/UzEnRu" target="_blank" rel="noopener noreferrer">
            <Button 
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Github className="mr-2 h-5 w-5" />
              GitHub'da ko'proq ko'rish
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
