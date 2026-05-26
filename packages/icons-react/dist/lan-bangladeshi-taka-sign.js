import React from 'react';

export const LanBangladeshiTakaSign = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M50 32.1C41.2 31 33.2 37.2 32.1 46S37.2 62.8 46 63.9l7.9 1c24 3 42 23.4 42 47.6V192h-48c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v176c0 44.2 35.8 80 80 80h32c97.2 0 176-78.8 176-176v-32c0-44.2-35.8-80-80-80h-32c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c26.5 0 48 21.5 48 48v32c0 79.5-64.5 144-144 144h-32c-26.5 0-48-21.5-48-48V224h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48v-79.5c0-40.3-30-74.4-70.1-79.4l-7.9-1z"})
);

export default LanBangladeshiTakaSign;
