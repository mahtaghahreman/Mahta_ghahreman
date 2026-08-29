
export default function BaroonPage() {
  return (
    <main className="lyrics-page">
      <h1>بارون</h1>

      <audio
        controls
        preload="metadata"
        style={{
          width: "100%",
          maxWidth: "700px",
          marginBottom: "35px",
        }}
      >
        <source src="/baroon.mp3" type="audio/mpeg" />
        مرورگر شما از پخش صوت پشتیبانی نمی‌کند.
      </audio>

      <div className="lyrics-text">
        <p>
          دیدن تو مِثه بارون<br />
          پرِاز حس ترانست<br />
          وقت گفتن از نگاهت<br />
          دل من پر از بهانست
        </p>

        <p>
          نگاه تو مثه خورشید<br />
          پشت ابرای سیاهِ<br />
          منو میبره تو رویا<br />
          مگه عاشقی گناهِ
        </p>

        <p>
          با تو من قدم میزارم<br />
          توی کوچه زیر بارون<br />
          وقتی تو کنارم هستی<br />
          عاشقی میشه چه آسون
        </p>

        <p>
          ساز گنجشکای خیسُ<br />
          صدای خِش خِش برگا<br />
          هم صدا میشن باهامون<br />
          زیر بارون حتی سنگا...
        </p>
      </div>
    </main>
  );
}
