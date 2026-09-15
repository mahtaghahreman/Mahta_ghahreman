export default function CheTalkhehPage() {
  return (
    <main className="lyrics-page">
      <h1>چه تلخه</h1>

      <audio
        controls
        preload="metadata"
        style={{
          width: "100%",
          maxWidth: "700px",
          marginBottom: "35px",
        }}
      >
        <source src="/che-talkheh.mp3" type="audio/mpeg" />
        مرورگر شما از پخش صوت پشتیبانی نمی‌کند.
      </audio>

      <div className="lyrics-text">
        <p>
          چه تلخه مرهمی بر زخم باشی<br />
          ولی زخمی تر از هر زخم باشی<br />
          شریک و یار و غمخوار عزیزان<br />
          ولی از عشقشون بی سهم باشی
        </p>

        <p>
          خدایا این چه رسم روزگارهِ<br />
          چرا باید تو هم بی رحم باشی<br />
          مگه میشه تو سرمای نگاهی<br />
          بمونیُ هنوز دل گرم باشی
        </p>

        <p>
          به دریا میزنم دل را از این غم<br />
          از اون روزی که تو یارم نباشی<br />
          دلم می خواست باشی وقت گریه<br />
          برایم شانه باشی غم نباشی
        </p>

        <p>
          ببندم چشم خونینم به دنیا<br />
          که شاید تو برایم چشم باشی
        </p>
      </div>
    </main>
  );
}
