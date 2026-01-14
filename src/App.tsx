import { BrevoForm } from "@/components/BrevoForm";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, CheckCircle2 } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 flex flex-col overflow-hidden relative">
      
      {/* Background - Clean & Light */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-50/40 via-white to-white pointer-events-none" />

      {/* Header */}
      <header className="w-full p-6 relative z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="text-[#FF8C60] font-bold text-2xl tracking-tight flex items-center gap-2">
              <span className="bg-[#FF8C60] text-white w-8 h-8 flex items-center justify-center rounded-lg text-lg">A</span>
              AskLeads
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 py-12 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#0A1045] mb-6 leading-tight tracking-tight">
            L'outil de quiz le plus simple pour<br/>
            <span className="text-[#FF8C60]">obtenir des leads qualifiés.</span>
          </h1>

          {/* AI Badge - Moved below title */}
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 bg-blue-50 text-[#0A1045] rounded-full text-sm font-medium tracking-wide border border-blue-100">
            <Sparkles className="w-4 h-4 text-[#0A1045]" />
            <span>IA intégrée</span>
          </div>
          
          <p className="text-slate-600 text-xl max-w-3xl mx-auto mb-6 leading-relaxed">
            Connectez votre outil emailing préféré en un clic et segmentez vos contacts.
          </p>

          {/* Integrations Badges - Moved below email text */}
          <div className="flex flex-wrap justify-center gap-3 mb-8 opacity-90">
            {["Brevo", "Kit (ConvertKit)", "MailerLite", "Systeme.io"].map((tool) => (
              <div key={tool} className="flex items-center gap-1.5 px-3 py-1 bg-slate-50 border border-slate-100 rounded-full text-slate-500 text-sm font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#FF8C60]" />
                {tool}
              </div>
            ))}
          </div>
          
          {/* Target Audience - Moved to bottom */}
          <p className="text-slate-500 font-medium mb-12">
            Conçu pour les solopreneurs et les petites équipes.
          </p>
        </div>

        {/* Waitlist Card with Brevo Form */}
        <Card className="w-full max-w-md shadow-xl shadow-slate-200/50 border border-slate-100 bg-white rounded-2xl overflow-hidden mb-16 animate-in fade-in zoom-in-95 duration-700 delay-150">
          <CardContent className="p-8 md:p-10">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-[#0A1045] mb-2">
                Rejoignez la liste d'attente
              </h2>
              <p className="text-slate-500">
                Accès prioritaire à la bêta privée.
              </p>
            </div>

            <BrevoForm />
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-slate-400 text-sm relative z-10 flex flex-col items-center gap-2">
        <p className="flex items-center gap-2">
          &copy; {new Date().getFullYear()} AskLeads. <span className="text-lg">🇫🇷</span>
        </p>
      </footer>
    </div>
  );
}

export default App;
