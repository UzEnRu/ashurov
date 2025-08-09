const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Men haqimda
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8 rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Men kiberxavfsizlik sohasida ishtiyoqli mutaxassis va xavfsizlik-birinchi 
              fikrlash tarziga ega backend dasturchiman. Mustahkam va xavfsiz kod har qanday 
              muvaffaqiyatli raqamli infratuzilmaning asosi ekanligiga ishonaman.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Laravel, PHP, Python va Yii2 sohasidagi tajribam bilan eng yuqori xavfsizlik 
              standartlarini ta'minlagan holda kengaytiriladigan backend yechimlarini yarataman. 
              Penetratsiya testlash va xavfsizlik auditidagi tajribam zaifliklarni tahdidga 
              aylanishidan oldin aniqlash va bartaraf etish imkonini beradi.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Men toza, saqlash mumkin bo'lgan kodga va kiberxavfsizlik hamda web-dasturlashning 
              doimiy rivojlanayotgan landshaftida doimiy o'rganishga sodiqman.
            </p>
          </div>
          
          <div className="bg-card border border-border rounded-lg p-8 shadow-glow">
            <h3 className="text-xl font-semibold mb-6 text-primary">Asosiy qadriyatlar</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-cyber-green rounded-full mt-2 animate-pulse" />
                <div>
                  <h4 className="font-medium text-foreground">Xavfsizlik birinchi o'rinda</h4>
                  <p className="text-sm text-muted-foreground">Har bir kod satr xavfsizlikni hisobga olgan holda yozilgan</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-cyber-blue rounded-full mt-2 animate-pulse" />
                <div>
                  <h4 className="font-medium text-foreground">Toza kod</h4>
                  <p className="text-sm text-muted-foreground">O'qiladigan, saqlash mumkin va kengaytiriladigan yechimlar</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-cyber-purple rounded-full mt-2 animate-pulse" />
                <div>
                  <h4 className="font-medium text-foreground">Doimiy o'rganish</h4>
                  <p className="text-sm text-muted-foreground">Eng so'nggi xavfsizlik tendentsiyalari bilan tanishib turish</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;