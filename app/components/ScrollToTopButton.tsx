"use client";

import { useEffect, useState } from "react";

type ScrollToTopButtonProps = {
  lang?: "ar" | "en";
};

export default function ScrollToTopButton({ lang = "en" }: ScrollToTopButtonProps) {
  const [visible, setVisible] = useState(false);
  const isAr = lang === "ar";

  useEffect(() => {
    let ticking = false;

    const updateVisible = () => {
      const nextVisible = window.scrollY > 280;
      setVisible((prev) => (prev === nextVisible ? prev : nextVisible));
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateVisible);
    };

    updateVisible();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label={isAr ? "العودة إلى الأعلى" : "Back to top"}
      title={isAr ? "العودة إلى الأعلى" : "Back to top"}
      style={{
        position: "fixed",
        right: 24,
        bottom: 24,
        width: 52,
        height: 52,
        borderRadius: 10,
        border: "1px solid rgba(27,94,32,0.08)",
        background: "rgba(247,249,244,0.14)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        boxShadow: "0 1px 12px rgba(27,94,32,0.05)",
        color: "#1B5E20",
        fontSize: 24,
        fontWeight: 900,
        display: visible ? "inline-flex" : "none",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        zIndex: 180,
      }}
    >
      ↑
    </button>
  );
}
