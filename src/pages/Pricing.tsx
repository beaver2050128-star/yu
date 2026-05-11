import PageReveal from '../components/PageReveal';
import { 
  Instagram, 
  Film, 
  Smartphone, 
  BarChart, 
  LineChart, 
  Globe, 
  Code, 
  Bot,
  ArrowRight,
  CheckCircle2,
  Briefcase,
  ChevronRight,
  Info
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Pricing() {
  const snsPlans = [
    { icon: Instagram, name: 'フィード運用', desc: '世界観・ブランド形成に強いInstagram静止画・カルーセル投稿の運用代行。', price: '12', note: '月4本〜 / 追加1本 2万円〜' },
    { icon: Film, name: 'リール運用', desc: '認知拡大・拡散に特化したInstagramリール動画の企画・撮影・編集・投稿。', price: '20', note: '月4本〜 / 追加1本 3万円〜' },
    { icon: Smartphone, name: 'TikTok運用', desc: '若年層接点・採用広報・認知拡大。企画〜台本〜撮影〜編集〜投稿まで一貫対応。', price: '20', note: '月4本〜 / 追加1本 4万円〜' },
  ];

  const trialPlans = [
    { name: 'Instagramフィード', price: '40,000' },
    { name: 'Instagramリール', price: '50,000' },
    { name: 'Instagramハイブリッド', price: '60,000' },
    { name: 'TikTok', price: '60,000' },
  ];

  const otherServices = [
    { icon: BarChart, name: '広告運用', desc: 'Instagram・TikTok・Meta・Google広告の運用・最適化。', price: '5', note: '広告費別途 / 広告費の10〜20%' },
    { icon: Smartphone, name: '公式LINE構築・運用', desc: 'シナリオ設計・ステップ配信・友だち獲得施策・保守運用まで。', price: '10', note: 'ステップ 15万円〜 / 保守 3万円/月〜' },
    { icon: Globe, name: 'LP / Web制作', desc: 'デザイン・コーディング・CMS構築・SEO対応。SNS流入からの転換率を最大化する設計。', price: '10', note: 'Web制作 30万円〜' },
    { icon: Code, name: 'システム・アプリ開発', desc: '業務システム・予約管理・会員機能・ECなど。要件に応じてスクラッチまたはノーコードで対応。', price: '50', note: 'アプリ開発 100万円〜' },
    { icon: Bot, name: 'AI活用支援・研修', desc: '業務効率化・ChatGPT活用・自社ツール連携。現状診断から社内定着まで段階的にご支援。', price: '5', note: '導入支援 10万円/月〜 / 研修 15万円/回〜' },
  ];

  const faqs = [
    { q: 'トライアル後、そのまま継続契約できますか？', a: 'はい。トライアル後にご納得いただけた場合、そのまま継続契約に移行できます。トライアルの費用は初月分に充当する形でも対応可能です。詳細はご相談ください。' },
    { q: '最低契約期間はなぜ6ヶ月ですか？', a: 'SNSは投稿の蓄積・アルゴリズムへの適応・改善サイクルを経て成果が出るため、3ヶ月以内では効果を正確に測定できません。6ヶ月を最低ラインとすることで、責任を持ってご支援できる体制をとっています。' },
    { q: '撮影費用は含まれていますか？', a: '月次の撮影（最大3時間・1ロケーション）は料金内に含まれます。交通費・モデル費・スタジオ費などの実費はクライアント様にご負担いただきます。素材をお持ちの場合は費用を抑えることも可能です。' },
    { q: '複数のサービスをまとめて依頼できますか？', a: 'SNS運用・広告・LINE・Web制作など、複数サービスのまとめてのご依頼に対応しています。担当が一元管理するため、連携がスムーズで個別発注より効率的です。まずはご相談ください。' },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative pt-[120px] pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-dark pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_20%_50%,rgba(19,71,245,0.14)_0%,transparent_55%),radial-gradient(ellipse_50%_60%_at_80%_20%,rgba(0,180,255,0.07)_0%,transparent_50%)] pointer-events-none" />
        <div className="container relative z-10 px-6 mx-auto">
          <PageReveal>
            <div className="flex items-center gap-2.5 mb-5 text-primary-light">
              <div className="w-7 h-[1px] bg-current" />
              <span className="text-[11px] font-semibold tracking-widest uppercase">Pricing</span>
            </div>
            <h1 className="text-[clamp(36px,6vw,72px)] font-bold leading-tight tracking-tighter mb-4">
              料金<span className="text-transparent bg-clip-text bg-gradient-to-br from-[#4a80ff] to-[#00d4ff]">プラン</span>
            </h1>
            <p className="text-[15px] text-muted max-w-[560px] leading-relaxed italic">
              SNS運用代行から広告・LINE・Web・AI活用まで、デジタル施策をワンストップでご支援します。詳細なお見積もりは無料相談にてご提示します。
            </p>
          </PageReveal>
        </div>
      </section>

      {/* Tax Note Strip */}
      <div className="bg-dark-lighter border-y border-line py-4 shadow-sm">
        <div className="container px-6 mx-auto flex items-center gap-3 text-[13px] text-muted italic font-medium">
          <Info className="w-4 h-4 text-primary-light shrink-0" />
          <span>表示価格はすべて税別・スタート価格です。仕様・規模・納期により変動します。</span>
        </div>
      </div>

      {/* SNS PRICING */}
      <section className="py-16 bg-dark">
        <div className="container px-6 mx-auto">
          <PageReveal>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-5 h-[1px] bg-primary-light" />
              <span className="text-[11px] font-bold tracking-widest uppercase text-primary-light">SNS運用代行</span>
            </div>
            <h2 className="text-[clamp(20px,3vw,28px)] font-bold tracking-tight mb-2">Instagram & TikTok</h2>
            <p className="text-sm text-muted max-w-[600px] mb-10 leading-relaxed font-medium italic">
              企画・台本・撮影・編集・投稿・キャプション・月次レポートまで、すべて含みます。
            </p>
          </PageReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 mb-12">
            {snsPlans.map((plan, i) => (
              <PageReveal key={plan.name} delay={i * 0.1}>
                <div className="bg-dark-lighter border border-line rounded-2xl p-7 md:p-8 flex flex-col h-full hover:border-[#f0f2ff]/20 hover:-translate-y-1 shadow-sm transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl bg-primary/15 text-primary-light flex items-center justify-center mb-5 shrink-0 shadow-lg shadow-black/20">
                    <plan.icon className="w-5.5 h-5.5" />
                  </div>
                  <h3 className="text-base font-bold mb-3 tracking-tight group-hover:text-primary-light transition-colors">{plan.name}</h3>
                  <p className="text-[13px] text-muted leading-relaxed flex-1 mb-8 italic">{plan.desc}</p>
                  <div className="pt-6 border-t border-line mt-auto">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-muted mb-1.5 block">月額スタート</span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-[32px] font-bold tracking-tighter leading-none text-white">{plan.price}</span>
                      <span className="text-sm font-bold text-muted">万円〜</span>
                    </div>
                    <p className="text-[11px] text-muted mt-2 font-medium tracking-wide">{plan.note}</p>
                    <Link to="/contact" className="inline-flex items-center gap-2 mt-6 px-4 py-2 border border-line rounded-xl text-[12px] font-bold text-muted hover:text-white hover:border-white/20 hover:bg-dark-lightest transition-all">
                      詳細を相談する <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </PageReveal>
            ))}
          </div>

          {/* Trial block */}
          <PageReveal delay={0.3}>
            <div className="bg-dark-lighter border border-line rounded-2xl p-7 md:p-9 shadow-inner mb-12">
              <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#2dd4bf]" />
                トライアルプラン — まず1本だけ試せます
              </h3>
              <p className="text-[13px] text-muted leading-relaxed italic mb-8">契約期間なし・1本のみのご依頼が可能です。実際のクオリティを確認してからご契約ください。</p>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                {trialPlans.map((trial) => (
                  <div key={trial.name} className="bg-dark-lightest border border-line rounded-xl p-4.5 group hover:border-[#2dd4bf]/40 transition-colors shadow-sm">
                    <span className="text-[11px] font-bold tracking-widest uppercase text-muted block mb-1 group-hover:text-white transition-colors">{trial.name}</span>
                    <div className="flex items-baseline gap-1 mt-1">
                      <span className="text-lg font-bold text-white">{trial.price}</span>
                      <span className="text-[11px] font-bold text-muted">円</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </PageReveal>

          {/* Other Services */}
          <PageReveal delay={0.4}>
            <div className="flex items-center gap-2 mb-3 mt-16">
              <div className="w-5 h-[1px] bg-primary-light" />
              <span className="text-[11px] font-bold tracking-widest uppercase text-primary-light">Other Services</span>
            </div>
            <h2 className="text-[clamp(20px,3vw,28px)] font-bold tracking-tight mb-2">その他のサービス</h2>
            <p className="text-sm text-muted max-w-[600px] mb-10 leading-relaxed italic">
              SNS以外のデジタル施策もワンストップで対応します。詳細はお問い合わせください。
            </p>
          </PageReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 mb-16">
            {otherServices.map((plan, i) => (
              <PageReveal key={plan.name} delay={i * 0.1}>
                <div className="bg-dark-lighter border border-line rounded-2xl p-7 md:p-8 flex flex-col h-full hover:border-[#f0f2ff]/20 hover:-translate-y-1 transition-all duration-300 shadow-sm">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary-light flex items-center justify-center mb-5 shrink-0 shadow-lg shadow-black/20 ring-1 ring-primary/20">
                    <plan.icon className="w-5.5 h-5.5" />
                  </div>
                  <h3 className="text-base font-bold mb-3 tracking-tight">{plan.name}</h3>
                  <p className="text-[13px] text-muted leading-relaxed flex-1 mb-8 italic">{plan.desc}</p>
                  <div className="pt-6 border-t border-line mt-auto">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-muted mb-1.5 block">
                      {plan.name.includes('開発') ? 'スタート' : plan.name.includes('LINE') ? '構築スタート' : '月額スタート'}
                    </span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-[32px] font-bold tracking-tighter leading-none text-white">{plan.price}</span>
                      <span className="text-sm font-bold text-muted">万円〜</span>
                    </div>
                    <p className="text-[11px] text-muted mt-2 font-medium tracking-wide italic">{plan.note}</p>
                    <Link to="/contact" className="inline-flex items-center gap-2 mt-6 px-4 py-2 border border-line rounded-xl text-[12px] font-bold text-muted hover:text-white transition-all">
                      詳細を相談する <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </PageReveal>
            ))}
          </div>

          {/* Terms */}
          <PageReveal delay={0.5}>
            <div className="flex items-center gap-2 mb-3 mt-12 text-primary-light">
              <div className="w-5 h-[1px] bg-current" />
              <span className="text-[11px] font-bold tracking-widest uppercase">Terms</span>
            </div>
            <h2 className="text-[clamp(20px,3vw,28px)] font-bold tracking-tight mb-8">共通の利用条件</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: '契約・修正', items: ['最低契約期間は6ヶ月（トライアルを除く）', '企画・台本の修正：1回まで無料', '動画編集の修正：2回まで無料'] },
                { title: '撮影・実費', items: ['1回あたり最大3時間・1ロケーション', '交通費・モデル費等の実費はクライアント負担'] },
                { title: '成果・保証', items: ['再生数・フォロワー数等の数値保証はいたしません', '月次レポートにて改善提案を毎月実施'] },
                { title: '料金・支払い', items: ['すべての料金は税別表示', '月末締め翌月末払い・銀行振込'] },
              ].map((term) => (
                <div key={term.title} className="bg-dark-lighter border border-line rounded-2xl p-6.5 shadow-sm hover:border-white/10 transition-colors">
                  <h4 className="text-[11px] font-bold tracking-widest uppercase text-white/40 mb-5 border-b border-line pb-2 shadow-sm italic">{term.title}</h4>
                  <ul className="flex flex-col gap-4">
                    {term.items.map((item, i) => (
                      <li key={i} className="flex gap-2.5 items-start text-[13px] text-muted leading-relaxed font-medium">
                        <CheckCircle2 strokeWidth={3} className="w-3.5 h-3.5 text-primary-light shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </PageReveal>

          {/* FAQ */}
          <PageReveal delay={0.6}>
            <div className="flex items-center gap-2 mb-3 mt-20 text-primary-light">
              <div className="w-5 h-[1px] bg-current" />
              <span className="text-[11px] font-bold tracking-widest uppercase">FAQ</span>
            </div>
            <h2 className="text-[clamp(20px,3vw,28px)] font-bold tracking-tight mb-10">よくある質問</h2>
            <div className="flex flex-col gap-px max-w-[780px] bg-line border border-line rounded-2xl overflow-hidden shadow-2xl shadow-black/20">
              {faqs.map((faq, i) => (
                <details key={i} className="group bg-dark-lighter" open={i === 0}>
                  <summary className="flex items-center justify-between gap-4 p-5 md:p-6 cursor-pointer list-none select-none hover:bg-white/[0.015] transition-colors">
                    <span className="text-sm font-bold leading-normal tracking-tight text-white/90">{faq.q}</span>
                    <span className="w-5 h-5 rounded-md border border-line flex items-center justify-center text-primary-light text-[10px] font-bold group-open:rotate-180 transition-transform shadow-sm">
                      <ChevronRight className="w-3 h-3 group-open:rotate-90 transition-transform" />
                    </span>
                  </summary>
                  <div className="px-5 md:px-6 pb-6 text-sm text-muted leading-[1.85] italic font-medium">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </PageReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-line bg-dark-lighter relative overflow-hidden">
        <div className="container px-6 mx-auto relative z-10 max-w-[560px] text-center">
          <PageReveal>
            <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-primary-light mb-4 shadow-sm">Free Consultation</p>
            <h2 className="text-[clamp(28px,4vw,44px)] font-bold tracking-tighter leading-tight mb-5 whitespace-nowrap">
              <span className="text-primary-light">まず相談</span>してから<br />決めてください。
            </h2>
            <p className="text-[15px] text-muted mb-10 leading-relaxed italic">
              どのプランが合うか迷っている場合も、ヒアリング後に最適な組み合わせをご提案します。相談・見積もりはすべて無料です。
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/contact" className="btn-main font-bold shadow-lg shadow-primary/20">
                無料で相談する
                <ArrowRight className="w-4.5 h-4.5" />
              </Link>
              <Link to="/services" className="btn-sub font-medium group">
                <Briefcase className="w-4 h-4" />
                サービス詳細を見る
              </Link>
            </div>
          </PageReveal>
        </div>
      </section>
    </div>
  );
}
