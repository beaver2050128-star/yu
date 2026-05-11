import PageReveal from '../components/PageReveal';
import { 
  Instagram, 
  Send, 
  Phone, 
  Mail, 
  MapPin, 
  Star, 
  Bot, 
  LayoutGrid, 
  TrendingUp, 
  CheckCircle2,
  Briefcase,
  ArrowRight
} from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
  const [selectedType, setSelectedType] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('送信機能はデモ版ではモックアップです。');
  };

  const contactTypes = [
    { id: 'sns', label: 'SNS運用代行', icon: TrendingUp },
    { id: 'inf', label: 'インフルエンサー', icon: Star },
    { id: 'ai', label: 'AI教育・研修', icon: Bot },
    { id: 'other', label: 'その他・未定', icon: LayoutGrid },
  ];

  return (
    <div className="flex flex-col text-white/80 font-sans">
      {/* Hero */}
      <section className="relative min-h-[60svh] flex flex-col justify-center px-8 md:px-[8vw] lg:px-[12vw] border-b border-white/5 pt-24 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-500/5 to-transparent pointer-events-none" />
        <div className="relative z-10 w-full max-w-5xl">
          <PageReveal>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[1px] bg-sky-400/50" />
              <span className="text-xs font-mono tracking-[0.2em] uppercase text-sky-400">CONTACT</span>
            </div>
            <h1 className="text-[clamp(40px,7vw,80px)] font-light leading-[1.1] tracking-tight mb-8 text-white/90">
              お問い合わせ・<br className="hidden md:block" />無料相談
            </h1>
            <p className="text-base md:text-lg text-white/40 leading-relaxed font-light max-w-2xl">
              SNS運用・インフルエンサー起用・AI活用など、どんな段階のご相談でも構いません。まずはお気軽にどうぞ。
            </p>
          </PageReveal>
        </div>
      </section>

      {/* Assurance Strip */}
      <div className="border-b border-white/5 bg-white/[0.01] py-6 px-8 md:px-[8vw] lg:px-[12vw]">
        <div className="w-full max-w-5xl mx-auto">
          <ul className="flex flex-wrap gap-x-8 gap-y-4">
            {['相談・見積もり無料', '強引な営業はしません', '当日〜翌営業日に返信'].map((text) => (
              <li key={text} className="flex items-center gap-3 text-sm font-light text-white/70">
                <CheckCircle2 className="w-4 h-4 text-sky-400" />
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <section className="relative px-8 md:px-[8vw] lg:px-[12vw] py-24 md:py-32 bg-transparent">
        <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col lg:flex-row gap-16">
          
          {/* Form Block */}
          <div className="flex-1">
            <PageReveal>
              <div className="bg-white/[0.015] border border-white/[0.08] rounded-2xl md:rounded-[2rem] p-8 md:p-12 mb-16">
                <div className="mb-12">
                  <span className="text-xs font-mono tracking-[0.2em] uppercase text-white/40 mb-6 block">相談内容</span>
                  <div className="flex flex-wrap gap-3">
                    {contactTypes.map((type) => (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setSelectedType(type.id)}
                        className={`inline-flex items-center gap-2.5 px-5 py-3 rounded-full border text-sm transition-all duration-300 font-light ${
                          selectedType === type.id 
                          ? 'bg-sky-500 text-white border-sky-500 shadow-[0_0_15px_rgba(14,165,233,0.3)]' 
                          : 'bg-white/[0.02] border-white/10 text-white/40 hover:border-white/30 hover:text-white/80'
                        }`}
                      >
                        <type.icon className="w-4 h-4" />
                        {type.label}
                      </button>
                    ))}
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="name" className="flex items-center gap-2 text-xs tracking-widest text-white/60 mb-3">
                        お名前 <span className="text-sky-400 border border-sky-400/30 px-1.5 py-0.5 rounded text-[10px]">必須</span>
                      </label>
                      <input 
                        type="text" id="name" required placeholder="田原 明日翔"
                        className="w-full px-5 py-4 bg-white/[0.02] border border-white/10 rounded-xl text-base text-white focus:border-sky-400 focus:bg-white/[0.04] transition-all outline-none font-light"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-xs tracking-widest text-white/60 mb-3">会社名</label>
                      <input 
                        type="text" id="company" placeholder="株式会社〇〇"
                        className="w-full px-5 py-4 bg-white/[0.02] border border-white/10 rounded-xl text-base text-white focus:border-sky-400 focus:bg-white/[0.04] transition-all outline-none font-light"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="flex items-center gap-2 text-xs tracking-widest text-white/60 mb-3">
                      メールアドレス <span className="text-sky-400 border border-sky-400/30 px-1.5 py-0.5 rounded text-[10px]">必須</span>
                    </label>
                    <input 
                      type="email" id="email" required placeholder="info@example.com"
                      className="w-full px-5 py-4 bg-white/[0.02] border border-white/10 rounded-xl text-base text-white focus:border-sky-400 focus:bg-white/[0.04] transition-all outline-none font-light"
                    />
                  </div>

                  <div>
                    <label htmlFor="tel" className="block text-xs tracking-widest text-white/60 mb-3">電話番号</label>
                    <input 
                      type="tel" id="tel" placeholder="080-0000-0000"
                      className="w-full px-5 py-4 bg-white/[0.02] border border-white/10 rounded-xl text-base text-white focus:border-sky-400 focus:bg-white/[0.04] transition-all outline-none font-light"
                    />
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-xs tracking-widest text-white/60 mb-3">月額予算の目安</label>
                    <select 
                      id="budget" defaultValue=""
                      className="w-full px-5 py-4 bg-white/[0.02] border border-white/10 rounded-xl text-base text-white focus:border-sky-400 focus:bg-white/[0.04] transition-all outline-none font-light appearance-none cursor-pointer"
                    >
                      <option value="" disabled className="bg-black text-white/40">選択してください</option>
                      <option className="bg-black text-white">10万円未満</option>
                      <option className="bg-black text-white">10〜30万円</option>
                      <option className="bg-black text-white">30〜50万円</option>
                      <option className="bg-black text-white">50万円以上</option>
                      <option className="bg-black text-white">未定・要相談</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="flex items-center gap-2 text-xs tracking-widest text-white/60 mb-3">
                      ご相談内容 <span className="text-sky-400 border border-sky-400/30 px-1.5 py-0.5 rounded text-[10px]">必須</span>
                    </label>
                    <textarea 
                      id="message" required placeholder="現状の課題・目標・ご要望など、自由にご記入ください。"
                      className="w-full min-h-[200px] px-5 py-4 bg-white/[0.02] border border-white/10 rounded-xl text-base text-white focus:border-sky-400 focus:bg-white/[0.04] transition-all outline-none font-light resize-none"
                    />
                  </div>

                  <div className="flex items-start gap-4 py-4">
                    <input type="checkbox" id="privacy" required className="w-5 h-5 mt-0.5 accent-sky-500 shrink-0 bg-transparent" />
                    <label htmlFor="privacy" className="text-sm text-white/60 font-light leading-relaxed cursor-pointer select-none">
                      <Link to="#" className="text-sky-400 hover:text-sky-300 transition-colors border-b border-sky-400/30 hover:border-sky-300">プライバシーポリシー</Link>に同意の上、送信します
                    </label>
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-5 px-8 bg-sky-500 text-white rounded-full font-light text-lg hover:shadow-[0_0_20px_rgba(14,165,233,0.4)] transition-all flex items-center justify-center gap-3"
                  >
                    <Send className="w-5 h-5" />
                    送信する
                  </button>
                </form>
              </div>
            </PageReveal>
          </div>

          {/* Sidebar */}
          <div className="lg:w-[320px] shrink-0 flex flex-col gap-6">
            <PageReveal delay={0.2}>
              <div className="bg-white/[0.01] border border-white/5 rounded-2xl p-8">
                <p className="text-xs font-mono tracking-[0.2em] uppercase text-sky-400 mb-8 block">直接のご連絡</p>
                <ul className="flex flex-col gap-8">
                  <li className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-sky-400/10 border border-sky-400/20 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-sky-400" />
                    </div>
                    <div>
                      <a href="tel:08069989361" className="text-lg font-light text-white hover:text-sky-400 transition-colors">080-6998-9361</a>
                      <span className="block text-xs font-light text-white/40 mt-1">代表直通 / 平日9:00〜19:00</span>
                    </div>
                  </li>
                  <li className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-sky-400/10 border border-sky-400/20 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-sky-400" />
                    </div>
                    <div>
                      <a href="mailto:info@yuraifu.jp" className="text-base font-light text-white hover:text-sky-400 transition-colors">info@yuraifu.jp</a>
                      <span className="block text-xs font-light text-white/40 mt-1">当日〜翌営業日に返信</span>
                    </div>
                  </li>
                  <li className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-sky-400/10 border border-sky-400/20 flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-sky-400" />
                    </div>
                    <div>
                      <span className="text-base font-light text-white block">大阪府大阪市</span>
                      <span className="block text-xs font-light text-white/40 mt-1">詳細は返信メールにて</span>
                    </div>
                  </li>
                </ul>
              </div>
            </PageReveal>

            <PageReveal delay={0.3}>
              <div className="bg-white/[0.01] border border-white/5 rounded-2xl p-8">
                <p className="text-xs font-mono tracking-[0.2em] uppercase text-sky-400 mb-6 block">営業時間</p>
                <ul className="flex flex-col gap-4">
                  <li className="flex justify-between text-sm font-light">
                    <span className="text-white/40">平日</span>
                    <span className="text-white">9:00〜19:00</span>
                  </li>
                  <li className="flex justify-between text-sm font-light">
                    <span className="text-white/40">土曜</span>
                    <span className="text-white">10:00〜17:00</span>
                  </li>
                  <li className="flex justify-between text-sm font-light border-t border-white/5 pt-4">
                    <span className="text-white/40">日・祝</span>
                    <span className="text-sky-400/80">定休日</span>
                  </li>
                </ul>
              </div>
            </PageReveal>

            <PageReveal delay={0.4}>
              <div className="bg-white/[0.01] border border-white/5 rounded-2xl p-8">
                <p className="text-xs font-mono tracking-[0.2em] uppercase text-sky-400 mb-6 block">公式SNS</p>
                <div className="flex flex-wrap gap-3">
                  {['Instagram', 'TikTok', 'YouTube'].map((sns) => (
                    <a 
                      key={sns} href="#" 
                      className="flex items-center gap-2 px-4 py-2 bg-white/[0.02] border border-white/10 rounded-full text-xs font-light text-white/60 transition-all hover:bg-white/[0.05] hover:text-white hover:border-white/20"
                    >
                      <Instagram className="w-3.5 h-3.5 text-sky-400/70" />
                      {sns}
                    </a>
                  ))}
                </div>
              </div>
            </PageReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
