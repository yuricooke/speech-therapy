"use client";

import { useState } from "react";
import { Language } from "@/types";
import ContactForm from "./ContactForm";
import styles from "./Contact.module.scss";

interface ContactModalProps {
  language: Language;
  isOpen: boolean;
  onClose: () => void;
}

const EMAIL = "tcmunkes@gmail.com";

export default function ContactModal({
  language,
  isOpen,
  onClose,
}: ContactModalProps) {
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied">("idle");

  if (!isOpen) return null;

  const copyEmail = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(EMAIL);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = EMAIL;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
      setCopyStatus("copied");
      setTimeout(() => setCopyStatus("idle"), 2000);
    } catch {
      setCopyStatus("idle");
    }
  };

  const translations = {
    en: {
      title: "Get in touch!",
      text: "Send your message using the form below or, if you prefer, copy the email address and write to me from your own email app.",
      emailLabel: "Email",
      copy: "Copy",
      copied: "Copied!",
    },
    pt: {
      title: "Entre em contato!",
      text: "Envie sua mensagem usando o formulário abaixo ou, se preferir, copie o e-mail e escreva para mim a partir do seu próprio aplicativo de e-mail.",
      emailLabel: "E-mail",
      copy: "Copiar",
      copied: "Copiado!",
    },
    de: {
      title: "Kontakt aufnehmen!",
      text: "Senden Sie Ihre Nachricht über das Formular unten oder kopieren Sie alternativ die E-Mail-Adresse und schreiben Sie mir aus Ihrem eigenen E-Mail-Programm.",
      emailLabel: "E-Mail",
      copy: "Kopieren",
      copied: "Kopiert!",
    },
    es: {
      title: "¡Ponte en contacto!",
      text: "Envía tu mensaje usando el formulario a continuación o, si prefieres, copia la dirección de correo electrónico y escríbeme desde tu propia aplicación de correo.",
      emailLabel: "Correo electrónico",
      copy: "Copiar",
      copied: "¡Copiado!",
    },
  };

  const t = translations[language];

  return (
    <div className={styles.contactModalOverlay} onClick={onClose}>
      <div
        className={styles.contactModal}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
      >
        <button
          type="button"
          className={styles.contactModalClose}
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>

        <div className={styles.contactModalHeader}>
          <h2 id="contact-modal-title">{t.title}</h2>
          <p>{t.text}</p>

          <div className={styles.emailCopyRow}>
            <span className={styles.emailLabel}>{t.emailLabel}:</span>
            <span className={styles.emailValue}>{EMAIL}</span>
            <button
              type="button"
              className={styles.copyButton}
              onClick={copyEmail}
            >
              <span className="material-symbols-outlined" aria-hidden="true">
                content_copy
              </span>
              <span>{copyStatus === "copied" ? t.copied : t.copy}</span>
            </button>
          </div>
        </div>

        <div className={styles.contactModalBody}>
          <div className={styles.formSection}>
            <ContactForm language={language} />
          </div>
        </div>
      </div>
    </div>
  );
}
