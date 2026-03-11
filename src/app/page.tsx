"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import FeatureBento from '@/components/sections/feature/FeatureBento';
import FeatureHoverPattern from '@/components/sections/feature/featureHoverPattern/FeatureHoverPattern';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import { Sparkles, Zap, Workflow, Brain, Gauge, Target, Cpu, Shield, Scale, BarChart3, Info, Rocket, Star, Code, Palette, Layers } from 'lucide-react';
import { useState } from 'react';
import ConsultationForm from '@/components/forms/ConsultationForm';

export default function LandingPage() {
  const [showConsultationForm, setShowConsultationForm] = useState(false);

  const handleScheduleConsultation = () => {
    setShowConsultationForm(true);
  };

  const handleCloseForm = () => {
    setShowConsultationForm(false);
  };

  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="medium"
      background="none"
      cardStyle="gradient-bordered"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="layered"
      headingFontWeight="semibold"
    >
      {showConsultationForm && (
        <ConsultationForm onClose={handleCloseForm} />
      )}

      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          brandName="Oasis "
          navItems={[
            { name: "Funkce", id: "features" },
            { name: "Možnosti", id: "capabilities" },
            { name: "Ceny", id: "pricing" },
            { name: "Recenze", id: "testimonials" },
            { name: "Kontakt", id: "contact" }
          ]}
          bottomLeftText="Návrh a vývoj webových stránek"
          bottomRightText="massimo.molin10@gmail.com"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureBento
          title="Výkonná řešení pro webové stránky"
          description="Profesionální služby návrhu a vývoje webových stránek, které transformují vaše podnikání nádherným digitálním zážitkem, bezproblémovou funkčností a měřitelnými výsledky."
          tag="Funkce"
          tagIcon={Sparkles}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          features={[
            {
              title: "Vlastní design",              description: "Vytvořený web na míru vaší identitě značky a obchodním cílům",              bentoComponent: "orbiting-icons",              centerIcon: Palette,
              items: [
                { icon: Palette, ring: 1 },
                { icon: Code, ring: 1 },
                { icon: Layers, ring: 2 },
                { icon: Zap, ring: 2 },
                { icon: Workflow, ring: 3 }
              ]
            },
            {
              title: "Analýza výkonu",              description: "Sledujte zapojení uživatelů a metriky konverze s řídicími panely v reálném čase",              bentoComponent: "animated-bar-chart"
            },
            {
              title: "Sledování růstu",              description: "Sledujte trendy v provozu a vzorce chování uživatelů v průběhu času",              bentoComponent: "line-chart"
            },
            {
              title: "Globální dosah",              description: "Nasaďte svůj web globálně s optimalizovaným výkonem všude",              bentoComponent: "globe"
            }
          ]}
        />
      </div>

      <div id="capabilities" data-section="capabilities">
        <FeatureHoverPattern
          title="Proč zvolit Oasis"
          description="Dodáváme špičková webová řešení, která kombinují úžasný design s výkonnou funkčností"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          features={[
            {
              icon: Code,
              title: "Moderní technologický stack",              description: "Postaveno na React, Next.js a nejnovějších framework pro lepší výkon"
            },
            {
              icon: Shield,
              title: "Bezpečnost na prvním místě",              description: "Bezpečnost na úrovni podnikání, šifrování SSL a standardy dodržování zabudované"
            },
            {
              icon: Zap,
              title: "Blesková rychlost",              description: "Optimalizováno pro rychlost s dobou načítání pod sekundu a tekutými interakcemi"
            },
            {
              icon: Scale,
              title: "Nekonečně škálovatelná",              description: "Rostěte od startupu k podnikání bez obav o infrastrukturu"
            },
            {
              icon: BarChart3,
              title: "Poznatky řízené daty",              description: "Komplexní analýzy a hlášení pochopit své návštěvníky"
            },
            {
              icon: Cpu,
              title: "Integrace rozhraní API",              description: "Bezproblémová integrace s vašimi stávajícími nástroji a službami"
            }
          ]}
          gradientClassName="bg-gradient-to-r from-accent to-background-accent"
        />
      </div>

      <div id="about" data-section="about">
        <MetricSplitMediaAbout
          tag="O společnosti Oasis"
          tagIcon={Info}
          title="Vytváření digitálních zážitků"
          description="Oáza je společnost zabývající se vývojem webů, která se věnuje pomoci podnikům v navázání silné digitální přítomnosti. Náš tým zkušených návrhářů, vývojářů a strategů spolupracuje na vytvoření webů, které nejen vypadají výjimečně, ale také dosahují skutečných obchodních výsledků. Kombinujeme kreativní excelenci s technickou odborností, abychom dodali řešení, která překročí očekávání."
          metrics={[
            { value: "20+", title: "Vytvořené weby" },
            { value: "98%", title: "Míra spokojenosti klientů" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AeyVCun1NqkWPvWuaXSlPFwtC6/a-team-of-engineers-and-data-scientists--1773173586927-f45eed37.png"
          imageAlt="Tým Oázy spolupracující na webových projektech"
          mediaAnimation="slide-up"
          metricsAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSix
          title="Důvěřováno společnostmy po celém světě"
          description="Podívejte se, jak společnosti transformují svou digitální přítomnost pomocí webových řešení Oázy"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          speed={40}
          testimonials={[
            {
              id: "1",              name: "Sarah Chen",              handle: "CEO, TechStartup",              testimonial: "Oáza zcela transformovala naši online přítomnost. Web, který vytvořili, je nejen krásný, ale také výrazně zvýšil naší konverzní poměr.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AeyVCun1NqkWPvWuaXSlPFwtC6/professional-headshot-of-a-confident-bus-1773173586625-aa23225b.png",              imageAlt: "Sarah Chen"
            },
            {
              id: "2",              name: "Michael Rodriguez",              handle: "Zakladatel, DesignCo",              testimonial: "Profesionalismus a pozornost k detailům, kterou tým Oázy prokázal, byla výjimečná. Dodali přesně to, co jsme si představovali, včas a v rozpočtu.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AeyVCun1NqkWPvWuaXSlPFwtC6/professional-headshot-of-a-smiling-techn-1773173586036-174293d6.png",              imageAlt: "Michael Rodriguez"
            },
            {
              id: "3",              name: "Emily Watson",              handle: "Ředitelka marketingu, RetailCo",              testimonial: "Náš nový web se stal naším nejlepším prodejním nástrojem. Zapojení zákazníků se v prvním čtvrtletí po spuštění zvýšilo o 150%.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AeyVCun1NqkWPvWuaXSlPFwtC6/professional-headshot-of-a-confident-dat-1773173585159-7d38ef14.png",              imageAlt: "Emily Watson"
            },
            {
              id: "4",              name: "David Park",              handle: "Vedoucí produktu, InnovateLabs",              testimonial: "Oáza se vyznačuje technickou odborností a obsluhou zákazníků. Udělali z komplexního procesu vytváření webové platformy něco bez námahy.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AeyVCun1NqkWPvWuaXSlPFwtC6/professional-headshot-of-a-smiling-busin-1773173586669-bddc6d30.png",              imageAlt: "David Park"
            },
            {
              id: "5",              name: "Lisa Thompson",              handle: "Majitelka, Creative Agency",              testimonial: "Web, který Oáza vytvořila pro nás, je skutečným odrazem naší značky. Naši klienti neustále chválí design a uživatelský dojem.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AeyVCun1NqkWPvWuaXSlPFwtC6/professional-headshot-of-a-confident-tec-1773173586288-e8f0f38a.png",              imageAlt: "Lisa Thompson"
            },
            {
              id: "6",              name: "James Wilson",              handle: "Výkonný ředitel, Enterprise Co",              testimonial: "Od konceptu až po spuštění poskytla Oáza výjimečné vedení a odbornost. Náš web je nyní klíčovou konkurenční výhodou.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AeyVCun1NqkWPvWuaXSlPFwtC6/professional-headshot-of-a-smiling-busin-1773173586600-2b46a3cd.png",              imageAlt: "James Wilson"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardThree
          title="Plány s flexibilní cenou"
          description="Vyberte si balíček, který nejlépe vyhovuje potřebám a rozpočtu vašeho podniku"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          plans={[
            {
              id: "basic",              price: "1899 + 500/měs",              name: "Základní",              buttons: [
                { text: "Začít" },
                { text: "Naplánovat konzultaci", onClick: handleScheduleConsultation }
              ],
              features: [
                "500 měsíčních aktualizací",                "Politika vrácení peněz 14 dní",                "Základní podpora",                "E-mailová oznámení",                "Řídicí panel analýzy"
              ]
            },
            {
              id: "professional",              badge: "Nejpopulárnější",              badgeIcon: Star,
              price: "4920 + 250/měs",              name: "Profesionální",              buttons: [
                { text: "Začít" },
                { text: "Naplánovat konzultaci", onClick: handleScheduleConsultation }
              ],
              features: [
                "250 měsíčních aktualizací",                "Politika vrácení peněz 30 dní",                "Prioritní podpora",                "Pokročilá analytika",                "Přístup k rozhraní API",                "Spolupráce v týmu"
              ]
            },
            {
              id: "custom",              price: "5 600 Kč",              name: "Vlastní",              buttons: [
                { text: "Kontaktovat prodej" },
                { text: "Požádat o návrh", onClick: handleScheduleConsultation }
              ],
              features: [
                "Konzultace pro funkce",                "Vlastní implementace",                "Vyhrazený správce účtu",                "Podpora 24/7",                "Možnosti bez znalostí značky",                "Průběžná optimalizace"
              ]
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Často kladené otázky"
          description="Najděte odpovědi na běžné otázky týkající se našich služeb webového designu a vývoje"
          animationType="smooth"
          textboxLayout="default"
          useInvertedBackground={false}
          faqsAnimation="slide-up"
          faqs={[
            {
              id: "1",              title: "Jak dlouho trvá vytvoření webu?",              content: "Většina projektů trvá 4-8 týdnů v závislosti na složitosti a rozsahu. Během počáteční konzultace vám poskytneme podrobný plán a budete informováni o průběhu vývoje."
            },
            {
              id: "2",              title: "Poskytujete údržbu a podporu po spuštění?",              content: "Ano, nabízíme komplexní balíčky údržby, které zahrnují aktualizace, zálohování, monitorování bezpečnosti a technickou podporu pro zajištění bezproblémového provozu vašeho webu."
            },
            {
              id: "3",              title: "Bude můj web vhodný pro mobilní zařízení?",              content: "Rozhodně. Všechny naše weby jsou plně responzivní a optimalizované pro mobilní zařízení, tablety a stolní počítače, aby poskytovaly nejlepší uživatelský dojem na všech platformách."
            },
            {
              id: "4",              title: "Můžete pomoci s SEO?",              content: "Ano, do každého webu začleňujeme nejlepší praktiky SEO včetně správné struktury stránky, meta tagů, optimalizace výkonu a můžeme také probrat další služby SEO."
            },
            {
              id: "5",              title: "Co když potřebuji změny po spuštění?",              content: "Poskytneme období revizí po spuštění a nabízíme balíčky pokračující podpory. Většina změn lze provést rychle a efektivně prostřednictvím našeho systému pro správu obsahu."
            },
            {
              id: "6",              title: "Nabízíte řešení e-commerce?",              content: "Ano, budujeme e-commerce weby s bezpečným zpracováním plateb, správou zásob a vším, co potřebujete pro úspěšný prodej online."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCTA
          tag="Připraveni začít"
          tagIcon={Rocket}
          title="Pojďme vytvořit vaši digitální přítomnost"
          description="Připojte se ke stovkám spokojených klientů, kteří transformovali své podnikání s Oázou. Kontaktujte nás dnes pro bezplatnou konzultaci."
          buttons={[
            { text: "Naplánovat konzultaci", onClick: handleScheduleConsultation },
            { text: "Zobrazit naší práci" }
          ]}
          background={{ variant: "plain" }}
          useInvertedBackground={false}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseCard
          logoText="Oáza"
          copyrightText="© 2025 Oáza. Všechna práva vyhrazena."
          columns={[
            {
              title: "Služby",              items: [
                { label: "Webový design", href: "#features" },
                { label: "Vývoj webu", href: "#features" },
                { label: "E-commerce", href: "#pricing" },
                { label: "SEO", href: "#features" }
              ]
            },
            {
              title: "Společnost",              items: [
                { label: "O nás", href: "#about" },
                { label: "Portfolio", href: "#testimonials" },
                { label: "Tým", href: "#about" },
                { label: "Kontakt", href: "#contact" }
              ]
            },
            {
              title: "Zdroje",              items: [
                { label: "Blog", href: "#" },
                { label: "Případové studie", href: "#testimonials" },
                { label: "FAQ", href: "#faq" },
                { label: "Podpora", href: "#contact" }
              ]
            },
            {
              title: "Právní",              items: [
                { label: "Zásady ochrany osobních údajů", href: "#" },
                { label: "Podmínky služby", href: "#" },
                { label: "Zásady cookies", href: "#" },
                { label: "Soulad", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}