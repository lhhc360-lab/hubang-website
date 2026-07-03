"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { MapPin, Building2, Baby, ShoppingBag, BarChart2, ArrowRight } from "lucide-react";

const solutions = [
  {
    id: "tourism",
    icon: MapPin,
    industry: "智慧旅游",
    tag: "旅游行业",
    headline: "AI赋能旅游全场景",
    desc: "智能行程规划、AI导游讲解、在线预订系统、景区管理平台，打造数字化智慧旅游生态。",
    benefits: ["智能行程AI推荐", "多渠道预订整合", "景区数据大屏", "AI导游系统"],
    metrics: [
      { label: "预订转化率", value: "+45%" },
      { label: "客服成本", value: "-60%" },
    ],
    gradient: "from-blue-600/20 to-cyan-500/10",
    border: "border-blue-500/20",
    accent: "text-blue-400",
    img: "https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "property",
    icon: Building2,
    industry: "智慧物业",
    tag: "物业行业",
    headline: "物业管理智能升级",
    desc: "业主服务小程序、智能报修系统、费用在线缴纳、物业巡检自动化，实现物业管理全面数字化。",
    benefits: ["业主服务APP", "报修工单系统", "在线缴费平台", "设备巡检管理"],
    metrics: [
      { label: "处理效率", value: "+80%" },
      { label: "业主满意度", value: "+35%" },
    ],
    gradient: "from-teal-600/20 to-cyan-500/10",
    border: "border-teal-500/20",
    accent: "text-teal-400",
    img: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "maternal",
    icon: Baby,
    industry: "母婴电商",
    tag: "母婴行业",
    headline: "母婴品牌私域增长",
    desc: "母婴品牌官网商城、小程序社区运营、AI育儿顾问、会员积分体系，构建私域流量增长闭环。",
    benefits: ["品牌商城搭建", "AI育儿顾问", "会员管理系统", "社群运营工具"],
    metrics: [
      { label: "复购率", value: "+55%" },
      { label: "私域转化", value: "+40%" },
    ],
    gradient: "from-sky-600/20 to-blue-500/10",
    border: "border-sky-500/20",
    accent: "text-sky-400",
    img: "https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "local",
    icon: ShoppingBag,
    industry: "本地生活服务",
    tag: "本地服务",
    headline: "本地商业数字化获客",
    desc: "本地服务商城、到店预约系统、口碑营销工具、AI智能推荐，帮助本地商家实现线上线下融合增长。",
    benefits: ["本地商城平台", "到店预约系统", "口碑营销工具", "团购裂变活动"],
    metrics: [
      { label: "获客成本", value: "-50%" },
      { label: "月活用户", value: "+120%" },
    ],
    gradient: "from-cyan-600/20 to-blue-500/10",
    border: "border-cyan-500/20",
    accent: "text-cyan-400",
    img: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "enterprise",
    icon: BarChart2,
    industry: "企业数字化",
    tag: "中小企业",
    headline: "企业全流程数字化管理",
    desc: "ERP/CRM/OA一体化管理平台、员工数字化办公、业务数据实时分析，驱动企业精细化运营。",
    benefits: ["ERP管理系统", "CRM客户系统", "OA审批流程", "BI数据分析"],
    metrics: [
      { label: "运营效率", value: "+70%" },
      { label: "管理成本", value: "-40%" },
    ],
    gradient: "from-blue-600/20 to-teal-500/10",
    border: "border-blue-500/20",
    accent: "text-blue-400",
    img: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export function Solutions() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(solutions[0].id);
  const item = solutions.find((s) => s.id === active) || solutions[0];

  return (
    <section id="solutions" className="section-pad relative overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-blue-500/20 text-xs text-blue-300/70 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            行业解决方案
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            深耕五大垂直行业
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-sm">
            聚焦旅游、物业、母婴、本地服务、企业管理五大场景，提供针对性数字化解决方案
          </p>
        </motion.div>

        {/* Industry selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {solutions.map((s, i) => {
            const Icon = s.icon;
            const isActive = s.id === active;
            return (
              <motion.button
                key={s.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.07 }}
                onClick={() => setActive(s.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all duration-300 border ${
                  isActive
                    ? `bg-blue-600/20 border-blue-500/40 text-blue-300`
                    : "glass border-white/[0.08] text-slate-400 hover:text-white hover:border-white/20"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {s.industry}
              </motion.button>
            );
          })}
        </div>

        {/* Detail card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-6 glass border ${item.border} rounded-3xl overflow-hidden`}
          >
            {/* Left: content */}
            <div className={`p-8 bg-gradient-to-br ${item.gradient}`}>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.08] text-xs text-white/50 mb-5">
                {item.tag}
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">{item.headline}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">{item.desc}</p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-2 mb-6">
                {item.benefits.map((b) => (
                  <div key={b} className="flex items-center gap-2">
                    <div className={`w-1.5 h-1.5 rounded-full ${item.accent.replace("text-", "bg-")}`} />
                    <span className="text-slate-400 text-sm">{b}</span>
                  </div>
                ))}
              </div>

              {/* Metrics */}
              <div className="flex gap-6">
                {item.metrics.map((m) => (
                  <div key={m.label}>
                    <div className={`text-2xl font-bold ${item.accent}`}>{m.value}</div>
                    <div className="text-xs text-slate-400">{m.label}</div>
                  </div>
                ))}
              </div>

              <button className={`mt-6 flex items-center gap-2 text-sm ${item.accent} hover:opacity-80 transition-opacity duration-200 group`}>
                了解详情
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>

            {/* Right: image */}
            <div className="relative min-h-[280px] lg:min-h-0 overflow-hidden">
              <img
                src={item.img}
                alt={item.industry}
                className="absolute inset-0 w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-slate-900/60" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />

              {/* Floating stat cards */}
              <div className="absolute bottom-6 right-6 flex flex-col gap-2">
                {item.metrics.map((m, i) => (
                  <motion.div
                    key={m.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                    className="glass border border-white/10 rounded-xl px-4 py-2.5 text-right"
                  >
                    <div className={`text-lg font-bold ${item.accent}`}>{m.value}</div>
                    <div className="text-xs text-white/40">{m.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
