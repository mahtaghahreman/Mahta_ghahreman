import Image from "next/image";

export default function Home() {
  return (
    <main className="home">

      <header className="header">
        <h1>مهتا قهرمان</h1>

        <nav>
          <a href="#">خانه</a>
          <a href="#">درباره من</a>
          <a href="#">شعرها</a>
          <a href="#">آهنگ‌ها</a>
        </nav>
      </header>


      <section className="hero">

        <div className="image-box">
          <Image
            src="/Mahta.jpg"
            alt="Mahta Ghahreman"
            width={900}
            height={600}
            priority
          />
        </div>


        <div className="intro">
          <h2>Mahta Ghahreman</h2>

          <p>
            هر ترانه، تکه‌ای از یک زندگی...
          </p>

          <p>
            شعرهایی از عشق، دلتنگی، احساس و لحظه‌هایی که در دل آدم‌ها ماندگار می‌شوند.
          </p>
        </div>

      </section>


      <section className="music">

        <h2>🎵 آهنگ‌ها</h2>

        <div className="music-card">

          <h3>خاطره</h3>

          <audio controls>
            <source
              src="/Khatereh.mp3"
              type="audio/mpeg"
            />
            مرورگر شما از پخش صوت پشتیبانی نمی‌کند.
          </audio>

        </div>

      </section>


      <section className="poems">

        <h2>آخرین شعرها</h2>

        <div className="cards">

          <article>
            <h3>شعر اول</h3>
            <p>
              به زودی...
            </p>
          </article>

          <article>
            <h3>شعر دوم</h3>
            <p>
              به زودی...
            </p>
          </article>

        </div>

      </section>


      <footer>
        © 2026 Mahta Ghahreman
      </footer>

    </main>
  );
}
