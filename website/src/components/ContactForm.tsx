"use client";

import { useState, type FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "กรุณากรอกชื่อ-นามสกุล / Please enter your name";
    }
    if (!formData.email.trim()) {
      newErrors.email = "กรุณากรอกอีเมล / Please enter your email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "รูปแบบอีเมลไม่ถูกต้อง / Invalid email format";
    }
    if (formData.phone && !/^[+\d][\d\s\-()]{5,}$/.test(formData.phone)) {
      newErrors.phone = "รูปแบบเบอร์โทรไม่ถูกต้อง / Invalid phone format";
    }
    if (!formData.message.trim()) {
      newErrors.message = "กรุณากรอกข้อความ / Please enter your message";
    } else if (formData.message.trim().length < 10) {
      newErrors.message =
        "ข้อความต้องมีอย่างน้อย 10 ตัวอักษร / Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");

    try {
      // Simulate API call — replace with actual endpoint later
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Contact form submission:", formData);
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (
    field: keyof FormData,
    value: string
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error on change
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          ชื่อ-นามสกุล / Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
          className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition-colors focus:border-navy focus:ring-1 focus:ring-navy ${
            errors.name ? "border-red-400" : "border-gray-300"
          }`}
          placeholder="กรุณากรอกชื่อ-นามสกุล"
        />
        {errors.name && (
          <p className="mt-1 text-xs text-red-500">{errors.name}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          อีเมล / Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition-colors focus:border-navy focus:ring-1 focus:ring-navy ${
            errors.email ? "border-red-400" : "border-gray-300"
          }`}
          placeholder="example@email.com"
        />
        {errors.email && (
          <p className="mt-1 text-xs text-red-500">{errors.email}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label
          htmlFor="phone"
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          เบอร์โทรศัพท์ / Phone
        </label>
        <input
          type="tel"
          id="phone"
          value={formData.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
          className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition-colors focus:border-navy focus:ring-1 focus:ring-navy ${
            errors.phone ? "border-red-400" : "border-gray-300"
          }`}
          placeholder="0XX-XXX-XXXX"
        />
        {errors.phone && (
          <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          ข้อความ / Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          value={formData.message}
          onChange={(e) => handleChange("message", e.target.value)}
          className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition-colors focus:border-navy focus:ring-1 focus:ring-navy ${
            errors.message ? "border-red-400" : "border-gray-300"
          }`}
          placeholder="กรุณากรอกข้อความ..."
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-500">{errors.message}</p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-gold-light disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting"
          ? "กำลังส่ง / Sending..."
          : "ส่งข้อความ / Send Message"}
      </button>

      {/* Success Message */}
      {status === "success" && (
        <div className="rounded-lg border border-green-200 bg-green-50 p-4 text-sm text-green-800">
          <p className="font-medium">
            ส่งข้อความสำเร็จ / Message Sent Successfully
          </p>
          <p className="mt-1 text-green-600">
            ขอบคุณที่ติดต่อเรา เราจะตอบกลับโดยเร็วที่สุด
            <br />
            Thank you for contacting us. We will get back to you shortly.
          </p>
        </div>
      )}

      {/* Error Message */}
      {status === "error" && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800">
          <p className="font-medium">
            เกิดข้อผิดพลาด / An Error Occurred
          </p>
          <p className="mt-1 text-red-600">
            กรุณาลองใหม่อีกครั้ง หรือติดต่อเราทางอีเมล
            <br />
            Please try again or contact us via email.
          </p>
        </div>
      )}
    </form>
  );
}
