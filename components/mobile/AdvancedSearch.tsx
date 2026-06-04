"use client";
import React from "react";
import { Search, ChevronDown } from "lucide-react";

export default function AdvancedSearch() {
  return (
    <div
      className="mx-4 mt-4 rounded-[28px] bg-cover bg-center overflow-hidden p-5 relative shadow-sm"
      style={{
        backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), url('https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600') `,
      }}
    >
      {/* العنوان العلوي: محرك البحث المتقدم مع الأيقونة الصفراء على اليمين */}
      <div className="flex items-center justify-center gap-2 text-lg font-bold text-[#0f2942] mb-3">
        <span className="text-amber-500 text-base">🔍</span>
        <h2 className="tracking-wide">محرك البحث المتقدم</h2>
      </div>

      {/* الخط الأفقي الأبيض الرفيع تحت العنوان مباشرة */}
      <div className="w-full h-[1px] bg-white/70 mb-5" />

      {/* شبكة الحقول (توزيع يمين ويسار متقاطع تماماً مثل الصورة) */}
      <div className="space-y-4 mb-6">
        {/* السطر الأول: المحافظة (يمين) | المنطقة (يسار) */}
        <div className="grid grid-cols-2 gap-x-4 relative">
          {/* المحافظة - يمين */}
          <div className="flex flex-col items-center">
            <label className="text-xs font-black text-black mb-1 text-center w-full pr-4">
              المحافظة
            </label>
            <div className="relative w-full">
              <select className="w-full bg-white/75 text-gray-900 text-xs rounded-full pl-8 pr-4 py-2 appearance-none h-9 font-bold text-center focus:outline-none backdrop-blur-sm">
                <option>دمشق</option>
                <option>حمص</option>
                <option>اللاذقية</option>
                <option>حلب</option>
              </select>
              <ChevronDown
                size={14}
                className="absolute left-3 top-2.5 text-gray-700 pointer-events-none"
              />
            </div>
          </div>

          {/* المنطقة - يسار */}
          <div className="flex flex-col items-center">
            <label className="text-xs font-black text-black mb-1 text-center w-full pl-4">
              المنطقة
            </label>
            <div className="relative w-full">
              <select className="w-full bg-white/75 text-gray-900 text-xs rounded-full pl-8 pr-4 py-2 appearance-none h-9 font-bold text-center focus:outline-none backdrop-blur-sm">
                <option>المزة</option>
              </select>
              <ChevronDown
                size={14}
                className="absolute left-3 top-2.5 text-gray-700 pointer-events-none"
              />
            </div>
          </div>
        </div>

        {/* السطر الثاني: نوع العقار (يمين) | المساحة (يسار) */}
        <div className="grid grid-cols-2 gap-x-4 relative">
          {/* نوع العقار - يمين */}
          <div className="flex flex-col items-center">
            <label className="text-xs font-black text-black mb-1 text-center w-full pr-4">
              نوع العقار
            </label>
            <div className="relative w-full">
              <select className="w-full bg-white/75 text-gray-900 text-xs rounded-full pl-8 pr-4 py-2 appearance-none h-9 font-bold text-center focus:outline-none backdrop-blur-sm">
                <option>شقة سكنية</option>
                <option>فيلا</option>
                <option>أرض زراعية</option>
                <option>قصر</option>
              </select>
              <ChevronDown
                size={14}
                className="absolute left-3 top-2.5 text-gray-700 pointer-events-none"
              />
            </div>
          </div>

          {/* المساحة - يسار */}
          <div className="flex flex-col items-center">
            <label className="text-xs font-black text-black mb-1 text-center w-full pl-4">
              المساحة (م²)
            </label>
            <input
              type="text"
              placeholder="مثلاً: 150"
              className="w-full bg-white/75 text-gray-900 text-xs rounded-full px-4 py-2 h-9 font-bold text-center focus:outline-none backdrop-blur-sm placeholder-gray-700"
            />
          </div>
        </div>

        {/* السطر الثالث: نطاق السعر (من على اليمين | إلى على اليسار) */}
        <div className="flex flex-col">
          <label className="text-xs font-black text-black mb-1 text-center w-full">
            نطاق السعر (ل.س)
          </label>
          <div className="grid grid-cols-2 gap-x-4">
            {/* من - يمين */}
            <input
              type="text"
              placeholder="من"
              className="w-full bg-white/75 text-gray-900 text-xs rounded-full px-4 py-2 h-9 font-bold text-center focus:outline-none backdrop-blur-sm placeholder-gray-700"
            />
            {/* إلى - يسار */}
            <input
              type="text"
              placeholder="إلى"
              className="w-full bg-white/75 text-gray-900 text-xs rounded-full px-4 py-2 h-9 font-bold text-center focus:outline-none backdrop-blur-sm placeholder-gray-700"
            />
          </div>
        </div>
      </div>

      {/* زر ابدأ البحث الذهبي الكبير أسفل الكرت بنفس انحناء الحواف والأيقونة البيضاء */}
      <button className="w-full bg-[#cca43b] hover:bg-[#b89332] text-white text-sm font-bold py-3 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-md active:scale-[0.99]">
        <Search size={16} strokeWidth={2.5} />
        <span>ابدأ البحث</span>
      </button>
    </div>
  );
}
