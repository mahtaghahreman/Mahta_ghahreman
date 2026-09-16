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
    lyrics: "/lyrics/khatereh",
  },
  {
    title: "پنجره",
    file: "/Panjereh.mp3",
    lyrics: "/lyrics/panjereh",
  },
  {
    title: "وقتی رسیدم",
    file: "/When-resid.mp3",
    lyrics: "/lyrics/vaghti-residam",
  },
  {
    title: "ایران",
    file: "/Iran.mp3",
    lyrics: "/lyrics/iran",
  },
  {
    title: "کوچه گرد",
    file: "/KoocheGard.mp3",
    lyrics: "/lyrics/kooche-gard",
  },
  {
    title: "بی کران",
    file: "/Bikaran.mp3",
    lyrics: "/lyrics/bikaran",
  },
  {
    title: "جان و دل",
    file: "/Jan-o-Del.mp3",
    lyrics: "/lyrics/jan-o-del",
  },
  {
    title: "شکوه",
    file: "/Shekveh.mp3",
    lyrics: "/lyrics/shekveh",
  },
  {
    title: "عشق ویرانگر",
    file: "/eshgh-virangar.mp3",
    lyrics: "/lyrics/eshgh-virangar",
  },
  {
    title: "میخانه",
    file: "/meykhaneh.mp3",
    lyrics: "/lyrics/meykhaneh",
  },
  {
    title: "فصل عشق",
    file: "/fasle-eshgh.mp3",
    lyrics: "/lyrics/fasle-eshgh",
  },
  {
    title: "بارون",
    file: "/baroon.mp3",
    lyrics: "/lyrics/baroon",
  },
  {
    title: "کاش",
    file: "/Kash.mp3",
    lyrics: "/lyrics/kash",
  },
  {
    title: "کابوس",
    file: "/kaboos.mp3",
    lyrics: "/lyrics/kaboos",
  },
  {
    title: "مست مستم",
    file: "/mast-mastam.mp3",
    lyrics: "/lyrics/mast-mastam",
  },
  {
    title: "وقت مستی",
    file: "/vaght-e-masti.mp3",
    lyrics: "/lyrics/vaght-e-masti",
  },
  {
    title: "خدایی",
    file: "/khodaei.mp3",
    lyrics: "/lyrics/khodaei",
  },
  {
    title: "می‌فهمی",
    file: "/mifahmi.mp3",
    lyrics: "/lyrics/mifahmi",
  },
  {
    title: "آخرین دیدار",
    file: "/akharin-didar.mp3",
    lyrics: "/lyrics/akharin-didar",
  },
  {
    title: "سکوت و بی‌صدایی",
    file: "/sokoot-va-bi-sedayi.mp3",
    lyrics: "/lyrics/sokoot-va-bi-sedayi",
  },
  {
    title: "رخ دلدار",
    file: "/rokhe-deldar.mp3",
    lyrics: "/lyrics/rokhe-deldar",
  },
  {
    title: "چه تلخه",
    file: "/che-talkheh.mp3",
    lyrics: "/lyrics/che-talkheh",
  },
  {
    title: "فرصت دیدار",
    file: "/forsat-e-didar.mp3",
    lyrics: "/lyrics/forsat-e-didar",
  },
];

const handleSongDownload = (songTitle: string, fileName: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "download_song", {
      song_name: songTitle,
      file_name: fileName,
    });
  }
};

export default function Home() {
  useEffect(() => {
    const savedPosition =
      sessionStorage.getItem("musicScrollPosition");

    if (savedPosition) {
      const position = Number(savedPosition);

      setTimeout(() => {
        window.scrollTo({
          top: position,
          behavior: "instant",
        });
      }, 100);
    }
  }, []);

  const handleLyricClick = () => {
    sessionStorage.setItem(
      "musicScrollPosition",
      String(window.scrollY)
    );
  };

  return (
    <main>
      <header>
        <div className="header-inner">
          <Link href="/" className="site-logo">
            مهتا قهرمان
          </Link>

          <nav>
            <a href="#music">آهنگ‌ها</a>
            <a href="#about">درباره من</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="hero-content">
          <div className="hero-image">
            <Image
              src="/profile.jpg"
              alt="مهتا قهرمان"
              width={220}
              height={220}
              priority
            />
          </div>

          <div className="hero-text">
            <h1>مهتا قهرمان</h1>
            <p>شاعر، ترانه‌سرا و عاشق واژه‌ها</p>
            <p>جایی برای شعرها، ترانه‌ها و موسیقی‌های من</p>
          </div>
        </div>
      </section>

      <section id="music" className="music-section">
        <div className="section-title">
          <h2>🎵 آهنگ‌ها</h2>
          <p>مجموعه‌ای از ترانه‌ها و آثار موسیقی من</p>
        </div>

        <div className="songs-list">
          {songs.map((song) => (
            <article
              key={song.title}
              className="song-card"
            >
              <h3>{song.title}</h3>

              <audio controls preload="none">
                <source
                  src={song.file}
                  type="audio/mpeg"
                />
                مرورگر شما از پخش فایل صوتی پشتیبانی نمی‌کند.
              </audio>

              <div className="song-info">
                <p>
                  <strong>ترانه‌سرا:</strong> مهتا قهرمان
                </p>

                <p>
                  <strong>اجرا و تولید موسیقی:</strong>{" "}
                  با استفاده از هوش مصنوعی
                </p>
              </div>

              <div className="song-actions">
                <Link
                  href={song.lyrics}
                  className="lyrics-button"
                  onClick={handleLyricClick}
                >
                  📖 متن ترانه
                </Link>

                <a
                  href={song.file}
                  download
                  className="lyrics-button download-button"
                  onClick={() =>
                    handleSongDownload(
                      song.title,
                      song.file
                    )
                  }
                  aria-label={`دانلود آهنگ ${song.title}`}
                >
                  ⬇️ دانلود آهنگ
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="section-title">
          <h2>👩 درباره من</h2>
        </div>

        <div className="about-content">
          <p>
            من مهتا قهرمان هستم؛ شاعر و ترانه‌سرا.
          </p>

          <p>
            شعر برای من راهی برای گفتن چیزهایی‌ست که گاهی
            نمی‌شود با زبان معمولی بیانشان کرد.
          </p>

          <p>
            این سایت خانه‌ای برای شعرها، ترانه‌ها و موسیقی‌های
            من است.
          </p>
        </div>
      </section>

      <footer>
        <p>© مهتا قهرمان</p>
        <p>شعر، ترانه و موسیقی</p>
      </footer>
    </main>
  );
}
