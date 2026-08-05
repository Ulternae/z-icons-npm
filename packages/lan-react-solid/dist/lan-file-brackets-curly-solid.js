import React from 'react';

export function LanFileBracketsCurlySolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M213.5 0c17 0 33.3 6.8 45.3 18.8l106.5 106.4c12 12 18.7 28.3 18.7 45.2V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0zM120 228c-19.9 0-36 16.1-36 36v28.4l-26.9 30.3c-6.7 7.6-6.7 19 0 26.6L84 379.6V408c0 19.9 16.1 36 36 36h16c11 0 20-9 20-20s-9-20-20-20h-12v-25.9c0-7.7-2.5-15.2-7-21.4l-2.1-2.6-16.2-18.2 16.2-18.2 2.1-2.6c4.5-6.2 7-13.7 7-21.4v-25.9h12c11 0 20-9 20-20s-9-20-20-20h-16zm128 0c-11 0-20 9-20 20s9 20 20 20h12v25.9c0 7.7 2.5 15.2 7 21.4l2.1 2.6 16.2 18.2-16.2 18.2-2.1 2.6c-4.5 6.2-7 13.7-7 21.4v25.9h-12c-11 0-20 9-20 20s9 20 20 20h16c19.9 0 36-16.1 36-36v-28.4l26.9-30.3c6.7-7.6 6.7-19 0-26.6L300 292.4V264c0-19.9-16.1-36-36-36zm-40-76c0 13.3 10.7 24 24 24h93.5L208 58.5z"})
  );
}

export default LanFileBracketsCurlySolid;
