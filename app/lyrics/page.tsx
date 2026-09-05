import Link from "next/link";

export default function LyricsPage() {
  return (
    <main>
      <h1>اشعار</h1>

      <div className="lyrics-list">
        <Link href="/lyrics/khatereh">
          خاطره
        </Link>

        <Link href="/lyrics/panjereh">
          پنجره
        </Link>

        <Link href="/lyrics/vaghti-residam">
          وقتی رسیدم
        </Link>

        <Link href="/lyrics/iran">
          ایران
        </Link>

        <Link href="/lyrics/kooche-gard">
          کوچه گرد
        </Link>

        <Link href="/lyrics/bikaran">
          بی کران
        </Link>

        <Link href="/lyrics/jan-o-del">
          جان و دل
        </Link>

        <Link href="/lyrics/shekveh">
          شکوه
        </Link>

        <Link href="/lyrics/eshgh-virangar">
          عشق ویرانگر
        </Link>

        <Link href="/lyrics/meykhaneh">
          میخانه
        </Link>

        <Link href="/lyrics/fasle-eshgh">
          فصل عشق
        </Link>

        <Link href="/lyrics/baroon">
          بارون
        </Link>

        <Link href="/lyrics/kash">
          کاش
        </Link>

        <Link href="/lyrics/kaboos">
          کابوس
        </Link>

        <Link href="/lyrics/mast-mastam">
          مست مستم
        </Link>

        <Link href="/lyrics/vaght-e-masti">
          وقت مستی
        </Link>

        <Link href="/lyrics/khodaei">
          خدایی
        </Link>

        <Link href="/lyrics/mifahmi">
          می‌فهمی
        </Link>

        <Link href="/lyrics/akharin-didar">
          آخرین دیدار
        </Link>

        <Link href="/lyrics/sokoot-va-bi-sedayi">
          سکوت و بی‌صدایی
        </Link>
      </div>
    </main>
  );
}
