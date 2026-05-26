import React from 'react';

export const LanSubtitlesSlashRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-61.4-61.4c21.6-10.4 36.5-32.3 36.5-57.8V128c0-35.3-28.7-64-64-64H129.8zM177.8 112H480c8.8 0 16 7.2 16 16v256c0 8.8-7.2 16-16 16h-14.2l-48-48H440c13.3 0 24-10.7 24-24s-10.7-24-24-24h-70.2zm104.4 240-48-48H136c-13.3 0-24 10.7-24 24s10.7 24 24 24zm-96.1-96.1L138.2 208H136c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c.7 0 1.4 0 2.1-.1M80 384V149.8l-44-44c-2.6 6.9-4 14.4-4 22.2v256c0 35.3 28.7 64 64 64h282.2l-48-48H96c-8.8 0-16-7.2-16-16m360-176h-48c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24"})
);

export default LanSubtitlesSlashRegular;
