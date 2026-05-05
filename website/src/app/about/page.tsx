import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "เกี่ยวกับเรา | About Us",
  description: "เรียนรู้เกี่ยวกับบริษัท โกลเด้น สโตน อินดัสทรี จำกัด - ประวัติ วิสัยทัศน์ พันธกิจ ค่านิยม | Learn about Golden Stone Industry Co., Ltd.",
};

const missions = [
  { number: "01", titleTh: "บริการจากใจ", titleEn: "Service from the Heart", descTh: "มุ่งมั่นในการให้บริการด้วยความจริงใจ เพื่อสร้างความพึงพอใจสูงสุดแก่ลูกค้า ด้วยผลิตภัณฑ์และบริการที่มีคุณภาพ", descEn: "Committed to providing sincere service to maximize customer satisfaction with quality products and services." },
  { number: "02", titleTh: "คุณภาพและความรับผิดชอบ", titleEn: "Quality & Responsibility", descTh: "มุ่งมั่นให้ผลิตภัณฑ์และบริการมีคุณภาพสูงสุด พร้อมรับผิดชอบต่อสิ่งที่ส่งมอบ", descEn: "Dedicated to delivering the highest quality products and services, with full accountability." },
  { number: "03", titleTh: "รวดเร็วและแม่นยำ", titleEn: "Speed & Accuracy", descTh: "ให้บริการที่รวดเร็ว ตรงต่อเวลา และแม่นยำตามความต้องการของลูกค้า", descEn: "Providing fast, punctual, and accurate services that meet customer requirements precisely." },
  { number: "04", titleTh: "นวัตกรรมและการพัฒนา", titleEn: "Innovation & Development", descTh: "มุ่งพัฒนาและปรับปรุงอย่างต่อเนื่อง เพื่อนำเสนอโซลูชันที่ทันสมัยและตอบโจทย์การเปลี่ยนแปลง", descEn: "Continuously developing and improving to present modern solutions that address evolving needs." },
];

const values = [
  "ความซื่อสัตย์ / Integrity", "ความเป็นเลิศ / Excellence", "ความร่วมมือ / Collaboration",
  "ความรับผิดชอบ / Accountability", "นวัตกรรม / Innovation", "ความยั่งยืน / Sustainability",
];

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative bg-navy-700 pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0">
            <img src="/images/hero-bg.jpg" alt="" className="w-full h-full object-cover opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-700/90 to-navy-700/70" />
          </div>
          <div className="relative z-10 container-max text-center px-4">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-3">About Us</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">เกี่ยวกับเรา</h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">ผู้ให้บริการจัดหาอุปกรณ์และโซลูชันด้านการจัดซื้อจัดจ้าง สำหรับภาครัฐและเอกชน</p>
          </div>
        </section>

        {/* Company History */}
        <section className="section-padding bg-white">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">Our Story</p>
                <h2 className="heading-primary mb-6">ประวัติบริษัท</h2>
                <p className="text-gray-600 leading-relaxed mb-4">บริษัท โกลเด้น สโตน อินดัสทรี จำกัด ก่อตั้งขึ้นเมื่อปี พ.ศ. 2561 ด้วยวิสัยทัศน์ที่จะเป็นผู้ให้บริการจัดหาอุปกรณ์และโซลูชันด้านการจัดซื้อจัดจ้างที่น่าเชื่อถือ สำหรับภาครัฐและเอกชน</p>
                <p className="text-gray-600 leading-relaxed mb-4">ด้วยทุนจดทะเบียน 41,000,000 บาท บริษัทฯ ได้สร้างความน่าเชื่อถือในวงการจัดซื้อจัดจ้าง ผ่านการนำเสนอผลิตภัณฑ์และบริการที่มีคุณภาพ ครอบคลุมตั้งแต่รถดับเพลิง โดรน ยานยนต์ หุ่นยนต์ ไปจนถึงระบบต่อต้านอากาศยานไร้คนขับ</p>
                <p className="text-gray-600 leading-relaxed">เรามุ่งมั่นในหลักการ &ldquo;บริการจากใจ&rdquo; เพื่อสร้างความพึงพอใจสูงสุดแก่ลูกค้าทุกภาคส่วน</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "2561", label: "ปีที่ก่อตั้ง", sub: "Founded" },
                  { value: "41M", label: "ทุนจดทะเบียน (บาท)", sub: "Registered Capital" },
                  { value: "5", label: "กลุ่มบริการหลัก", sub: "Service Categories" },
                  { value: "6+", label: "ปีประสบการณ์", sub: "Years Experience" },
                ].map((s, i) => (
                  <div key={i} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <div className="text-3xl font-bold text-gold-500 mb-1">{s.value}</div>
                    <div className="text-sm text-gray-500">{s.label}</div>
                    <div className="text-xs text-gray-400">{s.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CEO Message */}
        <section className="section-padding bg-gray-50">
          <div className="container-max max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 border-l-4 border-gold-500">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="shrink-0">
                  <img src="/images/ceo-portrait.jpg" alt="CEO" className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover object-top border-4 border-gold-500/20" />
                </div>
                <div>
              <svg className="w-12 h-12 text-gold-500/30 mb-6" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.706 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.706 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
              <blockquote className="text-xl md:text-2xl text-navy-700 leading-relaxed mb-6">&ldquo;เราเชื่อมั่นว่า 'การทำงานด้วยใจ' คือรากฐานของการให้บริการที่ดี ทุกขั้นตอนต้องดำเนินด้วยความรับผิดชอบและความตั้งใจจริง เพื่อสร้างความไว้วางใจจากลูกค้าและพันธมิตรในระยะยาว&rdquo;</blockquote>
              <p className="text-gray-500 italic mb-1">&ldquo;We strongly believe that 'service from the heart' is the foundation of exceptional service.&rdquo;</p>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="font-semibold text-navy-700">นายเกรียงไกร ชื่อธนโชติไพศาล</p>
                <p className="text-sm text-gray-500">Kriangkrai Chuethanachotpaisan</p>
                <p className="text-sm text-gold-500">ประธานกรรมการผู้จัดการ / Chief Executive Officer</p>
              </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="section-padding bg-white">
          <div className="container-max">
            <div className="text-center mb-14">
              <p className="text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">Vision & Mission</p>
              <h2 className="heading-primary">วิสัยทัศน์และพันธกิจ</h2>
            </div>
            <div className="max-w-3xl mx-auto mb-16">
              <div className="bg-navy-700 rounded-xl p-8 md:p-10 text-center text-white">
                <h3 className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-4">Vision / วิสัยทัศน์</h3>
                <p className="text-xl md:text-2xl leading-relaxed mb-3">มุ่งเป็นผู้ให้บริการจัดหาอุปกรณ์และโซลูชันด้านการจัดซื้อจัดจ้างที่น่าเชื่อถือ สำหรับภาครัฐและเอกชน ด้วยคุณภาพและความรับผิดชอบสูงสุด</p>
                <p className="text-gray-400 text-sm italic">To be a trusted procurement service provider with the highest quality and responsibility.</p>
              </div>
            </div>
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-semibold text-navy-700">พันธกิจ</h3>
              <p className="text-gray-500 text-sm">Mission</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {missions.map((m) => (
                <div key={m.number} className="bg-white rounded-lg p-6 border border-gray-200 hover:border-gold-500 hover:shadow-md transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gold-500/10 rounded-lg flex items-center justify-center text-gold-500 font-bold text-lg shrink-0">{m.number}</div>
                    <div>
                      <h4 className="font-semibold text-navy-700 mb-1">{m.titleTh}</h4>
                      <p className="text-sm text-gray-400 mb-3">{m.titleEn}</p>
                      <p className="text-sm text-gray-600 leading-relaxed">{m.descTh}</p>
                      <p className="text-xs text-gray-400 mt-2 italic">{m.descEn}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding bg-gray-50">
          <div className="container-max">
            <div className="text-center mb-14">
              <p className="text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">Our Values</p>
              <h2 className="heading-primary">ค่านิยมของเรา</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {values.map((v, i) => (
                <div key={i} className="text-center p-6 bg-white rounded-lg border border-gray-200 hover:border-gold-500 hover:shadow-md transition-all duration-300">
                  <div className="w-14 h-14 mx-auto mb-4 bg-navy-700 rounded-full flex items-center justify-center">
                    <span className="text-gold-400 font-bold text-lg">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="font-semibold text-navy-700">{v}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location */}
        <section className="section-padding bg-white">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">Location</p>
                <h2 className="text-2xl md:text-3xl font-semibold text-navy-700 mb-6">ที่ตั้งบริษัท</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-gold-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    <div>
                      <p className="font-semibold text-navy-700">4/2 หมู่ 6 ถนนบางกรวย-ไทรน้อย<br />ตำบลบางบัวทอง อำเภอบางบัวทอง<br />จังหวัดนนทบุรี 11110</p>
                      <p className="text-sm text-gray-500 mt-1">4/2 Moo 6, Bang Kruai-Sai Noi Road,<br />Bang Bua Thong, Nonthaburi 11110</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3"><svg className="w-6 h-6 text-gold-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg><span className="text-gray-600">(+66) 063-212-5055</span></div>
                  <div className="flex items-center gap-3"><svg className="w-6 h-6 text-gold-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg><span className="text-gray-600">goldenstoneindustry@gmail.com</span></div>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg h-80">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874!2d100.4044288!3d13.8873032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e28f50b6cd9395%3A0xd83dc46aaabf8533!2z4LmC4LiB4Lil4LmA4LiU4LmJ4LiZIOC4quC5guC4leC4mSDguK3guLTguJnguJTguLHguKrguJfguKPguLU=!5e0!3m2!1sth!2sth!4v2" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Golden Stone Industry Location" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
