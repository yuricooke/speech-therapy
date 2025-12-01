"use client";

import { useState } from "react";
import { Language } from "@/types";
import styles from "./Contact.module.scss";

interface ContactFormProps {
  language: Language;
  onSubmitted?: () => void;
}

export default function ContactForm({
  language,
  onSubmitted,
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const translations = {
    en: {
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send",
        sending: "Sending...",
        success: "Thank you! Your message has been sent.",
        error: "Something went wrong. Please try again.",
      },
    },
    pt: {
      form: {
        name: "Nome",
        email: "E-mail",
        message: "Mensagem",
        send: "Enviar",
        sending: "Enviando...",
        success: "Obrigado! Sua mensagem foi enviada.",
        error: "Algo deu errado. Por favor, tente novamente.",
      },
    },
    de: {
      form: {
        name: "Name",
        email: "E-Mail",
        message: "Nachricht",
        send: "Senden",
        sending: "Wird gesendet...",
        success: "Vielen Dank! Ihre Nachricht wurde gesendet.",
        error: "Etwas ist schief gelaufen. Bitte versuchen Sie es erneut.",
      },
    },
  };

  const t = translations[language];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Chama a API REST do Next.js (sem barra final)
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
        onSubmitted?.();
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.contactForm}>
      <div className={styles.formGroup}>
        <label htmlFor="name">{t.form.name}</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email">{t.form.email}</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="message">{t.form.message}</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={6}
          required
        />
      </div>

      {submitStatus === "success" && (
        <div className={styles.successMessage}>{t.form.success}</div>
      )}

      {submitStatus === "error" && (
        <div className={styles.errorMessage}>{t.form.error}</div>
      )}

      <button
        type="submit"
        className={styles.submitButton}
        disabled={isSubmitting}
      >
        {isSubmitting ? t.form.sending : t.form.send}
      </button>
    </form>
  );
}
