"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const messages = [
  "Building portfolio...",
  "Compiling projects...",
  "Designing interfaces...",
  "Writing TypeScript...",
  "Deploying updates...",
];

export default function StatusBar() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setIndex((i) => (i + 1) % messages.length);
    }, 3500);

    return () => clearInterval(messageInterval);
  }, []);

  return (
    <motion.div
      animate={{
        x: [-180, 180, -180],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="border border-zinc-800 bg-zinc-950/80 backdrop-blur px-6 py-3 rounded-md"
    >
      <div className="flex items-center gap-3">

        <motion.div
          animate={{ opacity: [1, .2, 1] }}
          transition={{
            repeat: Infinity,
            duration: 1
          }}
          className="w-2 h-2 rounded-full bg-blue-400"
        />

        <span className="text-zinc-300 text-sm">
          {messages[index]}
        </span>

      </div>
    </motion.div>
  );
}