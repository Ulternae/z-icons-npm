import React from 'react';

export function LanUploadThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M232 344V27.3l106.3 106.3c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-120-120c-3.1-3.1-8.2-3.1-11.3 0l-120 120c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L216 27.3V344c0 4.4 3.6 8 8 8s8-3.6 8-8m48-24h104c26.5 0 48 21.5 48 48v48c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48v-48c0-26.5 21.5-48 48-48h104v-16H64c-35.3 0-64 28.7-64 64v48c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64v-48c0-35.3-28.7-64-64-64H280zm88 72a16 16 0 1 1-32 0 16 16 0 1 1 32 0m-16-32a32 32 0 1 0 0 64 32 32 0 1 0 0-64"})
  );
}

export default LanUploadThin;
