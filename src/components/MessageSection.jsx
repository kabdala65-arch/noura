import { motion } from 'framer-motion'
import './MessageSection.css'

export default function MessageSection() {
  return (
    <section className="message-section">
      <motion.div
        className="message-wrapper"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="ring-glow-wrapper">
          <div className="ring-glow">
            <span className="ring-heart">♥</span>
          </div>
        </div>

        <h2 className="message-title">
          <span className="message-lead">يا نور عيني.. يا أغلى حد في حياتي...</span>
          <span className="signature">نورا ❤️</span>
        </h2>

        <motion.p
          className="message-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          يا نورا، اسمك نور.. وإنتي فعلاً نور حياتي كلها.<br /><br />
          من يوم 22/3/2026 والدنيا في عيني بقت أهدى وأحلى وأدفى.
          ضحكتك بتصلّح يومي كله، وكلمة منك بتهوّن عليّا أصعب الأيام،
          وجنبك بحس إني في بيتي، وإن قلبي لقى أخيراً المكان اللي يطمّن فيه.<br /><br />
          مش عارف أشكر ربنا إزاي إنه حطّك في طريقي.. إنتي مش بس حبيبتي،
          إنتي الأمان، والسند، والصاحبة، وأجمل دعوة ربنا استجابها ليا.<br /><br />
          ولو الزمن يرجع تاني مليون مرة، هختارك تاني من غير ما أفكر.<br /><br />
          وعد مني: هفضل أحبك، وأحافظ عليكي، وأفرّحك بكل اللي أقدر عليه،
          وهكون معاكي في كل الظروف، حلوة كانت ولا صعبة.
        </motion.p>

        <motion.div
          className="message-signature-line"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        />

        <motion.p
          className="message-from"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
        >
          انتي أغلى حد في حياتي، ربنا يخليكي ليا وميحرمنيش منك أبداً، ونفضل مع بعض طول العمر ❤️🌹
        </motion.p>
      </motion.div>
    </section>
  )
}
