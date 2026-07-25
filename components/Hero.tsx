"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="flex flex-col items-center">

      <motion.div
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .8 }}
      >

        <Image
          src="/logo.png"
          alt="echojxmes"
          width={520}
          height={320}
          priority
        />

      </motion.div>

      <motion.h2
        initial={{ opacity:0,y:15 }}
        animate={{ opacity:1,y:0 }}
        transition={{ delay:.5 }}
        className="mt-8 text-sm uppercase tracking-[0.65em] text-zinc-500"
      >
        SOFTWARE ENGINEER
      </motion.h2>

      <motion.p
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        transition={{ delay:.7 }}
        className="mt-5 text-center text-zinc-400"
      >
        Building modern software,
        <br />
        games and interactive experiences.
      </motion.p>

    </div>
  );
}