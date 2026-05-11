import PageReveal from '../components/PageReveal';
import { ChevronRight, ArrowDown, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export default function Services() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const services = [
    {
      idx: '01',
      id: 'sns',
      title: 'SNS運用事業',
      image: '/images/01.png',
      tags: ['Instagram', 'TikTok', 'YouTube', 'X'],
      desc: '企画・台本・撮影・編集・投稿・改善まで、SNS運用をまるごと代行。代表自身がフォロワー60万人を築いた実績と、TikTok125万再生・Instagram57万閲覧という数字を、クライアントの成果に転用します。',
      items: ['動画企画・脚本・撮影・編集・投稿', 'キャプション・ハッシュタグ設計', 'SNS広告運用（Instagram・TikTok・Meta・Google）', '月次レポート・改善提案']
    },
    {
      idx: '02',
      id: 'ai-dx',
      title: 'AI・DX支援',
      image: '/images/02.png',
      tags: ['ChatGPT活用', '業務自動化', '社内研修'],
      desc: '「AIを導入したい」「でも何から始めればいい？」という段階から支援します。現場の業務に合わせてAIツールを実装し、使いこなせる組織に変えるところまで伴走します。',
      items: ['業務フロー診断・AI活用設計', 'ChatGPT・生成AIツールの実装・カスタマイズ', '社内向けAI研修・ワークショップ', '業務自動化・DX推進サポート']
    },
    {
      idx: '03',
      id: 'influencer',
      title: 'インフルエンサープロデュース',
      image: '/images/03.png',
      tags: ['キャスティング', '育成', 'タイアップ'],
      desc: 'インフルエンサーの発掘・育成・マネジメントから、ブランドとのタイアップ企画まで一手に担います。「誰に頼めばいいか分からない」というブランド側の課題にも、「もっと伸びたい」というクリエイター側の課題にも応えます。',
      items: ['インフルエンサーのキャスティング・交渉', 'PR・タイアップ企画の設計・進行管理', 'クリエイターの育成・アカウントプロデュース', '効果測定・レポーティング']
    },
    {
      idx: '04',
      id: 'sales',
      title: '営業代行事業',
      image: '/images/04.png',
      tags: ['訪問営業', '催事・イベント', '新規開拓'],
      desc: '訪問営業・催事・イベント販売など、リアルの現場での新規顧客開拓を代行します。デジタル施策だけではリーチしにくい層へのアプローチや、現場での即決・成約を得意とします。',
      items: ['訪問営業の設計・実施・管理', '催事・イベント出展サポート', '営業トーク・クロージング設計', '成果報告・改善フィードバック']
    },
    {
      idx: '05',
      id: 'media',
      title: 'Webメディア運営',
      image: '/images/05.png',
      tags: ['オウンドメディア', 'SEO', 'コンテンツ制作'],
      desc: '検索流入・長期的なブランディングを目的としたWebメディアの立ち上げ・運営を担います。SNSでの瞬間的な拡散に加え、資産として積み上がるコンテンツで集客の土台をつくります。',
      items: ['オウンドメディアの設計・構築', 'SEOを意識した記事制作・編集', 'SNSとWebの連動施策設計', 'アクセス解析・改善サイクル構築']
    },
    {
      idx: '06',
      id: 'community',
      title: '経営者コミュニティ事業',
      image: '/images/06.png',
      tags: ['経営者ネットワーク', '情報共有', 'コラボレーション'],
      desc: '志ある経営者・起業家が集まるコミュニティを運営します。業界の壁を越えた情報交換・事業連携・相互支援の場を提供し、一社では届かない成長を、つながりで実現します。',
      items: ['経営者向け定期勉強会・交流会の企画・運営', 'メンバー間の事業連携サポート', '最新のSNS・AI・マーケティング情報の共有', '個別経営相談・アドバイザリー']
    }
  ];

  const comparisons = [
    { issue: 'SNSで集客・問い合わせを増やしたい', service: 'SNS運用事業' },
    { issue: 'SNSで採用応募を増やしたい', service: 'SNS運用事業' },
    { issue: 'AIで社内の仕事を効率化したい', service: 'AI・DX支援' },
    { issue: 'インフルエンサーを使ったPRをしたい', service: 'インフルエンサープロデュース' },
    { issue: 'リアルの現場で新規顧客を獲得したい', service: '営業代行事業' },
    { issue: '長期的なWeb集客の土台をつくりたい', service: 'Webメディア運営' },
    { issue: '経営者同士でつながり・学びたい', service: '経営者コミュニティ' }
  ];

  const steps = [
    { num: '01', title: '無料相談', desc: '現状・目的・課題をヒアリング。SNSアカウントのURLだけでもOKです。' },
    { num: '02', title: 'ヒアリング・現状分析', desc: 'SNS・商材・競合・体制を分析。改善優先度を整理します。' },
    { num: '03', title: 'ご提案・お見積り', desc: '目的に合わせたサービス構成と費用感を提示。納得いただいてから進めます。' },
    { num: '04', title: 'キックオフ', desc: '戦略・KPI・スケジュールを確認し、担当者をアサインして運用開始。' },
    { num: '05', title: '実行 → 改善サイクル', desc: '月次レポートと定例MTGで継続改善。成果に直結するKPIを一緒に追います。' }
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
              <span className="text-xs font-mono tracking-[0.2em] uppercase text-sky-400">Services</span>
            </div>
            <h1 className="text-[clamp(40px,7vw,80px)] font-light leading-[1.1] tracking-tight mb-8 text-white/90">
              サービス一覧
            </h1>
            <p className="text-base md:text-lg text-white/40 leading-relaxed font-light max-w-2xl mb-12">
              SNS運用からAI・DX支援、営業代行、経営者コミュニティまで。デジタルと現場を横断して、企業の成長を支援します。
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <Link to="/contact" className="group relative px-6 py-3 bg-sky-500 text-white font-light rounded-full overflow-hidden text-sm hover:shadow-[0_0_20px_rgba(14,165,233,0.4)] transition-shadow">
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  無料相談を申し込む
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <a href="#services" className="group flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors">
                サービスを見る
                <ArrowDown className="w-3 h-3 group-hover:translate-y-1 transition-transform" />
              </a>
            </div>
          </PageReveal>
        </div>
      </section>

      {/* Services List */}
      <section className="relative px-8 md:px-[8vw] lg:px-[12vw] py-32 md:py-48 bg-transparent" id="services">
        <div className="relative z-10 w-full max-w-6xl mx-auto">
          <PageReveal>
            <span className="text-xs font-mono tracking-[0.2em] uppercase text-sky-400 mb-6 block">6つの事業</span>
            <h2 className="text-[clamp(28px,4vw,48px)] font-light tracking-tight mb-8 text-white/90 leading-tight">
              デジタルと現場を横断して、<br className="hidden md:block" />企業の成長を支援する。
            </h2>
            <p className="text-base md:text-lg text-white/40 font-light max-w-2xl">
              単体でも、組み合わせても対応します。まずは無料相談で現状を整理しましょう。
            </p>
          </PageReveal>

          <div className="mt-20 flex flex-col gap-6">
            {services.map((s, i) => (
                <div key={s.idx} id={s.id} className="relative p-0 bg-white/[0.015] border border-white/[0.08] rounded-2xl md:rounded-[2rem] hover:bg-white/[0.03] hover:border-sky-500/20 transition-all duration-500 group scroll-mt-32 overflow-hidden flex flex-col lg:flex-row">
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  
                  {/* Photo Section */}
                  <div className={`w-full lg:w-2/5 aspect-video lg:aspect-auto bg-white/5 relative overflow-hidden border-b lg:border-b-0 lg:border-l border-white/5 shrink-0 ${i % 2 === 1 ? 'lg:order-1 lg:border-r lg:border-l-0' : 'lg:order-2'}`}>
                    {s.image ? (
                      <img 
                        src={s.image} 
                        alt={s.title} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                        <div className="text-white/20 text-xs font-mono tracking-widest uppercase">
                          Image Placeholder
                        </div>
                        <div className="text-[10px] text-white/10 font-mono italic">
                          Update 'image' property in Services.tsx
                        </div>
                      </div>
                    )}
                    {/* Hover overlay that scales/gently brightens */}
                    <div className="absolute inset-0 bg-sky-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  <div className={`p-8 md:p-12 relative z-10 flex-1 flex flex-col justify-between ${i % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div>
                      <span className="text-sm font-mono text-sky-400/50 mb-4 block group-hover:text-sky-400 transition-colors">{s.idx}</span>
                      <h3 className="text-2xl md:text-3xl font-light tracking-wide mb-6 text-white/90 group-hover:text-white transition-colors">{s.title}</h3>
                      <div className="flex flex-wrap gap-2 mb-8">
                        {s.tags.map(t => (
                          <span key={t} className="text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-full border border-sky-400/20 text-sky-400/80 bg-sky-400/5 group-hover:border-sky-400/40 group-hover:text-sky-400 transition-colors">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex flex-col flex-1">
                      <p className="text-sm md:text-base text-white/40 leading-[2.2] font-light mb-8 group-hover:text-white/60 transition-colors">{s.desc}</p>
                      
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                        {s.items.map(item => (
                          <li key={item} className="flex gap-4 items-start text-[13px] md:text-sm text-white/60 font-light">
                            <div className="w-1.5 h-1.5 rounded-full bg-sky-400/50 shrink-0 mt-2" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      
                      <div className="mt-auto pt-8 border-t border-white/5 flex items-center justify-between">
                        <Link to="/contact" className="text-sm text-sky-400/80 hover:text-sky-400 flex items-center gap-2 transition-colors">
                          <span className="border-b border-sky-400/30 hover:border-sky-400 pb-0.5">この事業について相談する</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="relative px-8 md:px-[8vw] lg:px-[12vw] py-32 md:py-48 bg-transparent border-t border-white/5">
        <div className="relative z-10 w-full max-w-5xl mx-auto">
          <PageReveal>
            <span className="text-xs font-mono tracking-[0.2em] uppercase text-sky-400 mb-6 block text-center">目的から選ぶ</span>
            <h2 className="text-[clamp(28px,4vw,48px)] font-light tracking-tight mb-8 text-center text-white/90">
              何を解決したいかで選んでください。
            </h2>
            <p className="text-base text-white/40 text-center max-w-2xl mx-auto font-light mb-16">
              複数の事業を組み合わせた提案も可能です。迷った場合は無料相談でお気軽にご相談ください。
            </p>
          </PageReveal>

          <div className="overflow-x-auto pb-8">
            <div className="min-w-[700px] border border-white/10 rounded-2xl overflow-hidden bg-white/[0.01]">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="p-6 text-xs md:text-sm font-light tracking-widest text-left text-white/40">解決したい課題</th>
                    <th className="p-6 text-xs md:text-sm font-light tracking-widest text-left text-sky-400/80 bg-sky-400/5">おすすめの事業</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {comparisons.map((c) => (
                    <tr key={c.issue} className="group hover:bg-white/[0.03] transition-colors">
                      <td className="p-6 text-sm md:text-base font-light text-white/80 group-hover:text-white transition-colors">{c.issue}</td>
                      <td className="p-6 text-sm md:text-base font-light text-sky-400/80 bg-sky-400/[0.02] group-hover:text-sky-400 transition-colors">{c.service}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="mt-8 text-sm text-white/40 flex items-center justify-center gap-3 font-light text-center">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400/50" />
            複数の課題をまとめて解決したい場合も、ワンストップで対応します。
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="relative px-8 md:px-[8vw] lg:px-[12vw] py-32 md:py-48 bg-transparent border-t border-white/5">
        <div className="relative z-10 w-full max-w-4xl mx-auto">
          <PageReveal>
            <span className="text-xs font-mono tracking-[0.2em] uppercase text-sky-400 mb-6 block">進め方</span>
            <h2 className="text-[clamp(28px,4vw,48px)] font-light tracking-tight mb-20 text-white/90">
              相談から開始まで、最短5ステップ。
            </h2>
          </PageReveal>

          <div className="flex flex-col gap-12 border-l border-white/10 pl-8 ml-4 md:ml-8 relative">
            {steps.map((s, i) => (
              <PageReveal key={s.num} delay={i * 0.1}>
                <div className="relative group">
                  <div className="absolute -left-[54px] top-0 w-10 h-10 rounded-full bg-black border border-sky-400/30 text-sky-400 font-mono text-sm flex items-center justify-center group-hover:bg-sky-400/10 group-hover:border-sky-400/60 group-hover:scale-110 transition-all duration-300">
                    {s.num}
                  </div>
                  <div className="pt-1.5">
                    <h3 className="text-xl md:text-2xl font-light mb-4 text-white/80 group-hover:text-white transition-colors">{s.title}</h3>
                    <p className="text-sm md:text-base text-white/40 leading-relaxed font-light group-hover:text-white/60 transition-colors">{s.desc}</p>
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
