import { motion } from 'framer-motion';
import { ShoppingBag, Star, Lock, ArrowRight } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden bg-[var(--bg-0)]">
      {/* Background Elements - Floating Animation */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -50, 20, 0],
            scale: [1, 1.1, 0.9, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--primary)] opacity-[0.05] rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"
        />
        <motion.div
          animate={{
            x: [0, -40, 20, 0],
            y: [0, 40, -30, 0],
            scale: [1, 1.2, 0.8, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--accent)] opacity-[0.05] rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, staggerChildren: 0.2 }}
        className="text-center max-w-2xl relative z-10"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="w-24 h-24 bg-[var(--bg-2)] border border-[rgba(255,255,255,0.1)] rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl cursor-pointer"
        >
          <ShoppingBag size={48} className="text-[var(--primary)]" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight"
        >
          Store <span className="relative inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] via-orange-500 to-[var(--accent)] bg-gradient-size animate-gradient">Coming Soon</span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl text-[var(--text-1)] mb-12 leading-relaxed"
        >
          Unlocking Soon. We are crafting the ultimate cosmetic experience for our community.
          <br /><span className="text-[var(--accent)] font-semibold">Capes, Wings, and more.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.div
            whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.2)" }}
            className="flex items-center gap-2 px-6 py-3 bg-[var(--bg-2)] border border-[rgba(255,255,255,0.05)] rounded-xl text-[var(--text-1)] transition-all cursor-default"
          >
            <Lock size={18} />
            <span>Currently in Development</span>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, backgroundColor: "rgba(239, 68, 68, 0.15)" }}
            className="flex items-center gap-2 px-6 py-3 bg-[rgba(239,68,68,0.1)] border border-[var(--primary)] border-opacity-20 rounded-xl text-[var(--primary)] transition-all cursor-default"
          >
            <Star size={18} />
            <span>Premium Cosmetics</span>
          </motion.div>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12"
        >
          <a
            href="https://www.astraclient.in/"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg bg-gradient-to-r from-[var(--primary)] to-orange-600 hover:shadow-[0_0_30px_rgba(239,68,68,0.4)] transition-all transform hover:-translate-y-1 text-white"
          >
            Return to Main Website
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </motion.div>

      <footer className="absolute bottom-8 text-[var(--text-1)] text-sm opacity-60">
        &copy; 2026 AstraClient. All Rights Reserved.
      </footer>
    </div >
  );
}
