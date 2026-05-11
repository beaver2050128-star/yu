import PageReveal from '../components/PageReveal';
import { ChevronRight, Building, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Company() {
  const mvv = [
    { tag: 'Mission', title: '人と社会に最大の価値提供を行い、日本の未来を豊かにする。', desc: '個人と企業が成長できる環境を創り出し、一人一人が意義性・没頭・成長実感・ポジティブな人間関係を実感できる社会を実現する。' },
    { tag: 'Vision', title: '日本一価値提供の多い会社になる。', desc: '世界に誇れる日本の企業力・国力を高める存在になる。一社一社の成長が、日本全体の発信力につながると信じて動く。' }
  ];

  const values = [
    { num: '01', title: '意義性', desc: '数字や成果だけを追うのではなく、なぜやるかを問い続ける。自分の仕事に意味を見出し、その意味に向けて動く。' },
    { num: '02', title: '没頭', desc: '心から熱中できる仕事だけに集中し、圧倒的なアウトプットを出す。中途半端にやらない。やるなら本気でやる。' },
    { num: '03', title: '成長実感', desc: '昨日の自分を超えることを日課にする。失敗を恐れず動き、フィードバックを糧にして改善を繰り返す。' },
    { num: '04', title: 'ポジティブな人間関係', desc: '信頼は結果の積み重ねから生まれる。長く続く関係のために、まず自分から価値を提供することを選ぶ。' }
  ];

  const directors = [
    { 
      role: '代表取締役', 
      name: '田原 明日翔', 
      enName: 'Asuka Tahara', 
      bio: '2002年大阪生まれ。高校在学中にアフィリエイトで起業し、わずか2年で自社SNSフォロワー60万人・月収最大500万円を個人で達成。その経験を法人向けに転換する形でSNS運用代行事業を立ち上げ、TikTok単投稿125万再生・Instagram単投稿57万閲覧など、再現性のある数字を積み上げてきた。「感覚ではなく仕組みで伸ばす」を信条とし、SNS・広告・Web・AIをフルに活用した企業のデジタル戦略を一手に担う。同時に、自身が情報・知識によって人生を変えた原体験から教育事業にも注力。大阪から全国へ、次の成長フェーズを走っている。' 
    }
  ];

  return (
    <div className="text-white/80 font-sans">
      {/* Hero */}
      <section className="relative min-h-[60svh] flex flex-col justify-center px-8 md:px-[8vw] lg:px-[12vw] border-b border-white/5 pt-24 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-500/5 to-transparent pointer-events-none" />
        <div className="relative z-10 w-full max-w-5xl">
          <PageReveal>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[1px] bg-sky-400/50" />
              <span className="text-xs font-mono tracking-[0.2em] uppercase text-sky-400">Company</span>
            </div>
            <h1 className="text-[clamp(40px,7vw,80px)] font-light leading-[1.1] tracking-tight mb-8 text-white/90">
              会社概要
            </h1>
            <p className="text-base md:text-lg text-white/40 leading-relaxed font-light max-w-2xl">
              Mission / Vision / Value・役員紹介・会社情報を掲載しています。
            </p>
          </PageReveal>
        </div>
      </section>

      {/* Philosophy */}
      <section className="relative px-8 md:px-[8vw] lg:px-[12vw] py-32 md:py-48 bg-transparent" id="company-philosophy">
        <div className="relative z-10 w-full max-w-6xl mx-auto">
          <PageReveal>
            <span className="text-xs font-mono tracking-[0.2em] uppercase text-sky-400 mb-6 block">Philosophy</span>
            <h2 className="text-[clamp(28px,4vw,48px)] font-light tracking-tight mb-8 text-white/90">Mission / Vision / Value</h2>
            <p className="text-base md:text-lg text-white/40 font-light max-w-2xl">株式会社ユライフが意思決定と行動で大切にしている指針です。</p>
          </PageReveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {mvv.map((item, i) => (
              <PageReveal key={item.tag} delay={i * 0.1}>
                <div className="h-full p-8 md:p-12 bg-white/[0.015] border border-white/[0.08] rounded-2xl md:rounded-[2rem] hover:bg-white/[0.03] hover:border-sky-500/20 transition-all duration-500">
                  <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-sky-400 mb-4 block">{item.tag}</span>
                  <h3 className="text-xl md:text-2xl font-light leading-snug mb-6 tracking-wide text-white/90">{item.title}</h3>
                  <p className="text-sm md:text-base text-white/40 leading-relaxed font-light">{item.desc}</p>
                </div>
              </PageReveal>
            ))}
            <div className="col-span-1 md:col-span-2">
              <PageReveal delay={0.2}>
                <div className="p-8 md:p-14 bg-white/[0.015] border border-white/[0.08] rounded-2xl md:rounded-[2rem] hover:border-sky-500/20 transition-all duration-500">
                  <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-sky-400 mb-10 block">Value — 4つの行動指針</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    {values.map((v) => (
                      <div key={v.num} className="group relative">
                        <span className="text-5xl font-light tracking-tighter leading-none mb-6 block text-white/10 group-hover:text-sky-400/30 transition-colors duration-500 font-mono">
                          {v.num}
                        </span>
                        <h4 className="text-lg font-light mb-4 tracking-wide text-white/80">{v.title}</h4>
                        <p className="text-sm text-white/40 leading-relaxed font-light">{v.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </PageReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Directors */}
      <section className="relative px-8 md:px-[8vw] lg:px-[12vw] py-32 md:py-48 bg-transparent border-t border-white/5" id="directors">
        <div className="relative z-10 w-full max-w-5xl mx-auto">
          <PageReveal>
            <span className="text-xs font-mono tracking-[0.2em] uppercase text-sky-400 mb-6 block">Directors</span>
            <h2 className="text-[clamp(28px,4vw,48px)] font-light tracking-tight mb-16 text-white/90">役員紹介</h2>
          </PageReveal>

          <div className="grid grid-cols-1 gap-8">
            {directors.map((d, i) => (
              <PageReveal key={d.name} delay={i * 0.1}>
                <div className="bg-white/[0.015] backdrop-blur-sm border border-white/[0.08] rounded-2xl md:rounded-[2rem] overflow-hidden flex flex-col sm:flex-row hover:border-sky-500/30 hover:bg-white/[0.04] hover:shadow-[0_15px_40px_-15px_rgba(56,189,248,0.15)] transition-all duration-700 group">
                  <div className="w-full sm:w-1/3 aspect-square sm:aspect-auto bg-gradient-to-br from-sky-400/5 to-transparent flex items-center justify-center relative overflow-hidden shrink-0 border-b sm:border-b-0 sm:border-r border-white/[0.05]">
                    <Building className="w-16 h-16 text-sky-400/20 group-hover:scale-110 transition-transform duration-700" />
                    {/* Image placeholder */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-white/30 text-xs">
                      <span className="inline-flex items-center gap-1.5 text-[10px] text-sky-400/80 bg-sky-400/10 border border-dashed border-sky-400/20 rounded-md px-3 py-1.5 font-mono">
                        IMAGE PLACEHOLDER
                      </span>
                    </div>
                  </div>
                  <div className="p-8 md:p-12 sm:w-2/3 flex flex-col justify-center relative">
                    <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-sky-400 mb-3 block">{d.role}</span>
                    <div className="text-2xl md:text-3xl font-light tracking-wide mb-1 text-white/90">{d.name}</div>
                    <span className="text-xs text-white/30 tracking-[0.2em] uppercase block mb-8 font-mono">{d.enName}</span>
                    <p className="text-sm md:text-base text-white/40 leading-[2.2] font-light">{d.bio}</p>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  </div>
                </div>
              </PageReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Message */}
      <section className="relative px-8 md:px-[8vw] lg:px-[12vw] py-32 md:py-48 bg-transparent border-t border-white/5">
        <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24">
          <div className="md:w-1/3 shrink-0">
            <PageReveal>
              <span className="text-xs font-mono tracking-[0.2em] uppercase text-sky-400 mb-6 block">代表メッセージ</span>
              <h2 className="text-[clamp(24px,3vw,36px)] font-light tracking-tight leading-snug text-white/90">
                SNSで売上が<br />動く会社と、<br />動かない会社の差は<br />何か。
              </h2>
            </PageReveal>
          </div>
          
          <div className="md:w-2/3">
            <PageReveal delay={0.2}>
              <div className="text-sm md:text-base text-white/40 leading-[2.2] font-light flex flex-col gap-6">
                <p>高校生のときからSNSで稼いできました。アフィリエイト、自社アカウント運用、広告運用。いろんな手法を試して、フォロワー60万人・月収最大500万円を個人で達成しました。</p>
                <p>その経験の中で気づいたのは、SNSで結果が出ない会社の多くは、やる気や予算の問題ではないということです。投稿の設計が間違っているか、分析をしていないか、そのどちらかです。感覚でやっていると、どれだけ投稿しても数字は動きません。</p>
                <p>ユライフがやっていることはシンプルです。再現性のある仕組みを作って、数字で管理して、改善を続ける。それだけです。クライアントの業種・規模に関わらず、同じ考え方で結果を出してきました。</p>
                <p>大げさなことは言いません。ただ、やると決めたら本気でやります。まずは一度、話を聞かせてください。</p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="w-12 h-[1px] bg-sky-400/30" />
                  <p className="text-[13px] text-white/60 tracking-widest uppercase font-mono">代表取締役 田原 明日翔</p>
                </div>
              </div>
            </PageReveal>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="relative px-8 md:px-[8vw] lg:px-[12vw] py-32 md:py-48 bg-transparent border-t border-white/5" id="company-info">
        <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-2/3">
            <PageReveal>
              <span className="text-xs font-mono tracking-[0.2em] uppercase text-sky-400 mb-6 block">Company Info</span>
              <h2 className="text-[clamp(28px,4vw,48px)] font-light tracking-tight mb-12 text-white/90">会社情報</h2>
              <div className="border-t border-white/10">
                <table className="w-full border-collapse">
                  <tbody>
                    {([] as Array<[string, string, boolean?]>).concat([
                      ['会社名', '株式会社ユライフ'],
                      ['代表取締役', '田原 明日翔'],
                      ['設立', '2024年4月1日'],
                      ['資本金', '100万円'],
                      ['事業内容', 'SNS運用代行・インフルエンサーマーケティング・AI/SNS教育事業'],
                      ['電話番号', '080-6998-9361', true],
                      ['メール', 'info@yuraifu.jp', true]
                    ]).map(([label, value, isContact]) => (
                      <tr key={label} className="border-b border-white/5 group">
                        <th className="text-sm font-light text-white/40 p-6 pl-0 text-left w-[180px] whitespace-nowrap align-top group-hover:text-white/60 transition-colors">
                          {label}
                        </th>
                        <td className="text-sm md:text-base p-6 pr-0 text-white/80 leading-relaxed font-light group-hover:text-white transition-colors">
                          {isContact ? (
                            <a href={label === 'メール' ? `mailto:${value}` : `tel:${value.replace(/-/g, '')}`} className="text-sky-400 hover:text-sky-300 transition-colors">
                              {value}
                            </a>
                          ) : value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </PageReveal>
          </div>

          <div className="lg:w-1/3">
            <PageReveal delay={0.2}>
              <span className="text-xs font-mono tracking-[0.2em] uppercase text-sky-400 mb-8 block lg:mt-24">拠点</span>
              <div className="flex flex-col gap-6">
                {[
                  { name: '本社', addr: '大阪府大阪市中央区安土町2-4-11\nシティタワー大阪本町1422' },
                  { name: '東大阪支店', addr: '大阪府東大阪市小若江3-6-9\nKINCUBA Basecamp' }
                ].map((office) => (
                  <div key={office.name} className="bg-white/[0.015] border border-white/[0.08] rounded-2xl p-6 md:p-8 flex gap-5 items-start hover:border-sky-500/20 hover:bg-white/[0.03] transition-all duration-500 group">
                    <div className="w-10 h-10 rounded-full bg-sky-400/10 text-sky-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-light mb-2 text-white/90">{office.name}</h4>
                      <p className="text-sm text-white/40 leading-[1.8] font-light whitespace-pre-line group-hover:text-white/60 transition-colors">{office.addr}</p>
                    </div>
                  </div>
                ))}
              </div>
            </PageReveal>
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
