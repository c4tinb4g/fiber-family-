import { motion } from "framer-motion"

function MiddleSection() {
  return (
    <section className="middle-section">
      <div className="middle-content">
        <motion.div
          className="insight-card"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2>From messy data to clear insights</h2>
          <p>
            Trace provides the data infrastructure that connects circular
            materials across the entire value chain.
          </p>
        </motion.div>

        <motion.div
          className="pill-group"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <button>Process & Quality Data</button>
          <button>Environmental Metrics</button>
          <button>Origin & Composition Data</button>
        </motion.div>
      </div>

      <motion.h2
        className="middle-statement"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Circularity cannot be proven by testing - it must be proven by data
      </motion.h2>
    </section>
  )
}

export default MiddleSection