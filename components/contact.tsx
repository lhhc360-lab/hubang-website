"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, MapPin, User, Send, CheckCircle2, MessageSquare } from "lucide-react";

export function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", phone: "", company: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    setSending(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSending(false);
    setSent(true);
  };

  return (
    <section id="contact" className="section-pad relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-blue-600/6 blur-[120px] pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-blue-500/20 text-xs text-blue-300/70 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            联系我们
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            开启您的AI数字化之旅
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-sm">
            免费咨询，专业评估，为您量身定制数字化方案
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left: contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {/* Contact card */}
            <div className="glass border border-blue-500/20 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-blue-500/15 border border-blue-500/20 flex items-center justify-center">
                  <User className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <div className="text-white font-semibold text-lg">李虎</div>
                  <div className="text-slate-400 text-sm">总经理 · 创始人</div>
                </div>
              </div>

              <div className="space-y-4">
                <a
                  href="tel:13309248817"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/20 hover:bg-blue-500/5 transition-all duration-300 group"
                >
                  <Phone className="w-4.5 h-4.5 text-blue-400 flex-shrink-0" style={{ width: 18, height: 18 }} />
                  <div>
                    <div className="text-slate-400 text-xs mb-0.5">联系电话</div>
                    <div className="text-white text-sm font-medium group-hover:text-blue-300 transition-colors">133-0924-8817</div>
                  </div>
                </a>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.04] border border-white/[0.06]">
                  <MapPin className="w-4.5 h-4.5 text-blue-400 flex-shrink-0 mt-0.5" style={{ width: 18, height: 18 }} />
                  <div>
                    <div className="text-white/40 text-xs mb-0.5">公司地址</div>
                    <div className="text-slate-400 text-sm leading-relaxed">陕西省西安市高新区<br />丈八一路绿地蓝海大厦2012室</div>
                  </div>
                </div>
              </div>
            </div>

            {/* WeChat QR placeholder */}
            <div className="glass border border-slate-200 rounded-2xl p-6 flex flex-col items-center gap-3">
              <MessageSquare className="w-6 h-6 text-blue-400/60" />
              <div className="w-28 h-28 rounded-xl bg-white/[0.04] border border-dashed border-white/[0.12] flex items-center justify-center">
                <div className="text-center">
                  <div className="text-slate-400 text-xs leading-relaxed">微信二维码</div>
                  <div className="text-white/15 text-xs">扫码咨询</div>
                </div>
              </div>
              <p className="text-white/30 text-xs text-center">扫码添加微信，快速获取方案</p>
            </div>

            {/* Hours */}
            <div className="glass border border-white/[0.06] rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-white/60 text-sm font-medium">在线服务时间</span>
              </div>
              <div className="text-white/40 text-sm space-y-1">
                <div className="flex justify-between">
                  <span>工作日</span>
                  <span className="text-white/60">09:00 – 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>节假日</span>
                  <span className="text-white/60">紧急支持可用</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="glass border border-white/[0.08] rounded-2xl p-8 h-full">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center h-full py-12 text-center gap-4"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-white text-xl font-semibold">提交成功！</h3>
                  <p className="text-white/40 text-sm max-w-xs">感谢您的咨询，李虎总经理将在1个工作日内与您取得联系。</p>
                  <button
                    onClick={() => { setSent(false); setForm({ name: "", phone: "", company: "", message: "" }); }}
                    className="mt-2 px-6 py-2 text-sm text-blue-400 border border-blue-500/30 rounded-lg hover:bg-blue-500/10 transition-all duration-200"
                  >
                    再次咨询
                  </button>
                </motion.div>
              ) : (
                <>
                  <h3 className="text-white text-xl font-bold mb-6">免费咨询 · 快速响应</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-slate-400 text-xs mb-1.5">您的姓名 *</label>
                        <input
                          type="text"
                          required
                          placeholder="请输入姓名"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500/40 focus:bg-blue-500/10 transition-all duration-200"
                        />
                      </div>
                      <div>
                        <label className="block text-white/40 text-xs mb-1.5">手机号码 *</label>
                        <input
                          type="tel"
                          required
                          placeholder="请输入手机号"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-white/20 text-sm focus:outline-none focus:border-blue-500/40 focus:bg-blue-500/5 transition-all duration-200"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-white/40 text-xs mb-1.5">公司名称</label>
                      <input
                        type="text"
                        placeholder="请输入公司名称（可选）"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-white/20 text-sm focus:outline-none focus:border-blue-500/40 focus:bg-blue-500/5 transition-all duration-200"
                      />
                    </div>

                    <div>
                      <label className="block text-white/40 text-xs mb-1.5">需求描述</label>
                      <textarea
                        rows={4}
                        placeholder="请简单描述您的业务需求或想解决的问题，我们将为您提供针对性方案..."
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-white/20 text-sm focus:outline-none focus:border-blue-500/40 focus:bg-blue-500/5 transition-all duration-200 resize-none"
                      />
                    </div>

                    {/* Service checkboxes */}
                    <div>
                      <label className="block text-white/40 text-xs mb-2">感兴趣的服务</label>
                      <div className="flex flex-wrap gap-2">
                        {["AI智能客服", "网站开发", "小程序", "APP开发", "企业系统", "AI知识库"].map((s) => (
                          <label key={s} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] cursor-pointer hover:border-blue-500/20 hover:bg-blue-500/5 transition-all duration-200 group">
                            <input type="checkbox" className="hidden" />
                            <span className="text-slate-500 text-xs group-hover:text-white/70 transition-colors">{s}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={sending}
                      className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-60 text-white font-medium text-sm flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] group"
                    >
                      {sending ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          提交中...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
                          免费获取解决方案
                        </>
                      )}
                    </button>

                    <p className="text-center text-white/20 text-xs">
                      提交即代表您同意我们联系您，信息仅用于业务沟通，不会泄露给第三方
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
