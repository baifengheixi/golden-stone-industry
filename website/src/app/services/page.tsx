import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "บริการของเรา | Our Services",
  description: "บริการจัดหาอุปกรณ์ดับเพลิง โดรน ยานยนต์ หุ่นยนต์ และระบบต่อต้านโดรน | Firefighting, UAV, Automotive, Robotics, and Anti-Drone procurement services",
};

const services = [
  {
    id: "firefighting", titleTh: "งานดับเพลิงและงานกู้ภัย", titleEn: "Firefighting and Rescue Services",
    descTh: "บริษัทฯ ให้บริการจัดหารถดับเพลิง รถกู้ภัย อุปกรณ์ดับเพลิงและกู้ภัยครบวงจร ตั้งแต่การให้คำปรึกษา การจัดหา ไปจนถึงการบำรุงรักษา เพื่อตอบโจทย์หน่วยงานดับเพลิงและกู้ภัยทั่วประเทศ",
    descEn: "We provide comprehensive procurement services for fire trucks, rescue vehicles, and firefighting equipment — from consultation and procurement to maintenance — serving fire and rescue departments nationwide.",
    img: "/images/fire-truck-fleet.jpg",
    features: [
      { t: "รถดับเพลิง", e: "Fire Trucks", d: "รถดับเพลิงหลากหลายขนาดและสเปค ตอบโจทย์ทุกภารกิจ" },
      { t: "รถบรรทุกอัดอากาศและอุปกรณ์หายใจ", e: "Air Compressor Trucks & Breathing Apparatus", d: "อุปกรณ์ช่วยชีวิตและรถบรรทุกอัดอากาศสำหรับทีมกู้ภัย" },
      { t: "รถบันไดสูง ≥13 เมตร", e: "Ladder Trucks (≥13m)", d: "รถบันไดสูงตั้งแต่ 13 เมตรขึ้นไป สำหรับภารกิจช่วยเหลือ" },
      { t: "อุปกรณ์ดับเพลิงและกู้ภัย", e: "Firefighting & Rescue Equipment", d: "อุปกรณ์ครบชุดสำหรับปฏิบัติการดับเพลิงและกู้ภัย" },
      { t: "บริการบำรุงรักษา", e: "Maintenance Services", d: "บริการบำรุงรักษารถและอุปกรณ์ เพื่อความพร้อมในทุกภารกิจ" },
    ],
  },
  {
    id: "uav", titleTh: "โซลูชันด้านอากาศยานไร้คนขับ", titleEn: "UAV / Drone Solutions",
    descTh: "บริการจัดหาโดรนและอากาศยานไร้คนขับสำหรับภารกิจสำรวจ ตรวจสอบ ถ่ายภาพทางอากาศ และภารกิจเฉพาะทาง พร้อมอุปกรณ์เสริมและบริการหลังการขายที่ครบวงจร",
    descEn: "Comprehensive procurement of drones and UAVs for surveillance, inspection, aerial photography, and specialized missions, with full accessories and after-sales support.",
    img: "/images/drone-personnel.jpg",
    features: [
      { t: "โดรนสำรวจและตรวจสอบ", e: "Surveillance & Inspection Drones", d: "โดรนสำหรับงานสำรวจพื้นที่และตรวจสอบโครงสร้าง" },
      { t: "โดรนถ่ายภาพทางอากาศ", e: "Aerial Photography Drones", d: "โดรนคุณภาพสูงสำหรับถ่ายภาพและวิดีโอทางอากาศ" },
      { t: "โดรนภารกิจพิเศษ", e: "Specialized Mission Drones", d: "โดรนสำหรับภารกิจเฉพาะทาง เช่น การเกษตร การทำแผนที่" },
      { t: "อุปกรณ์เสริม", e: "Accessories & Adapters", d: "อุปกรณ์เสริมครบชุดสำหรับเพิ่มขีดความสามารถของโดรน" },
      { t: "บริการหลังการขาย", e: "After-Sales Support", d: "บริการซ่อมบำรุง ฝึกอบรม และให้คำปรึกษาหลังการขาย" },
    ],
  },
  {
    id: "automotive", titleTh: "ยานยนต์และอุปกรณ์ขนส่ง", titleEn: "Automotive Solutions",
    descTh: "จัดหารถยนต์สายงาน รถเฉพาะกิจ ยานพาหนะขนส่ง และรถดัดแปลงพิเศษ พร้อมบริการบำรุงรักษาครบวงจร เพื่อตอบโจทย์หน่วยงานราชการและเอกชน",
    descEn: "Procurement of official vehicles, special-purpose vehicles, transport units, and custom-modified vehicles, with comprehensive maintenance services.",
    img: "/images/vehicle-offroad.jpg",
    features: [
      { t: "รถยนต์สายงาน", e: "Official Vehicles", d: "รถยนต์สำหรับใช้งานสายงานของหน่วยงานราชการ" },
      { t: "รถเฉพาะกิจ", e: "Special-Purpose Vehicles", d: "รถยนต์ดัดแปลงเฉพาะกิจ ตามความต้องการของหน่วยงาน" },
      { t: "ยานพาหนะขนส่ง", e: "Transport Vehicles", d: "รถบรรทุกและยานพาหนะขนส่งหลากหลายประเภท" },
      { t: "รถดัดแปลงพิเศษ", e: "Custom-Modified Vehicles", d: "รถยนต์ดัดแปลงตามสเปคที่ลูกค้าต้องการ" },
      { t: "บริการบำรุงรักษา", e: "Maintenance Services", d: "บริการบำรุงรักษารถยนต์และยานพาหนะทุกประเภท" },
    ],
  },
  {
    id: "robotics", titleTh: "หุ่นยนต์และระบบอัตโนมัติ", titleEn: "Robotics & Automation",
    descTh: "จัดหาหุ่นยนต์สำรวจ หุ่นยนต์กู้ภัย หุ่นยนต์ปฏิบัติการทางยุทธวิธี และโซลูชันระบบอัตโนมัติเฉพาะทาง เพื่อเพิ่มขีดความสามารถในการปฏิบัติภารกิจ",
    descEn: "Procurement of surveillance robots, rescue robots, tactical operation robots, and custom automation solutions to enhance operational capabilities.",
    img: "/images/robot-laser-new.jpeg",
    features: [
      { t: "หุ่นยนต์สำรวจ", e: "Surveillance Robots", d: "หุ่นยนต์สำหรับงานสำรวจและเฝ้าระวังในพื้นที่เสี่ยง" },
      { t: "หุ่นยนต์กู้ภัย", e: "Rescue Robots", d: "หุ่นยนต์สำหรับภารกิจค้นหาและกู้ภัย" },
      { t: "หุ่นยนต์ปฏิบัติการทางยุทธวิธี", e: "Tactical Operation Robots", d: "หุ่นยนต์สำหรับปฏิบัติการทางยุทธวิธีและความมั่นคง" },
      { t: "ระบบอัตโนมัติเฉพาะทาง", e: "Custom Automation Solutions", d: "โซลูชันระบบอัตโนมัติออกแบบตามความต้องการ" },
      { t: "บริการฝึกอบรม", e: "Training & Consultation", d: "บริการฝึกอบรมการใช้งานและให้คำปรึกษาด้านหุ่นยนต์" },
    ],
  },
  {
    id: "anti-drone", titleTh: "ระบบต่อต้านอากาศยานไร้คนขับ", titleEn: "Anti-Drone Systems",
    descTh: "จัดหาระบบตรวจจับ ติดตามสัญญาณ และรบกวนสัญญาณโดรน เพื่อปกป้องพื้นที่สำคัญและสนับสนุนความมั่นคงแห่งชาติ ครอบคลุมทั้งระบบตรวจจับและระบบรบกวนสัญญาณ",
    descEn: "Procurement of drone detection, signal tracking, and jamming systems to protect critical areas and support national security.",
    img: "/images/anti-drone-station.jpg",
    features: [
      { t: "ระบบตรวจจับโดรน", e: "Drone Detection Systems", d: "ระบบตรวจจับโดรนที่เข้ามาในพื้นที่ควบคุม" },
      { t: "ระบบติดตามสัญญาณ", e: "Signal Tracking Systems", d: "ระบบติดตามและระบุตำแหน่งโดรนจากสัญญาณ" },
      { t: "ระบบรบกวนสัญญาณ", e: "Signal Jamming Systems", d: "ระบบรบกวนสัญญาณควบคุมและส่งภาพของโดรน" },
      { t: "ระบบปกป้องพื้นที่สำคัญ", e: "Critical Area Security", d: "โซลูชันครบวงจรสำหรับปกป้องพื้นที่สำคัญ" },
      { t: "สนับสนุนความมั่นคงแห่งชาติ", e: "National Security Support", d: "ระบบสนับสนุนภารกิจด้านความมั่นคงแห่งชาติ" },
    ],
  },
  {
    id: "mining", titleTh: "วิจัยและสำรวจเหมืองแร่", titleEn: "Mining Research & Exploration",
    descTh: "บริษัทฯ ให้บริการด้านการวิจัยและสำรวจเหมืองแร่หายากในประเทศไทย โดยเฉพาะแร่โพแทช พร้อมทั้งให้คำปรึกษาด้านธรณีวิทยา การประเมินแหล่งแร่ และการวางแผนพัฒนาเหมืองอย่างยั่งยืน",
    descEn: "We provide rare earth mineral research and mining exploration services in Thailand, specializing in potash deposits, with geological consulting, mineral resource assessment, and sustainable mine development planning.",
    img: "/images/potash-mining.jpg",
    features: [
      { t: "วิจัยและสำรวจแร่โพแทช", e: "Potash Exploration & Research", d: "สำรวจและวิจัยแหล่งแร่โพแทชในประเทศไทยด้วยเทคโนโลยีทันสมัย" },
      { t: "ประเมินแหล่งแร่หายาก", e: "Rare Earth Mineral Assessment", d: "ประเมินปริมาณและคุณภาพของแหล่งแร่หายากด้วยวิธีการทางวิทยาศาสตร์" },
      { t: "ให้คำปรึกษาธรณีวิทยา", e: "Geological Consulting", d: "ให้คำปรึกษาด้านธรณีวิทยาและการวางแผนสำรวจเหมืองแร่" },
      { t: "วางแผนพัฒนาเหมือง", e: "Mine Development Planning", d: "วางแผนพัฒนาเหมืองอย่างยั่งยืนตามมาตรฐานสากล" },
      { t: "วิเคราะห์ตัวอย่างแร่", e: "Mineral Sample Analysis", d: "บริการวิเคราะห์และทดสอบตัวอย่างแร่ในห้องปฏิบัติการ" },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navigation />
      <main>
        <section className="relative bg-navy-700 pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0"><img src="/images/hero-bg.jpg" alt="" className="w-full h-full object-cover opacity-20" /><div className="absolute inset-0 bg-gradient-to-r from-navy-700/90 to-navy-700/70" /></div>
          <div className="relative z-10 container-max text-center px-4">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-3">Our Services</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">บริการของเรา</h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">เราให้บริการครอบคลุม 6 กลุ่มหลัก ตั้งแต่การจัดหาอุปกรณ์ การให้คำปรึกษา ไปจนถึงการบำรุงรักษา</p>
          </div>
        </section>

        {services.map((service, index) => (
          <section key={service.id} id={service.id} className={`section-padding ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
            <div className="container-max">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={index % 2 !== 0 ? "lg:order-2" : ""}>
                  <div className="inline-block px-3 py-1 bg-gold-500/10 rounded-full mb-4">
                    <span className="text-gold-500 text-sm font-semibold">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-navy-700 mb-2">{service.titleTh}</h2>
                  <p className="text-gray-400 mb-6">{service.titleEn}</p>
                  <p className="text-gray-600 leading-relaxed mb-4">{service.descTh}</p>
                  <p className="text-gray-400 text-sm italic mb-8">{service.descEn}</p>
                  <div className="space-y-3">
                    {service.features.map((f, fi) => (
                      <div key={fi} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="w-8 h-8 bg-gold-500/10 rounded flex items-center justify-center shrink-0 mt-0.5">
                          <svg className="w-4 h-4 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        </div>
                        <div>
                          <p className="font-semibold text-navy-700 text-sm">{f.t}</p>
                          <p className="text-xs text-gray-400">{f.e}</p>
                          <p className="text-sm text-gray-600 mt-0.5">{f.d}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={index % 2 !== 0 ? "lg:order-1" : ""}>
                  <div className="relative rounded-xl overflow-hidden shadow-xl">
                    <img src={service.img} alt={service.titleTh} className="w-full h-80 lg:h-96 object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-700/10 to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        <section className="section-padding bg-navy-700 text-white text-center">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">สนใจบริการของเรา?</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">ติดต่อเราวันนี้เพื่อรับคำปรึกษาและข้อเสนอที่เหมาะสมกับความต้องการขององค์กรคุณ</p>
            <a href="/contact" className="btn-primary">ติดต่อเรา</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
