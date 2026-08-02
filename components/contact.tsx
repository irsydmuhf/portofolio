"use client";

import React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin, ExternalLink, Instagram, AlertCircle } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

type Status = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await emailjs.send(
        "service_786y1f8",
        "template_5lkrh0p",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "wtqtskzk5sTbfOAhL",
      );

      setStatus("success");
      setTimeout(() => {
        setStatus("idle");
        setFormData({ name: "", email: "", message: "" });
      }, 3000);
    } catch (error) {
      console.error("Email send error:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-secondary/20">
      <div className="max-w-4xl mx-auto">
        <h2 className="inline-block font-display text-4xl md:text-5xl font-bold mb-4 bg-primary text-primary-foreground border-2 border-foreground rounded-xl px-4 py-1 rotate-[-1deg] shadow-[4px_4px_0_0_hsl(var(--foreground))]">
          Get In Touch
        </h2>
        <p className="text-muted-foreground text-lg mb-12 mt-6">
          Have a question or want to discuss a project? Feel free to reach out!
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="paper-card p-6 space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-bold text-foreground mb-2"
              >
                Name
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="bg-background border-2 border-foreground rounded-lg focus-visible:ring-primary"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-bold text-foreground mb-2"
              >
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
                className="bg-background border-2 border-foreground rounded-lg focus-visible:ring-primary"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-bold text-foreground mb-2"
              >
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project or question..."
                rows={5}
                required
                className="bg-background border-2 border-foreground rounded-lg resize-none focus-visible:ring-primary"
              />
            </div>

            <Button
              type="submit"
              disabled={status === "loading"}
              className="w-full border-2 border-foreground bg-primary text-primary-foreground hover:bg-primary rounded-lg shadow-[4px_4px_0_0_hsl(var(--foreground))] hover:-translate-y-0.5 hover:-translate-x-0.5 transition-transform font-bold disabled:opacity-70 disabled:pointer-events-none disabled:translate-x-0 disabled:translate-y-0"
            >
              {status === "loading"
                ? "Sending..."
                : status === "success"
                  ? "Message Sent! 🎉"
                  : "Send Message"}
            </Button>

            {status === "error" && (
              <div className="flex items-center gap-2 rounded-lg border-2 border-destructive bg-destructive/10 px-4 py-3 text-sm font-semibold text-destructive">
                <AlertCircle className="w-4 h-4 shrink-0" />
                Failed to send message. Please try again, or email me directly.
              </div>
            )}
          </form>

          {/* Social Links & Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-display text-xl font-bold text-foreground mb-6">
                Connect With Me
              </h3>

              <div className="space-y-4">
                <a
                  href="mailto:irsyad.muhf@gmail.com"
                  className="paper-card flex items-center gap-4 p-4 group"
                >
                  <Mail className="w-6 h-6 text-foreground group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-bold text-foreground">Email</p>
                    <p className="text-sm text-muted-foreground">
                      irsyad.muhf@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://github.com/irsydmuhf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="paper-card flex items-center gap-4 p-4 group"
                >
                  <Github className="w-6 h-6 text-foreground group-hover:scale-110 transition-transform" />
                  <div className="flex-1">
                    <p className="font-bold text-foreground">GitHub</p>
                    <p className="text-sm text-muted-foreground">
                      View my projects
                    </p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground" />
                </a>

                <a
                  href="https://www.linkedin.com/in/irsyadmuhf/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="paper-card flex items-center gap-4 p-4 group"
                >
                  <Linkedin className="w-6 h-6 text-foreground group-hover:scale-110 transition-transform" />
                  <div className="flex-1">
                    <p className="font-bold text-foreground">LinkedIn</p>
                    <p className="text-sm text-muted-foreground">
                      Professional profile
                    </p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground" />
                </a>
                <a
                  href="https://www.instagram.com/irsydmuhf/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="paper-card flex items-center gap-4 p-4 group"
                >
                  <Instagram className="w-6 h-6 text-foreground group-hover:scale-110 transition-transform" />
                  <div className="flex-1">
                    <p className="font-bold text-foreground">Instagram</p>
                    <p className="text-sm text-muted-foreground">
                      Personal photos & updates
                    </p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground" />
                </a>
              </div>
            </div>

            <div className="bg-secondary border-2 border-foreground rounded-xl p-6 rotate-[1deg] shadow-[4px_4px_0_0_hsl(var(--foreground))]">
              <h4 className="font-display font-bold text-foreground mb-2">
                Available for
              </h4>
              <ul className="text-sm text-foreground/80 space-y-1">
                <li>• Full-time positions</li>
                <li>• Contract projects</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
