import classic from "@/assets/menu-classic.jpg";
import smokehouse from "@/assets/menu-smokehouse.jpg";
import fire from "@/assets/menu-fire.jpg";
import double from "@/assets/menu-double.jpg";
import chicken from "@/assets/menu-chicken.jpg";
import fries from "@/assets/menu-fries.jpg";
import drink from "@/assets/menu-drink.jpg";
import tray from "@/assets/gallery-tray.jpg";
import cheese from "@/assets/gallery-cheese.jpg";

/**
 * بيانات المنيو مستخرجة حرفيًا من صورة منيو هامبرجيني الرسمية.
 * الأسعار بالدينار الليبي كما هي مكتوبة في المنيو.
 * ملاحظة: الصور توضيحية مؤقتة ويمكن استبدالها بصور المنتجات الحقيقية لاحقًا.
 * أي عنصر غير واضح في الصورة تم تعليمه بـ needsReview بدون تخمين.
 */

export type MenuItem = {
  name: string;
  price: number | null;
  image?: string;
  needsReview?: boolean;
};

export type MenuCategory = {
  id: string;
  title: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "boxes",
    title: "قسم البوكسات",
    items: [
      { name: "بوكس زنجر", price: 17, image: chicken },
      { name: "بوكس توستر", price: 17, image: classic },
      { name: "بوكس فاهيتا", price: 18, image: tray },
      { name: "بوكس فاهيتا تورتيلا", price: 20, image: tray },
      { name: "بوكس كرسبي رول", price: 21, image: chicken },
      { name: "بوكس كنق برقر", price: 22, image: double },
      { name: "بوكس مايتي زنجر", price: 18, image: chicken },
      { name: "بوكس تشكن لافينو", price: 25, image: fire },
      { name: "بوكس تشكن لافينو تورتيلا", price: 30, image: fire },
      { name: "بوكس بومب تشيز", price: 25, image: cheese },
      { name: "بوكس برقر كلاسك", price: 14, image: classic },
      { name: "بوكس برقر ليبي", price: 15, image: smokehouse },
      { name: "راب ستار بوكس", price: 18, image: chicken },
      { name: "يوم برقر بوكس", price: 20, image: double },
      { name: "بوكس برقر رمانه", price: 18, image: smokehouse },
      { name: "بوكس برقر مكسيكي", price: 17, image: fire },
      { name: "بوكس تشكن راب", price: 21, image: chicken },
      { name: "بوكس دبل مايتي تشيز", price: 21, image: cheese },
    ],
  },
  {
    id: "burgers",
    title: "قسم الهمبرجر",
    items: [
      { name: "برقر كلاسك", price: 9, image: classic },
      { name: "برقر رمانه", price: 13, image: smokehouse },
      { name: "تشيز برقر", price: 13, image: cheese, needsReview: true },
      { name: "برقر ليبي", price: null, image: smokehouse, needsReview: true },
      { name: "كنق برقر", price: null, image: double, needsReview: true },
      { name: "برقر مكسيكي", price: 12, image: fire },
    ],
  },
  {
    id: "sandwiches",
    title: "قسم السندوتشات",
    items: [
      { name: "فاهيتا", price: 13, image: tray },
      { name: "فاهيتا تورتيلا", price: 15, image: tray },
      { name: "كرسبي رول", price: 16, image: chicken },
      { name: "تشكن لافينو", price: 20, image: fire },
      { name: "تشكن لافينو تورتيلا", price: 25, image: fire },
      { name: "زنجر", price: 12, image: chicken },
      { name: "توستر", price: 12, image: classic },
      { name: "مايتي زنجر", price: 13, image: chicken },
      { name: "دبل مايتي تشيز", price: 16, image: cheese },
      { name: "تشكن ناشفل", price: 18, image: fire },
      { name: "تشكن راب", price: 16, image: chicken },
    ],
  },
  {
    id: "tacos",
    title: "قسم التاكوس",
    items: [
      { name: "تاكوس دجاج نص", price: 18, image: tray },
      { name: "تاكوس دجاج بوكس", price: 22, image: tray },
      { name: "تاكوس كبدة بوكس", price: 25, image: tray },
      { name: "تاكوس برقر بوكس", price: 20, image: double },
    ],
  },
  {
    id: "snacks",
    title: "سناكس",
    items: [
      { name: "بطاطا صغيرة", price: 5, image: fries },
      { name: "بطاطا وسط", price: 10, image: fries },
      { name: "بطاطا كبيرة", price: 20, image: fries },
    ],
  },
  {
    id: "sauces",
    title: "الصوصات",
    items: [
      { name: "تكساس", price: 3, image: drink },
      { name: "ساموراي", price: 2, image: drink },
      { name: "بوستن", price: 2, image: drink },
      { name: "كاتشب", price: 1, image: drink },
      { name: "مايونيز", price: 1, image: drink },
    ],
  },
  {
    id: "extras",
    title: "إضافات",
    items: [
      { name: "جبنة موزاريلا", price: 4, image: cheese },
      { name: "جبنة شرائح", price: 1, image: cheese },
      { name: "شريحة برقر", price: 6, image: double },
      { name: "دخي", price: 2, image: classic, needsReview: true },
    ],
  },
];

export const formatPrice = (price: number | null) =>
  price === null ? "السعر غير واضح" : `${price} د.ل`;
