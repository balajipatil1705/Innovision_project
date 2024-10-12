import React from "react";
import Section from "./Section";
import { socials } from "../constants";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex sm:justify-between justify-center items-center gap-6 sm:gap-10 max-sm:flex-col">
        {/* Footer Text */}
        <p className="caption text-n-4 lg:block text-center max-sm:mb-4">
          © {new Date().getFullYear()}. All rights reserved. Powered by Brainwave.
        </p>

        {/* Social Icons */}
        <ul className="flex gap-5 flex-wrap justify-center">
          {socials.map((item) => (
            <li key={item.id}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.title}
                className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-transform hover:bg-n-6 hover:scale-110 focus:outline-none focus:ring focus:ring-color-1"
              >
                <img
                  src={item.iconUrl}
                  width={16}
                  height={16}
                  alt={item.title}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
