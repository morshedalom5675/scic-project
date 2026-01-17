"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Eye, Lock, Globe } from "lucide-react";

const PrivacyPage = () => {
  const sections = [
    {
      icon: <Eye className="w-8 h-8 text-secondary" />,
      title: "Data Collection",
      desc: "We only collect essential information such as your name and email address to manage your account and provide a personalized experience.",
    },
    {
      icon: <Lock className="w-8 h-8 text-secondary" />,
      title: "Security & Safety",
      desc: "Your data is a trust we take seriously. We use advanced encryption and industry-standard security measures to keep your information safe.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-secondary" />,
      title: "Cookie Policy",
      desc: "We use cookies to maintain your login session and improve site performance. This ensures a faster and smoother browsing experience for you.",
    },
    {
      icon: <Globe className="w-8 h-8 text-secondary" />,
      title: "Third-Party Sharing",
      desc: "We never sell or share your personal data with third-party marketers. Your privacy is our priority.",
    },
  ];

  return (
    <div className="min-h-screen bg-base-200 py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-black text-black mb-4">
            Privacy Policy
          </h1>
          <p className="text-base-content/60 italic font-medium">
            Your privacy is our responsibility. Learn how we protect your data.
          </p>
        </motion.div>

        <div className="grid gap-8">
          {sections.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-base-100 p-8 rounded-[2rem] shadow-xl border border-white/10 flex flex-col md:flex-row gap-6 items-center hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="p-4 bg-base-200 rounded-2xl shrink-0">
                {item.icon}
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2 text-black">{item.title}</h3>
                <p className="text-black/70 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
