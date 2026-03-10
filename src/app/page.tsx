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

export default function LandingPage() {
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
              id: "starter",              price: "$2,499",              name: "Starter",              buttons: [
                { text: "Get Started" },
                { text: "Schedule Consultation" }
              ],
              features: [
                "Up to 5 pages",                "Responsive design",                "Basic SEO optimization",                "Contact form",                "Email support"
              ]
            },
            {
              id: "professional",              badge: "Most Popular",              badgeIcon: Star,
              price: "$6,999",              name: "Professional",              buttons: [
                { text: "Get Started" },
                { text: "Schedule Consultation" }
              ],
              features: [
                "Up to 15 pages",                "Advanced design",                "SEO optimization",                "Blog integration",                "E-commerce ready",                "Priority support"
              ]
            },
            {
              id: "enterprise",              price: "Custom",              name: "Enterprise",              buttons: [
                { text: "Contact Sales" },
                { text: "Request Proposal" }
              ],
              features: [
                "Unlimited pages",                "Custom features",                "API integrations",                "Dedicated manager",                "24/7 support",                "Ongoing optimization"
              ]
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Find answers to common questions about our web design and development services"
          animationType="smooth"
          textboxLayout="default"
          useInvertedBackground={false}
          faqsAnimation="slide-up"
          faqs={[
            {
              id: "1",              title: "How long does it take to build a website?",              content: "Most projects take 4-8 weeks depending on complexity and scope. We provide a detailed timeline during the initial consultation and keep you updated throughout the development process."
            },
            {
              id: "2",              title: "Do you provide ongoing maintenance and support?",              content: "Yes, we offer comprehensive maintenance packages that include updates, backups, security monitoring, and technical support to keep your website running smoothly."
            },
            {
              id: "3",              title: "Will my website be mobile-friendly?",              content: "Absolutely. All our websites are fully responsive and optimized for mobile devices, tablets, and desktops to ensure the best user experience across all platforms."
            },
            {
              id: "4",              title: "Can you help with SEO?",              content: "Yes, we build SEO best practices into every website including proper site structure, meta tags, performance optimization, and we can also discuss additional SEO services."
            },
            {
              id: "5",              title: "What if I need changes after launch?",              content: "We provide a revision period after launch and offer ongoing support packages. Most changes can be made quickly and efficiently through our content management system."
            },
            {
              id: "6",              title: "Do you offer e-commerce solutions?",              content: "Yes, we build e-commerce websites with secure payment processing, inventory management, and everything you need to sell online successfully."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCTA
          tag="Ready to Get Started"
          tagIcon={Rocket}
          title="Let's Build Your Digital Presence"
          description="Join hundreds of satisfied clients who have transformed their businesses with Oasis. Contact us today for a free consultation."
          buttons={[
            { text: "Schedule Consultation" },
            { text: "View Our Portfolio" }
          ]}
          background={{ variant: "plain" }}
          useInvertedBackground={false}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseCard
          logoText="Oasis"
          copyrightText="© 2025 Oasis. All rights reserved."
          columns={[
            {
              title: "Services",              items: [
                { label: "Web Design", href: "#features" },
                { label: "Web Development", href: "#features" },
                { label: "E-commerce", href: "#pricing" },
                { label: "SEO", href: "#features" }
              ]
            },
            {
              title: "Company",              items: [
                { label: "About", href: "#about" },
                { label: "Portfolio", href: "#testimonials" },
                { label: "Team", href: "#about" },
                { label: "Contact", href: "#contact" }
              ]
            },
            {
              title: "Resources",              items: [
                { label: "Blog", href: "#" },
                { label: "Case Studies", href: "#testimonials" },
                { label: "FAQ", href: "#faq" },
                { label: "Support", href: "#contact" }
              ]
            },
            {
              title: "Legal",              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Cookie Policy", href: "#" },
                { label: "Compliance", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}