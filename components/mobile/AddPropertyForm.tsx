"use client";
import Footer from "@/components/mobile/Footer";
import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Home,
  Layers,
  Store,
  Briefcase,
  MoreHorizontal,
  ChevronDown,
  Banknote,
  UploadCloud,
  Image as ImageIcon,
  Info,
} from "lucide-react";

export default function AddPropertyForm() {
  // حفظ جميع بيانات الفورم الموحدة
  const [formData, setFormData] = useState({
    propertyType: "شقة",
    governorate: "",
    city: "",
    district: "",
    area: "",
    price: "",
    rooms: "1",
    bathrooms: "1",
    floor: "",
    description: "",
    acceptTerms: false,
  });

  const propertyTypes = [
    { id: "شقة", name: "شقة", icon: Building2 },
    { id: "فيلا", name: "فيلا", icon: Home },
    { id: "أرض", name: "أرض", icon: Layers },
    { id: "محل", name: "محل", icon: Store },
    { id: "مكتب", name: "مكتب", icon: Briefcase },
    { id: "آخر", name: "آخر", icon: MoreHorizontal },
  ];

  // دالة الإرسال النهائي للباكند
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.acceptTerms) {
      alert("الرجاء الموافقة على الشروط والأحكام أولاً");
      return;
    }
    alert("تم إرسال بيانات العقار بنجاح! جاهز للربط مع الباكند 🚀");
    console.log("Data to backend:", formData);
  };

  return (
    <div
      className="max-w-xl mx-auto bg-white min-h-screen flex flex-col justify-between"
      dir="rtl"
    >
      {/* 1. الهيدر العلوي الأبيض مع سهم الرجوع الأزرق */}
      <div className="flex items-center justify-between p-4 border-b border-gray-100 sticky top-0 bg-white z-50">
        <Link
          href="/"
          className="p-1 hover:bg-gray-50 rounded-full transition-colors"
        >
          <ArrowRight className="w-6 h-6 text-[#0091dc]" />
        </Link>
        <h1 className="text-lg font-bold text-[#0091dc] text-center flex-grow pl-6">
          إضافة عقار جديد
        </h1>
      </div>

      {/* نموذج الإدخال الانسيابي (Scroll Form) */}
      <form onSubmit={handleSubmit} className="p-5 space-y-10 flex-grow">
        {/* ==================== الخطوة 1: الموقع ونوع العقار ==================== */}
        <div className="space-y-5">
          <span className="text-xs font-semibold text-amber-500">
            الخطوة 1 من 3{" "}
          </span>
          <div className="flex justify-between items-baseline">
            <h2 className="text-base font-bold text-gray-900">
              الموقع و نوع العقار
            </h2>

            <span className="text-[#0091dc] font-bold mr-1">25%</span>
          </div>
          <div className="w-full bg-gray-150 h-1.5 rounded-full overflow-hidden">
            <div className="bg-[#0091dc] h-full w-[25%] rounded-full"></div>
          </div>

          {/* اختيار نوع العقار */}
          <div>
            <label className="block text-xs font-bold text-gray-500 mb-2">
              اختر نوع العقار
            </label>
            <div className="grid grid-cols-3 gap-3">
              {propertyTypes.map((type) => {
                const IconComponent = type.icon;
                const isSelected = formData.propertyType === type.id;
                return (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() =>
                      setFormData({ ...formData, propertyType: type.id })
                    }
                    className={`flex flex-col items-center justify-center p-3 rounded-xl border transition-all ${
                      isSelected
                        ? "border-[#0091dc] bg-blue-50/20 text-[#0091dc]"
                        : "border-gray-200 bg-white text-gray-600"
                    }`}
                  >
                    <IconComponent
                      className={`w-5 h-5 mb-1.5 ${isSelected ? "text-[#0091dc]" : "text-gray-400"}`}
                    />
                    <span className="text-xs font-medium">{type.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
          {/* حقول المواقع التتابعية */}
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">
                المحافظة
              </label>
              <div className="relative">
                <select
                  value={formData.governorate}
                  onChange={(e) =>
                    setFormData({ ...formData, governorate: e.target.value })
                  }
                  className="text-right w-full p-3 bg-white border border-gray-200 rounded-xl appearance-none focus:outline-none focus:border-[#0091dc] text-sm text-gray-600 text-center font-medium"
                >
                  <option value="">اختر المحافظة</option>
                  <option value="حمص">حمص</option>
                  <option value="دمشق">دمشق</option>
                  <option value="اللاذقية">اللاذقية</option>
                  <option value="حلب">حلب</option>
                </select>
                <ChevronDown className="w-4 h-4 text-[#0091dc] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">
                المدينة / المنطقة الكبرى
              </label>
              <div className="relative">
                <select
                  value={formData.city}
                  onChange={(e) =>
                    setFormData({ ...formData, city: e.target.value })
                  }
                  className="text-right w-full p-3 bg-white border border-gray-200 rounded-xl appearance-none focus:outline-none focus:border-[#0091dc] text-sm text-gray-600 text-center font-medium"
                >
                  <option value="">اختر المدينة</option>
                  <option value="حمص المدينة">حمص المدينة</option>
                  <option value="المشرفة">المشرفة</option>
                </select>
                <ChevronDown className="w-4 h-4 text-[#0091dc] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">
                الحي / المنطقة
              </label>
              <div className="relative">
                <select
                  value={formData.district}
                  onChange={(e) =>
                    setFormData({ ...formData, district: e.target.value })
                  }
                  className="text-right w-full p-3 bg-white border border-gray-200 rounded-xl appearance-none focus:outline-none focus:border-[#0091dc] text-sm text-gray-600 text-center font-medium"
                >
                  <option value="">اختر الحي</option>
                  <option value="الوعر">الوعر</option>
                  <option value="الميدان">الميدان</option>
                </select>
                <ChevronDown className="w-4 h-4 text-[#0091dc] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* ==================== الخطوة 2: تفاصيل العقار ==================== */}
        <div className="space-y-5 pt-4">
          <span className="text-xs font-semibold text-amber-500">
            الخطوة 2 من 3{" "}
          </span>
          <div className="flex justify-between items-baseline">
            <h2 className="text-base font-bold text-gray-900">تفاصيل العقار</h2>

            <span className="text-[#0091dc] font-bold mr-1">50%</span>
          </div>
          <div className="w-full bg-gray-150 h-1.5 rounded-full overflow-hidden">
            <div className="bg-[#0091dc] h-full w-[50%] rounded-full"></div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">
                المساحة (متر مربع)
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="مثلا: 120 م²"
                  value={formData.area}
                  onChange={(e) =>
                    setFormData({ ...formData, area: e.target.value })
                  }
                  className="text-right w-full p-3 bg-white border border-gray-400 rounded-xl focus:outline-none focus:border-[#0091dc] text-sm text-center placeholder-gray-300 font-medium"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">
                السعر (ل.س)
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="إجمالي السعر"
                  value={formData.price}
                  onChange={(e) =>
                    setFormData({ ...formData, price: e.target.value })
                  }
                  className="text-right w-full p-3 bg-white border border-gray-500 rounded-xl focus:outline-none focus:border-[#0091dc] text-sm text-center placeholder-gray-300 font-medium"
                />
                <Banknote className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  عدد الغرف
                </label>
                <div className="relative">
                  <select
                    value={formData.rooms}
                    onChange={(e) =>
                      setFormData({ ...formData, rooms: e.target.value })
                    }
                    className="text-right w-full p-3 bg-white border border-gray-200 rounded-xl appearance-none focus:outline-none focus:border-[#0091dc] text-sm text-center font-medium text-gray-600"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                  <ChevronDown className="text-right w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  عدد الحمامات
                </label>
                <div className="relative">
                  <select
                    value={formData.bathrooms}
                    onChange={(e) =>
                      setFormData({ ...formData, bathrooms: e.target.value })
                    }
                    className="text-right w-full p-3 bg-white border border-gray-200 rounded-xl appearance-none focus:outline-none focus:border-[#0091dc] text-sm text-center font-medium text-gray-600"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">
                رقم الطابق
              </label>
              <input
                type="text"
                placeholder="مثلاً: الطابق الثالث"
                value={formData.floor}
                onChange={(e) =>
                  setFormData({ ...formData, floor: e.target.value })
                }
                className="text-right w-full p-3 bg-white border border-gray-500 rounded-xl focus:outline-none focus:border-[#0091dc] text-sm text-center placeholder-gray-300 font-medium"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">
                وصف العقار
              </label>
              <textarea
                rows={4}
                placeholder="اكتب وصفاً تفصيلياً للعقار، المميزات، والخدمات القريبة..."
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#0091dc] text-sm text-right placeholder-gray-300 font-medium resize-none"
              />
            </div>
          </div>
        </div>

        {/* ==================== الخطوة 3: صور العقار والموافقة ==================== */}
        <div className="space-y-5 pt-4">
          <span className="text-xs font-semibold text-amber-500">
            الخطوة 3 من 3{" "}
          </span>
          <div className="flex justify-between items-baseline">
            <h2 className="text-base font-bold text-gray-900">صور العقار</h2>

            <span className="text-[#0091dc] font-bold mr-1">75%</span>
          </div>
          <div className="w-full bg-gray-150 h-1.5 rounded-full overflow-hidden">
            <div className="bg-[#0091dc] h-full w-[75%] rounded-full"></div>
          </div>

          <div className="border-2 border-dashed border-blue-200 bg-blue-50/10 rounded-2xl p-6 flex flex-col items-center justify-center cursor-pointer text-center">
            <UploadCloud className="w-8 h-8 text-[#0091dc] mb-2" />
            <p className="text-sm font-bold text-gray-800">رفع الصور</p>
            <p className="text-[11px] text-gray-400 mb-3">
              يمكنك رفع حتى 10 صور (JPG, PNG)
            </p>
            <button
              type="button"
              className="bg-[#0091dc] text-white text-xs font-bold px-5 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              اختر الصور
            </button>
          </div>

          {/* معرض الصور المرفوعة التخيلي لتطابق الصورة */}
          <div className="grid grid-cols-3 gap-2">
            <div className="aspect-square bg-gray-100 rounded-xl relative overflow-hidden border border-gray-200">
              <div className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-[9px] font-bold cursor-pointer">
                ✕
              </div>
              <div className="w-full h-full flex items-center justify-center text-[10px] text-gray-400">
                صورة 1
              </div>
            </div>
            <div className="aspect-square bg-gray-100 rounded-xl relative overflow-hidden border border-gray-200">
              <div className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-[9px] font-bold cursor-pointer">
                ✕
              </div>
              <div className="w-full h-full flex items-center justify-center text-[10px] text-gray-400">
                صورة 2
              </div>
            </div>
            <div className="aspect-square border border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center text-gray-400 cursor-pointer">
              <span className="text-lg">+</span>
              <span className="text-[9px]">إضافة</span>
            </div>
          </div>

          {/* صندوق التنبيه الأزرق */}
          <div className="bg-blue-50/40 border border-blue-100 rounded-xl p-3 flex items-start gap-2.5 text-xs text-blue-800 font-medium">
            <Info className="w-4 h-4 text-[#0091dc] shrink-0 mt-0.5" />
            <p>
              سيتم مراجعة طلبك من قبل فريق الإدارة قبل نشره للعامة. تستغرق
              العملية عادةً أقل من 24 ساعة.
            </p>
          </div>

          {/* التشييك والموافقة */}
          <div className="flex items-center gap-2.5 pt-2">
            <input
              id="terms"
              type="checkbox"
              checked={formData.acceptTerms}
              onChange={(e) =>
                setFormData({ ...formData, acceptTerms: e.target.checked })
              }
              className="w-4 h-4 text-[#0091dc] border-gray-300 rounded focus:ring-[#0091dc] cursor-pointer"
            />
            <label
              htmlFor="terms"
              className="text-xs font-bold text-gray-600 cursor-pointer select-none"
            >
              أوافق على{" "}
              <span className="text-amber-500 underline">الشروط والأحكام</span>{" "}
              وسياسة الخصوصية الخاصة بموقع عقارك سوريا.
            </label>
          </div>
        </div>

        {/* أزرار الإجراءات السفلية الثابتة قبل الفوتر */}
        <div className="flex gap-4 pt-6 border-t border-gray-100">
          <button
            type="button"
            className="flex-1 p-3 bg-gray-100 hover:bg-gray-200 text-gray-500 rounded-xl font-bold text-sm transition-colors text-center"
          >
            إلغاء
          </button>
          <button
            type="submit"
            className="flex-1 p-3 bg-[#0091dc] hover:bg-blue-600 text-white rounded-xl font-bold text-sm transition-colors text-center shadow-sm"
          >
            إرسال المراجعة
          </button>
        </div>
      </form>

      {/* الفوتر الموحد أسفل الصفحة تماماً */}
      <Footer isHome={false} />
    </div>
  );
}
