"use client";

import { DotPattern } from "@/components/ui/dot-background";
import { motion } from "motion/react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
interface techStack {
  name: string;
  color: string;
}

export default function Home() {
  const techStackPills: techStack[] = [
    { name: "Golang", color: "#6ad6e3" },
    { name: "Typescript", color: "#3178c6" },
    { name: "Next.js", color: "#FFFFFF" },
    { name: "PostgreSQL", color: "#326690" },
    { name: "MongoDB", color: "#00ed64" },
    { name: "Linux", color: "#f5bd0d" },
  ];

  return (
    <div className="flex items-center justify-center flex-row min-h-screen px-4 py-10">
      <div className="flex items-center justify-center max-w-2xl p-2 flex-col w-full">
        <div className="space-y-4 w-full">
          <motion.h1
            className="text-3xl font-black text-white flex flex-row lg:text-6xl"
            initial={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.4 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Hey, I&apos;m Bartosz{" "}
            <motion.span
              animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
              transition={{
                duration: 2.5,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            >
              👋
            </motion.span>
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.4 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-light"
          >
            I&apos;m <span className="text-blue-500">Self-Taught</span>{" "}
            Full-Stack Developer
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.4 }}
            animate={{ y: 0, opacity: 1 }}
            className="space-y-2"
          >
            <div className="flex items-center flex-row text-3xl lg:text:6xl font-black">
              About{" "}
              <span className="text-3xl lg:text:6xl text-blue-500">.</span>
            </div>
            <p>
              Hey!, I&apos;m 19 years old full-stack software developer building
              open-source projects that help people in their daily lives. When
              I&apos;m not coding u will find me reading a book, brainstorming
              another project idea or playing with my dog.
            </p>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.4 }}
            animate={{ y: 0, opacity: 1 }}
            className="space-y-2"
          >
            <div className="flex items-center flex-row text-3xl lg:text:6xl font-black">
              Tech Stack{" "}
              <span className="text-3xl lg:text:6xl text-blue-500">.</span>
            </div>
            <div className="flex items-center flex-row flex-wrap gap-2">
              {techStackPills.map((item, id) => (
                <motion.span
                  className={`flex items-center justify-center flex-row border p-2 rounded-full`}
                  style={{ borderColor: item.color }}
                  key={id}
                  initial={{ x: 20, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  animate={{ x: 0, opacity: 1 }}
                >
                  <p style={{ fontWeight: "bold", color: item.color }}>
                    {item.name}
                  </p>
                </motion.span>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            transition={{ duration: 0.4 }}
            animate={{ x: 0, opacity: 1 }}
            className="space-y-2"
          >
            <div className="flex items-center flex-row text-3xl lg:text:6xl font-black">
              Education{" "}
              <span className="text-3xl lg:text:6xl text-blue-500">.</span>
            </div>
            <a
              href="https://www.zstiomeritum.edu.pl/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between border p-3 rounded-md w-full hover:bg-white/5 transition-colors group"
            >
              <p className="font-bold">
                🎓 ZSTIO Meritum ·{" "}
                <span className="font-normal text-gray-400">
                  Computer Science Profile
                </span>
              </p>
              <div className="flex items-center gap-3 shrink-0">
                <span className="text-gray-400">2022-2026</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                  ↗
                </span>
              </div>
            </a>
          </motion.div>
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            transition={{ duration: 0.4 }}
            animate={{ x: 0, opacity: 1 }}
            className="space-y-2"
          >
            <div className="flex items-center flex-row text-3xl lg:text:6xl font-black">
              Experience{" "}
              <span className="text-3xl lg:text:6xl text-blue-500">.</span>
            </div>
            <a
              href="https://notedrop.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between border p-3 rounded-md w-full hover:bg-white/5 transition-colors group"
            >
              <p className="font-bold">
                Notedrop.app ·{" "}
                <span className="font-normal text-gray-400">
                  Founder & Lead Developer
                </span>
              </p>
              <div className="flex items-center gap-3 shrink-0">
                <span className="text-gray-400">2025-Present</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                  ↗
                </span>
              </div>
            </a>
            <a
              href="https://pulsir.net"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between border p-3 rounded-md w-full hover:bg-white/5 transition-colors group"
            >
              <p className="font-bold">
                Pulsir.net ·{" "}
                <span className="font-normal text-gray-400">
                  Contributor Java Developer
                </span>
              </p>
              <div className="flex items-center gap-3 shrink-0">
                <span className="text-gray-400">Jun 2023 - Aug 2023</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                  ↗
                </span>
              </div>
            </a>
          </motion.div>
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            transition={{ duration: 0.4 }}
            animate={{ x: 0, opacity: 1 }}
            className="space-y-2"
          >
            <div className="flex items-center flex-row text-3xl lg:text:6xl font-black">
              Awards{" "}
              <span className="text-3xl lg:text:6xl text-blue-500">.</span>
            </div>
            <a
              href="https://www.zstiomeritum.edu.pl/aktualnosci/1425-final-konkursu-meritum-it-2"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between border p-3 rounded-md w-full hover:bg-white/5 transition-colors group"
            >
              <p className="font-bold">
                🏆 Meritum IT x Vattenfall ·{" "}
                <span className="font-normal text-gray-400">
                  Best Educational Support Project
                </span>
              </p>
              <div className="flex items-center gap-3 shrink-0">
                <span className="text-gray-400">March 2025</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                  ↗
                </span>
              </div>
            </a>
          </motion.div>
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            transition={{ duration: 0.4 }}
            animate={{ x: 0, opacity: 1 }}
            className="space-y-2"
          >
            <div className="flex items-center flex-row text-3xl lg:text:6xl font-black">
              Contact{" "}
              <span className="text-3xl lg:text:6xl text-blue-500">.</span>
            </div>
            <div className="flex flex-row gap-2 mt-3 ">
              <a
                href="mailto:krawczykbartosz@proton.me"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between border p-3 rounded-md hover:bg-white/5 transition-colors group space-x-2 w-full"
              >
                <p className="font-bold">Email </p>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                    ↗
                  </span>
                </div>
              </a>
              <a
                href="https://github.com/SkuliX01"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between border p-3 rounded-md  hover:bg-white/5 transition-colors group space-x-2 w-full"
              >
                <p className="font-bold">Github </p>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                    ↗
                  </span>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/bartosz-krawczyk07/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between border p-3 rounded-md hover:bg-white/5 transition-colors group space-x-2 w-full "
              >
                <p className="font-bold">LinkedIn </p>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                    ↗
                  </span>
                </div>
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            transition={{ duration: 0.4 }}
            animate={{ x: 0, opacity: 1 }}
            className="space-y-2"
          >
            <div className="flex items-center flex-row text-3xl lg:text:6xl font-black">
              Resume{" "}
              <span className="text-3xl lg:text:6xl text-blue-500">.</span>
            </div>
            <div className="flex flex-row gap-2">
              <a
                href="/resume-en.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between border p-3 rounded-md w-full hover:bg-white/5 transition-colors group"
              >
                <p className="font-bold">📄 Download CV — English</p>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                    ↗
                  </span>
                </div>
              </a>
              <a
                href="/resume-pl.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between border p-3 rounded-md w-full hover:bg-white/5 transition-colors group"
              >
                <p className="font-bold">📄 Download CV — Polish</p>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                    ↗
                  </span>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <DotPattern />
      </motion.div>
    </div>
  );
}
