import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ServiceCard } from "@/components/ServiceCard";
import Link from "next/link";

const services = [
  {
    number: "01",
    titleTh: "งานดับเพลิงและงานกู้ภัย",
    titleEn: "Firefighting & Rescue",
    descriptionTh: "จัดหารถดับเพลิง รถกู้ภัย อุปกรณ์ดับเพลิงและกู้ภัยครบวงจร พร้อมบริการซ่อมบำรุง",
    descriptionEn: "Comprehensive firefighting vehicles and rescue equipment procurement with maintenance",
    features: ["รถดับเพลิง", "รถกู้ภัย", "อุปกรณ์ช่วยหายใจ", "รถบันไดสูง ≥13ม.", "บริการบำรุงรักษา"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11.1a3.001 3.001 0 00-2.136 5.021z" />
      </svg>
    ),
  },
  {
    number: "02",
    titleTh: "โซลูชันด้านอากาศยานไร้คนขับ",
    titleEn: "UAV / Drone Solutions",
    descriptionTh: "จัดหาโดรนสำหรับงานสำรวจ ตรวจการณ์ ถ่ายภาพทางอากาศ และภารกิจเฉพาะทาง พร้อมบริการหลังการขาย",
    descriptionEn: "Drones for surveillance, inspection, aerial photography and specialized missions with after-sales support",
    features: ["โดรนสำรวจ", "โดรนถ่ายภาพ", "โดรนภารกิจพิเศษ", "อุปกรณ์เสริม", "บริการหลังการขาย"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
  },
  {
    number: "03",
    titleTh: "ยานยนต์และอุปกรณ์ขนส่ง",
    titleEn: "Automotive Solutions",
    descriptionTh: "จัดหายานยนต์หลากหลายประเภทสำหรับหน่วยงานภาครัฐและเอกชน พร้อมบริการดูแลและซ่อมบำรุง",
    descriptionEn: "Wide range of vehicles for government and private sectors with maintenance services",
    features: ["รถยนต์ราชการ", "รถเฉพาะกิจ", "รถขนส่ง", "รถดัดแปลงพิเศษ", "บริการบำรุงรักษา"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 17h.01M16 17h.01M3 11l1.5-5A2 2 0 016.4 4h11.2a2 2 0 011.9 1.5L21 11M3 11h18M3 11v6a1 1 0 001 1h1a1 1 0 001-1v-1h12v1a1 1 0 001 1h1a1 1 0 001-1v-6" />
      </svg>
    ),
  },
  {
    number: "04",
    titleTh: "หุ่นยนต์และระบบอัตโนมัติ",
    titleEn: "Robotics & Automation",
    descriptionTh: "จัดหาหุ่นยนต์สำรวจ หุ่นยนต์กู้ภัย หุ่นยนต์ปฏิบัติการพิเศษ และโซลูชันระบบอัตโนมัติ",
    descriptionEn: "Surveillance, rescue, and tactical robots with custom automation solutions",
    features: ["หุ่นยนต์สำรวจ", "หุ่นยนต์กู้ภัย", "หุ่นยนต์ยุทธวิธี", "ระบบอัตโนมัติ", "ฝึกอบรม"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: "05",
    titleTh: "ระบบต่อต้านอากาศยานไร้คนขับ",
    titleEn: "Anti-Drone Systems",
    descriptionTh: "ระบบตรวจจับ ติดตามสัญญาณ และรบกวนสัญญาณโดรน เพื่อปกป้องพื้นที่สำคัญและความมั่นคง",
    descriptionEn: "Detection, tracking, and jamming systems for critical area protection and national security",
    features: ["ระบบตรวจจับ", "ติดตามสัญญาณ", "รบกวนสัญญาณ", "ปกป้องพื้นที่สำคัญ", "สนับสนุนความมั่นคง"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636a9 9 0 010 12.728m-2.829-2.829a5 5 0 000-7.07m-4.243 2.121a1.5 1.5 0 110 2.121M3 3l18 18" />
      </svg>
    ),
  },
];

const targetClients = [
  { labelTh: "หน่วยงานราชการ", labelEn: "Government Agencies" },
  { labelTh: "รัฐวิสาหกิจ", labelEn: "State Enterprises" },
  { labelTh: "องค์กรปกครองส่วนท้องถิ่น", labelEn: "Local Administration" },
  { labelTh: "ภาคเอกชน", labelEn: "Private Sector" },
];

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative min-h-screen flex items-center justify-center bg-navy-700 overflow-hidden">
          <div className="absolute inset-0">
            <img src="/images/hero-bg.jpg" alt="" className="w-full h-full object-cover opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-b from-navy-700/80 via-navy-700/60 to-navy-700/90" />
          </div>
          <div className="relative z-10 container-max text-center py-32 px-4">
            <div className="animate-fade-in">
              <div className="inline-block mb-6 px-4 py-2 border border-gold-500/30 rounded-full">
                <span className="text-gold-400 text-sm font-medium">ผู้ให้บริการจัดซื้อจัดจ้างที่น่าเชื่อถือ</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4" style={{ animationDelay: "100ms" }}>
              บริษัท โกลเด้น สโตน<br />อินดัสทรี จำกัด
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-2" style={{ animationDelay: "200ms" }}>Golden Stone Industry Co., Ltd.</p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10" style={{ animationDelay: "300ms" }}>
              ผู้ให้บริการจัดหาอุปกรณ์และโซลูชันด้านการจัดซื้อจัดจ้าง<br />สำหรับภาครัฐและเอกชน ด้วยความมุ่งมั่นในการให้บริการจากใจ
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4" style={{ animationDelay: "400ms" }}>
              <Link href="/services" className="btn-primary">บริการของเรา</Link>
              <Link href="/contact" className="btn-secondary">ติดต่อเรา</Link>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </section>

        {/* About Preview */}
        <section className="section-padding bg-white">
          <div className="container-max max-w-3xl mx-auto text-center">
            <p className="text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">About Us</p>
            <h2 className="heading-primary mb-6">ผู้ให้บริการจัดซื้อจัดจ้าง<br /><span className="text-gold-500">ที่น่าเชื่อถือ</span></h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              บริษัท โกลเด้น สโตน อินดัสทรี จำกัด ดำเนินธุรกิจด้านการจัดหาอุปกรณ์และโซลูชันสำหรับภาครัฐและเอกชน
              ตั้งแต่ปี 2561 ด้วยทุนจดทะเบียน 41 ล้านบาท เรามุ่งมั่นให้บริการที่มีคุณภาพด้วยหัวใจ
            </p>
            <Link href="/about" className="inline-flex items-center text-gold-500 font-semibold hover:text-gold-600 transition-colors">
              เรียนรู้เพิ่มเติมเกี่ยวกับเรา
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>

        {/* Services Overview */}
        <section className="section-padding bg-gray-50">
          <div className="container-max">
            <div className="text-center mb-14">
              <p className="text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">Our Services</p>
              <h2 className="heading-primary mb-4">บริการของเรา</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">เราให้บริการครอบคลุมทั้งการจัดหาอุปกรณ์ การให้คำปรึกษา และการบำรุงรักษา เพื่อตอบโจทย์ทุกความต้องการของลูกค้า</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((s, i) => <ServiceCard key={i} {...s} />)}
            </div>
          </div>
        </section>

        {/* Vision & Stats */}
        <section className="section-padding bg-navy-700 text-white">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-3">Vision & Mission</p>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">วิสัยทัศน์และพันธกิจ</h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-gold-500 pl-6">
                    <h3 className="text-xl font-semibold mb-2">วิสัยทัศน์</h3>
                    <p className="text-gray-300 leading-relaxed">มุ่งเป็นผู้ให้บริการจัดหาอุปกรณ์และโซลูชันด้านการจัดซื้อจัดจ้างที่น่าเชื่อถือ สำหรับภาครัฐและเอกชน ด้วยคุณภาพและความรับผิดชอบสูงสุด</p>
                  </div>
                  <div className="border-l-4 border-gold-500/50 pl-6">
                    <h3 className="text-xl font-semibold mb-2">พันธกิจ</h3>
                    <p className="text-gray-300 leading-relaxed">มุ่งมั่นในการให้บริการจากใจ เพื่อสร้างความพึงพอใจสูงสุดแก่ลูกค้า ด้วยผลิตภัณฑ์และบริการที่มีคุณภาพ รวดเร็ว และตรงต่อความต้องการ</p>
                  </div>
                </div>
                <Link href="/about" className="inline-flex items-center mt-8 text-gold-400 font-semibold hover:text-gold-300 transition-colors">
                  เรียนรู้เพิ่มเติม
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "6+", label: "ปีประสบการณ์" },
                  { value: "41M", label: "ทุนจดทะเบียน (บาท)" },
                  { value: "5", label: "กลุ่มบริการหลัก" },
                  { value: "100+", label: "ลูกค้าที่ไว้วางใจ" },
                ].map((s, i) => (
                  <div key={i} className="bg-white/5 rounded-lg p-6 text-center border border-white/10">
                    <div className="text-4xl font-bold text-gold-400 mb-2">{s.value}</div>
                    <div className="text-sm text-gray-300">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Target Clients */}
        <section className="section-padding bg-white">
          <div className="container-max">
            <div className="text-center mb-14">
              <p className="text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">Our Clients</p>
              <h2 className="heading-primary mb-4">กลุ่มลูกค้าเป้าหมาย</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">เราให้บริการอย่างครอบคลุมสำหรับทั้งภาครัฐและเอกชน</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {targetClients.map((c, i) => (
                <div key={i} className="text-center p-8 rounded-lg border border-gray-200 hover:border-gold-500 hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center text-navy-700 font-bold text-2xl">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-semibold text-navy-700 mb-1">{c.labelTh}</h3>
                  <p className="text-sm text-gray-500">{c.labelEn}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-gradient-to-br from-navy-700 to-navy-800 text-white text-center">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">พร้อมที่จะร่วมงานกับเรา?</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">ติดต่อเราวันนี้เพื่อรับคำปรึกษาและข้อเสนอที่เหมาะสมสำหรับองค์กรของคุณ</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link href="/contact" className="btn-primary">ติดต่อเรา</Link>
              <a href="tel:+66632125055" className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (+66) 063-212-5055
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto text-sm">
              <div className="flex items-center justify-center gap-3"><span className="text-gray-300">goldenstoneindustry@gmail.com</span></div>
              <div className="flex items-center justify-center gap-3"><span className="text-gray-300">จันทร์-ศุกร์ 08:30-17:30</span></div>
              <div className="flex items-center justify-center gap-3"><span className="text-gray-300">นนทบุรี 11110</span></div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
