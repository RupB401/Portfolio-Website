import { Mail, MapPin, Phone, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { FaDiscord, FaReddit, FaInstagram, FaLinkedin } from "react-icons/fa";
import emailjs from "emailjs-com";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target;
    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form,
        EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          toast({
            title: "Message sent!",
            description:
              "Thank you for your message. I'll get back to you soon.",
          });
          setIsSubmitting(false);
          form.reset();
        },
        (error) => {
          toast({
            title: "Error",
            description: "Failed to send message. Please try again later.",
          });
          setIsSubmitting(false);
        }
      );
  };
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="flex flex-col justify-between h-full p-8">
            <div>
              <h3 className="text-left text-2xl font-semibold mb-6">
                Contact Information
              </h3>
              <div className="space-y-6 justify-center">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-left font-medium">Email</h4>
                    <a
                      href="mailto:rb636739@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      rb636739@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-left font-medium">Phone</h4>
                    <a
                      href="tel:9564342814"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      9564342814
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-left font-medium">Location</h4>
                    <a className="text-muted-foreground hover:text-primary transition-colors">
                      Krishnanagar, West Bengal, India
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Message Box */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="Write Your Name..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="xyz@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 flex flex-col items-center">
          <h4 className="text-4xl font-medium mb-4">Connect With Me</h4>
          <div className="flex gap-4 mt-2">
            <a
              href="https://www.linkedin.com/in/rup-kumar-biswas-082452307/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <FaLinkedin className="w-8 h-8 text-[#0A66C2] hover:text-primary transition-colors" />
            </a>
            <a
              href="https://www.reddit.com/u/Dr_Spktrm464/s/7vyEJ4A3Cq"
              target="_blank"
              rel="noopener noreferrer"
              title="Reddit"
            >
              <FaReddit className="w-8 h-8 text-[#FF4500] hover:text-primary transition-colors" />
            </a>
            <a
              href="https://www.instagram.com/drstone2019__"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
            >
              <FaInstagram className="w-8 h-8 text-[#E4405F] hover:text-primary transition-colors" />
            </a>
            <a
              href="https://discordapp.com/users/941973171307962398"
              target="_blank"
              rel="noopener noreferrer"
              title="Discord"
            >
              <FaDiscord className="w-8 h-8 text-[#5865F2] hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
