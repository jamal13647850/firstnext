
import Link from "next/link";
import Head from "next/head";

export default function Second() {
  return (
    <div>
      <Head>
        <title>صفحه دوم</title>
      </Head>
      <div className="container">
        <img src="/vercel.svg" />
      </div>

      <ul>
        <li>
          <Link href="/shop/product/41">محصول شماره ۱</Link>
        </li>

        <li>
          <Link href="/shop/product/42">محصول شماره ۲</Link>
        </li>


        <li>
          <Link href="/shop/product2/cattest/pr43">محصول شماره ۳</Link>
        </li>
      </ul>
    </div>

  )
}
