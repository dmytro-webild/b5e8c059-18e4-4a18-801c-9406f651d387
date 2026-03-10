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
import { Sparkles, Zap, Workflow, Brain, Gauge, Target, Cpu, Shield, Scale, BarChart3, Info, Rocket, Star } from 'lucide-react';

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
          brandName="AIFlow"
          navItems={[
            { name: "Features", id: "features" },
            { name: "Capabilities", id: "capabilities" },
            { name: "Pricing", id: "pricing" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          bottomLeftText="Intelligent Automation"
          bottomRightText="hello@aiflow.ai"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureBento
          title="Powerful AI Capabilities"
          description="Advanced machine learning features that transform your business with intelligent automation, real-time analytics, and predictive insights."
          tag="Features"
          tagIcon={Sparkles}
          animationType="smooth"
          textboxLayout="default"
          useInvertedBackground={false}
          features={[
            {
              title: "Intelligent Automation",              description: "Automate complex workflows with AI-driven decision making and process optimization",              bentoComponent: "orbiting-icons",              centerIcon: Zap,
              items: [
                { icon: Workflow, ring: 1 },
                { icon: Brain, ring: 1 },
                { icon: Gauge, ring: 2 },
                { icon: Target, ring: 2 },
                { icon: Cpu, ring: 3 }
              ]
            },
            {
              title: "Real-Time Analytics",              description: "Process streaming data and gain instant insights with live dashboards",              bentoComponent: "animated-bar-chart"
            },
            {
              title: "Predictive Models",              description: "Forecast trends and outcomes with advanced machine learning algorithms",              bentoComponent: "line-chart"
            },
            {
              title: "Global Integration",              description: "Connect with any platform or service for seamless data flow",              bentoComponent: "globe"
            }
          ]}
        />
      </div>

      <div id="capabilities" data-section="capabilities">
        <FeatureHoverPattern
          title="Interactive Capabilities"
          description="Discover the advanced features that power intelligent decision-making and automation at scale"
          animationType="smooth"
          textboxLayout="default"
          useInvertedBackground={false}
          features={[
            {
              icon: Brain,
              title: "Machine Learning Engine",              description: "Custom trained models that continuously learn from your data and improve over time"
            },
            {
              icon: Shield,
              title: "Enterprise Security",              description: "End-to-end encryption, compliance standards, and advanced access controls"
            },
            {
              icon: Zap,
              title: "Lightning Performance",              description: "Process millions of transactions per second with sub-millisecond latency"
            },
            {
              icon: Scale,
              title: "Unlimited Scalability",              description: "Grow from startup to enterprise without infrastructure concerns"
            },
            {
              icon: BarChart3,
              title: "Advanced Analytics",              description: "Deep insights with customizable dashboards and real-time reporting"
            },
            {
              icon: Cpu,
              title: "API-First Architecture",              description: "Flexible integration with REST, GraphQL, and webhooks for your ecosystem"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <MetricSplitMediaAbout
          tag="About AIFlow"
          tagIcon={Info}
          title="Pioneering AI Solutions for Enterprise"
          description="AIFlow was founded by a team of machine learning researchers and platform engineers from leading tech companies. Our mission is to democratize advanced AI capabilities for businesses of all sizes, enabling organizations to harness the power of machine learning without requiring deep technical expertise."
          metrics={[
            { value: "10,000+", title: "Active Users Worldwide" },
            { value: "99.99%", title: "Platform Uptime SLA" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AeyVCun1NqkWPvWuaXSlPFwtC6/a-team-of-engineers-and-data-scientists--1773173586927-f45eed37.png"
          imageAlt="AIFlow team collaborating in modern tech lab"
          mediaAnimation="smooth"
          metricsAnimation="smooth"
          useInvertedBackground={false}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSix
          title="Trusted by Industry Leaders"
          description="See how enterprises transform their operations with AIFlow's intelligent automation platform"
          animationType="smooth"
          textboxLayout="default"
          useInvertedBackground={false}
          speed={40}
          testimonials={[
            {
              id: "1",              name: "Sarah Chen",              handle: "VP Product, TechCorp",              testimonial: "AIFlow transformed how we process customer data. We reduced processing time by 80% and gained insights we never thought possible.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AeyVCun1NqkWPvWuaXSlPFwtC6/professional-headshot-of-a-confident-bus-1773173586625-aa23225b.png",              imageAlt: "Sarah Chen"
            },
            {
              id: "2",              name: "Michael Rodriguez",              handle: "CTO, FinanceFlow",              testimonial: "The integration was seamless and the performance exceeded our expectations. Our team is amazed at how much smarter our systems have become.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AeyVCun1NqkWPvWuaXSlPFwtC6/professional-headshot-of-a-smiling-techn-1773173586036-174293d6.png",              imageAlt: "Michael Rodriguez"
            },
            {
              id: "3",              name: "Emily Watson",              handle: "Director of Operations, RetailCo",              testimonial: "AIFlow's predictive analytics helped us optimize inventory levels and reduce waste by 35%. The ROI was evident within the first month.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AeyVCun1NqkWPvWuaXSlPFwtC6/professional-headshot-of-a-confident-dat-1773173585159-7d38ef14.png",              imageAlt: "Emily Watson"
            },
            {
              id: "4",              name: "David Park",              handle: "CEO, DataVentures",              testimonial: "We evaluated multiple platforms and AIFlow stood out for its ease of use, powerful capabilities, and exceptional support team.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AeyVCun1NqkWPvWuaXSlPFwtC6/professional-headshot-of-a-smiling-busin-1773173586669-bddc6d30.png",              imageAlt: "David Park"
            },
            {
              id: "5",              name: "Lisa Thompson",              handle: "Head of AI, InnovateLabs",              testimonial: "The platform's flexibility allowed us to deploy custom models at scale. AIFlow has become critical to our competitive advantage.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AeyVCun1NqkWPvWuaXSlPFwtC6/professional-headshot-of-a-confident-tec-1773173586288-e8f0f38a.png",              imageAlt: "Lisa Thompson"
            },
            {
              id: "6",              name: "James Wilson",              handle: "VP Technology, EnterpriseEdge",              testimonial: "Security and compliance are always concerns with AI systems. AIFlow checked every box and exceeded our enterprise requirements.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AeyVCun1NqkWPvWuaXSlPFwtC6/professional-headshot-of-a-smiling-busin-1773173586600-2b46a3cd.png",              imageAlt: "James Wilson"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardThree
          title="Simple, Transparent Pricing"
          description="Choose the plan that fits your business size and growth ambitions"
          animationType="smooth"
          textboxLayout="default"
          useInvertedBackground={false}
          plans={[
            {
              id: "starter",              price: "$499/mo",              name: "Starter",              buttons: [
                { text: "Get Started" },
                { text: "Schedule Demo" }
              ],
              features: [
                "Up to 1M events/month",                "Basic analytics dashboard",                "Email support",                "Single user account",                "Standard API access"
              ]
            },
            {
              id: "professional",              badge: "Most Popular",              badgeIcon: Star,
              price: "$1,999/mo",              name: "Professional",              buttons: [
                { text: "Get Started" },
                { text: "Schedule Demo" }
              ],
              features: [
                "Up to 50M events/month",                "Advanced analytics & insights",                "Priority 24/7 support",                "Up to 10 team members",                "Custom integrations",                "Dedicated account manager"
              ]
            },
            {
              id: "enterprise",              price: "Custom",              name: "Enterprise",              buttons: [
                { text: "Contact Sales" },
                { text: "Request Proposal" }
              ],
              features: [
                "Unlimited events & processing",                "Full platform access",                "Dedicated support team",                "Unlimited users & customization",                "On-premise deployment option",                "Custom SLA & compliance"
              ]
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Get answers to common questions about AIFlow's platform, pricing, and integration"
          animationType="smooth"
          textboxLayout="default"
          useInvertedBackground={false}
          faqsAnimation="smooth"
          faqs={[
            {
              id: "1",              title: "How long does it take to get started with AIFlow?",              content: "Most organizations can be up and running within 24-48 hours. We provide comprehensive onboarding, API documentation, and SDKs in popular languages to accelerate your implementation. Our support team is available throughout the process."
            },
            {
              id: "2",              title: "What security certifications does AIFlow hold?",              content: "AIFlow is SOC 2 Type II certified, GDPR compliant, and meets HIPAA requirements for healthcare customers. We perform regular third-party security audits and penetration testing to ensure enterprise-grade security."
            },
            {
              id: "3",              title: "Can AIFlow integrate with our existing systems?",              content: "Yes, AIFlow provides REST APIs, GraphQL, webhooks, and pre-built connectors for popular platforms like Salesforce, HubSpot, Stripe, and more. Our integration team can help with custom integrations for legacy systems."
            },
            {
              id: "4",              title: "What if I need to scale beyond my current plan?",              content: "Scaling with AIFlow is seamless. You can upgrade your plan anytime, and we'll handle the infrastructure scaling automatically. Enterprise customers receive dedicated support for capacity planning."
            },
            {
              id: "5",              title: "Does AIFlow offer training for my team?",              content: "Yes, we provide comprehensive training programs including live webinars, video tutorials, documentation, and personalized coaching sessions. Professional and Enterprise plans include dedicated training sessions."
            },
            {
              id: "6",              title: "What's the difference between the plans?",              content: "Starter is ideal for small teams and proof-of-concept projects. Professional is designed for growing companies with advanced analytics needs. Enterprise offers unlimited scale, dedicated support, and custom solutions."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCTA
          tag="Ready to Transform"
          tagIcon={Rocket}
          title="Start Your AI Journey Today"
          description="Join thousands of enterprises using AIFlow to unlock the power of artificial intelligence. Get a personalized demo or start your free trial."
          buttons={[
            { text: "Schedule Demo" },
            { text: "Start Free Trial" }
          ]}
          background={{ variant: "plain" }}
          useInvertedBackground={false}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseCard
          logoText="AIFlow"
          copyrightText="© 2025 AIFlow Inc. All rights reserved."
          columns={[
            {
              title: "Product",              items: [
                { label: "Features", href: "#features" },
                { label: "Pricing", href: "#pricing" },
                { label: "Security", href: "#" },
                { label: "Roadmap", href: "#" }
              ]
            },
            {
              title: "Company",              items: [
                { label: "About", href: "#about" },
                { label: "Blog", href: "#" },
                { label: "Careers", href: "#" },
                { label: "Contact", href: "#contact" }
              ]
            },
            {
              title: "Resources",              items: [
                { label: "Documentation", href: "#" },
                { label: "API Reference", href: "#" },
                { label: "Community", href: "#" },
                { label: "Support", href: "#" }
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
