"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  BookOpen, MessageSquare, GitBranch, BarChart3,
  Link2, Server, CheckCircle2
} from "lucide-react";

const capabilities = [
  {
    id: "knowledge",
    icon: BookOpen,
    title: "AI知识库",
    desc: "企业专属知识沉淀，智能语义检索，支持PDF、Word、网页等多源数据接入，构建私有知识图谱。",
    features: ["多格式文档解析", "语义向量检索", "知识实时更新", "权限分级管理"],
    x: 20, y: 15,
  },
  {
    id: "qa",
    icon: MessageSquare,
    title: "智能问答",
    desc: "基于RAG架构的精准问答，结合企业知识库与大模型推理能力，给出有据可查的准确回答。",
    features: ["多轮对话上下文", "溯源引用展示", "多语言支持", "意图精准识别"],
    x: 75, y: 15,
  },
  {
    id: "workflow",
    icon: GitBranch,
    title: "自动化工作流",
    desc: "可视化流程编排，连接企业各系统与AI能力，实现业务流程的端到端自动化执行。",
    features: ["拖拽式编排", "条件分支逻辑", "系统API集成", "触发器管理"],
    x: 20, y: 60,
  },
  {
    id: "analytics",
    icon: BarChart3,
    title: "数据分析",
    desc: "AI驱动的数据洞察，自然语言查询数据，自动生成可视化报表，挖掘业务增长机会。",
    features: ["NL2SQL查询", "智能数据看板", "异常预警分析", "趋势预测模型"],
    x: 75, y: 60,
  },
  {
    id: "platform",
    icon: Link2,
    title: "多平台接入",
    desc: "统一AI能力接口，无缝对接微信、企业微信、网站、APP等多终端，一次配置全渠道部署。",
    features: ["微信生态接入", "企业系统集成", "开放API接口", "Webhook对接"],
    x: 20, y: 105,
  },
  {
    id: "private",
    icon: Server,
    title: "私有化部署",
    desc: "支持本地化服务器部署，数据完全自主可控，满足金融、医疗等高安全合规场景需求。",
    features: ["本地化运行", "数据不出境", "离线使用模式", "安全审计日志"],
    x: 75, y: 105,
  },
];

export function AiCapabilities() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState("knowledge");

  const activeItem = capabilities.find((c) => c.id === active) || capabilities[0];

  return (
    <section id="ai" className="section-pad relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full bg-blue-500/6 blur-[120px] pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-blue-500/20 text-xs text-blue-300/70 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            AI核心能力
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            六大AI能力引擎
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto text-base">
            构建企业专属AI能力矩阵，从知识管理到智能决策全面赋能
          </p>
        </motion.div>

        {/* Main layout: tabs + detail */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Capability tabs */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            {capabilities.map((cap, i) => {
              const Icon = cap.icon;
              const isActive = active === cap.id;
              return (
                <motion.button
                  key={cap.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  onClick={() => setActive(cap.id)}
                  className={`relative text-left p-4 rounded-xl border transition-all duration-300 group ${
                    isActive
                      ? "glass-blue border-blue-500/30 bg-blue-500/10"
                      : "glass border-white/10 hover:border-white/10 hover:bg-white/5"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                      isActive ? "bg-blue-500/20" : "bg-white/5"
                    }`}>
                      <Icon className={`w-4.5 h-4.5 ${isActive ? "text-blue-400" : "text-slate-500"} transition-colors duration-300`} style={{ width: 18, height: 18 }} />
                    </div>
                    <div>
                      <div className={`font-medium text-sm transition-colors duration-300 ${isActive ? "text-blue-300" : "text-slate-300"}`}>
                        {cap.title}
                      </div>
                      <div className="text-xs text-slate-400 mt-0.5 line-clamp-1">{cap.desc.slice(0, 28)}…</div>
                    </div>
                  </div>
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-blue-400"
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Detail panel */}
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-3 glass border border-blue-500/20 rounded-2xl p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-500/15 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                  {(() => {
                    const Icon = activeItem.icon;
                    return <Icon className="w-6 h-6 text-blue-400" />;
                  })()}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{activeItem.title}</h3>
                  <p className="text-slate-400 text-sm mt-1 leading-relaxed">{activeItem.desc}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {activeItem.features.map((f, i) => (
                  <motion.div
                    key={f}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/[0.06]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span className="text-slate-400 text-sm">{f}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bottom decorative element */}
            <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-white/30">
                <Server className="w-3.5 h-3.5" />
                <span>支持私有化部署 · 数据安全合规</span>
              </div>
              <div className="flex gap-1.5">
                {[0, 1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      i < 4 ? "w-6 bg-blue-500/60" : "w-3 bg-white/10"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
