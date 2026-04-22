import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Send, Loader2 } from 'lucide-react';
import { Mail } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formPayload = new FormData();
      // TODO: Replace with your actual Web3Forms Access Key
      formPayload.append("access_key", "YOUR_ACCESS_KEY_HERE");
      formPayload.append("name", formData.name);
      formPayload.append("email", formData.email);
      formPayload.append("message", formData.message);
      formPayload.append("subject", "New Contact Form Submission from Portfolio");

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formPayload
      });

      const data = await res.json();

      if (data.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        console.error("Error from Web3Forms:", data);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error("Failed to submit form:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-dark-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
          <p className="mt-6 text-slate-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out. I'll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="space-y-8"
          >
            <div className="glass-card p-8 rounded-2xl hover:-translate-y-1">
              <h3 className="text-2xl font-display font-semibold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <a href="mailto:muhamedshahid7860@gmail.com" className="flex items-center gap-4 group cursor-pointer inline-flex w-full">
                  <div className="w-12 h-12 rounded-full bg-primary-500/10 flex items-center justify-center text-primary-400 group-hover:bg-primary-500 group-hover:text-white transition-colors duration-500 shadow-lg">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-1">Email</p>
                    <p className="text-white font-medium group-hover:text-primary-400 transition-colors">muhamedshahid7860@gmail.com</p>
                  </div>
                </a>
                
                <a href="tel:+919567108723" className="flex items-center gap-4 group cursor-pointer inline-flex w-full">
                  <div className="w-12 h-12 rounded-full bg-accent-500/10 flex items-center justify-center text-accent-400 group-hover:bg-accent-500 group-hover:text-white transition-colors duration-500 shadow-lg">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-1">Phone</p>
                    <p className="text-white font-medium group-hover:text-accent-400 transition-colors">+91 9567108723</p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl space-y-6 hover:-translate-y-1">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-white/5 text-white placeholder-slate-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all duration-300"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-white/5 text-white placeholder-slate-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all duration-300"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    placeholder="How can I help you?"
                    className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-white/5 text-white placeholder-slate-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all duration-300 resize-none"
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-primary-600 to-accent-600 text-white font-medium shadow-lg hover:shadow-primary-500/25 hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : submitStatus === 'success' ? (
                  'Message Sent!'
                ) : submitStatus === 'error' ? (
                  'Failed to send. Try Email instead.'
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
