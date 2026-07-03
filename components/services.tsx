"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Bot, Globe, Smartphone, LayoutDashboard,
  Database, Brain, Cpu, Layers
} from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI智能客服系统",
    desc: "基于大语言模型构建的智能客服，7×24小时自动响应，精准理解用户意图，大幅降低人工成本。",
    color: "blue",
    tag: "热门",
  },
  {
    icon: Globe,
    title: "网站开发",
    desc: "现代化企业官网、营销型网站设计开发，响应式布局，SEO友好，提升品牌专业形象。",
    color: "cyan",
    tag: null,
  },
  {
    icon: Smartphone,
    title: "小程序开发",
    desc: "微信/支付宝小程序全栈开发，用户体验流畅，快速上线，覆盖移动端业务场景。",
    color: "teal",
    tag: null,
  },
  {
    icon: Layers,
    title: "APP开发",
    desc: "iOS/Android原生及跨平台APP开发，高性能、高稳定性，满足企业移动化业务需求。",
    color: "sky",
    tag: null,
  },
  {
    icon: LayoutDashboard,
    title: "企业管理系统",
    desc: "ERP、CRM、OA等企业级管理系统定制开发，流程数字化，提升组织运营效率。",
    color: "blue",
    tag: null,
  },
  {
    icon: Brain,
    title: "AI知识库与Agent",
    desc: "私有化AI知识库部署，企业知识沉淀与智能检索，构建专属AI Agent工作流。",
    color: "indigo",
    tag: "AI核心",
  },
  {
    icon: Cpu,
    title: "自动化办公系统",
    desc: "RPA流程自动化、智能表单、审批流、报表自动生成，让重复工作交给AI完成。",
    color: "cyan",
    tag: null,
  },
  {
    icon: Database,
    title: "数据管理平台",
    desc: "企业数据采集、整合、可视化分析平台，洞察业务趋势，支持数据驱动决策。",
    color: "teal",
    tag: null,
  },
];

const colorMap: Record<string, { border: string; bg: string; icon: string; glow: string; tag: string }> = {
  blue: {
    border: "border-blue-500/20 hover:border-blue-500/40",
    bg: "bg-blue-500/10",
    icon: "text-blue-400",
    glow: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.12)]",
    tag: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  },
  cyan: {
    border: "border-cyan-500/20 hover:border-cyan-500/40",
    bg: "bg-cyan-500/10",
    icon: "text-cyan-400",
    glow: "group-hover:shadow-[0_0_30px_rgba(6,182,212,0.12)]",
    tag: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
  },
  teal: {
    border: "border-teal-500/20 hover:border-teal-500/40",
    bg: "bg-teal-500/10",
    icon: "text-teal-400",
    glow: "group-hover:shadow-[0_0_30px_rgba(20,184,166,0.12)]",
    tag: "bg-teal-500/20 text-teal-300 border-teal-500/30",
  },
  sky: {
    border: "border-sky-500/20 hover:border-sky-500/40",
    bg: "bg-sky-500/10",
    icon: "text-sky-400",
    glow: "group-hover:shadow-[0_0_30px_rgba(14,165,233,0.12)]",
    tag: "bg-sky-500/20 text-sky-300 border-sky-500/30",
  },
  indigo: {
    border: "border-blue-400/20 hover:border-blue-400/40",
    bg: "bg-blue-400/10",
    icon: "text-blue-300",
    glow: "group-hover:shadow-[0_0_30px_rgba(96,165,250,0.12)]",
    tag: "bg-blue-400/20 text-blue-200 border-blue-400/30",
  },
};

export function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-pad relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-blue-600/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-blue-500/20 text-xs text-blue-300/70 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            核心业务
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            全栈技术服务体系
          </h2>
          <p className="mt-4 text-slate-300 max-w-xl mx-auto text-sm leading-relaxed">
            从AI智能体到企业系统，提供覆盖企业全生命周期的数字化解决方案
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, i) => {
            const c = colorMap[service.color] || colorMap.blue;
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.07 }}
                className={`group relative p-6 rounded-2xl glass border ${c.border} ${c.glow} transition-all duration-400 cursor-default card-hover`}
              >
                {/* Tag */}
                {service.tag && (
                  <span className={`absolute top-4 right-4 px-2 py-0.5 text-[10px] font-medium rounded-full border ${c.tag}`}>
                    {service.tag}
                  </span>
                )}

                {/* Icon */}
                <div className={`w-10 h-10 rounded-xl ${c.bg} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}>
                  <Icon className={`w-5 h-5 ${c.icon}`} />
                </div>

                <h3 className="text-white font-semibold text-base mb-2 leading-tight">{service.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{service.desc}</p>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-${service.color}-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
