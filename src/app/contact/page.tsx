"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import type { FieldValues } from "react-hook-form";
import { useForm } from "react-hook-form";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  SendHorizontal,
  CheckCircle,
} from "lucide-react";
import Navbar from "../homeSections/Navbar";

const socialLinks = [
  { icon: Linkedin, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Facebook, href: "#" },
  { icon: Instagram, href: "#" },
] as const;

const ContactSection: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    // Handle form submission here
    console.log(data);
  };

  return (
    <div>
      <Navbar
        isScrolled={isScrolled}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />
      <section className="w-full py-16 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply opacity-10 animate-blob" />
          <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-100 rounded-full mix-blend-multiply opacity-10 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply opacity-10 animate-blob animation-delay-4000" />
        </div>

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Let&apos;s Work Together
            </h2>
            <p className="text-lg text-blue-600 max-w-2xl mx-auto">
              Ready to transform your digital presence? Reach out to discuss
              your project, get a quote, or explore how we can help your
              business grow.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-4">
                      <div>
                        <Input
                          placeholder="Your Full Name"
                          {...register("name", {
                            required: "Name is required",
                          })}
                          className="bg-white"
                        />
                        {errors.name?.message && (
                          <span className="text-sm text-red-500 mt-1">
                            {errors.name.message.toString()}
                          </span>
                        )}
                      </div>

                      <div>
                        <Input
                          type="email"
                          placeholder="Email Address"
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "Invalid email address",
                            },
                          })}
                          className="bg-white"
                        />
                        {errors.email?.message && (
                          <span className="text-sm text-red-500 mt-1">
                            {errors.email.message.toString()}
                          </span>
                        )}
                      </div>

                      <div>
                        <Input
                          type="tel"
                          placeholder="Phone Number (Optional)"
                          {...register("phone")}
                          className="bg-white"
                        />
                      </div>

                      <div>
                        <Textarea
                          placeholder="Tell us about your project..."
                          {...register("message", {
                            required: "Message is required",
                          })}
                          className="min-h-[150px] bg-white"
                        />
                        {errors.message?.message && (
                          <span className="text-sm text-red-500 mt-1">
                            {errors.message.message.toString()}
                          </span>
                        )}
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          Send Message
                          <SendHorizontal className="h-4 w-4" />
                        </span>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-blue-900 mb-6">
                    Other Ways to Connect
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                      <div>
                        <h4 className="font-medium text-blue-900">Visit Us</h4>
                        <p className="text-gray-600">
                          123 Digital Avenue
                          <br />
                          Tech District
                          <br />
                          New York, NY 10001
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Mail className="w-5 h-5 text-blue-600 mt-1" />
                      <div>
                        <h4 className="font-medium text-blue-900">Email Us</h4>
                        <a
                          href="mailto:contact@nettrix.com"
                          className="text-blue-600 hover:text-blue-700"
                        >
                          contact@nettrix.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Phone className="w-5 h-5 text-blue-600 mt-1" />
                      <div>
                        <h4 className="font-medium text-blue-900">Call Us</h4>
                        <a
                          href="tel:+1234567890"
                          className="text-blue-600 hover:text-blue-700"
                        >
                          +1 (234) 567-890
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h4 className="font-medium text-blue-900 mb-4">
                      Follow Us
                    </h4>
                    <div className="flex gap-4">
                      {socialLinks.map((social, index) => (
                        <a
                          key={index}
                          href={social.href}
                          className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
                        >
                          <social.icon className="w-5 h-5" />
                        </a>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="w-full h-[300px] bg-gray-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.1583091352!2d-74.11976373946229!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1645645265695!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12"
          >
            <div className="flex items-center justify-center gap-2 text-blue-600">
              <CheckCircle className="w-5 h-5" />
              <p>
                We typically respond within 24 hours. Looking forward to working
                with you!
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
