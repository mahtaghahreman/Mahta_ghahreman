"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const songs = [
{
title: "خاطره",
file: "/Khatereh.mp3",
lyric: "ریشه کرده خاطره در فکرِ من، برگ‌برگِ شاخه‌هایش ذکرِ من",
lyricLink: "/lyrics/khatereh",
},
{
title: "پنجره",
file: "/Panjereh.mp3",
lyric: "متن کوتاه شعر پنجره اینجا قرار می‌گیرد...",
lyricLink: "/lyrics/panjereh",
},
{
title: "وقتی رسیدم",
file: "/When-resid.mp3",
lyric: "متن کوتاه شعر وقتی رسیدم اینجا قرار می‌گیرد...",
lyricLink: "/lyrics/vaghti-residam",
},
{
title: "ایران",
file: "/Iran.mp3",
lyric: "متن کوتاه شعر ایران اینجا قرار می‌گیرد...",
lyricLink: "/lyrics/iran",
},
{
title: "کوچه گرد",
file: "/KoocheGard.mp3",
lyric: "متن کوتاه شعر کوچه گرد اینجا قرار می‌گیرد...",
lyricLink: "/lyrics/kooche-gard",
},
{
title: "بی کران",
file: "/Bikaran.mp3",
lyric: "متن کوتاه شعر بی کران اینجا قرار می‌گیرد...",
lyricLink: "/lyrics/bikaran",
},
{
title: "جان و دل",
file: "/Jan-o-Del.mp3",
lyric: "متن کوتاه شعر جان و دل اینجا قرار می‌گیرد...",
lyricLink: "/lyrics/jan-o-del",
},
{
title: "شکوه",
file: "/Shekveh.mp3",
lyric: "متن کوتاه شعر شکوه اینجا قرار می‌گیرد...",
lyricLink: "/lyrics/shekveh",
},
{
title: "عشق ویرانگر",
file: "/eshgh-virangar.mp3",
lyric: "متن کوتاه شعر عشق ویرانگر اینجا قرار می‌گیرد...",
lyricLink: "/lyrics/eshgh-virangar",
},
{
title: "میخانه",
file: "/meykhaneh.mp3",
lyric: "متن کوتاه شعر میخانه اینجا قرار می‌گیرد...",
lyricLink: "/lyrics/meykhaneh",
},
{
title: "فصل عشق",
file: "/fasle-eshgh.mp3",
lyric: "متن کوتاه شعر فصل عشق اینجا قرار می‌گیرد...",
lyricLink: "/lyrics/fasle-eshgh",
},
{
title: "بارون",
file: "/baroon.mp3",
lyric: "متن کوتاه شعر بارون اینجا قرار می‌گیرد...",
lyricLink: "/lyrics/baroon",
},
{
title: "کاش",
file: "/Kash.mp3",
lyric: "متن کوتاه شعر کاش اینجا قرار می‌گیرد...",
lyricLink: "/lyrics/kash",
},
{
title: "کابوس",
file: "/kaboos.mp3",
lyric: "متن کوتاه شعر کابوس اینجا قرار می‌گیرد...",
lyricLink: "/lyrics/kaboos",
},
{
title: "مست مستم",
file: "/mast-mastam.mp3",
lyric: "متن کوتاه شعر مست مستم اینجا قرار می‌گیرد...",
lyricLink: "/lyrics/mast-mastam",
},
{
title: "وقت مستی",
file: "/vaght-e-masti.mp3",
lyric: "متن کوتاه شعر وقت مستی اینجا قرار می‌گیرد...",
lyricLink: "/lyrics/vaght-e-masti",
},
{
title: "خدایی",
file: "/khodaei.mp3",
lyric: "متن کوتاه شعر خدایی اینجا قرار می‌گیرد...",
lyricLink: "/lyrics/khodaei",
},
{
title: "می‌فهمی",
file: "/mifahmi.mp3",
lyric: "متن کوتاه شعر می‌فهمی اینجا قرار می‌گیرد...",
lyricLink: "/lyrics/mifahmi",
},
{
title: "آخرین دیدار",
file: "/akharin-didar.mp3",
lyric: "متن کوتاه شعر آخرین دیدار اینجا قرار می‌گیرد...",
lyricLink: "/lyrics/akharin-didar",
},
{
title: "سکوت و بی‌صدایی",
file: "/sokoot-va-bi-sedayi.mp3",
lyric: "متن کوتاه شعر سکوت و بی‌صدایی اینجا قرار می‌گیرد...",
lyricLink: "/lyrics/sokoot-va-bi-sedayi",
},
];

export default function Home() {
useEffect(() => {
const savedScroll = sessionStorage.getItem("musicScrollPosition");

```
if (savedScroll) {
  const position = Number(savedScroll);

  setTimeout(() => {
    window.scrollTo({
      top: position,
      behavior: "instant",
    });
  }, 100);
}

const saveScrollPosition = () => {
  sessionStorage.setItem(
    "musicScrollPosition",
    String(window.scrollY)
  );
};

window.addEventListener("scroll", saveScrollPosition);

return () => {
  window.removeEventListener("scroll", saveScrollPosition);
};
```

}, []);

const handleLyricClick = () => {
sessionStorage.setItem(
"musicScrollPosition",
String(window.scrollY)
);
};

return ( <main> <header className="header"> <h1>مهتا قهرمان</h1>

```
    <nav>
      <a href="#home">خانه</a>
      <a href="#music">آهنگ‌ها</a>
      <a href="#about">درباره من</a>
      <Link href="/contact">ارتباط با من</Link>
    </nav>
  </header>

  <section id="home" className="hero">
    <div className="hero-image">
      <Image
        src="/Mahta.jpg"
        alt="مهتا قهرمان"
        fill
        priority
        sizes="(max-width: 768px) 100vw, 1100px"
      />
    </div>

    <div className="intro">
      <h2>Mahta Ghahreman</h2>

      <p>شاعر و ترانه‌سرا</p>

      <p>هر ترانه، تکه‌ای از یک زندگی...</p>

      <p>
        شعرهایی از عشق، دلتنگی، احساس و لحظه‌هایی
        که در دل آدم‌ها ماندگار می‌شوند.
      </p>
    </div>
  </section>

  <section id="music" className="music-section">
    <h2>🎵 آهنگ‌ها</h2>

    <div className="music-list">
      {songs.map((song) => (
        <article className="music-card" key={song.title}>
          <h3>{song.title}</h3>

          <p className="lyric-preview">
            {song.lyric}
          </p>

          <audio controls preload="none">
            <source
              src={song.file}
              type="audio/mpeg"
            />
            مرورگر شما از پخش صوت پشتیبانی نمی‌کند.
          </audio>

          <Link
            href={song.lyricLink}
            className="read-more"
            onClick={handleLyricClick}
          >
            📖 متن ترانه
          </Link>
        </article>
      ))}
    </div>
  </section>

  <section id="about" className="about-section">
    <h2>👩 درباره من</h2>

    <p>
      من مهتا قهرمان هستم؛ شاعر و ترانه‌سرا.
    </p>

    <p>
      در این وب‌سایت می‌توانید مجموعه‌ای از شعرها،
      ترانه‌ها و آثار موسیقی من را دنبال کنید.
    </p>

    <p>
      بخشی از آثار موسیقی این مجموعه با کمک فناوری
      هوش مصنوعی به موسیقی تبدیل شده‌اند تا فضای
      احساسی ترانه‌ها بهتر شنیده شود.
    </p>
  </section>

  <footer>
    © 2026 Mahta Ghahreman
  </footer>
</main>
```

);
}
