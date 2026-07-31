import React from 'react';

export const LanFaceAstonishedThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M496 256a240 240 0 1 0-480 0 240 240 0 1 0 480 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m304 96c0-26.5-21.5-48-48-48s-48 21.5-48 48v32c0 26.5 21.5 48 48 48s48-21.5 48-48zm-112 0c0-35.3 28.7-64 64-64s64 28.7 64 64v32c0 35.3-28.7 64-64 64s-64-28.7-64-64zm-32-128a16 16 0 1 1 32 0 16 16 0 1 1-32 0m176-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32m-24-88.5c.3-4.4 4.1-7.8 8.5-7.5 36.7 2.3 69.6 18.6 93.3 43.7 3 3.2 2.9 8.3-.3 11.3s-8.3 2.9-11.3-.3C381.1 144.5 352 130 319.5 128c-4.4-.3-7.8-4.1-7.5-8.5m-111.6 8.7c-37.2 2-70.5 19-93.8 45.1-2.9 3.3-8 3.6-11.3.6s-3.6-8-.6-11.3c26.1-29.1 63.2-48.2 104.9-50.4 4.4-.2 8.2 3.1 8.4 7.6s-3.1 8.2-7.6 8.4"})
);

export default LanFaceAstonishedThin;
