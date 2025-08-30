import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // lightweight version
import { useCallback } from "react";

export default function Stars() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: "#000", // black background
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: ["grab","bubble"], // hover effects
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 100, // how far stars move away
              duration: 0.4,
            },
            bubble: {
              distance: 150, // bubble effect range
              size: 6,       // star grows
              duration: 2,
              opacity: 1,
            },
          },
        },
        particles: {
          number: {
            value: 120,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: {
            value: "#ffffff", // stars color
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.8,
            random: true,
          },
          size: {
            value: { min: 1, max: 3 },
            random: true,
          },
          move: {
            enable: true,
            speed: 0.8,
            direction: "none",
            random: true,
            straight: false,
            outModes: {
              default: "out",
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
