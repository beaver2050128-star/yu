import { useState, useRef } from 'react';
import PageReveal from '../components/PageReveal';
import { 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Clock, 
  Users, 
  Heart, 
  Utensils, 
  HandHeart,
  ArrowUp,
  Info,
  Briefcase,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Results() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const startDragging = (e: React.MouseEvent) => {
    setIsDragging(true);
    if (!scrollRef.current) return;
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  const onDrag = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };
  const influencerEvents = [
    { no: 'Vol.01', date: '2025年6月8日（日）', loc: '大阪・アメリカ村', image: '/images/実績０４.png' },
    { no: 'Vol.02', date: '2025年7月21日（月）', loc: '東京・代官山', image: '/images/実績０５.png' },
    { no: 'Vol.03', date: '2026年1月24日（土）', loc: 'PARCO 地下1階', image: '/images/実績０６.png' },
  ];

  const aiTraining = [
    { status: 'done', title: '石川数学塾（大阪・谷町9丁目）', desc: '経営者10名を対象に、生成AIの業務活用研修を2回実施。ChatGPTをはじめとする生成AIツールの実践的な使い方から、業務フローへの組み込み方まで、ハンズオン形式でお伝えしました。' },
    { status: 'done', title: '土地家屋調査士向け AI研修', desc: '士業事務所のバックオフィス業務・書類作成・顧客対応へのAI活用研修を実施。専門職ならではの業務課題に合わせたカスタム研修プログラムを提供しました。' },
    { status: 'plan', title: '奈良病院 AI研修', desc: '医療現場でのAI活用・業務DX化を目的とした研修を予定しています。電子カルテ連携・患者対応・事務処理の効率化などをテーマに実施します。' },
  ];

  const kpis = [
    { label: '週間インプレッション', val: '200万', up: '+575%' },
    { label: 'エンゲージメント率', val: '4.5%', up: '+47%' },
    { label: '週間新規フォロワー', val: '4,712', up: '+592%' },
    { label: '週間いいね', val: '22,606', up: '+509%' },
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
              <span className="text-xs font-mono tracking-[0.2em] uppercase text-sky-400">Results</span>
            </div>
            <h1 className="text-[clamp(40px,7vw,80px)] font-light leading-[1.1] tracking-tight mb-8 text-white/90">
              事業実績
            </h1>
            <p className="text-base md:text-lg text-white/40 leading-relaxed font-light max-w-2xl">
              インフルエンサーイベント・AI研修・経営者コミュニティなど、実際に動いてきた実績をご紹介します。
            </p>
          </PageReveal>
        </div>
      </section>

      {/* Influencer Produce */}
      <section className="relative px-8 md:px-[8vw] lg:px-[12vw] py-32 md:py-48 bg-transparent" id="influencer">
        <div className="relative z-10 w-full max-w-6xl mx-auto">
          <PageReveal>
            <span className="text-xs font-mono tracking-[0.2em] uppercase text-sky-400 mb-6 block">Influencer Produce</span>
            <h2 className="text-[clamp(28px,4vw,48px)] font-light tracking-tight mb-8 text-white/90">インフルエンサープロデュース<br className="hidden md:block" />開催実績</h2>
            <p className="text-base md:text-lg text-white/40 font-light max-w-2xl">大阪・東京・PARCOと場所を変えながら、インフルエンサーイベントを継続開催しています。</p>
          </PageReveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {influencerEvents.map((event, i) => (
              <PageReveal key={event.no} delay={i * 0.1}>
                <div className="bg-white/[0.015] border border-white/[0.08] rounded-2xl md:rounded-[2rem] overflow-hidden group hover:border-sky-500/30 hover:bg-white/[0.03] transition-all duration-500 relative">
                  <div className="aspect-[4/3] bg-gradient-to-br from-sky-400/5 to-transparent relative overflow-hidden border-b border-white/5">
                    {event.image ? (
                      <img src={event.image} alt={event.loc} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                    ) : (
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-white/20 text-xs">
                        <Briefcase className="w-8 h-8 mb-2 opacity-50" />
                        <span className="font-mono tracking-widest uppercase opacity-50">IMAGE PLACEHOLDER</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                  </div>
                  <div className="p-8">
                    <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-sky-400 mb-4 block">{event.no}</span>
                    <p className="text-lg md:text-xl font-light mb-2 tracking-wide text-white/90 group-hover:text-white transition-colors">{event.date}</p>
                    <div className="inline-flex items-center gap-2 text-sm text-white/40 mt-4 font-light group-hover:text-white/60 transition-colors">
                      <MapPin className="text-sky-400/50 w-4 h-4" />
                      {event.loc}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                </div>
              </PageReveal>
            ))}
          </div>
        </div>
      </section>

      {/* AI DX Training */}
      <section className="relative px-8 md:px-[8vw] lg:px-[12vw] py-32 md:py-48 bg-transparent border-t border-white/5" id="ai-training">
        <div className="relative z-10 w-full max-w-4xl mx-auto">
          <PageReveal>
            <span className="text-xs font-mono tracking-[0.2em] uppercase text-sky-400 mb-6 block">AI / DX Training</span>
            <h2 className="text-[clamp(28px,4vw,48px)] font-light tracking-tight mb-8 text-white/90">AI・DX研修 実績</h2>
            <p className="text-base md:text-lg text-white/40 font-light max-w-2xl mb-20">経営者・医療機関・専門士業など、業種を問わず実施しています。</p>
          </PageReveal>

          <div className="flex flex-col border-l border-white/10 pl-8 ml-4 md:ml-8 relative gap-16">
            {aiTraining.map((item, i) => (
              <PageReveal key={i} delay={i * 0.1}>
                <div className="relative group">
                  <div className={`absolute -left-[54px] top-0 w-10 h-10 rounded-full border flex items-center justify-center transition-transform duration-500 bg-black ${item.status === 'done' ? 'border-sky-400/80' : 'border-white/20 group-hover:border-white/40'}`}>
                    {item.status === 'done' ? (
                       <CheckCircle2 className="w-4 h-4 text-sky-400" />
                    ) : (
                       <Clock className="w-4 h-4 text-white/30" />
                    )}
                  </div>
                  <div className="pt-1.5">
                    <div className={`inline-flex items-center gap-2 text-xs font-mono tracking-[0.1em] uppercase px-3 py-1 rounded-full mb-4 border ${
                      item.status === 'done' ? 'bg-sky-400/5 border-sky-400/20 text-sky-400' : 'bg-white/5 border-white/10 text-white/40'
                    }`}>
                      {item.status === 'done' ? '開催済み' : '開催予定'}
                    </div>
                    <h3 className="text-xl md:text-2xl font-light mb-4 tracking-wide text-white/90 group-hover:text-white transition-colors">{item.title}</h3>
                    <p className="text-sm md:text-base text-white/40 leading-relaxed font-light group-hover:text-white/60 transition-colors max-w-2xl">{item.desc}</p>
                  </div>
                </div>
              </PageReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Student Community */}
      <section className="relative px-8 md:px-[8vw] lg:px-[12vw] py-32 md:py-48 bg-transparent border-t border-white/5" id="student-community">
        <div className="relative z-10 w-full max-w-5xl mx-auto">
          <PageReveal>
            <span className="text-xs font-mono tracking-[0.2em] uppercase text-sky-400 mb-6 block">Student Community</span>
            <h2 className="text-[clamp(28px,4vw,48px)] font-light tracking-tight mb-8 text-white/90">学生×社会人 交流会</h2>
            <p className="text-base md:text-lg text-white/40 font-light max-w-2xl mb-16 leading-relaxed">学生が中心となり、社会人も交えた交流の場を定期開催しています。キャリア・ビジネス・人脈形成など、枠を超えたつながりを生み出す場です。</p>
          </PageReveal>

          <div 
            ref={scrollRef}
            onMouseDown={startDragging}
            onMouseLeave={stopDragging}
            onMouseUp={stopDragging}
            onMouseMove={onDrag}
            className={`flex gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory pb-8 -mx-8 px-8 md:mx-0 md:px-0 hide-scrollbar transition-all ${isDragging ? 'cursor-grabbing select-none' : 'cursor-grab'}`}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {[
              { no: 'Vol.01', title: '第一回 学生×社会人 交流会', date: '2026年1月27日', meta: '学生・社会人 混合参加', image: '/images/交流会０１.jpg' },
              { no: 'Vol.02', title: '第二回 学生×社会人 交流会', date: '2026年3月27日', meta: '学生・社会人 混合参加', image: '/images/交流会０２.jpg' },
              { no: 'Vol.03', title: '第三回 学生×社会人 交流会', date: '2026年5月予定', meta: '学生・社会人 混合参加' },
              { no: 'Vol.04', title: '第四回 学生×社会人 交流会', date: '2026年7月予定', meta: '学生・社会人 混合参加' },
            ].map((s, i) => (
              <PageReveal key={s.no} delay={i * 0.1}>
                <div className="w-[85vw] md:w-[400px] shrink-0 snap-center p-0 bg-white/[0.015] border border-white/[0.08] rounded-2xl md:rounded-[2rem] hover:bg-white/[0.03] hover:border-sky-400/30 transition-all duration-500 overflow-hidden relative group flex flex-col h-full pointer-events-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  
                  {/* Photo Section */}
                  <div className="w-full aspect-[16/9] bg-white/5 relative overflow-hidden border-b border-white/5 shrink-0">
                    {s.image ? (
                      <img src={s.image} alt={s.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-white/20 text-xs font-mono tracking-widest uppercase">
                        Photo Coming Soon
                      </div>
                    )}
                    {/* ホバー時のオーバーレイ */}
                    <div className="absolute inset-0 bg-sky-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  <div className="p-8 md:p-12 relative z-10 flex flex-col flex-1">
                    <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-sky-400/80 mb-4 block group-hover:text-sky-400 transition-colors">{s.no}</span>
                    <p className="text-lg md:text-xl font-light mb-6 tracking-wide text-white/90 group-hover:text-white transition-colors">{s.title}</p>
                    <div className="flex flex-col gap-3 mt-auto">
                      <span className="text-sm font-light text-white/40 flex items-center gap-3">
                        <Calendar className="w-4 h-4 text-sky-400/50" />
                        {s.date}開催
                      </span>
                      <span className="text-sm font-light text-white/40 flex items-center gap-3">
                        <Users className="w-4 h-4 text-sky-400/50" />
                        {s.meta}
                      </span>
                    </div>
                  </div>
                </div>
              </PageReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Community & Donation */}
      <section className="relative px-8 md:px-[8vw] lg:px-[12vw] py-32 md:py-48 bg-transparent border-t border-white/5" id="community">
        <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-1/2 flex flex-col justify-center">
            <PageReveal>
              <span className="text-xs font-mono tracking-[0.2em] uppercase text-sky-400 mb-6 block">Community</span>
              <h2 className="text-[clamp(28px,4vw,48px)] font-light tracking-tight mb-8 text-white/90">経営者コミュニティ<br className="hidden lg:block"/>開催実績</h2>
              <p className="text-base md:text-lg text-white/40 font-light leading-relaxed mb-12">志ある経営者・起業家が集まる場を定期開催しています。参加者同士の事業連携や情報共有が生まれ続けています。</p>
            </PageReveal>
            
            <div className="flex flex-col gap-6">
              {[1, 2].map((num) => (
                <PageReveal key={num} delay={num * 0.1}>
                  <div className="p-8 border border-white/10 rounded-2xl md:rounded-[2rem] bg-white/[0.01] hover:bg-white/[0.02] hover:border-sky-500/20 transition-all duration-500 group flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-sky-400/80 mb-2 block group-hover:text-sky-400 transition-colors">第{num}回</span>
                      <p className="text-lg font-light tracking-wide text-white/90 group-hover:text-white transition-colors">
                        経営者コミュニティ 第{num === 1 ? '一' : '二'}回
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-light text-white/40 flex items-center gap-2 group-hover:text-white/60 transition-colors">
                        <Calendar className="w-3.5 h-3.5 text-sky-400/50" />
                        2026年{num === 1 ? '1' : '3'}月27日
                      </p>
                    </div>
                  </div>
                </PageReveal>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 flex items-center">
            <PageReveal delay={0.3}>
              <div className="relative p-10 md:p-14 bg-gradient-to-br from-sky-400/10 to-transparent border border-sky-400/20 rounded-2xl md:rounded-[2rem] overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-sky-900/10 pointer-events-none" />
                <Heart className="w-8 h-8 text-sky-400 mb-8 opacity-80" />
                <h3 className="text-xl md:text-2xl font-light mb-6 tracking-wide text-white/90">利益の一部を、社会に還元しています。</h3>
                <p className="text-sm md:text-base text-white/50 leading-[2.2] font-light mb-10">経営者コミュニティ事業で生まれた利益の一部は、子ども食堂・介護施設への寄付に充てています。ビジネスで結果を出すことと、社会に貢献することは矛盾しない——そう信じてこの事業を運営しています。</p>
                <div className="flex flex-wrap gap-4">
                  <span className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/10 text-sm font-light text-white/70">
                    <Utensils className="w-3.5 h-3.5 text-sky-400" /> 子ども食堂への寄付
                  </span>
                  <span className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/10 text-sm font-light text-white/70">
                    <HandHeart className="w-3.5 h-3.5 text-sky-400" /> 介護施設への寄付
                  </span>
                </div>
              </div>
            </PageReveal>
          </div>
        </div>
      </section>

      {/* X Stats */}
      <section className="relative px-8 md:px-[8vw] lg:px-[12vw] py-32 md:py-48 bg-transparent border-t border-white/5" id="x-stats">
        <div className="relative z-10 w-full max-w-6xl mx-auto">
          <PageReveal>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[1px] bg-sky-400/50" />
              <span className="text-xs font-mono tracking-[0.2em] uppercase text-sky-400">X / Twitter</span>
            </div>
            
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-white/[0.05] border border-white/10 rounded-xl flex items-center justify-center shrink-0 shadow-lg">
                <svg className="w-5 h-5 text-white/80" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </div>
              <h2 className="text-[clamp(28px,4vw,48px)] font-light tracking-tight text-white/90">X（旧Twitter）運用実績</h2>
            </div>
            <p className="text-base md:text-lg text-white/40 leading-relaxed font-light max-w-3xl mb-20">
              代表・田原明日翔のXアカウントにて、週間インプレッション最大<strong>200万</strong>を記録。エンゲージメント率・フォロワー増加数など、すべての指標で爆発的な成長を継続中です。
            </p>
          </PageReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {kpis.map((kpi, i) => (
              <PageReveal key={kpi.label} delay={i * 0.1}>
                <div className="p-8 bg-white/[0.015] border border-white/[0.08] rounded-2xl md:rounded-[2rem] hover:bg-white/[0.03] hover:border-sky-500/20 transition-all duration-500 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  <p className="text-xs font-mono tracking-widest text-white/40 mb-3 block group-hover:text-white/60 transition-colors uppercase">{kpi.label}</p>
                  <p className="text-3xl md:text-4xl font-light tracking-tight text-white/90 mb-4 font-mono group-hover:text-sky-300 transition-colors">
                    {kpi.val}
                  </p>
                  <span className="flex items-center gap-2 text-sm text-emerald-400 font-mono font-light tracking-wider">
                    <ArrowUp className="w-3.5 h-3.5" /> {kpi.up}
                  </span>
                </div>
              </PageReveal>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[1, 2, 3].map((num) => (
              <PageReveal key={num} delay={num * 0.1}>
                <div className="rounded-2xl md:rounded-[2.5rem] overflow-hidden border border-white/5 bg-white/[0.01] aspect-[3/4] relative group">
                  <div className="w-full h-full flex flex-col items-center justify-center gap-4 text-white/20 font-mono text-xs group-hover:bg-white/[0.03] transition-colors p-8 text-center">
                    <svg className="w-8 h-8 opacity-50" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                    <span>STATS SCREENSHOT {num}</span>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-4 text-xs text-center text-white/50 bg-black/40 backdrop-blur-md border-t border-white/10 font-light tracking-widest">
                    週間 {num === 1 ? '2M' : num === 2 ? '1M' : '118万'} インプレッション
                  </div>
                </div>
              </PageReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-8 md:px-[8vw] lg:px-[12vw] py-32 md:py-48 bg-transparent border-t border-white/5 text-center flex flex-col items-center">
        <PageReveal className="max-w-3xl mx-auto flex flex-col items-center">
          <h2 className="text-[clamp(32px,5vw,56px)] font-light tracking-tight leading-[1.2] pb-6 text-white/90">
            一緒に動きましょう。
          </h2>
          <p className="text-white/40 leading-relaxed font-light mb-12 max-w-xl text-sm md:text-base">
            イベント協力・研修依頼・コミュニティへの参加など、どんな形でもご相談ください。まずは話を聞かせてください。
          </p>
          <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto mt-4 px-4 items-center">
            <Link to="/contact" className="group relative px-8 py-4 bg-sky-500 text-white font-light rounded-full overflow-hidden w-full sm:w-auto text-center hover:shadow-[0_0_20px_rgba(14,165,233,0.4)] transition-shadow">
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              <span className="relative z-10 flex items-center justify-center gap-2">
                無料で相談する
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link to="/services" className="group px-8 py-4 bg-white/5 text-white/80 font-light rounded-full border border-white/10 hover:bg-white/10 hover:text-white transition-all w-full sm:w-auto text-center">
              サービスを見る
            </Link>
          </div>
        </PageReveal>
      </section>
    </div>
  );
}
