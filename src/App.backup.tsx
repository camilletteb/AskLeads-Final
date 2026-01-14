import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowRight, BarChart3, Mail, Zap, Menu, X } from "lucide-react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0A1045] text-white font-bold">
              A
            </div>
            <span className="text-xl font-bold text-[#0A1045]">AskLeads</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-slate-600 hover:text-[#FF8C60] transition-colors">
              Fonctionnalités
            </a>
            <a href="#pricing" className="text-sm font-medium text-slate-600 hover:text-[#FF8C60] transition-colors">
              Tarifs
            </a>
            <Button className="bg-[#FF8C60] hover:bg-[#ff7a45] text-white">
              Connexion
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-white p-4 shadow-lg">
            <div className="flex flex-col gap-4">
              <a href="#features" className="text-sm font-medium text-slate-600" onClick={() => setIsMenuOpen(false)}>
                Fonctionnalités
              </a>
              <a href="#pricing" className="text-sm font-medium text-slate-600" onClick={() => setIsMenuOpen(false)}>
                Tarifs
              </a>
              <Button className="bg-[#FF8C60] hover:bg-[#ff7a45] text-white w-full">
                Connexion
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-24 lg:pt-32 lg:pb-40">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-extrabold tracking-tight text-[#0A1045] sm:text-5xl lg:text-6xl mb-6">
                Générez des leads qualifiés <span className="text-[#FF8C60]">avec des quiz interactifs</span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                La solution simple et puissante pour les freelances et solopreneurs francophones. Créez des quiz engageants, capturez des emails et développez votre activité.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#FF8C60] hover:bg-[#ff7a45] text-white text-lg px-8 h-14">
                  Créer mon premier quiz
                </Button>
                <Button variant="outline" size="lg" className="text-[#0A1045] border-[#0A1045] hover:bg-slate-50 text-lg px-8 h-14">
                  En savoir plus
                </Button>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none">
              <div className="relative rounded-2xl bg-white p-2 shadow-2xl ring-1 ring-slate-900/10">
                <div className="aspect-[4/3] rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100">
                  <div className="text-center p-8">
                    <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center text-blue-600">
                      <Zap size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Image du Quiz</h3>
                    <div className="flex gap-2 mt-4">
                      <div className="bg-[#0A1045] text-white px-4 py-2 rounded-lg text-sm">Option A</div>
                      <div className="bg-white border border-slate-200 text-slate-600 px-4 py-2 rounded-lg text-sm">Option B</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative blob */}
              <div className="absolute -top-12 -right-12 -z-10 h-[300px] w-[300px] rounded-full bg-[#FF8C60]/10 blur-3xl" />
              <div className="absolute -bottom-12 -left-12 -z-10 h-[300px] w-[300px] rounded-full bg-[#0A1045]/10 blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-[#0A1045] sm:text-4xl mb-4">
              Tout ce dont vous avez besoin pour convertir
            </h2>
            <p className="text-lg text-slate-600">
              Une suite d'outils conçue pour maximiser votre taux de conversion sans complexité technique.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-[#FF8C60] mb-4">
                  <Zap size={24} />
                </div>
                <CardTitle className="text-xl text-[#0A1045]">Création par IA</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Générez des quiz pertinents en quelques secondes grâce à notre assistant IA intégré. Plus besoin de partir d'une page blanche.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-[#0A1045] mb-4">
                  <Mail size={24} />
                </div>
                <CardTitle className="text-xl text-[#0A1045]">Capture d'Emails</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Intégrez vos formulaires de capture directement dans le flux du quiz pour des taux de conversion jusqu'à 3x supérieurs.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-4">
                  <BarChart3 size={24} />
                </div>
                <CardTitle className="text-xl text-[#0A1045]">Analytiques Précises</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Suivez vos performances en temps réel. Comprenez qui sont vos prospects et ce qu'ils recherchent vraiment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-[#0A1045] sm:text-4xl mb-4">
              Des tarifs simples et transparents
            </h2>
            <p className="text-lg text-slate-600">
              Commencez gratuitement, évoluez quand vous en avez besoin.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Plan */}
            <Card className="border border-slate-200 shadow-sm hover:border-[#FF8C60] transition-colors relative overflow-hidden">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-[#0A1045]">Gratuit</CardTitle>
                <div className="mt-4 flex items-baseline text-[#0A1045]">
                  <span className="text-5xl font-extrabold tracking-tight">0€</span>
                  <span className="ml-1 text-xl font-semibold text-slate-500">/mois</span>
                </div>
                <p className="mt-4 text-slate-600">Pour découvrir la puissance des quiz.</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-slate-600">
                    <Check className="mr-3 h-5 w-5 text-green-500" />
                    1 Quiz actif
                  </li>
                  <li className="flex items-center text-slate-600">
                    <Check className="mr-3 h-5 w-5 text-green-500" />
                    Jusqu'à 50 leads/mois
                  </li>
                  <li className="flex items-center text-slate-600">
                    <Check className="mr-3 h-5 w-5 text-green-500" />
                    Analytiques de base
                  </li>
                  <li className="flex items-center text-slate-400">
                    <X className="mr-3 h-5 w-5" />
                    Pas d'IA générative
                  </li>
                </ul>
                <Button className="w-full bg-slate-100 hover:bg-slate-200 text-[#0A1045]">
                  Commencer gratuitement
                </Button>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="border-2 border-[#FF8C60] shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#FF8C60] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                POPULAIRE
              </div>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-[#0A1045]">Pro</CardTitle>
                <div className="mt-4 flex items-baseline text-[#0A1045]">
                  <span className="text-5xl font-extrabold tracking-tight">12€</span>
                  <span className="ml-1 text-xl font-semibold text-slate-500">/mois</span>
                </div>
                <p className="mt-1 text-sm text-[#FF8C60] font-medium line-through">au lieu de 18€</p>
                <p className="mt-2 text-slate-600">Pour les freelances qui veulent accélérer.</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-slate-600">
                    <Check className="mr-3 h-5 w-5 text-[#FF8C60]" />
                    Quiz illimités
                  </li>
                  <li className="flex items-center text-slate-600">
                    <Check className="mr-3 h-5 w-5 text-[#FF8C60]" />
                    Leads illimités
                  </li>
                  <li className="flex items-center text-slate-600">
                    <Check className="mr-3 h-5 w-5 text-[#FF8C60]" />
                    Génération par IA
                  </li>
                  <li className="flex items-center text-slate-600">
                    <Check className="mr-3 h-5 w-5 text-[#FF8C60]" />
                    Connexions Email (Zapier, etc.)
                  </li>
                </ul>
                <Button className="w-full bg-[#FF8C60] hover:bg-[#ff7a45] text-white shadow-lg shadow-orange-200">
                  Passer au niveau supérieur
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0A1045] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl mb-6">
            Prêt à transformer vos visiteurs en clients ?
          </h2>
          <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto">
            Rejoignez les freelances qui utilisent AskLeads pour automatiser leur prospection.
          </p>
          <Button size="lg" className="bg-[#FF8C60] hover:bg-[#ff7a45] text-white text-lg px-10 h-16 rounded-full shadow-xl shadow-orange-900/20">
            Créer mon compte gratuitement
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="flex h-6 w-6 items-center justify-center rounded bg-slate-800 text-white text-xs font-bold">
                A
              </div>
              <span className="font-semibold text-white">AskLeads</span>
            </div>
            <div className="text-sm">
              &copy; 2026 AskLeads. Tous droits réservés.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
