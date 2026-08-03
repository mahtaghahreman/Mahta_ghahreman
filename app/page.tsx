import Image from "next/image";

export default function Home() {
  return (
    <main className="home">

      <header className="header">
        <h1>مهتا قهرمان</h1>

        <nav>
          <a href="#">خانه</a>
          <a href="#">درباره من</a>
          <a href="#">آهنگ‌ها</a>
        </nav>
      </header>


      <section className="hero">

        <div className="hero-image">
          <Image
            src="/Mahta.jpg"
            alt="Mahta Ghahreman"
            fill
            priority
            sizes="(max-width:768px) 100vw, 1100px"
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


        <div className="music-list">


          <div className="music-card">

            <div className="cover-image">

              <Image
                src="/Khatereh-cover.png"
                alt="کاور آهنگ خاطره"
                fill
              />

            </div>


            <h3>خاطره</h3>

            <p>
              ترانه‌سرا: مهتا قهرمان
            </p>


            <audio controls>

              <source
                src="/Khatereh.mp3"
                type="audio/mpeg"
              />

            </audio>


          </div>



          <div className="music-card">

            <h3>پنجره</h3>

            <p>
              ترانه‌سرا: مهتا قهرمان
            </p>


            <audio controls>

              <source
                src="/Panjereh.mp3"
                type="audio/mpeg"
              />

            </audio>


          </div>



          <div className="music-card">

            <h3>وقتی رسیدم</h3>

            <p>
              ترانه‌سرا: مهتا قهرمان
            </p>

            <p>
              اجرا و تولید موسیقی: با استفاده از هوش مصنوعی
            </p>


            <audio controls>

              <source
                src="/When-resid.mp3"
                type="audio/mpeg"
              />

            </audio>


          </div>


        </div>


      </section>
            <section className="contact">

        <h2>ارتباط با ما</h2>


        <div className="contact-box">

          <div className="contact-icon">
            📷
          </div>


          <div>

            <h3>Instagram</h3>

            <a
              href="https://instagram.com/mahtaghahreman"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://instagram.com/mahtaghahreman
            </a>

          </div>

        </div>




        <div className="contact-box">

          <div className="contact-icon">
            ▶️
          </div>


          <div>

            <h3>YouTube</h3>

            <a
              href="https://youtube.com/@mahta.ghahreman"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://youtube.com/@mahta.ghahreman
            </a>

          </div>

        </div>


      </section>




      <footer>
        © 2026 Mahta Ghahreman
      </footer>


    </main>
  );
}
