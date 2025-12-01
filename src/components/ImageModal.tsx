"use client";

import { useEffect, useCallback } from "react";
import styles from "./ImageModal.module.scss";

interface ImageModalProps {
  isOpen: boolean;
  imageSrc: string;
  imageAlt: string;
  imageCaption?: string;
  onClose: () => void;
}

export default function ImageModal({
  isOpen,
  imageSrc,
  imageAlt,
  imageCaption,
  onClose,
}: ImageModalProps) {
  // Handle ESC key to close modal
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    // Lock body scroll when modal is open
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  // Close on overlay click
  const handleOverlayClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    },
    [onClose]
  );

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modal}>
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close modal"
        >
          <span className="material-symbols-outlined">close</span>
        </button>
        <div className={styles.imageContainer}>
          <img src={imageSrc} alt={imageAlt} className={styles.image} />
          {imageCaption && (
            <div className={styles.caption}>{imageCaption}</div>
          )}
        </div>
      </div>
    </div>
  );
}

