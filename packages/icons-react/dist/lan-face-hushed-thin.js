import React from 'react';

export const LanFaceHushedThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M496 256a240 240 0 1 0-480 0 240 240 0 1 0 480 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m176-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32m144 16a16 16 0 1 1 32 0 16 16 0 1 1-32 0m-.5-112c-4.4-.3-7.8-4.1-7.5-8.5s4.1-7.8 8.5-7.5c36.7 2.3 69.6 18.6 93.3 43.7 3 3.2 2.9 8.3-.3 11.3s-8.3 2.9-11.3-.3C381.1 160.5 352 146 319.5 144M208 135.8c.2 4.4-3.1 8.2-7.6 8.4-37.2 2-70.5 19-93.8 45.1-2.9 3.3-8 3.6-11.3.6s-3.6-8-.6-11.3c26.1-29.1 63.2-48.2 104.9-50.4 4.4-.2 8.2 3.1 8.4 7.6M304 384a48 48 0 1 0-96 0 48 48 0 1 0 96 0m-112 0a64 64 0 1 1 128 0 64 64 0 1 1-128 0"})
);

export default LanFaceHushedThin;
