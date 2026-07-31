import React from 'react';

export const LanMusicMagnifyingGlass = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M480 208c0 74.6-46.4 138.4-112 164v34c26.5-8.6 50.7-22.3 71.3-40l141.4 141.3c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L462 343.3c31.2-36.4 50-83.7 50-135.3C512 93.1 418.9 0 304 0 196.6 0 108.3 81.3 97.2 185.7c.6-.1 1.2-.3 1.8-.4l31.5-6.6C144.3 95.5 216.8 32 304 32c97.2 0 176 78.8 176 176m-160 0c0-4.8-2.2-9.4-5.9-12.4s-8.6-4.2-13.4-3.2l-192 40c-7.4 1.5-12.7 8-12.7 15.6v159.6c-9.4-4.8-20.3-7.5-32-7.5-35.6 0-64 25.3-64 56s28.4 56 64 56 64-25.3 64-56V341l160-33.3v67.9c-9.4-4.8-20.3-7.5-32-7.5-35.6 0-64 25.3-64 56s28.4 56 64 56 64-25.3 64-56zm-32 67-160 33.3V261l160-33.3zM32 456.1c0-9.6 10.4-24 32-24s32 14.4 32 24-10.4 24-32 24-32-14.4-32-24m224-56c21.6 0 32 14.4 32 24s-10.4 24-32 24-32-14.4-32-24 10.4-24 32-24"})
);

export default LanMusicMagnifyingGlass;
