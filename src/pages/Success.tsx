import { CheckCircle2, House, Briefcase, Newspaper, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Success() {
  return (
    <main className="flex-1 flex items-center justify-center py-24 px-6 relative overflow-hidden min-h-[90vh]">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-dark" />
        <div className="absolute inset-0 opacity-[0.04] bg-noise" />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 bg-dark-lighter border border-line rounded-[24px] p-10 md:p-14 max-w-[520px] w-full text-center shadow-2xl shadow-black/40"
      >
        <div className="w-[68px] h-[68px] rounded-[18px] bg-primary/15 text-primary-light flex items-center justify-center text-[30px] mx-auto mb-8 shadow-sm">
          <CheckCircle2 strokeWidth={2.5} className="w-9 h-9" />
        </div>
        
        <h1 className="text-[clamp(22px,4vw,30px)] font-bold tracking-tight leading-tight mb-4">
          お問い合わせ<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#4a80ff] to-[#00d4ff]">ありがとうございます</span>
        </h1>
        
        <p className="text-[14px] text-muted leading-[1.85] mb-8 italic">
          内容を確認し、担当よりご連絡いたします。<br />
          通常、当日〜1営業日以内にご返信します。
        </p>

        <div className="bg-dark-lightest border border-line rounded-xl p-5 mb-8 text-left text-[13px] text-muted leading-relaxed flex gap-3 shadow-inner">
          <CheckCircle2 className="w-5 h-5 text-primary-light shrink-0 mt-0.5" />
          <span>自動返信メールが届かない場合は、迷惑メールフォルダをご確認ください。追加で共有したい資料・URLがある場合は、返信メールにそのままご送付いただけます。</span>
        </div>

        <div className="bg-dark-lightest border border-line rounded-xl p-6 mb-10 text-left shadow-sm">
          <p className="text-[10px] font-bold tracking-widest uppercase text-muted mb-4 leading-none">この後の流れ</p>
          <ul className="flex flex-col gap-3.5">
            {[
              '担当者がお問い合わせ内容を確認します',
              '当日〜1営業日以内にメールまたは電話でご連絡します',
              '必要に応じてオンラインでのヒアリング日程を調整します'
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-4 text-sm text-white/90">
                <div className="w-[22px] h-[22px] rounded-md bg-primary/20 text-primary-light flex items-center justify-center text-[11px] font-bold shrink-0 mt-0.5 shadow-sm">
                  {i + 1}
                </div>
                <span className="leading-snug">{text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-[1px] bg-line" />
          <span className="text-[12px] text-muted font-medium shrink-0">お急ぎの場合はお電話ください</span>
          <div className="flex-1 h-[1px] bg-line" />
        </div>

        <a 
          href="tel:08069989361" 
          className="flex items-center justify-center gap-3 w-full p-4 rounded-xl bg-primary text-white font-bold shadow-xl shadow-primary/20 hover:opacity-90 hover:-translate-y-1 transition-all mb-8 group"
        >
          <Phone className="w-5 h-5 group-hover:animate-bounce" />
          <div className="text-left">
            <span className="text-lg block leading-none">080-6998-9361</span>
            <span className="text-[10px] font-medium opacity-80 block mt-1 tracking-wider uppercase">代表直通 / 平日 9:00〜19:00</span>
          </div>
        </a>

        <div className="flex flex-wrap justify-center gap-3 mt-4">
          <Link to="/" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-line text-muted text-[13px] font-bold hover:text-white hover:border-white/20 transition-all">
            <House className="w-4 h-4" /> TOPへ戻る
          </Link>
          <Link to="/services" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-line text-muted text-[13px] font-bold hover:text-white hover:border-white/20 transition-all">
            <Briefcase className="w-4 h-4" /> サービスを見る
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
