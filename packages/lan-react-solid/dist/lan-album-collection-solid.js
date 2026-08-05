import React from 'react';

export function LanAlbumCollectionSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M128.5 24c0 13.3 10.7 24 24 24h208c13.3 0 24-10.7 24-24s-10.7-24-24-24h-208c-13.3 0-24 10.7-24 24m-64 168c-13.9 0-27.1 6-36.3 16.6S15 233 17 246.8l32 224c3.4 23.6 23.6 41.2 47.5 41.2h320c23.9 0 44.1-17.6 47.5-41.2l32-224c2-13.8-2.1-27.7-11.3-38.2S462.4 192 448.5 192zm352 160c0 61.9-71.6 112-160 112s-160-50.1-160-112 71.6-112 160-112 160 50.1 160 112m-160 28c22.1 0 40-12.5 40-28s-17.9-28-40-28-40 12.5-40 28 17.9 28 40 28m-152-284c-13.3 0-24 10.7-24 24s10.7 24 24 24h304c13.3 0 24-10.7 24-24s-10.7-24-24-24z"})
  );
}

export default LanAlbumCollectionSolid;
