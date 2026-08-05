import React from 'react';

export function LanDownloadThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M224 0c4.4 0 8 3.6 8 8v316.7l106.3-106.3c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3l-120 120c-3.1 3.1-8.2 3.1-11.3 0l-120-120c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0L216 324.7V8c0-4.4 3.6-8 8-8M104.8 304l16 16H64c-26.5 0-48 21.5-48 48v48c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48v-48c0-26.5-21.5-48-48-48h-56.8l16-16H384c35.3 0 64 28.7 64 64v48c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64v-48c0-35.3 28.7-64 64-64zM336 392a16 16 0 1 0 32 0 16 16 0 1 0-32 0m16 32a32 32 0 1 1 0-64 32 32 0 1 1 0 64"})
  );
}

export default LanDownloadThin;
