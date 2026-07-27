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
          <a href="#">ارتباط</a>
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

            <h3>خاطره</h3>

            <p>
              ریشه کرده خاطره در فکرِ من<br />
              برگ‌برگِ شاخه‌هایش ذکرِ من<br />
              من کنارِ واژه‌ای جا مانده‌ام<br />
              دور از آن واژه، چه تنها مانده‌ام<br />
              <br />

              من اسیرِ دستِ تقدیرم شدم<br />
              پای‌بندِ قفلِ زنجیرم شدم<br />
              دردِ بی‌درمانِ من عشقِ تو بود<br />
              آخرین سامانِ من عشقِ تو بود<br />
              <br />

              واژه‌ای، با اشکِ من هم‌زاد شد<br />
              هر غزل، آیینهٔ فریاد شد<br />
              از تو تنها یک غزل در یاد ماند<br />
              شاعری ماند و دلی بر باد ماند
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

        <p>
          © 2026 Mahta Ghahreman
        </p>

      </footer>


    </main>
  );
}
