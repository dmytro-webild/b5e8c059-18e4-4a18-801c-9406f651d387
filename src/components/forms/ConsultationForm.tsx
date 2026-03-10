"use client";

import { useState } from "react";
import { X } from "lucide-react";
import Input from "@/components/form/Input";

interface ConsultationFormProps {
  onClose: () => void;
}

export default function ConsultationForm({ onClose }: ConsultationFormProps) {
  const [formData, setFormData] = useState({
    name: "",    company: "",    niche: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/send-consultation", {
        method: "POST",        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          company: formData.company,
          niche: formData.niche,
          email: "massimo.molin10@gmail.com"
        })
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", company: "", niche: "" });
        setTimeout(() => {
          onClose();
        }, 2000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-card rounded-lg p-8 max-w-md w-full mx-4 shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-foreground">Schedule Consultation</h2>
          <button
            onClick={onClose}
            className="text-foreground/60 hover:text-foreground transition-colors"
            aria-label="Close form"
          >
            <X size={24} />
          </button>
        </div>

        {submitStatus === "success" ? (
          <div className="text-center py-8">
            <p className="text-foreground text-lg font-medium">Thank you!</p>
            <p className="text-foreground/60 mt-2">We'll be in touch soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Name
              </label>
              <Input
                value={formData.name}
                onChange={(value) => handleChange("name", value)}
                placeholder="Your name"
                type="text"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Company Name
              </label>
              <Input
                value={formData.company}
                onChange={(value) => handleChange("company", value)}
                placeholder="Your company"
                type="text"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Niche
              </label>
              <Input
                value={formData.niche}
                onChange={(value) => handleChange("niche", value)}
                placeholder="Your industry/niche"
                type="text"
                required
              />
            </div>

            {submitStatus === "error" && (
              <p className="text-red-500 text-sm">Something went wrong. Please try again.</p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary-cta text-primary-cta-text py-2 px-4 rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Schedule Consultation"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}