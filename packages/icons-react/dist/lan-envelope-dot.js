import React from 'react';

export const LanEnvelopeDot = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M448 80a48 48 0 1 1 96 0 48 48 0 1 1-96 0m128 0a80 80 0 1 0-160 0 80 80 0 1 0 160 0m-32 304V198.7c-10.1 4.1-20.8 6.9-32 8.3v177c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V175.6l176.7 129.6c28.2 20.6 66.5 20.6 94.6 0l135.8-99.6c-12.9-2.5-25.1-7-36.2-13.1l-118.5 86.8c-16.9 12.4-39.9 12.4-56.8 0L74.8 143.8c-6.8-5-10.8-12.9-10.8-21.3C64 107.9 75.9 96 90.5 96H369c-.7-5.2-1-10.6-1-16s.3-10.8 1-16H90.5C59 64 33.3 88.9 32.1 120H32v264c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64"})
);

export default LanEnvelopeDot;
