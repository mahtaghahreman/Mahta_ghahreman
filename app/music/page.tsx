
export default function MusicPage() {
  return (
    <main className="lyrics-page">

      <h1>آهنگ‌ها</h1>

      <div className="music-list">

        <div className="music-card">
          <h3>خاطره</h3>
          <p>ترانه‌سرا: مهتا قهرمان</p>

          <audio controls>
            <source src="/Khatereh.mp3" type="audio/mpeg" />
          </audio>
        </div>


        <div className="music-card">
          <h3>پنجره</h3>
          <p>ترانه‌سرا: مهتا قهرمان</p>

          <audio controls>
            <source src="/Panjereh.mp3" type="audio/mpeg" />
          </audio>
        </div>


        <div className="music-card">
          <h3>وقتی رسیدم</h3>
          <p>ترانه‌سرا: مهتا قهرمان</p>
          <p>اجرا و تولید موسیقی: با استفاده از هوش مصنوعی</p>

          <audio controls>
            <source src="/When-resid.mp3" type="audio/mpeg" />
          </audio>
        </div>


        <div className="music-card">
          <h3>ایران</h3>
          <p>ترانه‌سرا: مهتا قهرمان</p>
          <p>اجرا و تولید موسیقی: با استفاده از هوش مصنوعی</p>

          <audio controls>
            <source src="/Iran.mp3" type="audio/mpeg" />
          </audio>
        </div>


        <div className="music-card">
          <h3>کوچه گرد</h3>
          <p>ترانه‌سرا: مهتا قهرمان</p>
          <p>اجرا و تولید موسیقی: با استفاده از هوش مصنوعی</p>

          <audio controls>
            <source src="/KoocheGard.mp3" type="audio/mpeg" />
          </audio>
        </div>


        <div className="music-card">
          <h3>بی کران</h3>
          <p>ترانه‌سرا: مهتا قهرمان</p>
          <p>اجرا و تولید موسیقی: با استفاده از هوش مصنوعی</p>

          <audio controls>
            <source src="/Bikaran.mp3" type="audio/mpeg" />
          </audio>
        </div>

      </div>

    </main>
  );
}

