import React from 'react';

export const LanUserAlt = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M128 128a96 96 0 1 1 192 0 96 96 0 1 1-192 0m224 0a128 128 0 1 0-256 0 128 128 0 1 0 256 0M32 480c0-79.5 64.5-144 144-144h96c79.5 0 144 64.5 144 144v16c0 8.8 7.2 16 16 16s16-7.2 16-16v-16c0-97.2-78.8-176-176-176h-96C78.8 304 0 382.8 0 480v16c0 8.8 7.2 16 16 16s16-7.2 16-16z"})
);

export default LanUserAlt;
