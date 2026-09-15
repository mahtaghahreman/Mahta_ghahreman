"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (
      command: string,
      eventName: string,
      params?: Record<string, unknown>
    ) => void;
  }
}

const songs = [
  {
    title: "خاطره",
    file: "/Khatereh.mp3",
    lyricLink: "/lyrics/khatereh",
  },
  {
    title: "پنجره",
    file: "/Panjereh.mp3",
    lyricLink: "/lyrics/panjereh",
  },
  {
    title: "وقتی رسیدم",
    file: "/When-resid.mp3",
    lyricLink: "/lyrics/vaghti-residam",
  },
  {
    title: "ایران",
    file: "/Iran.mp3",
    lyricLink: "/lyrics/iran",
  },
  {
    title: "کوچه گرد",
    file: "/KoocheGard.mp3",
    lyricLink: "/lyrics/kooche-gard",
  },
  {
    title: "بی کران",
    file: "/Bikaran.mp3",
    lyricLink: "/lyrics/bikaran",
  },
  {
    title: "جان و دل",
    file: "/Jan-o-Del.mp3",
    lyricLink: "/lyrics/jan-o-del",
  },
  {
    title: "شکوه",
    file: "/Shekveh.mp3",
    lyricLink: "/lyrics/shekveh",
  },
  {
    title: "عشق ویرانگر",
    file: "/eshgh-virangar.mp3",
    lyricLink: "/lyrics/eshgh-virangar",
  },
  {
    title: "میخانه",
    file: "/meykhaneh.mp3",
    lyricLink: "/lyrics/meykhaneh",
  },
  {
    title: "فصل عشق",
    file: "/fasle-eshgh.mp3",
    lyricLink: "/lyrics/fasle-eshgh",
  },
  {
    title: "بارون",
    file: "/baroon.mp3",
    lyricLink: "/lyrics/baroon",
  },
  {
    title: "کاش",
    file: "/Kash.mp3",
    lyricLink: "/lyrics/kash",
  },
  {
    title: "کابوس",
    file: "/kaboos.mp3",
    lyricLink: "/lyrics/kaboos",
  },
  {
    title: "مست مستم",
    file: "/mast-mastam.mp3",
    lyricLink: "/lyrics/mast-mastam",
  },
  {
    title: "وقت مستی",
    file: "/vaght-e-masti.mp3",
    lyricLink: "/lyrics/vaght-e-masti",
  },
  {
    title: "خدایی",
    file: "/khodaei.mp3",
    lyricLink: "/lyrics/khodaei",
  },
  {
    title: "می‌فهمی",
    file: "/mifahmi.mp3",
    lyricLink: "/lyrics/mifahmi",
  },
  {
    title: "آخرین دیدار",
    file: "/akharin-didar.mp3",
    lyricLink: "/lyrics/akharin-didar",
  },
  {
    title: "سکوت و بی‌صدایی",
    file: "/sokoot-va-bi-sedayi.mp3",
    lyricLink: "/lyrics/sokoot-va-bi-sedayi",
  },
  {
    title: "رخ دلدار",
    file: "/rokhe-deldar.mp3",
    lyricLink: "/lyrics/rokhe-deldar",
  },
  {
    title: "چه تلخه",
    file: "/che-talkheh.mp3",
    lyricLink: "/lyrics/che-talkheh",
  },
  {
    title: "فرصت دیدار",
    file: "/forsat-e-didar.mp3",
    lyricLink: "/lyrics/forsat-e-didar",
  },
];

export default function Home() {
  useEffect(() => {
    const savedScroll = sessionStorage.getItem("musicScrollPosition");

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
  }, []);

  const handleLyricClick = () => {
    sessionStorage.setItem(
      "musicScrollPosition",
      String(window.scrollY)
    );
  };

  const handleSongDownload = (songTitle: string) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "download_song", {
        song_name: songTitle,
      });
    }
  };

  return (
    <main>
      <header className="header">
        <h1>مهتا قهرمان</h1>

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

              <audio controls preload="none">
                <source
                  src={song.file}
                  type="audio/mpeg"
                />
                مرورگر شما از پخش صوت پشتیبانی نمی‌کند.
              </audio>

              <p>
                <strong>ترانه‌سرا:</strong> مهتا قهرمان
              </p>

              <p>
                <strong>اجرا و تولید موسیقی:</strong> با استفاده از هوش مصنوعی
              </p>

              <a
                href={song.file}
                download
                className="download-button"
                onClick={() => handleSongDownload(song.title)}
              >
                ⬇️ دانلود آهنگ
              </a>

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
  );
}

