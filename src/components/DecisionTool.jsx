import { motion } from "framer-motion"
import { useState } from "react"

function SliderField({ label }) {
  const [value, setValue] = useState(25)

  return (
    <div className="slider-field">
      <label>{label}</label>

      <div className="range-wrap" style={{ "--value": `${value}%` }}>
        <div className="slider-fill">
          <span>Low</span>
          <div className="slider-line"></div>
        </div>

        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />

        <div className="slider-dots">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <span className="slider-high">High</span>
      </div>
    </div>
  )
}

function DecisionTool() {
  const [showPreview, setShowPreview] = useState(false)

  return (
    <section className="decision-section">
      <motion.h2 className="decision-title">Decision Making Tool</motion.h2>

      <motion.div className="decision-card">
        <p className="decision-description">
          <strong>Fiber Family</strong> is a global digital marketplace
          connecting sorters, recyclers, spinners, textile manufacturers, and
          other actors committed to circularity. Our platform facilitates the
          sale and purchase of sorted fractions, recycled fibres.
        </p>

        <div className="tool-panel">
          <div className="tool-top-buttons">
            <button>Create your own yarn</button>
            <button>New Retex yarn</button>
          </div>

          <div className="slider-grid">
            <SliderField label="Recycled content" />
            <SliderField label="Cost" />
            <SliderField label="Fiber density" />
            <SliderField label="Yarn Composition" />
          </div>

          <div className="tool-bottom-buttons">
            <button onClick={() => setShowPreview(true)}>Preview</button>
            <button>Download</button>
          </div>
        </div>
      </motion.div>

      {showPreview && (
        <div className="preview-overlay">
          <motion.div
            className="preview-modal"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="preview-close"
              onClick={() => setShowPreview(false)}
            >
              x
            </button>

            <div className="hidden-icon">⊘</div>

            <h2>We are working on it...</h2>
          </motion.div>
        </div>
      )}
    </section>
  )
}

export default DecisionTool