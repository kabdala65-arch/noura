import { motion } from 'framer-motion'
import './MeaningSection.css'

const letters = [
  { l: 'ن', text: 'نور حياتي، ومن يوم ما دخلتيها الدنيا بقت منوّرة' },
  { l: 'و', text: 'وجودها جنبي أكبر نعمة ربنا إدهالي' },
  { l: 'ر', text: 'راحة قلبي، وطمأنينة كل أيامي' },
  { l: 'ا', text: 'أغلى حد في حياتي، وآخر كلمة: بحبها' },
]

export default function MeaningSection() {
  return (
    <section className="meaning-section">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="section-tag">بحبك</span>
        <h2 className="section-title">مش مجرد كلمة بقولهالك</h2>
        <p className="section-subtitle">
          «نورا» معناها النور.. المُضيئة اللي بتنوّر أي مكان تدخله، وإنتي نوّرتي حياتي كلها ♥
        </p>
      </motion.div>

      <div className="meaning-grid">
        {letters.map((item, i) => (
          <motion.div
            key={i}
            className="meaning-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
          >
            <span className="meaning-letter">{item.l}</span>
            <span className="meaning-text">{item.text}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
