export interface SEOProps {
  title: string;
  description?: string;
  imageUrl?: string;
}
export default function SEO({ title, description, imageUrl }: SEOProps) {
  return (
    <>
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
    </>
  );
}
