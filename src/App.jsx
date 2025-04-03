import React, { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";

import {
  Code,
  Palette,
  Cloud,
  Monitor,
  Pencil,
  Github,
  Twitter,
  Linkedin,
  Instagram,
  CheckCircle,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Navbar from "./components/Navbar";
import ChatBot from "./components/ChatBot";

function App() {
  const [state, handleSubmit] = useForm(process.env.FORMSREE_ID);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  useEffect(() => {
    if (state.succeeded) {
      setTimeout(() => {
        window.location.reload();
      }, 1000); // Reload after 2 seconds to show the success message
    }
  }, [state.succeeded]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const services = [
    {
      icon: <Monitor className="h-8 w-8 text-purple-500" />,
      title: "Website Design & Development",
      description:
        "Custom websites that are fast, secure, and responsive across all devices.",
    },
    {
      icon: <Palette className="h-8 w-8 text-purple-500" />,
      title: "UI/UX Design",
      description:
        "User-centered design solutions that enhance user experience and engagement.",
    },
    {
      icon: <Search className="h-8 w-8 text-purple-500" />,
      title: "SEO Optimization",
      description:
        "Improve your online visibility and drive organic traffic to your website.",
    },
    {
      icon: <Cloud className="h-8 w-8 text-purple-500" />,
      title: "Salesforce CRM",
      description:
        "Custom Salesforce solutions to streamline your business processes.",
    },
    {
      icon: <Pencil className="h-8 w-8 text-purple-500" />,
      title: "Graphic Design",
      description:
        "Eye-catching designs that communicate your brand message effectively.",
    },
    {
      icon: <Code className="h-8 w-8 text-purple-500" />,
      title: "Custom Development",
      description:
        "Tailored software solutions to meet your specific business needs.",
    },
  ];

  const portfolio = [
    {
      title: "E-commerce Platform",
      description: "A full-featured online store with inventory management",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      gif: "https://media.giphy.com/media/5k1Wu87CzkDfrx0Xwj/giphy.gif?cid=ecf05e47dbk6oh6hg01wnol8yxq727d9ytjjtidrslundlrf&ep=v1_gifs_related&rid=giphy.gif&ct=g",
    },
    {
      title: "Healthcare Dashboard",
      description: "Interactive analytics platform for medical professionals",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      gif: "https://media.giphy.com/media/xT0Gqn9yuw8hnPGn5K/giphy.gif?cid=ecf05e47xutv1pcosqeg7ia1s82y9ft5hxplhkofj477jn4k&ep=v1_gifs_related&rid=giphy.gif&ct=g",
    },
    {
      title: "Educational App",
      description: "Mobile-first learning platform for students",
      image:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800",
      gif: "https://media.giphy.com/media/l3vRncXoginztrSs8/giphy.gif?cid=ecf05e47vzmdxq0w7stdp5s1jfu1ozuzqwsqudk9dfxerolw&ep=v1_gifs_related&rid=giphy.gif&ct=g",
    },
  ];

  const pricing = [
    {
      title: "Basic",
      price: "₹25000",
      features: [
        "Website Design",
        "Responsive Development",
        "Basic SEO",
        "1 Month Support",
      ],
      isPopular: false,
    },
    {
      title: "Professional",
      price: "₹40000",
      features: [
        "Custom Design",
        "Advanced Development",
        "Full SEO Package",
        "CRM Integration",
        "3 Months Support",
      ],
      isPopular: true,
    },
    {
      title: "Enterprise",
      price: "Custom",
      features: [
        "Full-Service Solution",
        "Custom Development",
        "Premium Support",
        "Dedicated Team",
      ],
      isPopular: false,
    },
    {
      title: "Custom Solution",
      price: "Custom",
      features: [
        "Custom Debugging",
        "Premium Support",
        "Dedicated Team",
        "Error Solution of pre Build Projects",
      ],
      isPopular: false,
    }
  ];

  return (
    <div
      className={`min-h-screen bg-gray-900 dark:bg-gray-900 text-white transition-colors duration-200`}
    >
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      {/* Hero Section */}
      <section
        id="hero"
        className="pt-20 lg:pt-28 pb-20 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-gray-900 to-gray-900 animate-gradient"></div>
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              <span className="block">Transform Your Digital Presence</span>
              <span className="block text-purple-400">
                With Cutting-Edge Solutions
              </span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              We craft beautiful, functional websites and digital solutions that
              help businesses grow and succeed in the modern world.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="rounded-md shadow"
              >
                <a
                  href="#contact"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 md:py-4 md:text-lg md:px-10"
                >
                  Get Started
                  <Sparkles className="ml-2 h-5 w-5" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-800 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-4 text-xl text-gray-400">
              Comprehensive digital solutions for your business needs
            </p>
          </motion.div>

          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative p-8 bg-gray-900 dark:bg-gray-700 rounded-2xl shadow-lg border border-purple-500/20"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-4 text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-900 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Our Work
            </h2>
            <p className="mt-4 text-xl text-gray-400">
              Check out some of our recent projects
            </p>
          </motion.div>

          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {portfolio.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg group"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                  />
                  <img
                    src={project.gif}
                    alt={`${project.title} animation`}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-gray-400">{project.description}</p>
                  <motion.a
                    href="#"
                    whileHover={{ x: 10 }}
                    className="mt-4 inline-flex items-center text-purple-400 hover:text-purple-300"
                  >
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-800 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Pricing Plans
            </h2>
            <p className="mt-4 text-xl text-gray-400">
              Choose the perfect plan for your needs
            </p>
          </motion.div>

          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={`relative p-8 bg-gray-900 dark:bg-gray-700 border ${
                  plan.isPopular ? "border-purple-500" : "border-gray-700"
                } rounded-2xl shadow-lg`}
              >
                {plan.isPopular && (
                  <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2">
                    <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-semibold bg-purple-600 text-white">
                      Popular
                    </span>
                  </div>
                )}
                <div className="mb-4">
                  <h3 className="text-2xl font-semibold text-white">
                    {plan.title}
                  </h3>
                  <p className="mt-4 text-5xl font-bold text-white">
                    {plan.price}
                  </p>
                </div>
                <ul className="mt-6 space-y-4 flex-1">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex">
                      <CheckCircle className="h-5 w-5 text-purple-500" />
                      <span className="ml-3 text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`mt-8 block w-full px-6 py-3 text-center rounded-md ${
                    plan.isPopular
                      ? "bg-purple-600 text-white hover:bg-purple-700"
                      : "bg-gray-700 text-white hover:bg-gray-600"
                  } font-medium transition-colors duration-200`}
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      {/* <section id="contact" className="py-20 bg-gray-900 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Get in Touch
            </h2>
            <p className="mt-4 text-xl text-gray-400">
              Let's discuss how we can help your business grow
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-20 max-w-lg mx-auto"
          >
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  required
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  required
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                type="submit"
                disabled={state.submitting}
                className="w-full bg-purple-600 text-white py-3 px-6 rounded-md hover:bg-purple-700 transition-colors duration-200 disabled:opacity-50"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section> */}

      <section id="contact" className="py-20  bg-gray-900 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Get In Touch
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Have a project in mind? We'd love to hear from you. Drop us a line
              and we'll get back to you as soon as possible.
            </p>
          </div>
        
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 shadow-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="md:col-span-2 p-6 bg-gray-900 shadow-lg rounded-lg border"
            >
              <form
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                onSubmit={handleSubmit}
                
                
              >
                <div>
                  <label className="block text-sm font-medium text-white">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="mt-1 block w-full p-3 border text-black border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="John Doe"
                    required
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="mt-1 block w-full p-3 border border-gray-300 text-black rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="john@example.com"
                    required
                    
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="mt-1 block w-full p-3 border text-black border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="+91 999 999 9999"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white">
                    Subject
                  </label>
                  <input
                    type="text"
                     name="subject"
                    className="mt-1 block w-full p-3 border text-black border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Project Inquiry"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-white">
                    Message
                  </label>
                  <textarea
                    name="message"
                    className="mt-1 block w-full p-3 border text-black border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    rows={4}
                    placeholder="Tell us about your project..."
                    required
                  ></textarea>
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>
                <div className="md:col-span-2">
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors duration-200"
                  >
                    {state.submitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
                {/* Success Message */}
                {state.succeeded && (
                  <p className="text-green-500 text-center md:col-span-2 mt-4">
                    ✅ Thank you! Your message has been sent.
                  </p>
                )}
              </form>
            </motion.div>

            <div className="space-y-6">
              <div className="p-6 bg-white shadow-lg rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                  📧 Email Us
                </h3>
                <p className="text-gray-600">info@digitalcraft.com</p>
              </div>
              <div className="p-6 bg-white shadow-lg rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                  📞 Call Us
                </h3>
                <p className="text-gray-600">8319787328</p>
              </div>
              <div className="p-6 bg-white shadow-lg rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                  📍 Visit Us
                </h3>
                <p className="text-gray-600">
                  Office Soon
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-900 text-white py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <h3 className="text-xl font-bold mb-4">About Us</h3>
              <p className="text-gray-400">
                We're a team of passionate developers and designers dedicated to
                creating exceptional digital experiences for businesses
                worldwide.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#portfolio"
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  href="#"
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                >
                  <Twitter className="h-6 w-6" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  href="#"
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                >
                  <Linkedin className="h-6 w-6" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  href="#"
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                >
                  <Github className="h-6 w-6" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  href="#"
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                >
                  <Instagram className="h-6 w-6" />
                </motion.a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} TechPro. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* <ChatBot /> */}
    </div>
  );
}

export default App;
