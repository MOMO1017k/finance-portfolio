"use client";

import { useEffect } from "react";

export function SectionKeyboardNavigation() {
  useEffect(() => {
    const selectors = [".portfolio-hero", "#experience", "#capabilities", "#work", "#contact"];
    let pendingIndex: number | null = null;
    let settleTimer: ReturnType<typeof setTimeout> | undefined;

    function resetPending() {
      pendingIndex = null;
      clearTimeout(settleTimer);
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey || event.isComposing) return;
      if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;

      const target = event.target;
      if (target instanceof Element && target.closest(
        'input, textarea, select, [contenteditable]:not([contenteditable="false"]), [role="textbox"], [role="slider"], [role="spinbutton"], [role="listbox"], [role="combobox"], [role="menu"], [role="tablist"], [role="tree"], [role="grid"], [role="dialog"], dialog[open]',
      )) return;

      const sections = selectors.map((selector) => document.querySelector<HTMLElement>(selector))
        .filter((section): section is HTMLElement => section !== null && section.getClientRects().length > 0);
      if (!sections.length) return;

      event.preventDefault();
      // Holding a key must not skip through several panels.
      if (event.repeat) return;

      const headerHeight = document.querySelector(".site-header")?.getBoundingClientRect().height ?? 0;
      const positions = sections.map((section, index) => index === 0 ? 0 :
        Math.max(0, section.getBoundingClientRect().top + window.scrollY - headerHeight));
      const probe = window.scrollY + Math.min(120, (window.innerHeight - headerHeight) * 0.2);
      let currentIndex = 0;
      positions.forEach((position, index) => { if (position <= probe) currentIndex = index; });
      const nextIndex = Math.max(0, Math.min(sections.length - 1,
        (pendingIndex ?? currentIndex) + (event.key === "ArrowDown" ? 1 : -1)));

      pendingIndex = nextIndex;
      clearTimeout(settleTimer);
      const section = sections[nextIndex];
      // Keep keyboard focus in the destination panel without a second scroll.
      if (!section.hasAttribute("tabindex")) section.setAttribute("tabindex", "-1");
      section.focus({ preventScroll: true });
      window.scrollTo({ top: positions[nextIndex],
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
      settleTimer = setTimeout(resetPending, 1000);
    }

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("scrollend", resetPending);
    window.addEventListener("wheel", resetPending, { passive: true });
    window.addEventListener("touchstart", resetPending, { passive: true });
    window.addEventListener("pointerdown", resetPending, { passive: true });
    return () => {
      resetPending();
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("scrollend", resetPending);
      window.removeEventListener("wheel", resetPending);
      window.removeEventListener("touchstart", resetPending);
      window.removeEventListener("pointerdown", resetPending);
    };
  }, []);

  return null;
}
