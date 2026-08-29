
export default function KaboosPage() {
  return (
    <main className="lyrics-page">
      <h1>کابوس</h1>

      <audio
        controls
        preload="metadata"
        style={{
          width: "100%",
          maxWidth: "700px",
          marginBottom: "35px",
        }}
      >
        <source src="/kaboos.mp3" type="audio/mpeg" />
        مرورگر شما از پخش صوت پشتیبانی نمی‌کند.
      </audio>

      <div className="lyrics-text">
        <p>
          اگه کابوس این شبها تموم شه<br />
          اگه بغضِ تو سینم سرنگون شه<br />
          اگه دستات حریم گرم من شه<br />
          دوباره ابر غم رنگین کمون شه
        </p>

        <p>
          می سازم با تو دنیایی رو هر دم<br />
          می جنگم با تو با هر فصل سردم<br />
          می کارم باز گل یاس و تو باغچه<br />
          میزارم عکسی از عشق روی طاقچه
        </p>

        <p>
          درای خونه رو رو غم میبندم<br />
          کنار تو من از شادی میخندم<br />
          می خونم با نوایی عاشقونه<br />
          که این عشق هدیه ای از آسمونه
        </p>

        <p>
          میدونم آخر این عشق قشنگه<br />
          دلت با دل من صاف و یه‌رنگه<br />
          اگه باشی کنارم ماه رو دارم<br />
          شب وکابوسو پشت سر میزارم
        </p>
      </div>
    </main>
  );
}
