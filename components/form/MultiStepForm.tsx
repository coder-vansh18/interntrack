"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useFormPersistence } from "@/hooks/useFormPersistence";
import FormProgress from "./FormProgress";
import StepPersonal from "./StepPersonal";
import StepProjects from "./StepProjects";
import StepFinal from "./StepFinal";
import SuccessScreen from "./SuccessScreen";

const TOTAL_STEPS = 3;

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [formData, setFormData, clearFormData] = useFormPersistence("interntrack-draft", {
    fullName: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    portfolio: "",
    skills: [] as string[],
    experience: "",
    role: "",
    availability: "",
    whyJoin: "",
    notes: "",
  });

  const updateData = (newData: any) => {
    setFormData((prev: any) => ({ ...prev, ...newData }));
    // Clear errors when user types
    if (Object.keys(errors).length > 0) {
      setErrors({});
    }
  };

  const validateStep = (step: number) => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!formData.fullName) newErrors.fullName = "Full name is required";
      if (!formData.email) newErrors.email = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    }

    if (step === 2) {
      if (!formData.skills || formData.skills.length === 0) newErrors.skills = "Add at least one skill";
    }

    if (step === 3) {
      if (!formData.role) newErrors.role = "Please select a preferred role";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      if (currentStep < TOTAL_STEPS) {
        setDirection(1);
        setCurrentStep((prev) => prev + 1);
      } else {
        submitForm();
      }
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setDirection(-1);
      setCurrentStep((prev) => prev - 1);
      setErrors({});
    }
  };

  const submitForm = async () => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    clearFormData();
    setIsSubmitted(true);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 50 : -50,
      opacity: 0,
    }),
  };

  if (isSubmitted) {
    return <SuccessScreen />;
  }

  return (
    <div className="w-full max-w-3xl mx-auto rounded-2xl glass-strong border border-white/[0.08] overflow-hidden shadow-2xl relative">
      <FormProgress currentStep={currentStep} totalSteps={TOTAL_STEPS} />

      <div className="p-6 md:p-12 min-h-[400px] relative">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentStep}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="w-full"
          >
            {currentStep === 1 && (
              <StepPersonal data={formData} updateData={updateData} errors={errors} />
            )}
            {currentStep === 2 && (
              <StepProjects data={formData} updateData={updateData} errors={errors} />
            )}
            {currentStep === 3 && (
              <StepFinal data={formData} updateData={updateData} errors={errors} />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="bg-[#05050a]/50 p-6 border-t border-white/[0.06] flex items-center justify-between">
        <button
          onClick={prevStep}
          className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-colors ${
            currentStep === 1
              ? "opacity-0 pointer-events-none"
              : "text-slate-400 hover:text-white hover:bg-white/[0.05]"
          }`}
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        <button
          onClick={nextStep}
          className="flex items-center gap-2 px-8 py-3 bg-violet-600 hover:bg-violet-500 text-white rounded-xl font-medium transition-all shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.5)]"
        >
          {currentStep === TOTAL_STEPS ? "Submit Application" : "Continue"}
          {currentStep !== TOTAL_STEPS && <ArrowRight className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
}
