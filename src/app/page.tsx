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
          brandName="Oasis"
          navItems={[
            { name: "Features", id: "features" },
            { name: "Capabilities", id: "capabilities" },
            { name: "Pricing", id: "pricing" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          bottomLeftText="Website Design & Development"
          bottomRightText="massimo.molin10@gmail.com"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureBento
          title="Powerful Website Solutions"
          description="Professional website design and development services that transform your business with stunning digital experiences, seamless functionality, and measurable results."
          tag="Features"
          tagIcon={Sparkles}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          features={[
            {
              title: "Custom Design",              description: "Bespoke website designs tailored to your brand identity and business goals",              bentoComponent: "orbiting-icons",              centerIcon: Palette,
              items: [
                { icon: Palette, ring: 1 },
                { icon: Code, ring: 1 },
                { icon: Layers, ring: 2 },
                { icon: Zap, ring: 2 },
                { icon: Workflow, ring: 3 }
              ]
            },
            {
              title: "Performance Analytics",              description: "Track user engagement and conversion metrics with real-time dashboards",              bentoComponent: "animated-bar-chart"
            },
            {
              title: "Growth Tracking",              description: "Monitor traffic trends and user behavior patterns over time",              bentoComponent: "line-chart"
            },
            {
              title: "Global Reach",              description: "Deploy your website globally with optimized performance everywhere",              bentoComponent: "globe"
            }
          ]}
        />
      </div>

      <div id="capabilities" data-section="capabilities">
        <FeatureHoverPattern
          title="Why Choose Oasis"
          description="We deliver cutting-edge web solutions that combine stunning design with powerful functionality"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          features={[
            {
              icon: Code,
              title: "Modern Technology Stack",              description: "Built with React, Next.js, and cutting-edge frameworks for superior performance"
            },
            {
              icon: Shield,
              title: "Security First",              description: "Enterprise-grade security, SSL encryption, and compliance standards built in"
            },
            {
              icon: Zap,
              title: "Lightning Fast",              description: "Optimized for speed with sub-second load times and fluid interactions"
            },
            {
              icon: Scale,
              title: "Infinitely Scalable",              description: "Grow from startup to enterprise without worrying about infrastructure"
            },
            {
              icon: BarChart3,
              title: "Data-Driven Insights",              description: "Comprehensive analytics and reporting to understand your visitors"
            },
            {
              icon: Cpu,
              title: "API Integration",              description: "Seamless integration with your existing tools and services"
            }
          ]}
          gradientClassName="bg-gradient-to-r from-accent to-background-accent"
        />
      </div>

      <div id="about" data-section="about">
        <MetricSplitMediaAbout
          tag="About Oasis"
          tagIcon={Info}
          title="Crafting Digital Experiences"
          description="Oasis is a web development company dedicated to helping businesses establish powerful digital presences. Our team of experienced designers, developers, and strategists works collaboratively to create websites that not only look exceptional but drive real business results. We combine creative excellence with technical expertise to deliver solutions that exceed expectations."
          metrics={[
            { value: "500+", title: "Websites Created" },
            { value: "98%", title: "Client Satisfaction Rate" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AeyVCun1NqkWPvWuaXSlPFwtC6/a-team-of-engineers-and-data-scientists--1773173586927-f45eed37.png"
          imageAlt="Oasis team collaborating on web projects"
          mediaAnimation="slide-up"
          metricsAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSix
          title="Trusted by Businesses Worldwide"
          description="See how companies transform their digital presence with Oasis web solutions"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          speed={40}
          testimonials={[
            {
              id: "1",              name: "Sarah Chen",              handle: "CEO, TechStartup",              testimonial: "Oasis completely transformed our online presence. The website they built is not only beautiful but has significantly increased our conversion rates.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AeyVCun1NqkWPvWuaXSlPFwtC6/professional-headshot-of-a-confident-bus-1773173586625-aa23225b.png",              imageAlt: "Sarah Chen"
            },
            {
              id: "2",              name: "Michael Rodriguez",              handle: "Founder, DesignCo",              testimonial: "The professionalism and attention to detail shown by the Oasis team was outstanding. They delivered exactly what we envisioned on time and within budget.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AeyVCun1NqkWPvWuaXSlPFwtC6/professional-headshot-of-a-smiling-techn-1773173586036-174293d6.png",              imageAlt: "Michael Rodriguez"
            },
            {
              id: "3",              name: "Emily Watson",              handle: "Marketing Director, RetailCo",              testimonial: "Our new website has become our best sales tool. Customer engagement increased by 150% within the first quarter after launch.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AeyVCun1NqkWPvWuaXSlPFwtC6/professional-headshot-of-a-confident-dat-1773173585159-7d38ef14.png",              imageAlt: "Emily Watson"
            },
            {
              id: "4",              name: "David Park",              handle: "Product Manager, InnovateLabs",              testimonial: "Oasis stands out for their technical expertise and customer service. They made the complex process of building a web platform feel effortless.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AeyVCun1NqkWPvWuaXSlPFwtC6/professional-headshot-of-a-smiling-busin-1773173586669-bddc6d30.png",              imageAlt: "David Park"
            },
            {
              id: "5",              name: "Lisa Thompson",              handle: "Owner, Creative Agency",              testimonial: "The website Oasis created for us is a true reflection of our brand. Our clients constantly compliment the design and user experience.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AeyVCun1NqkWPvWuaXSlPFwtC6/professional-headshot-of-a-confident-tec-1773173586288-e8f0f38a.png",              imageAlt: "Lisa Thompson"
            },
            {
              id: "6",              name: "James Wilson",              handle: "Executive Director, Enterprise Co",              testimonial: "From concept to launch, Oasis provided exceptional guidance and expertise. Our website is now a key competitive advantage.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AeyVCun1NqkWPvWuaXSlPFwtC6/professional-headshot-of-a-smiling-busin-1773173586600-2b46a3cd.png",              imageAlt: "James Wilson"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardThree
          title="Flexible Pricing Plans"
          description="Choose the package that fits your business needs and budget"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          plans={[
            {
              id: "basic",              price: "1899 + 500/mo",              name: "Basic",              buttons: [
                { text: "Get Started" },
                { text: "Schedule Consultation", onClick: handleScheduleConsultation }
              ],
              features: [
                "500 monthly updates",                "14 day refund policy",                "Basic support",                "Email notifications",                "Analytics dashboard"
              ]
            },
            {
              id: "professional",              badge: "Most Popular",              badgeIcon: Star,
              price: "4920 + 250/mo",              name: "Professional",              buttons: [
                { text: "Get Started" },
                { text: "Schedule Consultation", onClick: handleScheduleConsultation }
              ],
              features: [
                "250 monthly updates",                "30 day refund policy",                "Priority support",                "Advanced analytics",                "API access",                "Team collaboration"
              ]
            },
            {
              id: "custom",              price: "5 600 Kč",              name: "Custom",              buttons: [
                { text: "Contact Sales" },
                { text: "Request Proposal", onClick: handleScheduleConsultation }
              ],
              features: [
                "Consultation for features",                "Custom implementation",                "Dedicated account manager",                "24/7 support",                "White-label options",                "Ongoing optimization"
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
          description="Připojte se ke stovkám spokojených klientů, kteří transformovali své podnikání s Oasis. Kontaktujte nás dnes pro bezplatnou konzultaci."
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
          logoText="Oasis"
          copyrightText="© 2025 Oasis. Všechna práva vyhrazena."
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