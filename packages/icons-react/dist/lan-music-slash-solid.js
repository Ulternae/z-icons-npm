import React from 'react';

export const LanMusicSlashSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L468.7 402.9C494.8 388.6 512 364 512 336V32c0-9.7-4.4-18.9-12-25s-17.5-8.4-27-6.3l-288 64c-14 3.2-24.2 15.3-25 29.5zm212.1 212.1L448 143.9v116.7c-10-2.9-20.8-4.6-32-4.6-27.3 0-51.9 9.5-69.4 24.7zM160 229.8v94.7c-10-2.9-20.8-4.6-32-4.6-53 0-96 35.8-96 80s43 80 96 80 96-35.8 96-80V293.7l-64-64z"})
);

export default LanMusicSlashSolid;
