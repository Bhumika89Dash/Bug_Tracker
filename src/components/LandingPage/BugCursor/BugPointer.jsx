"use client";

import { useEffect, useState } from "react";

export default function BugCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {   // ✅ no type here
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {/* hide default cursor */}
      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>

      {/* bug icon cursor */}
      <div
        className="fixed pointer-events-none z-50"
        style={{
          left: pos.x,
          top: pos.y,
          transform: "translate(-50%, -50%)",
        }}
      >
        <i className="bi bi-bug text-4xl text-white"></i>
      </div>
    </>
  );
}
