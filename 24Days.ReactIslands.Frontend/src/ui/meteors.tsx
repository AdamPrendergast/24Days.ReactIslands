import { cn } from "@lib/utils";
import React from "react";
import { motion } from "framer-motion";


export const Meteors = ({
  number,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const meteors = new Array(number || 20).fill(true);
  return (
    <>
      {meteors.map((el, idx) => (
        <span
          key={"meteor" + idx}
          className={cn(
            "tw-animate-meteor-effect tw-absolute tw-top-1/2 tw-left-1/2 tw-h-0.5 tw-w-0.5 tw-rounded-[9999px] tw-bg-slate-500 tw-shadow-[0_0_0_1px_#ffffff10] tw-rotate-[215deg]",
            "before:tw-content-[''] before:tw-absolute before:tw-top-1/2 before:tw-transform before:tw--translate-y-[50%] before:tw-w-[50px] before:tw-h-[1px] before:tw-bg-gradient-to-r before:tw-from-[#64748b] before:tw-to-transparent",
            className
          )}
          style={{
            top: 0,
            left: Math.floor(Math.random() * (400 - -400) + -400) + "px",
            animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
            animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + "s",
          }}
        ></span>
      ))}
    </>
  );
};
