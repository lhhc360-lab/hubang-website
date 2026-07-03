"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";

const navItems = [
  { label: "首页", href: "#home" },
  { label: "服务", href: "#services" },
  { label: "解决方案", href: "#solutions" },
  { label: "案例", href: "#cases" },
  { label: "关于我们", href: "#about" },
  { label: "联系我们", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-slate-900/90 backdrop-blur-xl border-b border-white/10 shadow-[0_1px_30px_rgba(0,0,0,0.5)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button
              onClick={() => handleNavClick("#home")}
              className="flex items-center gap-2.5 group"
            >
              <div className="relative">
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500/40 flex items-center justify-center group-hover:bg-blue-500/30 transition-all duration-300">
                  <Zap className="w-4 h-4 text-blue-400" />
                </div>
                <div className="absolute inset-0 rounded-lg bg-blue-500/20 blur-sm group-hover:bg-blue-500/30 transition-all duration-300" />
              </div>
              <div className="flex flex-col -space-y-0.5">
                <span className="text-sm font-bold text-white leading-tight tracking-tight">互邦科技</span>
                <span className="text-[10px] text-blue-400/70 leading-tight tracking-widest uppercase">HUBANG AI</span>
              </div>
            </button>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="relative px-5 py-2 text-sm text-slate-400 hover:text-white transition-colors duration-200 group"
                >
                  {item.label}
                  <span className="absolute bottom-1 left-4 right-4 h-px bg-blue-400/0 group-hover:bg-blue-400/60 transition-all duration-300" />
                </button>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => handleNavClick("#contact")}
                className="relative px-5 py-2 text-sm font-medium rounded-lg overflow-hidden group"
              >
                <span className="absolute inset-0 bg-blue-600 transition-all duration-300 group-hover:bg-blue-500" />
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-blue-500 to-blue-400" />
                <span className="relative text-white">立即咨询</span>
              </button>
            </div>

            {/* Mobile toggle */}
            <button
              className="md:hidden p-2 text-slate-500 hover:text-slate-900 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 bg-slate-900/95 backdrop-blur-2xl border-b border-slate-200 md:hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNavClick(item.href)}
                  className="text-left px-4 py-3 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 text-sm"
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.05 }}
                onClick={() => handleNavClick("#contact")}
                className="mt-2 px-4 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm font-medium transition-colors duration-200"
              >
                立即咨询
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
