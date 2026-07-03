"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Target, Users, Lightbulb, Shield } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "技术驱动",
    desc: "以AI为核心，持续引入前沿技术，用代码解决真实业务问题。",
  },
  {
    icon: Users,
    title: "客户成功",
    desc: "深度理解客户业务，交付的不是产品，是可量化的业务增长。",
  },
  {
    icon: Lightbulb,
    title: "快速迭代",
    desc: "敏捷开发理念，快速原型验证，小步快跑，持续优化交付价值。",
  },
  {
    icon: Shield,
    title: "安全可靠",
    desc: "企业级安全架构，数据加密保护，全链路监控，7×24稳定运行。",
  },
];

const teamHighlights = [
  { label: "核心工程师", value: "10+", sub: "均具备大厂背景" },
  { label: "AI技术专家", value: "5+", sub: "深度学习与NLP" },
  { label: "行业顾问", value: "8+", sub: "垂直领域专家" },
  { label: "服务年限", value: "5+", sub: "年行业积累" },
];

export function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="section-pad relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: company story */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-blue-500/20 text-xs text-blue-300/70 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                关于我们
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                让每家企业都能
                <br />
                <span className="gradient-text">用上AI的力量</span>
              </h2>
              <div className="space-y-4 text-slate-400 text-sm leading-relaxed">
                <p>
                  西安互邦信息技术有限公司成立于陕西西安高新区，是一家聚焦AI驱动企业数字化的技术服务公司。我们相信AI不是少数大企业的专利，每家中小企业都应该享有AI带来的效率革命。
                </p>
                <p>
                  核心团队来自互联网大厂与知名高校，在AI工程化落地、企业系统定制开发、行业数字化解决方案领域拥有丰富的实战经验。服务客户覆盖旅游、物业、母婴、本地服务、制造等多个行业。
                </p>
                <p>
                  我们不做"外包公司"，我们是客户长期的技术合伙人。从需求调研到系统上线，从AI调优到持续迭代，全程陪伴每一位客户的数字化成长之路。
                </p>
              </div>
            </motion.div>

            {/* Team stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-10 grid grid-cols-2 gap-3"
            >
              {teamHighlights.map((t, i) => (
                <motion.div
                  key={t.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="glass border border-white/[0.07] rounded-xl p-4"
                >
                  <div className="text-2xl font-bold text-white">{t.value}</div>
                  <div className="text-sm text-slate-400 mt-0.5">{t.label}</div>
                  <div className="text-xs text-slate-500 mt-1">{t.sub}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: values */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mb-10"
            >
              <h3 className="text-xl font-bold text-white mb-2">我们的服务理念</h3>
              <p className="text-slate-400 text-sm">深入业务本质，以AI技术创造真实商业价值</p>
            </motion.div>

            <div className="space-y-4">
              {values.map((v, i) => {
                const Icon = v.icon;
                return (
                  <motion.div
                    key={v.title}
                    initial={{ opacity: 0, x: 30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                    className="group flex items-start gap-4 p-5 glass border border-white/[0.06] rounded-xl hover:border-blue-500/20 transition-all duration-300 card-hover"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/15 transition-colors duration-300">
                      <Icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm mb-1">{v.title}</h4>
                      <p className="text-white/40 text-sm leading-relaxed">{v.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Digital capability badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="mt-6 p-5 glass-blue border border-blue-500/20 rounded-xl"
            >
              <div className="flex items-center gap-3">
                <div className="relative w-3 h-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500" />
                </div>
                <span className="text-blue-300 text-sm font-medium">企业数字化能力认证</span>
              </div>
              <p className="text-slate-400 text-xs mt-2 leading-relaxed">
                拥有AI系统研发、企业管理软件、行业平台建设等多项核心数字化能力，支持从需求分析到系统交付的全链路服务。
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
