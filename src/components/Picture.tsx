import React from 'react';

type PictureProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  webpQuality?: number;
};

/**
 * Renders a <picture> that prefers a sibling .webp and falls back to the given src.
 * If the src already ends with .webp or .svg, renders a plain <img>.
 */
export function Picture({ src, alt = '', className, loading, style, sizes, srcSet, webpQuality, ...rest }: PictureProps) {
  const lower = (src || '').toLowerCase();
  const isWebp = lower.endsWith('.webp');
  const isSvg = lower.endsWith('.svg');

  // URL-encode the src to handle spaces and special characters
  const encodedSrc = src ? encodeURI(src) : src;

  // Only pass srcSet if it's explicitly provided and doesn't look malformed
  const safeSrcSet = srcSet && !srcSet.includes(' /') ? srcSet : undefined;

  if (isWebp || isSvg) {
    return <img src={encodedSrc} alt={alt} className={className} loading={loading} style={style} sizes={sizes} srcSet={safeSrcSet} {...rest} />;
  }

  // Derive the .webp path by swapping common raster extensions; browsers will fall back if missing
  const webpSrc = encodedSrc.replace(/\.(jpg|jpeg|png)$/i, '.webp');

  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      <img src={encodedSrc} alt={alt} className={className} loading={loading} style={style} sizes={sizes} srcSet={safeSrcSet} {...rest} />
    </picture>
  );
}

export default Picture;

