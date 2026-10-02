tsParticles.load("tsparticles", {
    fullScreen: { enable: false },
    background: { color: "transparent" },
    fpsLimit: 60,
    particles: {
        number: { value: 80 },
        color: { value: "#6a49b8" },
        shape: { type: "circle" },
        opacity: { value: 0.8 },
        size: { value: { min: 2, max: 5 } },
        links: {
            enable: true,
            color: "#a78bfa",
            distance: 140,
            opacity: 0.3
        },
        move: {
            enable: true,
            speed: 1
        }
    },
    interactivity: {
        events: {
            onHover: { enable: false }
        }
    }
}).then(() => console.log("tsParticles OK"))
  .catch((erro) => console.error("tsParticles erro:", erro));
