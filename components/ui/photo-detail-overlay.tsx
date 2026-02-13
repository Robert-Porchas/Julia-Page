"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { Picture } from "@/lib/pictures";

type PhotoDetailOverlayProps = {
  open: boolean;
  picture: Picture | null;
  onClose: () => void;
};

export function PhotoDetailOverlay({
  open,
  picture,
  onClose,
}: PhotoDetailOverlayProps) {
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && picture ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"
            onClick={onClose}
            aria-label="Close photo detail overlay"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={`photo-detail-dialog-title-${picture.id}`}
            className="relative z-10 inline-flex w-fit max-w-[calc(100vw-1.5rem)] flex-col items-center justify-center"
            initial={{ opacity: 0, scale: 0.94, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 12 }}
            transition={{ duration: 0.35, ease: [0.18, 0.71, 0.11, 1] }}
            onClick={(event) => event.stopPropagation()}
          >
            <h2
              id={`photo-detail-dialog-title-${picture.id}`}
              className="sr-only"
            >
              {picture.title}
            </h2>
            <div className="relative z-30 flex w-fit items-center justify-center p-2 md:p-4">
              <div className="relative flex h-[56dvh] min-h-[280px] w-fit items-center justify-center md:h-[72dvh] md:max-h-[72dvh]">
                <motion.div
                  className="relative z-30 h-full w-fit max-w-[min(72vw,760px)] border-[10px] border-b-[28px] border-white bg-white shadow-xl"
                  initial={{ scale: 0.96, opacity: 0.8 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.45, ease: [0.18, 0.71, 0.11, 1] }}
                >
                  <img
                    src={picture.src}
                    alt={picture.alt}
                    className="h-full w-auto object-contain"
                  />
                </motion.div>

                <motion.aside
                  className="absolute inset-y-0 left-full z-10 hidden w-[300px] -translate-x-20 rounded-r-2xl border border-white/25 bg-white/10 p-7 text-white shadow-[0_16px_50px_rgba(0,0,0,0.3)] backdrop-blur-xl md:block"
                  initial={{ x: -120, opacity: 0 }}
                  animate={{ x: 72, opacity: 1 }}
                  exit={{ x: -80, opacity: 0 }}
                  transition={{ duration: 0.4, delay: 0.08, ease: [0.18, 0.71, 0.11, 1] }}
                >
                  <h2 className="text-2xl font-semibold tracking-tight">{picture.title}</h2>
                  <p className="mt-4 text-base leading-relaxed text-zinc-100/90">
                    {picture.description}
                  </p>
                </motion.aside>
              </div>
            </div>

            <motion.aside
              className="mt-3 w-[92%] max-w-[720px] rounded-2xl border border-white/25 bg-white/10 p-6 text-white shadow-[0_16px_50px_rgba(0,0,0,0.3)] backdrop-blur-xl md:hidden"
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 8, opacity: 0 }}
              transition={{ duration: 0.25, delay: 0.08, ease: [0.18, 0.71, 0.11, 1] }}
            >
              <h2 className="text-2xl font-semibold tracking-tight">{picture.title}</h2>
              <p className="mt-4 text-base leading-relaxed text-zinc-100/90">
                {picture.description}
              </p>
            </motion.aside>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
