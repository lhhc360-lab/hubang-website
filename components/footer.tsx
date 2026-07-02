"use client";

import { Zap, Phone, MapPin, ArrowRight } from "lucide-react";

const navLinks = [
  { label: "首页", href: "#home" },
  { label: "服务", href: "#services" },
  { label: "AI能力", href: "#ai" },
  { label: "解决方案", href: "#solutions" },
  { label: "案例", href: "#cases" },
  { label: "关于我们", href: "#about" },
  { label: "联系我们", href: "#contact" },
];

const services = [
  "AI智能客服系统",
  "网站开发",
  "小程序开发",
  "APP开发",
  "企业管理系统",
  "私有化AI知识库",
  "自动化办公系统",
  "数据管理平台",
];

export function Footer() {
  const handleClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-slate-950 border-t border-white/5 overflow-hidden">
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[1px] bg-gradient-to-r from-transparent via-blue-400/20 to-transparent blur-sm" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-1">
            <button onClick={() => handleClick("#home")} className="flex items-center gap-2.5 mb-5 group">
              <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center group-hover:bg-blue-500/30 transition-all duration-300">
                <Zap className="w-4 h-4 text-blue-400" />
              </div>
              <div className="flex flex-col -space-y-0.5">
                <span className="text-sm font-bold text-white leading-tight">互邦科技</span>
                <span className="text-[10px] text-blue-400/60 leading-tight tracking-widest uppercase">HUBANG AI</span>
              </div>
            </button>
            <p className="text-slate-500 text-sm leading-relaxed mb-5">
              AI驱动的软件开发与企业数字化解决方案服务商，助力中小企业智能化转型。
            </p>
            <div className="space-y-2.5 text-sm">
              <a href="tel:13309248817" className="flex items-center gap-2.5 text-slate-400 hover:text-white transition-colors duration-200 group">
                <Phone className="w-3.5 h-3.5 text-blue-500/60 group-hover:text-blue-400 transition-colors" />
                133-0924-8817
              </a>
              <div className="flex items-start gap-2.5 text-white/40">
                <MapPin className="w-3.5 h-3.5 text-blue-500/60 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">陕西省西安市高新区丈八一路绿地蓝海大厦2012室</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-slate-200 text-sm font-semibold mb-5 uppercase tracking-wider">快速导航</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleClick(link.href)}
                    className="text-slate-400 hover:text-white text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white/70 text-sm font-semibold mb-5 uppercase tracking-wider">核心服务</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <span className="text-slate-400 text-sm flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-blue-500/40 flex-shrink-0" />
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-white/70 text-sm font-semibold mb-5 uppercase tracking-wider">开始合作</h4>
            <div className="glass-blue border border-blue-500/20 rounded-xl p-5">
              <div className="text-slate-200 text-sm font-medium mb-2">免费咨询，快速启动</div>
              <p className="text-slate-400 text-xs leading-relaxed mb-4">告诉我们您的需求，我们将在1个工作日内提供专业方案。</p>
              <button
                onClick={() => handleClick("#contact")}
                className="w-full py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-colors duration-200 flex items-center justify-center gap-2 group"
              >
                立即咨询
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} 西安互邦信息技术有限公司 · 版权所有
          </div>
          <div className="flex items-center gap-4">
            <span>陕ICP备XXXXXXXX号</span>
            <span>·</span>
            <span>隐私政策</span>
            <span>·</span>
            <span>服务协议</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
