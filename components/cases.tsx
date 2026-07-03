"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Bot, MapPin, Gamepad2, Globe, Database } from "lucide-react";

const cases = [
  {
    icon: Bot,
    title: "AI智能客服系统",
    category: "人工智能",
    desc: "基于私有化大模型部署的24小时智能客服平台，支持多渠道接入，准确率达92%，日均处理1000+对话。",
    tech: ["LLM", "RAG", "多渠道"],
    metrics: { label: "成本降低", value: "65%" },
    color: "blue",
    img: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    icon: Database,
    title: "灵台县智慧养老平台",
    category: "政府民生",
    desc: "灵台县智慧养老平台以互联网+养老为核心，整合民政、卫健、社区等多部门资源，构建覆盖全县的养老服务体系，实现从人找服务到服务找人的转变。",
    tech: ["智慧养老", "智能监测", "服务匹配"],
    metrics: { label: "服务老人", value: "4万+" },
    color: "blue",
    img: "https://images.pexels.com/photos/6646873/pexels-photo-6646873.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    icon: MapPin,
    title: "智慧旅游综合平台",
    category: "旅游行业",
    desc: "涵盖景区预约、智能导览、行程规划、商户管理的一站式旅游数字化平台，年服务游客20万+。",
    tech: ["小程序", "管理后台", "AI推荐"],
    metrics: { label: "转化提升", value: "48%" },
    color: "cyan",
    img: "https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    icon: Gamepad2,
    title: "陪玩俱乐部系统",
    category: "本地娱乐",
    desc: "游戏陪玩预约平台，含用户端APP、商家管理系统、AI匹配算法，用户活跃度高。",
    tech: ["APP", "AI匹配", "支付系统"],
    metrics: { label: "日活用户", value: "5000+" },
    color: "sky",
    img: "https://images.pexels.com/photos/7915437/pexels-photo-7915437.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    icon: Globe,
    title: "企业官网矩阵",
    category: "品牌建设",
    desc: "为多家中小企业打造的品牌官网集群，现代化设计、SEO优化、移动适配，平均获客成本降低40%。",
    tech: ["Next.js", "SEO", "响应式"],
    metrics: { label: "获客提升", value: "40%" },
    color: "teal",
    img: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    icon: Database,
    title: "企业数据管理后台",
    category: "数据管理",
    desc: "制造型企业定制数据管理平台，覆盖供应链、生产、销售全链路数据可视化，决策效率提升70%。",
    tech: ["数据可视化", "BI看板", "API集成"],
    metrics: { label: "效率提升", value: "70%" },
    color: "blue",
    img: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Bot, MapPin, Gamepad2, Globe, Database } from "lucide-react";

const cases = [
  {
    icon: Bot,
    title: "AI智能客服系统",
    category: "人工智能",
    desc: "基于私有化大模型部署的24小时智能客服平台，支持多渠道接入，准确率达92%，日均处理1000+对话。",
    tech: ["LLM", "RAG", "多渠道"],
    metrics: { label: "成本降低", value: "65%" },
    color: "blue",
    img: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    icon: MapPin,
    title: "智慧旅游综合平台",
    category: "旅游行业",
    desc: "涵盖景区预约、智能导览、行程规划、商户管理的一站式旅游数字化平台，年服务游客20万+。",
    tech: ["小程序", "管理后台", "AI推荐"],
    metrics: { label: "转化提升", value: "48%" },
    color: "cyan",
    img: "https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    icon: Gamepad2,
    title: "陪玩俱乐部系统",
    category: "本地娱乐",
    desc: "游戏陪玩预约平台，含用户端APP、商家管理系统、AI匹配算法，用户活跃度高，月流水百万级。",
    tech: ["APP", "AI匹配", "支付系统"],
    metrics: { label: "日活用户", value: "5000+" },
    color: "sky",
    img: "https://images.pexels.com/photos/7915437/pexels-photo-7915437.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    icon: Globe,
    title: "企业官网矩阵",
    category: "品牌建设",
    desc: "为多家中小企业打造的品牌官网集群，现代化设计、SEO优化、移动适配，平均获客成本降低40%。",
    tech: ["Next.js", "SEO", "响应式"],
    metrics: { label: "获客提升", value: "40%" },
    color: "teal",
    img: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    icon: Database,
    title: "企业数据管理后台",
    category: "数据管理",
    desc: "制造型企业定制数据管理平台，覆盖供应链、生产、销售全链路数据可视化，决策效率提升70%。",
    tech: ["数据可视化", "BI看板", "API集成"],
    metrics: { label: "效率提升", value: "70%" },
    color: "blue",
    img: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

const colorConfig: Record<string, { tag: string; metric: string; border: string; glow: string }> = {
  blue: {
    tag: "bg-blue-500/15 text-blue-300 border-blue-500/20",
    metric: "text-blue-400",
    border: "border-blue-500/10 hover:border-blue-500/25",
    glow: "hover:shadow-[0_8px_40px_rgba(59,130,246,0.12)]",
  },
  cyan: {
    tag: "bg-cyan-500/15 text-cyan-300 border-cyan-500/20",
    metric: "text-cyan-400",
    border: "border-cyan-500/10 hover:border-cyan-500/25",
    glow: "hover:shadow-[0_8px_40px_rgba(6,182,212,0.12)]",
  },
  sky: {
    tag: "bg-sky-500/15 text-sky-300 border-sky-500/20",
    metric: "text-sky-400",
    border: "border-sky-500/10 hover:border-sky-500/25",
    glow: "hover:shadow-[0_8px_40px_rgba(14,165,233,0.12)]",
  },
  teal: {
    tag: "bg-teal-500/15 text-teal-300 border-teal-500/20",
    metric: "text-teal-400",
    border: "border-teal-500/10 hover:border-teal-500/25",
    glow: "hover:shadow-[0_8px_40px_rgba(20,184,166,0.12)]",
  },
};

export function Cases() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="cases" className="section-pad relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15" />

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
            项目案例
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            真实落地 · 数据说话
          </h2>
          <p className="mt-4 text-slate-300 max-w-xl mx-auto text-sm">
            每一个案例背后都是对客户业务的深度理解与技术创新的完美结合
          </p>
        </motion.div>

        {/* Cases grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cases.map((c, i) => {
            const conf = colorConfig[c.color] || colorConfig.blue;
            const Icon = c.icon;
            const isLarge = i === 0;
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`group glass border ${conf.border} ${conf.glow} rounded-2xl overflow-hidden transition-all duration-400 card-hover ${
                  isLarge ? "md:col-span-2 lg:col-span-1 lg:row-span-1" : ""
                }`}
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.title}
                    className="w-full h-full object-cover opacity-50 group-hover:opacity-60 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />

                  {/* Overlay icon */}
                  <div className="absolute top-4 left-4">
                    <div className="w-9 h-9 rounded-xl glass border border-white/10 flex items-center justify-center">
                      <Icon className="w-4.5 h-4.5 text-white/70" style={{ width: 18, height: 18 }} />
                    </div>
                  </div>

                  {/* Category tag */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-2.5 py-1 rounded-full text-[11px] border ${conf.tag}`}>
                      {c.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-white font-semibold text-base mb-2">{c.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4 line-clamp-2">{c.desc}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {c.tech.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded-md bg-slate-700/20 text-slate-500 text-xs border border-white/10">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Bottom */}
                  <div className="flex items-center justify-between pt-3 border-t border-slate-200">
                    <div>
                      <span className={`text-xl font-bold ${conf.metric}`}>{c.metrics.value}</span>
                      <span className="text-slate-300 text-xs ml-1">{c.metrics.label}</span>
                    </div>
                    <button className="w-7 h-7 rounded-lg glass border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:border-white/20">
                      <ExternalLink className="w-3.5 h-3.5 text-white/60" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
