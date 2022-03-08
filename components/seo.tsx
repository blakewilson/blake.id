import Head from "next/head";
import Script from "next/script";

export interface SEOProps {
  title: string;
  description?: string;
  imageUrl?: string;
}
export default function SEO({ title, description, imageUrl }: SEOProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta property="og:title" content={title} />
        <meta property="twitter:title" content={title} />

        <meta property="og:type" content="website" />
        <meta property="twitter:card" content="summary_large_image" />

        {description && (
          <>
            <meta name="description" content={description} />
            <meta property="og:description" content={description} />
            <meta property="twitter:description" content={description} />
          </>
        )}

        {imageUrl && (
          <>
            <meta property="og:image" content={imageUrl} />
            <meta property="twitter:image" content={imageUrl} />
          </>
        )}

        {/* <meta property="og:url" content={url} />
      <meta property="twitter:url" content={url} /> */}
      </Head>

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=UA-132058143-4"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-132058143-4');
        `}
      </Script>
    </>
  );
}
