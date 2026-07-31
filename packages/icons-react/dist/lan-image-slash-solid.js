import React from 'react';

export const LanImageSlashSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -31.95 576 576.1',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-62.1-62.1c3.3-7.7 5.1-16.2 5.1-25.1V96c0-35.3-28.7-64-64-64H128c-8.9 0-17.4 1.8-25.1 5.1l-62-62zm138.5 138.5c4-1.1 8.2-1.6 12.5-1.6 26.5 0 48 21.5 48 48 0 4.3-.6 8.5-1.6 12.5zm130.6 130.7 5.4-8.8c4.4-7.1 12.1-11.5 20.5-11.5s16.1 4.4 20.5 11.5l86.7 141.8-133-133zM64 133.8V416c0 35.3 28.7 64 64 64h282.2l-64-64H152c-8.9 0-17.2-5-21.3-12.9s-3.5-17.5 1.6-24.8l56-80c4.5-6.4 11.8-10.2 19.7-10.2l10.2-.1z"})
);

export default LanImageSlashSolid;
