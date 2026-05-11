import PageReveal from '../components/PageReveal';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Privacy() {
  const articles = [
    { title: '個人情報の定義', desc: '本ポリシーにおける「個人情報」とは、個人情報の保護に関する法律（個人情報保護法）に定める個人情報を指し、氏名・住所・電話番号・メールアドレスなど、特定の個人を識別できる情報をいいます。' },
    { title: '個人情報の収集', desc: '当社は、以下の場合に個人情報を収集することがあります。', list: ['お問い合わせフォームからのご連絡', 'サービスのお申し込みや契約手続き', 'メールマガジン・資料のお申し込み', '採用応募に関する情報提供', 'イベント・セミナーへの参加申込'] },
    { title: '個人情報の利用目的', desc: '収集した個人情報は、以下の目的に限り利用します。', list: ['お問い合わせへの回答・ご連絡', 'サービスの提供・契約の履行', '請求書・見積書などの書類送付', '当社サービスに関する情報・資料の提供', '採用選考・採用に関する連絡', 'サービス改善のためのアンケート', '法令に基づく対応'] },
    { title: '個人情報の第三者提供', desc: '当社は、以下のいずれかに該当する場合を除き、収集した個人情報を第三者に提供しません。', list: ['ご本人の同意がある場合', '法令に基づき提供が求められる場合', '人命・財産の保護のために必要で、ご本人の同意を得ることが困難な場合', '国の機関・地方公共団体またはその委託を受けた者が法令の定める事務を遂行する場合'] },
    { title: '個人情報の管理・安全対策', desc: '当社は、個人情報の紛失・破壊・改ざん・漏洩などを防ぐため、適切なセキュリティ措置を講じます。個人情報へのアクセスは業務上必要な担当者に限定し、適切に管理します。' },
    { title: '業務委託先への提供', desc: '当社はサービス提供のために業務を外部委託する場合、委託先に対して個人情報の適切な取り扱いを契約上義務付け、適切に監督します。' },
    { title: 'Cookieおよびアクセス解析', desc: '当社のウェブサイトでは、サービス改善を目的としてCookieおよびアクセス解析ツール（Google Analytics等）を使用する場合があります。これらのツールは個人を特定する情報を収集しません。ブラウザの設定によりCookieを無効にすることができますが、一部の機能が利用できなくなる場合があります。' },
    { title: '個人情報の開示・訂正・削除', desc: 'ご本人から個人情報の開示・訂正・削除・利用停止のご請求があった場合、合理的な期間内に対応します。ご請求の際は、本人確認のための書類をご提示いただく場合があります。下記お問い合わせ窓口までご連絡ください。' },
    { title: 'プライバシーポリシーの変更', desc: '当社は、法令改正やサービス内容の変更に応じて本ポリシーを改定することがあります。重要な変更がある場合は、ウェブサイト上でお知らせします。改定後のポリシーはウェブサイトへの掲載時より効力を生じます。' },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative pt-[110px] pb-14 overflow-hidden">
        <div className="absolute inset-0 bg-dark pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_70%_at_15%_50%,rgba(19,71,245,0.10)_0%,transparent_55%)] pointer-events-none" />
        <div className="container relative z-10 px-6 mx-auto">
          <PageReveal>
            <div className="flex items-center gap-2.5 mb-5 text-primary-light">
              <div className="w-7 h-[1px] bg-current" />
              <span className="text-[11px] font-semibold tracking-widest uppercase">Privacy Policy</span>
            </div>
            <h1 className="text-[clamp(28px,4.5vw,52px)] font-bold tracking-tight leading-tight mb-4">プライバシーポリシー</h1>
            <p className="text-xs text-muted leading-relaxed font-bold tracking-widest uppercase">
              制定日：2024年4月1日 ／ 最終改定：2026年4月1日
            </p>
          </PageReveal>
        </div>
      </section>

      <section className="py-14 pb-24 bg-dark">
        <div className="container px-6 mx-auto max-w-[780px]">
          <PageReveal>
            <div className="bg-dark-lighter border border-line rounded-2xl p-6 md:p-8 text-sm text-muted leading-[1.9] mb-12 shadow-sm italic">
              株式会社ユライフ（以下「当社」）は、お客様の個人情報の保護を重要な社会的責務と認識し、以下の方針に基づき個人情報を適切に取り扱います。
            </div>
          </PageReveal>

          {articles.map((article, i) => (
            <PageReveal key={i} delay={i * 0.05}>
              <article className="mb-12 last:mb-0 group">
                <h2 className="text-[17px] font-bold tracking-tight text-white mb-4 pb-3 border-b border-line flex items-center gap-3">
                  <div className="w-6 h-6 rounded-md bg-primary/20 text-primary-light flex items-center justify-center text-xs font-bold shrink-0">
                    {i + 1}
                  </div>
                  {article.title}
                </h2>
                <p className="text-sm text-muted leading-[1.9] mb-3">{article.desc}</p>
                {article.list && (
                  <ul className="flex flex-col gap-2.5 mt-4 ml-1">
                    {article.list.map((item, j) => (
                      <li key={j} className="text-sm text-muted leading-relaxed pl-6 relative">
                        <div className="absolute left-0 top-[9px] w-1.5 h-1.5 rounded-full bg-primary-light/60" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            </PageReveal>
          ))}

          {/* Contact Box */}
          <PageReveal delay={0.3}>
            <div className="mt-16 bg-dark-lighter border border-line rounded-2xl p-7 md:p-9 shadow-inner">
              <h3 className="text-base font-bold text-white mb-6 flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary-light" />
                個人情報に関するお問い合わせ窓口
              </h3>
              <dl className="grid grid-cols-1 sm:grid-cols-[auto,1fr] gap-x-8 gap-y-4">
                {[
                  ['会社名', '株式会社ユライフ'],
                  ['担当', '個人情報保護担当'],
                  ['メール', 'info@yuraifu.jp', 'mailto:info@yuraifu.jp'],
                  ['電話', '080-6998-9361（平日 9:00〜19:00）', 'tel:08069989361'],
                  ['所在地', '大阪府大阪市中央区安土町2-4-11 シティタワー大阪本町1422']
                ].map(([label, value, href]) => (
                  <div key={label} className="contents group">
                    <dt className="text-xs font-bold tracking-widest uppercase text-muted py-1">{label}</dt>
                    <dd className="text-sm text-white/90 leading-relaxed font-medium">
                      {href ? (
                        <a href={href} className="text-primary-light hover:underline underline-offset-4 decoration-primary-light/40 transition-colors">
                          {value}
                        </a>
                      ) : value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </PageReveal>

          <PageReveal delay={0.4}>
            <p className="mt-12 text-xs text-white/20 font-bold tracking-widest uppercase text-center border-t border-line pt-8">
              制定：2024年4月1日　最終改定：2026年4月1日
            </p>
          </PageReveal>
        </div>
      </section>
    </div>
  );
}
