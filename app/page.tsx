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

            <p>ترانه‌سرا: مهتا قهرمان</p>


            <audio controls>
              <source src="/Khatereh.mp3" type="audio/mpeg" />
            </audio>


            <div className="song-text">

              <h4>متن ترانه</h4>

              <p>
                ریشه کرده خاطره در فکرِ من<br />
                برگ‌برگِ شاخه‌هایش ذکرِ من<br />
                من کنارِ واژه‌ای جا مانده‌ام<br />
                دور از آن واژه، چه تنها مانده‌ام<br /><br />

                من اسیرِ دستِ تقدیرم شدم<br />
                پای‌بندِ قفلِ زنجیرم شدم<br /><br />

                دردِ بی‌درمانِ من عشقِ تو بود<br />
                آخرین سامانِ من عشقِ تو بود
              </p>

            </div>

          </div>



          <div className="music-card">

            <div className="cover-image">
              <Image
                src="/Panjereh-cover.png"
                alt="کاور آهنگ پنجره"
                fill
              />
            </div>


            <h3>پنجره</h3>

            <p>ترانه‌سرا: مهتا قهرمان</p>


            <audio controls>
              <source src="/Panjereh.mp3" type="audio/mpeg" />
            </audio>


            <div className="song-text">

              <h4>متن ترانه</h4>

              <p>
                منو یک پنجره، در باغ رویا<br />
                شکستیم، وقت دل بستن به دنیا<br />
                منو هق هق، منو زاری<br />
                منو یک بغض تکراری<br />
                که در من<br />
                مونده انگاری<br /><br />

                زمستون و هوای سرد<br />
                دلی که کنده شد از درد<br />
                منو حسرت، منو نفرت<br />
                چشای مونده در ظلمت<br /><br />

                منو تنهایی مهتاب<br />
                نگاهی خیره و بی تاب<br />
                منو حال پریشونم<br />
                از این دنیاست<br />
                که ویرونم
              </p>

            </div>

          </div>


        </div>

      </section>
            <section className="poems">

        <h2>شعرها</h2>


        <article>

          <h3>خاطره</h3>

          <p className="author">
            ترانه‌سرا: مهتا قهرمان
          </p>

          <p>
            ریشه کرده خاطره در فکرِ من<br />
            برگ‌برگِ شاخه‌هایش ذکرِ من<br />
            من کنارِ واژه‌ای جا مانده‌ام<br />
            دور از آن واژه، چه تنها مانده‌ام<br /><br />

            من اسیرِ دستِ تقدیرم شدم<br />
            پای‌بندِ قفلِ زنجیرم شدم<br /><br />

            دردِ بی‌درمانِ من عشقِ تو بود<br />
            آخرین سامانِ من عشقِ تو بود
          </p>

        </article>



        <article>

          <h3>پنجره</h3>

          <p className="author">
            ترانه‌سرا: مهتا قهرمان
          </p>


          <p>
            منو یک پنجره، در باغ رویا<br />
            شکستیم، وقت دل بستن به دنیا<br />
            منو هق هق، منو زاری<br />
            منو یک بغض تکراری<br />
            که در من<br />
            مونده انگاری<br /><br />

            زمستون و هوای سرد<br />
            دلی که کنده شد از درد<br />
            منو حسرت، منو نفرت<br />
            چشای مونده در ظلمت<br /><br />

            منو تنهایی مهتاب<br />
            نگاهی خیره و بی تاب<br />
            منو حال پریشونم<br />
            از این دنیاست<br />
            که ویرونم
          </p>

        </article>


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
