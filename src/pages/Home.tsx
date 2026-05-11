import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronDown, CalendarCheck } from 'lucide-react';

function RevealText({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const stats = [
    { label: '代表SNS\n累計フォロワー', value: '60', unit: '万+' },
    { label: 'TikTok\n単投稿最大再生数', value: '125', unit: '万' },
    { label: 'Instagram\n単投稿最大閲覧数', value: '57', unit: '万' },
    { label: '支援実績\n（累計）', value: '10', unit: '社+' },
  ];

  const problems = [
    { num: '01', title: '投稿しているのに問い合わせが増えない', desc: 'フォロワーは増えても、ビジネス成果につながる導線が設計されていない。' },
    { num: '02', title: '動画（リール / TikTok）の勝ち筋が分からない', desc: '企画の作り方やアルゴリズムへの理解が不足しており、再現性のある発信ができていない。' },
    { num: '03', title: 'SNS運用が属人化しており、継続が難しい', desc: '担当者のセンスに頼り切りで、組織としてのノウハウ蓄積や仕組み化ができていない。' },
  ];

  const services = [
    { idx: '01', id: 'sns', title: 'SNS運用事業', desc: '企業のSNSアカウントを戦略から投稿・運用まで一括代行し、集客や採用に直結させます。' },
    { idx: '02', id: 'ai-dx', title: 'AI・DX支援', desc: '業務フローに合わせてAIツールを実装し、生産性を劇的に向上させる組織作りを伴走します。' },
    { idx: '03', id: 'influencer', title: 'インフルエンサープロデュース', desc: 'クリエイターの発掘・育成から、企業との最適なタイアップ企画までトータルでサポート。' },
    { idx: '04', id: 'sales', title: '営業代行事業', desc: 'デジタルでは届かない層へ、催事や訪問営業などのリアルな現場での顧客開拓を実行します。' },
    { idx: '05', id: 'media', title: 'Webメディア運営', desc: '検索エンジンを通じた継続的な集客の土台となるオウンドメディアを構築・運用します。' },
    { idx: '06', id: 'community', title: '経営者コミュニティ事業', desc: '業界を超えた経営者同士の繋がりを作り、情報交換や事業連携による相乗効果を生み出します。' },
  ];

  const faqs = [
    { q: '相談だけでも大丈夫ですか？', a: 'はい、現状整理だけでも構いません。何が課題でどこから手をつければいいか分からない段階でも歓迎です。無理な営業は一切しません。' },
    { q: 'どのサービスを選べばいいか分かりません', a: '目的（問い合わせ増加 / 採用強化 / 内製化）と現状をヒアリングし、最短ルートで整理します。複数サービスの組み合わせが最適な場合も、過剰提案にならないよう必要なものだけご提案します。' },
    { q: 'まず何を用意・共有すればいいですか？', a: '分かる範囲で構いません。SNSアカウントURL・商材概要・増やしたい成果（問い合わせ / 採用）があればスムーズです。資料がなくてもお気軽にどうぞ。' },
    { q: '大阪以外の企業でも対応できますか？', a: 'はい、オンラインでの対応が可能です。全国の企業様からご相談を承っております。' },
  ];

  return (
    <div className="text-[#e0e0e0] font-sans">
      <main className="relative z-20">
        
        {/* Cinematic Hero */}
        <section className="min-h-[90svh] flex flex-col justify-center px-8 md:px-[8vw] lg:px-[12vw] relative">
          <motion.div style={{ y: heroY, opacity: heroOpacity }} className="max-w-4xl pt-10 pb-32">
            <motion.div 
              initial={{ opacity: 0, width: 0 }} 
              animate={{ opacity: 1, width: "100%" }} 
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
              className="h-[1px] bg-gradient-to-r from-sky-400/50 to-transparent mb-12 max-w-[200px]"
            />
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, delay: 0.4 }}
              className="text-[10px] md:text-xs tracking-[0.4em] text-sky-200 uppercase font-light mb-8"
            >
              AI × SNS Marketing
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, delay: 0.6 }}
              className="text-[clamp(36px,10vw,80px)] font-light leading-[1.2] md:leading-[1.1] mb-8 md:mb-12 tracking-tight text-white drop-shadow-2xl"
            >
              すべての企業に<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-sky-100 to-sky-600 font-normal">
                発信力
              </span>を。
            </motion.h1>

             <motion.p 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5, delay: 1 }}
              className="text-white/60 text-xs md:text-lg tracking-[0.15em] md:tracking-widest max-w-2xl leading-relaxed md:leading-loose font-light"
            >
              SNS運用代行・インフルエンサー・AI教育の3軸で、<br className="hidden md:block" />
              企業の集客・採用・ブランドを支援するマーケティングカンパニー。<br className="hidden md:block" />
              自社媒体フォロワー累計60万人超の知見を、そのままあなたの会社へ。
            </motion.p>
          </motion.div>
        </section>

        <section className="relative px-6 md:px-[6vw] lg:px-[10vw] py-24 md:py-32 bg-transparent overflow-hidden">
          {/* Decorative background for mobile */}
          <div className="absolute inset-0 bg-gradient-to-b from-sky-500/5 to-transparent md:hidden" />
          
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12 border-y border-white/5 py-16 md:py-32 bg-gradient-to-r from-transparent via-sky-900/5 to-transparent max-w-7xl mx-auto">
            {stats.map((stat, i) => (
              <motion.div 
                key={`stat-${i}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }
                  }
                }}
                className="relative group text-center flex flex-col items-center justify-center p-6 md:p-8 rounded-3xl bg-white/[0.02] md:bg-transparent border border-white/5 md:border-transparent hover:border-sky-500/20 hover:bg-sky-900/10 transition-all duration-500"
              >
                {/* Glow effects */}
                <div className="absolute inset-0 bg-sky-400/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                {/* Label (Top on mobile for better hierarchy) */}
                <div className="text-[10px] md:text-sm text-white/40 tracking-[0.2em] uppercase font-mono mb-3 md:mb-6 group-hover:text-white/70 transition-colors duration-500 whitespace-pre-line order-first">
                  {stat.label}
                </div>

                {/* Number and Unit */}
                <div className="flex items-baseline justify-center group-hover:scale-105 transition-transform duration-500 relative z-10 w-full">
                  <span 
                    className="text-6xl md:text-7xl lg:text-8xl font-mono font-light tracking-tighter text-white drop-shadow-[0_0_15px_rgba(56,189,248,0.2)]"
                  >
                    {stat.value}
                  </span>
                  <span className="text-lg md:text-3xl text-sky-400 font-light font-sans tracking-widest ml-1">
                    {stat.unit}
                  </span>
                </div>
                
                {/* Decorative line */}
                <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-sky-400/30 to-transparent mt-6 md:mt-8 group-hover:w-24 transition-all duration-700" />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Problems Section */}
        <section className="relative px-8 md:px-[8vw] lg:px-[12vw] py-40 md:py-56 bg-transparent">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div className="lg:sticky lg:top-40 h-fit">
              <RevealText>
                <div className="text-[10px] tracking-[0.3em] text-sky-400 uppercase font-light mb-6 flex items-center gap-4">
                  <div className="w-8 h-[1px] bg-sky-400/50" />
                  THE REALITY
                </div>
                <h2 className="text-2xl md:text-5xl font-light leading-[1.5] md:leading-[1.4] mb-8 text-white tracking-tight text-balance">
                  SNSをやっているのに、<br className="hidden md:block" />成果が出ない。
                </h2>
                <div className="space-y-6 text-sm md:text-base text-white/50 leading-loose font-light">
                  <p>
                    「発信＝投稿」ではありません。<br />
                    問い合わせ・採用・資料請求などの成果に直結する設計と仕組みが必要です。
                  </p>
                  <p>ユライフはその設計から実行・改善まで、すべてを担当します。</p>
                </div>
              </RevealText>
            </div>

            <div className="space-y-0 relative">
              <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-sky-900/50 via-sky-500/20 to-transparent hidden md:block" />
              {problems.map((problem, i) => (
                <RevealText key={i} delay={i * 0.1}>
                  <div className="md:pl-16 py-12 border-b border-white/5 last:border-0 group flex flex-col md:flex-row gap-8 items-start backdrop-blur-sm bg-black/10 rounded-xl px-8 md:bg-transparent md:backdrop-blur-none md:p-0 my-4 md:my-0">
                    <span className="text-xl md:text-3xl font-light text-sky-400/50 group-hover:text-sky-300 transition-colors pt-1">{problem.num}</span>
                    <div>
                      <h3 className="text-xl md:text-2xl font-light mb-6 text-white/90 tracking-wide">{problem.title}</h3>
                      <p className="text-sm md:text-base text-white/40 leading-loose font-light">{problem.desc}</p>
                    </div>
                  </div>
                </RevealText>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="relative px-8 md:px-[8vw] lg:px-[12vw] py-40 md:py-56 bg-transparent pb-32">
          <div className="mb-20 md:mb-32">
            <RevealText>
              <div className="text-[10px] tracking-[0.3em] text-sky-400 uppercase font-light mb-6 flex items-center gap-4">
                <div className="w-8 h-[1px] bg-sky-400/50" />
                OUR SERVICES
              </div>
            </RevealText>
            <motion.h2 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.04, delayChildren: 0.1 }
                }
              }}
              className="text-2xl md:text-5xl lg:text-6xl font-light leading-[1.4] md:leading-[1.3] text-white tracking-tight text-balance"
            >
              {"6つの事業で、企業の成長を支援する。".split("").map((char, i) => (
                <motion.span 
                  key={`char-${i}`} 
                  variants={{
                    hidden: { opacity: 0, y: 10, filter: 'blur(4px)' },
                    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] } }
                  }} 
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </motion.h2>
          </div>

          <div className="flex flex-col">
            {services.map((service, i) => (
              <motion.div 
                key={`service-${i}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
              >
                <Link to={`/services#${service.id}`} className="block group cursor-pointer outline-none border-b border-white/10 hover:border-sky-400/30 transition-all duration-500 py-12 relative overflow-hidden">
                  <motion.div className="absolute left-0 top-0 bottom-0 w-[2px] bg-sky-400 origin-bottom" variants={{ hidden: { scaleY: 0 }, visible: { scaleY: 1, transition: { duration: 0.8, delay: 0.2 } } }} />
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-16 w-full pl-6 md:pl-8">
                    <motion.div className="text-4xl md:text-5xl font-mono shrink-0 transition-colors duration-500 group-hover:text-sky-400/60" variants={{ hidden: { color: "rgba(255,255,255,0.05)" }, visible: { color: "rgba(56,189,248,0.3)", transition: { duration: 0.8, delay: 0.3 } } }}>
                      {service.idx}
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-light tracking-wide text-white/80 group-hover:text-white transition-colors duration-500 mb-2 md:mb-3 text-balance">{service.title}</h3>
                      <p className="text-xs md:text-sm text-white/40 leading-relaxed font-light group-hover:text-white/60 transition-colors duration-500">{service.desc}</p>
                    </div>
                    
                    <div className="hidden md:flex items-center gap-4 shrink-0 relative">
                      <span className="text-xs font-mono tracking-widest text-sky-400/80">VIEW DETAIL</span>
                      <div className="relative flex items-center justify-center w-8 h-8">
                        <motion.div 
                          className="absolute w-12 h-12 rounded-full border border-sky-400/30"
                          animate={{ scale: [1, 2], opacity: [0.8, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                        />
                        <motion.div 
                          className="absolute w-8 h-8 rounded-full bg-sky-400/20 blur-sm"
                          animate={{ opacity: [0.3, 0.8, 0.3] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <motion.div
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                          className="text-sky-400 relative z-10"
                        >
                          →
                        </motion.div>
                      </div>
                    </div>

                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Why Yulife Section */}
        <section className="relative px-8 md:px-[8vw] lg:px-[12vw] py-40 md:py-56 bg-transparent">
          <RevealText className="mb-24 text-center flex flex-col items-center">
            <div className="text-[10px] tracking-[0.3em] text-sky-400 uppercase font-light mb-6 flex items-center justify-center gap-4">
              <div className="w-8 h-[1px] bg-sky-400/50" />
              WHY YULIFE
              <div className="w-8 h-[1px] bg-sky-400/50" />
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-5xl font-light leading-[1.3] text-white tracking-tight">
              代理店との、決定的な違い。
            </h2>
          </RevealText>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 relative z-10">
            {[
              { num: '01', title: '自社で100万フォロワーを\n築いた実践知', desc: '代理店が「運用します」と言うのとは違います。自社SNSで100万人以上のフォロワーを獲得した現場経験を、そのまま支援に活かします。' },
              { num: '02', title: 'AIで改善スピードを\n最大化', desc: '企画・台本・分析・改善のサイクルに生成AIを組み込み、通常の代理店より高速でPDCAを回します。' },
              { num: '03', title: '運用から教育まで\n一気通貫', desc: '外注したままで終わらせません。内製化・属人化解消まで支援し、長期的に自走できる体制づくりを伴走します。' },
              { num: '04', title: '「営業でも使える」\nサイト設計', desc: '商談前にURLを送るだけで、説明コストを削減できます。このサイト自体が営業資料になるよう設計しています。' }
            ].map((item, i) => (
              <motion.div 
                key={`C-${i}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.8, delay: i * 0.2 }
                  }
                }}
                className="flex flex-col group h-full bg-transparent"
              >
                <motion.div 
                  className="flex items-center gap-4 mb-6 border-b pb-6"
                  variants={{
                    hidden: { borderColor: "rgba(255,255,255,0.1)" },
                    visible: { 
                      borderColor: "rgba(56,189,248,0.4)",
                      transition: { duration: 1.5, delay: i * 0.2 + 0.4 }
                    }
                  }}
                >
                  <motion.div 
                    className="text-3xl font-light"
                    variants={{
                      hidden: { color: "rgba(255,255,255,0.2)", textShadow: "0px 0px 0px rgba(56,189,248,0)" },
                      visible: { 
                        color: "rgba(56,189,248,1)",
                        textShadow: "0px 0px 20px rgba(56,189,248,0.5)",
                        transition: { duration: 1.5, delay: i * 0.2 + 0.4 }
                      }
                    }}
                  >
                    {item.num}
                  </motion.div>
                </motion.div>
                <motion.h3 
                  className="text-lg md:text-2xl font-light tracking-wide leading-relaxed md:leading-loose text-white/90 mb-4 md:mb-6 whitespace-pre-line text-balance"
                  variants={{
                    hidden: { x: 0 },
                    visible: { 
                      x: 8,
                      transition: { duration: 1.5, delay: i * 0.2 + 0.4, ease: "easeOut" }
                    }
                  }}
                >
                  {item.title}
                </motion.h3>
                <motion.p 
                  className="text-sm md:text-base leading-loose font-light mt-auto"
                  variants={{
                    hidden: { color: "rgba(255,255,255,0.4)" },
                    visible: { 
                      color: "rgba(255,255,255,0.8)",
                      transition: { duration: 1.5, delay: i * 0.2 + 0.4 }
                    }
                  }}
                >
                  {item.desc}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Cinematic How it Works */}
        <section className="relative px-8 md:px-[8vw] lg:px-[12vw] py-40 md:py-56 bg-transparent">
          <div className="max-w-4xl mx-auto">
            <RevealText className="mb-24">
              <div className="text-[10px] tracking-[0.3em] text-sky-400 uppercase font-light mb-6 flex items-center gap-4">
                <div className="w-8 h-[1px] bg-sky-400/50" />
                HOW IT WORKS
              </div>
              <h2 className="text-2xl md:text-5xl font-light leading-[1.4] md:leading-[1.3] text-white tracking-tight text-balance">
                相談から開始まで、<br className="hidden md:block" />最短5ステップ。
              </h2>
            </RevealText>

            <div className="space-y-0 relative">
              <div className="absolute left-[24px] md:left-[48px] top-8 bottom-8 w-[2px] bg-gradient-to-b from-transparent via-sky-400/50 to-transparent shadow-[0_0_15px_rgba(56,189,248,0.3)] -translate-x-1/2" />
              {[
                { num: '01', title: '無料相談（フォームまたはお電話）', desc: 'まず現状を聞かせてください。相談だけでも構いません。無理な営業は一切しません。' },
                { num: '02', title: 'ヒアリング・現状分析', desc: 'SNSアカウント・商材・競合・体制を分析し、改善の優先順位を整理します。' },
                { num: '03', title: 'ご提案・お見積り', desc: '目的に合わせたサービス構成と費用感を提示。内容に納得いただいてから進めます。' },
                { num: '04', title: 'キックオフ', desc: '戦略・KPI・スケジュールを確認し、担当者をアサインして運用を開始します。' },
                { num: '05', title: '実行 → 改善サイクルへ', desc: '月次レポートと定例MTGで継続改善。成果に直結するKPIを一緒に追います。' }
              ].map((step, i) => (
                <RevealText key={i} delay={i * 0.1}>
                  <div className="relative py-12 md:py-16 group pl-[60px] md:pl-[120px]">
                    {/* Glowing Dot - perfectly centered on X and Y relative to line */}
                    <div className="absolute left-[24px] md:left-[48px] top-[68px] md:top-[88px] w-4 h-4 md:w-5 md:h-5 rounded-full bg-[#010205] border-[2px] border-sky-400 group-hover:scale-125 transition-all duration-500 shadow-[0_0_20px_4px_rgba(14,165,233,0.8)] z-10 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-sky-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    
                    {/* Number next to the dot (Desktop) */}
                    <div className="absolute left-[80px] top-[68px] md:top-[88px] text-sky-400/70 font-mono text-2xl tracking-widest hidden md:block transition-all duration-500 group-hover:text-sky-300 group-hover:translate-x-2 -translate-y-1/2 drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]">
                      {step.num}
                    </div>

                    {/* Content */}
                    <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 md:p-0 md:bg-transparent md:backdrop-blur-none border border-white/5 md:border-none transition-colors group-hover:bg-black/40 md:group-hover:bg-transparent pl-[56px] md:pl-0">
                      <h3 className="text-xl md:text-3xl font-light mb-4 md:mb-6 text-white/90 tracking-wide flex items-center gap-4">
                        <span className="text-lg font-mono text-sky-400/80 md:hidden drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]">{step.num}</span>
                        {step.title}
                      </h3>
                      <p className="text-sm md:text-base text-white/50 leading-loose font-light max-w-2xl">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </RevealText>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative px-8 md:px-[8vw] lg:px-[12vw] py-40 md:py-56 bg-transparent">
          <div className="max-w-4xl mx-auto">
            <RevealText className="mb-24 text-center flex flex-col items-center">
              <div className="text-[10px] tracking-[0.3em] text-sky-400 uppercase font-light mb-6 flex items-center justify-center gap-4">
                <div className="w-8 h-[1px] bg-sky-400/50" />
                FAQ
                <div className="w-8 h-[1px] bg-sky-400/50" />
              </div>
              <h2 className="text-2xl md:text-5xl font-light leading-[1.4] md:leading-[1.3] text-white tracking-tight text-balance">
                よくあるご質問
              </h2>
            </RevealText>

            <div className="border border-white/10 rounded-2xl overflow-hidden bg-black/30 backdrop-blur-lg">
               {faqs.map((faq, i) => (
                 <details key={i} className="group border-b border-white/5 last:border-b-0">
                   <summary className="flex items-center justify-between gap-6 p-8 md:p-10 cursor-pointer list-none select-none hover:bg-white/[0.04] transition-colors text-white/90">
                     <span className="text-lg md:text-xl font-light tracking-wide">{faq.q}</span>
                     <ChevronDown className="w-5 h-5 text-sky-400/50 group-open:rotate-180 transition-transform" />
                   </summary>
                   <div className="px-8 md:px-10 pb-8 md:pb-10 pt-0 text-base text-white/50 leading-loose font-light">
                     {faq.a}
                   </div>
                 </details>
               ))}
            </div>
          </div>
        </section>

        {/* Cinematic CTA */}
        <section className="relative px-8 md:px-[8vw] lg:px-[12vw] py-56 bg-transparent border-t border-white/5">
          
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <RevealText>
              <h2 className="text-3xl md:text-6xl font-light tracking-tight leading-[1.4] md:leading-[1.3] mb-8 text-white drop-shadow-lg text-balance">
                まず、<br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-sky-600">話を聞かせて</span><br className="hidden md:block" />
                ください。
              </h2>
              <p className="text-base md:text-lg text-white/50 leading-loose font-light mb-16 max-w-xl mx-auto">
                SNSアカウントのURLひとつからでも構いません。<br />
                現状を共有いただければ、次の一手を一緒に整理します。
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link to="/contact" className="group relative px-10 py-5 bg-white text-black rounded-full overflow-hidden transition-transform hover:scale-105 duration-500 shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_rgba(255,255,255,0.2)]">
                  <div className="absolute inset-0 bg-gradient-to-r from-sky-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="relative flex items-center gap-3 text-sm font-medium tracking-widest">
                    <CalendarCheck className="w-5 h-5" />
                    無料相談を申し込む
                  </span>
                </Link>
                <div className="flex flex-col items-center sm:items-start gap-1 text-sm font-light tracking-widest">
                  <a href="tel:08069989361" className="text-white hover:text-sky-300 transition-colors">080-6998-9361</a>
                  <span className="text-[10px] text-white/40">相談・見積もり無料 / 強引な営業は一切しません</span>
                </div>
              </div>
            </RevealText>
          </div>
        </section>

      </main>
    </div>
  );
}
