import { Code, Database, Lock, Server, Globe, Terminal } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Backend dasturlash",
      skills: ["Laravel", "PHP", "Python", "Yii2", "REST API", "GraphQL"],
      color: "cyber-blue"
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Kiberxavfsizlik",
      skills: ["Penetratsiya testlash", "Xavfsizlik auditi", "OWASP", "Zaiflik baholash"],
      color: "cyber-green"
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Ma'lumotlar bazasi va infratuzilma",
      skills: ["MySQL", "PostgreSQL", "Redis", "Docker", "AWS", "Linux"],
      color: "cyber-purple"
    },
    {
      icon: <Terminal className="h-8 w-8" />,
      title: "Vositalar va texnologiyalar",
      skills: ["Git", "CI/CD", "Nginx", "Apache", "Elasticsearch", "RabbitMQ"],
      color: "cyber-orange"
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-dark">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Texnik ko'nikmalar
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8 rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Xavfsiz, kengaytiriladigan va mustahkam backend tizimlarini yaratish uchun 
            to'liq vositalar to'plami
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-cyber transition-all duration-300 animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`text-${category.color} mb-4 group-hover:animate-float`}>
                {category.icon}
              </div>
              <h3 className="text-lg font-semibold mb-4 text-foreground">
                {category.title}
              </h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <div className={`w-1.5 h-1.5 bg-${category.color} rounded-full`} />
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Skills Bar */}
        <div className="mt-16 bg-card border border-border rounded-lg p-8">
          <h3 className="text-xl font-semibold mb-6 text-center text-foreground">
            Xavfsizlik sertifikatlari va tajriba
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <Server className="h-6 w-6 text-cyber-green mx-auto" />
              <h4 className="font-medium text-foreground">Infratuzilma xavfsizligi</h4>
              <p className="text-sm text-muted-foreground">Server mustahkamlash, tarmoq xavfsizligi, firewall sozlash</p>
            </div>
            <div className="space-y-2">
              <Globe className="h-6 w-6 text-cyber-blue mx-auto" />
              <h4 className="font-medium text-foreground">Web-dastur xavfsizligi</h4>
              <p className="text-sm text-muted-foreground">OWASP Top 10, XSS, CSRF, SQL in'eksiyasini oldini olish</p>
            </div>
            <div className="space-y-2">
              <Lock className="h-6 w-6 text-cyber-purple mx-auto" />
              <h4 className="font-medium text-foreground">Penetratsiya testlash</h4>
              <p className="text-sm text-muted-foreground">Etik hacking, zaiflik baholash, xavfsizlik auditi</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;