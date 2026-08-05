import React from 'react';

export function LanFaceRaisedEyebrowThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-64-256a16 16 0 1 0-32 0 16 16 0 1 0 32 0m144 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32M176 376c0 4.4 3.6 8 8 8h144c4.4 0 8-3.6 8-8s-3.6-8-8-8H184c-4.4 0-8 3.6-8 8m156.1-220c10.3-9 26-7.6 34.5 3.1l11.2 13.9c2.8 3.5 7.8 4 11.2 1.2s4-7.8 1.2-11.2l-11.1-13.9c-14.2-17.8-40.4-20.1-57.6-5.1l-38.8 34c-3.3 2.9-3.7 8-.8 11.3s8 3.7 11.3.8l38.8-34zM128 176c-4.4 0-8 3.6-8 8s3.6 8 8 8h64c4.4 0 8-3.6 8-8s-3.6-8-8-8z"})
  );
}

export default LanFaceRaisedEyebrowThin;
