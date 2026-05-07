// const scents = {
//   "items": [
//     {
//       "name": "Janan Sports",
//       "description": "A beautiful, long-lasting fragrance designed for active individuals who appreciate a fresh, sporty scent with a touch of elegance. Perfect for daily wear and energetic lifestyles.",
//       "image": "images/janan-support.png",
//       "brand": "J. (Junaid Jamshed)",
//       "available": true,
//       "show_price": false,
//       "prices": [
//         { "quantity": "3ml", "price": "450 PKR" },
//         { "quantity": "6ml", "price": "800 PKR" },
//         { "quantity": "12ml", "price": "1,450 PKR" }
//       ]
//     },
//     {
//       "name": "Sky Blue (England)",
//       "description": "A crisp, vibrant fragrance inspired by the refreshing breeze of English mornings. Sky Blue (England) blends cool citrus and aquatic notes with a hint of musk, making it perfect for confident, modern individuals.",
//       "image": "images/sky-blue.png",
//       "brand": "J. (Junaid Jamshed)",
//       "available": false,
//       "show_price": false,
//       "prices": [
//         { "quantity": "3ml", "price": "350 PKR" },
//         { "quantity": "6ml", "price": "700 PKR" },
//         { "quantity": "12ml", "price": "1,300 PKR" }
//       ]
//     },
//     {
//       "name": "Erba Pura",
//       "description": "A luxurious and exotic unisex fragrance, Erba Pura opens with a burst of fresh citrus and sweet fruits, layered over a sensual base of white musk, amber, and vanilla. This captivating scent is both vibrant and smooth, leaving a long-lasting impression.",
//       "image": "images/erba-pura.png",
//       "brand": "Xerjoff",
//       "available": true,
//       "show_price": false,
//       "prices": [
//         { "quantity": "3ml", "price": "450 PKR" },
//         { "quantity": "6ml", "price": "800 PKR" },
//         { "quantity": "12ml", "price": "1,450 PKR" }
//       ]
//     },
//     {
//       "name": "Mukhallat Al Badar",
//       "description": "A classic oriental fragrance blending rich oud, warm amber, and floral notes, Mukhallat Al Badar exudes traditional elegance and timeless charm. Its deep, resinous aroma lingers gracefully, making it a perfect choice for those who appreciate heritage and sophistication.",
//       "image": "images/mukhallat-al-badar.png",
//       "brand": "Al Haramain",
//       "available": true,
//       "show_price": false,
//       "prices": [
//         { "quantity": "3ml", "price": "500 PKR" },
//         { "quantity": "6ml", "price": "950 PKR" },
//         { "quantity": "12ml", "price": "1,600 PKR" }
//       ]
//     }
//   ]
// };

const scents = {
  "items": [
    {
      "name": "جانان سپورٹس",
      "description": "ایک تازہ، ہلکی اور توانائی سے بھرپور خوشبو جو روزمرہ استعمال اور ایکٹو لائف اسٹائل کے لیے بہترین ہے۔",
      "image": "images/janan-sports.jpeg",
      "brand": "جے (جناحی خوشبو گھر)",
      "available": true,
      "show_price": false,
      "prices": [
        { "quantity": "3ml", "price": "450 PKR" },
        { "quantity": "6ml", "price": "800 PKR" },
        { "quantity": "12ml", "price": "1450 PKR" }
      ]
    },
    {
      "name": "مخلط البدر",
      "description": "خالص مشرقی خوشبو جس میں عود اور عنبر کی گہری آمیزش شامل ہے، جو روایتی شان کو ظاہر کرتی ہے۔",
      "image": "images/mukhalat-al-badr.jpeg",
      "brand": "عربک پرفیومز",
      "available": true,
      "show_price": false,
      "prices": [
        { "quantity": "3ml", "price": "500 PKR" },
        { "quantity": "6ml", "price": "950 PKR" },
        { "quantity": "12ml", "price": "1600 PKR" }
      ]
    },
    {
      "name": "اربا پورا",
      "description": "پھلوں اور لیموں کی تازگی سے بھرپور ایک لگژری یونیسیکس خوشبو جو دیرپا اثر چھوڑتی ہے۔",
      "image": "images/erba-pura.jpeg",
      "brand": "Xerjoff",
      "available": true,
      "show_price": false,
      "prices": [
        { "quantity": "3ml", "price": "450 PKR" },
        { "quantity": "6ml", "price": "800 PKR" },
        { "quantity": "12ml", "price": "1450 PKR" }
      ]
    },
    {
      "name": "رائل عود",
      "description": "گہری اور شاہی عود کی خوشبو جو وقار اور کلاس کا احساس دیتی ہے۔",
      "image": "images/royal-oud.jpeg",
      "brand": "عربک کلیکشن",
      "available": true,
      "show_price": false,
      "prices": [
        { "quantity": "3ml", "price": "500 PKR" },
        { "quantity": "6ml", "price": "900 PKR" },
        { "quantity": "12ml", "price": "1500 PKR" }
      ]
    },
    {
      "name": "وائٹ عود",
      "description": "نرم، صاف اور پرسکون عود کی خوشبو جو دن کے ہر وقت کے لیے موزوں ہے۔",
      "image": "images/white-oud.jpeg",
      "brand": "عربک کلیکشن",
      "available": true,
      "show_price": false,
      "prices": [
        { "quantity": "3ml", "price": "450 PKR" },
        { "quantity": "6ml", "price": "850 PKR" },
        { "quantity": "12ml", "price": "1450 PKR" }
      ]
    },
    {
      "name": "فواکہ",
      "description": "میٹھی اور پھلوں کی خوشبو سے بھرپور ایک دلکش اور ہلکی پرفیوم۔",
      "image": "images/fawakeh.jpeg",
      "brand": "پرفیوم ہاؤس",
      "available": true,
      "show_price": false,
      "prices": [
        { "quantity": "3ml", "price": "300 PKR" },
        { "quantity": "6ml", "price": "600 PKR" },
        { "quantity": "12ml", "price": "1100 PKR" }
      ]
    },
    {
      "name": "بکارات",
      "description": "ایک پریمیم میٹھی اور ووڈی خوشبو جو نفاست اور لگژری کا احساس دیتی ہے۔",
      "image": "images/baccarat.jpeg",
      "brand": "Maison Collection",
      "available": true,
      "show_price": false,
      "prices": [
        { "quantity": "3ml", "price": "600 PKR" },
        { "quantity": "6ml", "price": "1100 PKR" },
        { "quantity": "12ml", "price": "1900 PKR" }
      ]
    },
    {
      "name": "مخلط بدر الذھبی",
      "description": "سنہری عود اور عنبر کا شاندار امتزاج جو شاہانہ خوشبو پیدا کرتا ہے۔",
      "image": "images/mukhalat-badr-aldhabi.jpeg",
      "brand": "عربک پرفیومز",
      "available": true,
      "show_price": false,
      "prices": [
        { "quantity": "3ml", "price": "550 PKR" },
        { "quantity": "6ml", "price": "1000 PKR" },
        { "quantity": "12ml", "price": "1700 PKR" }
      ]
    },
    {
      "name": "احساس العربیہ",
      "description": "ایک روایتی عربی خوشبو جو نرم پھولوں اور عود کی خوشبو سے بھرپور ہے۔",
      "image": "images/ehsas-al-arabia.jpeg",
      "brand": "عربک کلیکشن",
      "available": true,
      "show_price": false,
      "prices": [
        { "quantity": "3ml", "price": "400 PKR" },
        { "quantity": "6ml", "price": "750 PKR" },
        { "quantity": "12ml", "price": "1300 PKR" }
      ]
    },
    {
      "name": "امیر العود",
      "description": "گہری اور طاقتور عود کی خوشبو جو اعتماد اور وقار کو ظاہر کرتی ہے۔",
      "image": "images/ameer-ul-oud.jpeg",
      "brand": "عربک پرفیومز",
      "available": true,
      "show_price": false,
      "prices": [
        { "quantity": "3ml", "price": "500 PKR" },
        { "quantity": "6ml", "price": "900 PKR" },
        { "quantity": "12ml", "price": "1500 PKR" }
      ]
    },
    {
      "name": "سلور کریڈ (ہائی گریڈ)",
      "description": "تازہ، فِریش اور ایلیگنٹ خوشبو جو جدید مردوں کے لیے بہترین انتخاب ہے۔",
      "image": "images/silver-cred.jpeg",
      "brand": "Creed Inspired",
      "available": true,
      "show_price": false,
      "prices": [
        { "quantity": "3ml", "price": "650 PKR" },
        { "quantity": "6ml", "price": "1200 PKR" },
        { "quantity": "12ml", "price": "2000 PKR" }
      ]
    },
    {
      "name": "رومینٹک کافی",
      "description": "کافی اور میٹھی خوشبو کا دلکش امتزاج جو رومانوی احساس پیدا کرتا ہے۔",
      "image": "images/romantic-coffee.jpeg",
      "brand": "نیش پرفیومز",
      "available": true,
      "show_price": false,
      "prices": [
        { "quantity": "3ml", "price": "350 PKR" },
        { "quantity": "6ml", "price": "700 PKR" },
        { "quantity": "12ml", "price": "1200 PKR" }
      ]
    },
    {
      "name": "سلطان عرب",
      "description": "شاہی اور مضبوط عربی خوشبو جو طاقت اور عزت کی علامت ہے۔",
      "image": "images/sultan-arab.jpeg",
      "brand": "عربک کلیکشن",
      "available": true,
      "show_price": false,
      "prices": [
        { "quantity": "3ml", "price": "500 PKR" },
        { "quantity": "6ml", "price": "950 PKR" },
        { "quantity": "12ml", "price": "1600 PKR" }
      ]
    },
    {
      "name": "عود فار گریٹنس",
      "description": "پریمیم عود کی گہری خوشبو جو عظمت اور وقار کو ظاہر کرتی ہے۔",
      "image": "images/oud-for-greatness.jpeg",
      "brand": "Initio Inspired",
      "available": true,
      "show_price": false,
      "prices": [
        { "quantity": "3ml", "price": "700 PKR" },
        { "quantity": "6ml", "price": "1300 PKR" },
        { "quantity": "12ml", "price": "2200 PKR" }
      ]
    },
    {
      "name": "گوچی فلورا",
      "description": "پھولوں کی نرم اور دلکش خوشبو جو خواتین کے لیے ایک کلاسک انتخاب ہے۔",
      "image": "images/gucci-flora.jpeg",
      "brand": "Gucci Inspired",
      "available": true,
      "show_price": false,
      "prices": [
        { "quantity": "3ml", "price": "500 PKR" },
        { "quantity": "6ml", "price": "900 PKR" },
        { "quantity": "12ml", "price": "1500 PKR" }
      ]
    },
    {
      "name": "فندی",
      "description": "جدید اور اسٹائلش خوشبو جو فیشن اور کلاس کو ظاہر کرتی ہے۔",
      "image": "images/fendi.jpeg",
      "brand": "Fendi Inspired",
      "available": true,
      "show_price": false,
      "prices": [
        { "quantity": "3ml", "price": "450 PKR" },
        { "quantity": "6ml", "price": "850 PKR" },
        { "quantity": "12ml", "price": "1450 PKR" }
      ]
    },
    {
      "name": "ٹائیگر اعلی",
      "description": "مضبوط، جرات مند اور پُراثر خوشبو جو اعتماد کو بڑھاتی ہے۔",
      "image": "images/tiger-aala.jpeg",
      "brand": "پرفیوم ہاؤس",
      "available": true,
      "show_price": false,
      "prices": [
        { "quantity": "3ml", "price": "400 PKR" },
        { "quantity": "6ml", "price": "800 PKR" },
        { "quantity": "12ml", "price": "1400 PKR" }
      ]
    },
    {
      "name": "طیبہ",
      "description": "پاکیزہ اور نرم خوشبو جو روحانی سکون کا احساس دیتی ہے۔",
      "image": "images/taybah.jpeg",
      "brand": "عربک پرفیومز",
      "available": true,
      "show_price": false,
      "prices": [
        { "quantity": "3ml", "price": "300 PKR" },
        { "quantity": "6ml", "price": "600 PKR" },
        { "quantity": "12ml", "price": "1100 PKR" }
      ]
    },
    {
      "name": "بکارات روج 540",
      "description": "لگژری، میٹھی اور گرم خوشبو جو دنیا بھر میں بہت مقبول ہے۔",
      "image": "images/baccarat-rouge-540.jpeg",
      "brand": "Maison Francis Kurkdjian Inspired",
      "available": true,
      "show_price": false,
      "prices": [
        { "quantity": "3ml", "price": "800 PKR" },
        { "quantity": "6ml", "price": "1500 PKR" },
        { "quantity": "12ml", "price": "2500 PKR" }
      ]
    },
    {
      "name": "عود اللیل",
      "description": "رات کی گہری اور پراسرار عود کی خوشبو جو دیرپا اثر رکھتی ہے۔",
      "image": "images/oud-al-layl.jpeg",
      "brand": "عربک کلیکشن",
      "available": true,
      "show_price": false,
      "prices": [
        { "quantity": "3ml", "price": "500 PKR" },
        { "quantity": "6ml", "price": "900 PKR" },
        { "quantity": "12ml", "price": "1500 PKR" }
      ]
    },
    {
      "name": "فلیمنکو ریمون",
      "description": "پھلوں اور مسالوں کی انرجی سے بھرپور ایک منفرد خوشبو۔",
      "image": "images/flamenco-remon.jpeg",
      "brand": "نیش پرفیومز",
      "available": true,
      "show_price": false,
      "prices": [
        { "quantity": "3ml", "price": "400 PKR" },
        { "quantity": "6ml", "price": "750 PKR" },
        { "quantity": "12ml", "price": "1300 PKR" }
      ]
    },
    {
      "name": "اوپن",
      "description": "سادہ مگر تازہ خوشبو جو روزمرہ استعمال کے لیے بہترین ہے۔",
      "image": "images/open.jpeg",
      "brand": "پرفیوم ہاؤس",
      "available": true,
      "show_price": false,
      "prices": [
        { "quantity": "3ml", "price": "250 PKR" },
        { "quantity": "6ml", "price": "500 PKR" },
        { "quantity": "12ml", "price": "900 PKR" }
      ]
    },
    {
      "name": "سکائی بلیو",
      "description": "ٹھنڈی، تازہ اور آسمانی خوشبو جو اعتماد اور تازگی دیتی ہے۔",
      "image": "images/sky-blue.jpeg",
      "brand": "J. Inspired",
      "available": true,
      "show_price": false,
      "prices": [
        { "quantity": "3ml", "price": "350 PKR" },
        { "quantity": "6ml", "price": "700 PKR" },
        { "quantity": "12ml", "price": "1300 PKR" }
      ]
    },
    {
      "name": "فندی لائف",
      "description": "جدید طرز زندگی کی نمائندہ خوشبو جو اسٹائل اور کلاس کو ظاہر کرتی ہے۔",
      "image": "images/fendi-life.jpeg",
      "brand": "Fendi Inspired",
      "available": true,
      "show_price": false,
      "prices": [
        { "quantity": "3ml", "price": "450 PKR" },
        { "quantity": "6ml", "price": "850 PKR" },
        { "quantity": "12ml", "price": "1450 PKR" }
      ]
    },
    {
      "name": "درہم",
      "description": "خالص عربی انداز کی خوشبو جو ہلکی مگر دیرپا ہوتی ہے۔",
      "image": "images/dirham.jpeg",
      "brand": "Ard Al Zaafaran Inspired",
      "available": true,
      "show_price": false,
      "prices": [
        { "quantity": "3ml", "price": "300 PKR" },
        { "quantity": "6ml", "price": "600 PKR" },
        { "quantity": "12ml", "price": "1100 PKR" }
      ]
    },
    {
      "name": "صبایہ",
      "description": "نرم پھولوں اور میٹھی خوشبو کا حسین امتزاج۔",
      "image": "images/sabaya.jpeg",
      "brand": "عربک کلیکشن",
      "available": true,
      "show_price": false,
      "prices": [
        { "quantity": "3ml", "price": "350 PKR" },
        { "quantity": "6ml", "price": "700 PKR" },
        { "quantity": "12ml", "price": "1200 PKR" }
      ]
    },
    {
      "name": "حسن یوسف",
      "description": "ایک کلاسک اور دلکش خوشبو جو پاکیزگی اور خوبصورتی کا احساس دیتی ہے۔",
      "image": "images/husn-yousaf.jpeg",
      "brand": "پرفیوم ہاؤس",
      "available": true,
      "show_price": false,
      "prices": [
        { "quantity": "3ml", "price": "300 PKR" },
        { "quantity": "6ml", "price": "600 PKR" },
        { "quantity": "12ml", "price": "1100 PKR" }
      ]
    },
    {
      "name": "موتیا اعلی",
      "description": "جاسمین کی خالص اور میٹھی خوشبو جو دل کو بھا جانے والی ہے۔",
      "image": "images/motia-aala.jpeg",
      "brand": "پرفیوم ہاؤس",
      "available": true,
      "show_price": false,
      "prices": [
        { "quantity": "3ml", "price": "300 PKR" },
        { "quantity": "6ml", "price": "600 PKR" },
        { "quantity": "12ml", "price": "1100 PKR" }
      ]
    },
    {
      "name": "شمسہ دبئی",
      "description": "دبئی کی گرم اور شاہی خوشبو جو عود اور مسالوں سے بھرپور ہے۔",
      "image": "images/shamsa-dubai.jpeg",
      "brand": "Dubai Collection",
      "available": true,
      "show_price": false,
      "prices": [
        { "quantity": "3ml", "price": "500 PKR" },
        { "quantity": "6ml", "price": "900 PKR" },
        { "quantity": "12ml", "price": "1500 PKR" }
      ]
    },
    {
      "name": "ضرار",
      "description": "طاقتور اور گہری خوشبو جو مضبوط شخصیت کی عکاسی کرتی ہے۔",
      "image": "images/darar.jpeg",
      "brand": "عربک پرفیومز",
      "available": true,
      "show_price": false,
      "prices": [
        { "quantity": "3ml", "price": "400 PKR" },
        { "quantity": "6ml", "price": "800 PKR" },
        { "quantity": "12ml", "price": "1400 PKR" }
      ]
    },
    {
      "name": "بخور",
      "description": "روایتی دھونی خوشبو جو گھر اور ماحول کو معطر کرتی ہے۔",
      "image": "images/bukhoor.jpeg",
      "brand": "عربک کلیکشن",
      "available": true,
      "show_price": false,
      "prices": [
        { "quantity": "3ml", "price": "300 PKR" },
        { "quantity": "6ml", "price": "600 PKR" },
        { "quantity": "12ml", "price": "1000 PKR" }
      ]
    },
    {
      "name": "ٹائیگر",
      "description": "جذباتی اور جرات مند خوشبو جو اعتماد کو بڑھاتی ہے۔",
      "image": "images/tiger.jpeg",
      "brand": "پرفیوم ہاؤس",
      "available": true,
      "show_price": false,
      "prices": [
        { "quantity": "3ml", "price": "350 PKR" },
        { "quantity": "6ml", "price": "700 PKR" },
        { "quantity": "12ml", "price": "1200 PKR" }
      ]
    },
    {
      "name": "کلائیمیٹ",
      "description": "ٹھنڈی اور تازہ ہوا جیسی خوشبو جو سکون دیتی ہے۔",
      "image": "images/climate.jpeg",
      "brand": "Classic Inspired",
      "available": true,
      "show_price": false,
      "prices": [
        { "quantity": "3ml", "price": "400 PKR" },
        { "quantity": "6ml", "price": "750 PKR" },
        { "quantity": "12ml", "price": "1300 PKR" }
      ]
    },
    {
      "name": "مخلط",
      "description": "عود اور پھولوں کی مخلوط خوشبو جو روایتی اور جدید دونوں انداز رکھتی ہے۔",
      "image": "images/mukhalat.jpeg",
      "brand": "عربک کلیکشن",
      "available": true,
      "show_price": false,
      "prices": [
        { "quantity": "3ml", "price": "450 PKR" },
        { "quantity": "6ml", "price": "850 PKR" },
        { "quantity": "12ml", "price": "1450 PKR" }
      ]
    },
    {
      "name": "غلاف کعبہ",
      "description": "روحانی اور پاکیزہ خوشبو جو سکون اور تقدس کا احساس دیتی ہے۔",
      "image": "images/ghilaf-e-kaaba.jpeg",
      "brand": "عربک کلیکشن",
      "available": true,
      "show_price": false,
      "prices": [
        { "quantity": "3ml", "price": "500 PKR" },
        { "quantity": "6ml", "price": "900 PKR" },
        { "quantity": "12ml", "price": "1500 PKR" }
      ]
    },
    {
      "name": "موتیا",
      "description": "سادہ مگر دلکش جاسمین کی خوشبو جو ہر وقت تازگی دیتی ہے۔",
      "image": "images/motia.jpeg",
      "brand": "پرفیوم ہاؤس",
      "available": true,
      "show_price": false,
      "prices": [
        { "quantity": "3ml", "price": "300 PKR" },
        { "quantity": "6ml", "price": "600 PKR" },
        { "quantity": "12ml", "price": "1100 PKR" }
      ]
    },
    {
      "name": "گوچی رش",
      "description": "جدید اور جاندار خوشبو جو فیشن اور انرجی کو ظاہر کرتی ہے۔",
      "image": "images/gucci-rush.jpeg",
      "brand": "Gucci Inspired",
      "available": true,
      "show_price": false,
      "prices": [
        { "quantity": "3ml", "price": "500 PKR" },
        { "quantity": "6ml", "price": "900 PKR" },
        { "quantity": "12ml", "price": "1500 PKR" }
      ]
    },
    {
      "name": "مرج",
      "description": "نرم اور متوازن خوشبو جو دن بھر تازگی برقرار رکھتی ہے۔",
      "image": "images/murj.jpeg",
      "brand": "نیش پرفیومز",
      "available": true,
      "show_price": false,
      "prices": [
        { "quantity": "3ml", "price": "350 PKR" },
        { "quantity": "6ml", "price": "700 PKR" },
        { "quantity": "12ml", "price": "1200 PKR" }
      ]
    },
    {
      "name": "رائل بلیو",
      "description": "ٹھنڈی، پُرسکون اور ایلیگنٹ خوشبو جو کلاس کا احساس دیتی ہے۔",
      "image": "images/royal-blue.jpeg",
      "brand": "J. Inspired",
      "available": true,
      "show_price": false,
      "prices": [
        { "quantity": "3ml", "price": "350 PKR" },
        { "quantity": "6ml", "price": "700 PKR" },
        { "quantity": "12ml", "price": "1300 PKR" }
      ]
    },
    {
      "name": "ساواج",
      "description": "پُراثر اور جدید مردانہ خوشبو جو اعتماد اور طاقت کی علامت ہے۔",
      "image": "images/sauvage.jpeg",
      "brand": "Dior Inspired",
      "available": true,
      "show_price": false,
      "prices": [
        { "quantity": "3ml", "price": "600 PKR" },
        { "quantity": "6ml", "price": "1100 PKR" },
        { "quantity": "12ml", "price": "1900 PKR" }
      ]
    }
  ]
};

renderProducts(scents.items);

function renderProducts(items) {
  const container = document.querySelector("#products");
  items.forEach(item => {
    const card = document.createElement("div");
    card.className = "product-card";
    // card.innerHTML = `
    //   <img src="${item.image}" alt="${item.name}">
    //   <div class="product-details">
    //     <h2>${item.name}</h2>
    //     <p><strong>Brand:</strong> ${item.brand}</p>
    //     <p>${item.description}</p>
    //     <div class="bottom-section">
    //       ${item.show_price ? renderPrices(item.prices) : ""}
    //       <div class="availability ${item.available ? 'available' : 'coming'}">
    //         ${item.available ? 'Available' : 'Coming Soon'}
    //       </div>
    //     </div>
    //   </div>
    // `;
    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="product-details">
        <h2>${item.name}</h2>
        <p>${item.description}</p>
        <div class="bottom-section">
          ${item.show_price ? renderPrices(item.prices) : ""}
          <div class="availability ${item.available ? 'available' : 'coming'}">
            ${item.available ? 'Available' : 'Coming Soon'}
          </div>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

function renderPrices(prices) {
  return `<div class="price-list">
    ${prices.map(p => `<div>${p.quantity} - ${p.price}</div>`).join('')}
  </div>`;
}
