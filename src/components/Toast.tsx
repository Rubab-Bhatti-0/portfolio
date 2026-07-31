import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface ToastProps {
  message: string;
  type?: "success" | "error" | "info";
  isOpen: boolean;
  onClose: () => void;
  duration?: number;
}

export default function Toast({ message, type = "success", isOpen, onClose, duration = 4000 }: ToastProps) {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose, duration]);

  const icons = {
    success: "check_circle",
    error: "error",
    info: "info",
  };

  const colors = {
    success: "bg-emerald-600/95 dark:bg-emerald-500/90 text-white border-emerald-500/20",
    error: "bg-rose-600/95 dark:bg-rose-500/90 text-white border-rose-500/20",
    info: "bg-primary/95 dark:bg-primary/90 text-white border-primary/20",
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9, x: "-50%" }}
          animate={{ opacity: 1, y: 0, scale: 1, x: "-50%" }}
          exit={{ opacity: 0, y: 20, scale: 0.9, x: "-50%" }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="fixed bottom-6 left-1/2 z-[100] pointer-events-auto"
        >
          <div className={`flex items-center gap-3 px-6 py-4 rounded-2xl border backdrop-blur-md shadow-2xl ${colors[type]}`}>
            <span className="material-symbols-outlined text-xl shrink-0 select-none">
              {icons[type]}
            </span>
            <span className="text-sm font-medium whitespace-nowrap">
              {message}
            </span>
            <button
              onClick={onClose}
              className="ml-3 text-white/70 hover:text-white hover:bg-white/10 p-1 rounded-full transition-colors shrink-0 cursor-pointer"
              aria-label="Close notification"
            >
              <span className="material-symbols-outlined text-sm select-none">close</span>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
