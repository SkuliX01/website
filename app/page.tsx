"use client";

import { DotPattern } from "@/components/ui/dot-background";
import { motion } from "motion/react";

interface techStack {
  name: string;
  color: string;
}

export default function Home() {
  const techStackPills: techStack[] = [
    { name: "Golang", color: "#6ad6e3" },
    { name: "Typescript", color: "#3178c6" },
    { name: "Next.js", color: "#3178c6" },
    { name: "Postgres", color: "#326690" },
    { name: "Linux", color: "#f5bd0d" },
  ];

  return (
    <div className="flex items-center justify-center flex-row min-h-screen">
      <div className="flex items-center justify-center max-w-4/12 p-2 flex-col">
        <div className="mr-auto space-y-4">
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
            initial={{ x: 50, opacity: 0 }}
            transition={{ duration: 0.4 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-light"
          >
            I&apos;m <span className="text-blue-500">Self-Taught</span>{" "}
            Full-Stack Developer
          </motion.p>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
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
            initial={{ x: 50, opacity: 0 }}
            transition={{ duration: 0.4 }}
            animate={{ x: 0, opacity: 1 }}
            className="space-y-2"
          >
            <div className="flex items-center flex-row text-3xl lg:text:6xl font-black">
              Tech Stack{" "}
              <span className="text-3xl lg:text:6xl text-blue-500">.</span>
            </div>
            <div className="flex items-center flex-row space-x-2">
              {techStackPills.map((item, id) => (
                <motion.span
                  className={`flex items-center justify-center flex-row border p-2 rounded-full`}
                  style={{ borderColor: item.color }}
                  key={id}
                  initial={{ y: 50, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  animate={{ y: 0, opacity: 1 }}
                >
                  <p style={{ fontWeight: "bold" }}>{item.name}</p>
                </motion.span>
              ))}
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
