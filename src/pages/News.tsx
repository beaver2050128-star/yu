import PageReveal from '../components/PageReveal';
import { ChevronRight, MapPin, Info, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function News() {
  const [activeCategory, setActiveCategory] = useState('すべて');

  const categories = [
    { name: 'すべて' },
    { name: 'イベント' },
    { name: 'お知らせ' },
    { name: 'メディア' },
    { name: '採用' },
  ];

  const newsItems = [
    {
      id: 1,
      date: '2026.03.27',
      category: 'イベント',
      catClass: 'bg-emerald-400/5 text-emerald-400 border-emerald-400/20',
      title: '経営者コミュニティ交流会\n第2回を開催しました',
      desc: '15名限定で開催。反省を活かしたプログラム構成で、深い意見交換の場となりました。',
    },
    {
      id: 2,
      date: '2026.01.27',
      category: 'イベント',
      catClass: 'bg-emerald-400/5 text-emerald-400 border-emerald-400/20',
      title: '経営者コミュニティ交流会\n第1回を開催しました',
      desc: '経営者・起業家が集まり、濃い交流が生まれた第一回。好評につき継続開催が決定。',
    },
    {
      id: 3,
      date: '2026.03.18',
      category: 'お知らせ',
      catClass: 'bg-sky-400/5 text-sky-400 border-sky-400/20',
      title: '株式会社ユライフの歩み\n創業から現在までの成長ストーリー',
      desc: 'SNS・AI・インフルエンサーを軸に、創業から法人化、事業拡張へ。',
    }
  ];

  const sortedNewsItems = [...newsItems].sort((a, b) => {
    return new Date(b.date.replace(/\./g, '-')).getTime() - new Date(a.date.replace(/\./g, '-')).getTime();
  });

  const filteredNewsItems = sortedNewsItems.filter(item => {
    if (activeCategory === 'すべて') return true;
    return item.category === activeCategory;
  });

  return (
    <div className="flex flex-col text-white/80 font-sans">
      {/* Hero */}
      <section className="relative min-h-[60svh] flex flex-col justify-center px-8 md:px-[8vw] lg:px-[12vw] border-b border-white/5 pt-24 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-500/5 to-transparent pointer-events-none" />
        <div className="relative z-10 w-full max-w-5xl">
          <PageReveal>
            <span className="text-xs font-mono tracking-[0.2em] uppercase text-sky-400 mb-6 block">NEWS</span>
            <h1 className="text-[clamp(40px,7vw,80px)] font-light leading-[1.1] tracking-tight mb-8 text-white/90">
              お知らせ・メディア掲載
            </h1>
            <p className="text-base md:text-lg text-white/40 leading-relaxed font-light max-w-2xl">
              ユライフの最新情報・取り組み・採用情報を更新します。
            </p>
          </PageReveal>
        </div>
      </section>

      <section className="relative px-8 md:px-[8vw] lg:px-[12vw] py-32 bg-transparent">
        <div className="relative z-10 w-full max-w-5xl mx-auto">
          
          {/* Featured */}
          <PageReveal>
            <div className="group block relative p-10 md:p-14 bg-white/[0.015] border border-white/[0.08] rounded-2xl md:rounded-[2rem] hover:bg-white/[0.03] hover:border-sky-500/20 transition-all duration-500 overflow-hidden mb-16">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="relative z-10">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-sky-400 bg-sky-400/10 border border-sky-400/20 rounded-full px-3 py-1">Featured</span>
                  <span className="text-xs text-white/40 font-mono">2026.03.18</span>
                  <span className="text-[10px] font-mono tracking-widest px-3 py-1 rounded-full bg-white/5 text-white/60 border border-white/10 uppercase">お知らせ</span>
                </div>
                <h2 className="text-[clamp(24px,4vw,36px)] font-light tracking-wide leading-tight mb-6 text-white/90 group-hover:text-white transition-colors whitespace-pre-line">
                  株式会社ユライフの歩み
                  創業から現在までの成長ストーリー
                </h2>
                <p className="text-sm md:text-base text-white/40 leading-relaxed max-w-2xl font-light group-hover:text-white/60 transition-colors">
                  SNS・AI・インフルエンサーを軸に、創業から法人化、事業拡張へ。ユライフの成長の軌跡と、これからの方向性をまとめました。
                </p>
              </div>
            </div>
          </PageReveal>

          {/* Filter */}
          <PageReveal delay={0.1}>
            <div className="flex flex-wrap gap-3 mb-16">
              {categories.map((cat) => (
                <button 
                  key={cat.name}
                  onClick={() => setActiveCategory(cat.name)}
                  className={`px-5 py-2 rounded-full border text-xs tracking-wider transition-all duration-300 font-light ${
                    activeCategory === cat.name
                    ? 'bg-sky-500 text-white border-sky-500 shadow-[0_0_15px_rgba(14,165,233,0.3)]' 
                    : 'bg-white/[0.02] border-white/10 text-white/40 hover:border-white/30 hover:text-white/80'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </PageReveal>

          {/* News List */}
          <div className="border-t border-white/5 space-y-4 md:space-y-0">
            {filteredNewsItems.map((item, i) => (
              <PageReveal key={item.id} delay={i * 0.05}>
                <div className={`flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-12 py-10 md:py-10 border-b border-white/5 group relative transition-all duration-500 rounded-3xl md:rounded-2xl px-6 md:px-8 -mx-0 md:-mx-8 bg-white/[0.02] md:bg-transparent ${
                  item.disabled ? 'opacity-50' : ''
                }`}>
                  <div className="flex items-center justify-between w-full md:w-28 shrink-0">
                    <div className="text-[10px] md:text-sm text-sky-400 font-mono tracking-widest group-hover:text-sky-300 transition-colors">
                      {item.date}
                    </div>
                    <div className="md:hidden">
                       <span className={`text-[9px] font-mono tracking-widest uppercase px-3 py-1 rounded-full border ${item.catClass}`}>
                        {item.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="hidden md:flex flex-wrap items-center gap-3 mb-4">
                      <span className={`text-[9px] md:text-[10px] font-mono tracking-widest uppercase px-3 py-1 rounded-full border ${item.catClass}`}>
                        {item.category}
                      </span>
                    </div>
                    <h3 className={`text-xl md:text-2xl font-light leading-snug mb-4 md:mb-4 transition-colors whitespace-pre-line group-hover:text-white ${
                      item.disabled ? 'text-white/40' : 'text-white/90'
                    }`}>
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/40 leading-relaxed font-light transition-colors line-clamp-3 md:line-clamp-none">
                      {item.desc}
                    </p>
                  </div>

                  <div className="absolute right-6 bottom-8 md:hidden text-sky-400/30">
                    <ArrowRight className="w-5 h-5" />
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
            まず、話を聞かせてください。
          </h2>
          <p className="text-white/40 leading-relaxed font-light mb-12 max-w-xl text-sm md:text-base">
            SNSアカウントのURLひとつからでも構いません。現状を共有いただければ、次の一手を一緒に整理します。
          </p>
          <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto mt-4 px-4 items-center">
            <Link to="/contact" className="group relative px-8 py-4 bg-sky-500 text-white font-light rounded-full overflow-hidden w-full sm:w-auto text-center hover:shadow-[0_0_20px_rgba(14,165,233,0.4)] transition-shadow">
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              <span className="relative z-10 flex items-center justify-center gap-2">
                無料相談を申し込む
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <a href="tel:08069989361" className="group px-8 py-4 bg-white/5 text-white/80 font-light rounded-full border border-white/10 hover:bg-white/10 hover:text-white transition-all w-full sm:w-auto text-center">
              080-6998-9361
            </a>
          </div>
          <p className="mt-8 text-xs text-white/30 font-light tracking-wider">
            相談・見積もり無料 / 強引な営業は一切しません
          </p>
        </PageReveal>
      </section>
    </div>
  );
}
