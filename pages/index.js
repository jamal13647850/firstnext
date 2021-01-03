
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>صفحه اول</title>
        <meta name="robots" content="noindex,nofollow"></meta>
      </Head>
      <div className="container">
        <Link href="/second">مراجعه به صفحه بعد</Link>
        <br></br>
        <Link href="/contact">درباره ما</Link>
        <p className="para">این متن یک تست</p>
      </div>
      <style jsx>
        {
          `
            .para{
              color:red;
            }
          `
        }
      </style>
    </div>

  )
}
