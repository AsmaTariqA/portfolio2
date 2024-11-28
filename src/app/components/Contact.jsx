"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import { FaEnvelope, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const [tab, setTab] = useState("contact");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section
      className="text-white py-4 md:mt-24 lg:mt-24 lg:bg-[#232330] md:bg-[#232330] md:rounded-full lg:rounded-full"
      id="contact"
    >
      <div className="md:grid md:grid-cols-2 gap-6 items-center py-5 px-3 xl:gap-16 sm:py-16 xl:px-10">
        {/* Image */}
        <Image src="/images/contact-image.png" width={400} height={500} alt="Contact" />
        
        {/* Content */}
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Contact Me</h2>
          <p className="text-base lg:text-lg p-6">
            I'm here to help bring your ideas to life with modern, responsive web solutions. Feel free to reach out to me through any of the platforms listed below!
          </p>

          <div className="contact-info mt-8">
            <div className="flex items-center mb-4">
              <FaEnvelope className="text-[#dd9afa] mr-4" size={24} />
              <span className="text-white text-lg">Email: ataartist.13@gmail.com</span>
            </div>

            <div className="flex items-center mb-4">
              <FaInstagram className="text-[#dd9afa] mr-4" size={24} />
              <a
                href="https://instagram.com/asmataariq"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-lg"
              >
                Instagram: @asmataariq
              </a>
            </div>

            <div className="flex items-center">
              <FaGithub className="text-[#dd9afa] mr-4" size={24} />
              <a
                href="https://github.com/AsmaTariqA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-lg"
              >
                GitHub: github.com/AsmaTariqA
              </a>
            </div>
            <div className="flex items-center mt-2">
              <FaLinkedin className="text-[#dd9afa] mr-2 " size={24} />
              <a
                href="www.linkedin.com/in/asma-tariq13"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-lg"
              >
                Linkedin: Asma Tariq
              </a>
            </div>
          </div>

          <p className="text-sm md:text-lg text-[#dd9afa] leading-relaxed mt-4">
            Let's connect on social media or via email! Whether you're looking for a web developer, designer, or simply want to discuss ideas, I'm just a message away.
          </p>
        </div>
        
      </div>
    </section>
  );
};

export default Contact;
