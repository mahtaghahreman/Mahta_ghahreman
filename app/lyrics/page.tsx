```jsx
import Link from "next/link";

export default function LyricsPage() {
  return (
    <main className="lyrics-page">

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

        <Link href="/lyrics/iran-farsi">
         ایران  
        </Link>

        <Link href="/lyrics/kooche-gard">
          کوچه گرد
        </Link>

        <Link href="/lyrics/bikaran">
          بی کران
        </Link>

      </div>

    </main>
  );
}
```
