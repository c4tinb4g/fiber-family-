import { motion } from "framer-motion"

function Hero() {
  return (
    <section className="hero">
      <motion.h1
        className="hero-title"
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        Trace
      </motion.h1>

      <motion.button
        className="hero-button"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
      >
        How does it work?
      </motion.button>

      <motion.div
        className="scroll-circle"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        scrolltop="true"  
        onClick={() => window.scrollTo({ top: 800, behavior: "smooth" })}
      >
        ↓
      </motion.div>
    </section>
  )
}

export default Hero