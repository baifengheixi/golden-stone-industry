import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "ติดต่อเรา | Contact Us",
  description: "ติดต่อบริษัท โกลเด้น สโตน อินดัสทรี จำกัด ที่ตั้ง นนทบุรี 11110 | Contact Golden Stone Industry Co., Ltd.",
};

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main>
        <section className="relative bg-navy-700 pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0"><img src="/images/hero-bg.jpg" alt="" className="w-full h-full object-cover opacity-20" /><div className="absolute inset-0 bg-gradient-to-r from-navy-700/90 to-navy-700/70" /></div>
          <div className="relative z-10 container-max text-center px-4">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-3">Contact Us</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">ติดต่อเรา</h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">เรายินดีให้คำปรึกษาและข้อมูลเพิ่มเติม ติดต่อเราได้ตามช่องทางด้านล่าง</p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <p className="text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">Get In Touch</p>
                <h2 className="heading-primary mb-8">ข้อมูลติดต่อ</h2>
                <div className="space-y-6">
                  {[
                    { icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z", title: "ที่อยู่", content: "4/2 หมู่ 6 ถนนบางกรวย-ไทรน้อย\nตำบลบางบัวทอง อำเภอบางบัวทอง\nจังหวัดนนทบุรี 11110", sub: "4/2 Moo 6, Bang Kruai-Sai Noi Road,\nBang Bua Thong, Nonthaburi 11110" },
                    { icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z", title: "โทรศัพท์", content: "(+66) 063-212-5055", link: "tel:+66632125055" },
                    { icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", title: "อีเมล", content: "goldenstoneindustry@gmail.com", link: "mailto:goldenstoneindustry@gmail.com" },
                    { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", title: "เวลาทำการ", content: "จันทร์ - ศุกร์ 08:30 - 17:30 น.", sub: "Monday - Friday 08:30 - 17:30" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gold-500/10 rounded-lg flex items-center justify-center shrink-0">
                        <svg className="w-6 h-6 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          {item.icon.includes("M") ? item.icon.split(" M").map((p, pi) => <path key={pi} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={pi === 0 ? p : "M" + p} />) : null}
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-navy-700 mb-1">{item.title}</h3>
                        {item.link ? (
                          <a href={item.link} className="text-gray-600 hover:text-gold-500 transition-colors">{item.content}</a>
                        ) : (
                          <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">{item.content}</p>
                        )}
                        {item.sub && <p className="text-gray-400 text-xs mt-1 whitespace-pre-line">{item.sub}</p>}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 rounded-xl overflow-hidden shadow-lg h-64">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.929!2d100.416!3d13.883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29d7c0b7b8b8b%3A0x0!2z4Lin4Lix4LiU4Lil4Liy4LiU4LmD4Liq4Li44LiH!5e0!3m2!1sth!2sth!4v1" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Golden Stone Industry Location" />
                </div>
              </div>
              <div>
                <p className="text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">Send Message</p>
                <h2 className="heading-primary mb-8">ส่งข้อความถึงเรา</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-navy-700 text-white text-center">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">ต้องการข้อมูลเพิ่มเติม?</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">ทีมงานของเราพร้อมให้คำปรึกษาและแนะนำผลิตภัณฑ์ที่เหมาะสมกับความต้องการของคุณ</p>
            <a href="tel:+66632125055" className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 transition-colors text-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              (+66) 063-212-5055
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
