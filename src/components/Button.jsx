// components/Button.jsx
import React from "react";

export default function Button({ children, className = "", variant = "default", ...props }) {
  const base = "inline-flex items-center gap-2 px-3 py-2 rounded transition";
  const variants = {
    ghost: "bg-transparent hover:bg-white/5 text-white",
    default: "bg-[var(--color-orange)] text-black",
  };
  return (
    <button
      {...props}
      className={`${base} ${variants[variant] ?? variants.default} ${className}`}
    >
      {children}
    </button>
  );
}