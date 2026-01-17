"use client";
import { motion } from "framer-motion";
import { FileText, CheckCircle2 } from "lucide-react";

const TermsPage = () => {
  const terms = [
    "Users must provide accurate and complete information when creating an account.",
    "All content, images, and branding on BookVerse are protected and cannot be used for commercial purposes without permission.",
    "Orders are subject to availability and will be processed according to our delivery and payment policies.",
    "We reserve the right to modify these terms at any time to improve our service and compliance.",
    "Fraudulent activities or violation of community guidelines will result in account suspension.",
  ];

  return (
    <div className="min-h-screen bg-base-100 py-24 px-6 text-base-content">
      <div className="max-w-4xl mx-auto bg-base-200/50 rounded-[3rem] p-8 md:p-16 border border-base-300 shadow-sm">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center justify-center md:justify-start gap-4 mb-10"
        >
          <div className="p-3 bg-primary text-white rounded-xl shadow-lg shadow-primary/30">
            <FileText size={32} />
          </div>
          <h1 className="text-4xl font-black uppercase tracking-tighter">
            Terms & Conditions
          </h1>
        </motion.div>

        <div className="space-y-6">
          {terms.map((text, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-4 items-start bg-base-100 p-6 rounded-2xl border border-base-300 shadow-sm hover:border-primary/30 transition-colors"
            >
              <CheckCircle2 className="text-primary shrink-0 mt-1" />
              <p className="text-lg font-medium text-base-content/80 leading-relaxed">
                {text}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-primary/5 rounded-2xl border border-primary/20 text-center">
          <p className="text-sm font-bold opacity-60">
            Last Updated: January 2026
          </p>
          <p className="text-xs mt-2 opacity-40">
            By using our services, you agree to these terms.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
