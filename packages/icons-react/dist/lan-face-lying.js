import React from 'react';

export const LanFaceLying = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M459.6 400c-41.1 48.9-102.7 80-171.6 80-123.7 0-224-100.3-224-224S164.3 32 288 32c113.4 0 207.1 84.2 221.9 193.5-4.5-1-9.2-1.5-13.9-1.5H320c-8.8 0-16 7.2-16 16s7.2 16 16 16h176c17.7 0 32 14.3 32 32s-14.3 32-32 32h-96c-8.8 0-16 7.2-16 16s7.2 16 16 16h96c35.3 0 64-28.7 64-64 0-16.3-6.1-31.3-16.2-42.6C538.3 108.9 425.9 0 288 0 146.6 0 32 114.6 32 256s114.6 256 256 256c88 0 165.6-44.4 211.7-112zM232 176a24 24 0 1 0-48 0 24 24 0 1 0 48 0m136 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48M240 384h64c8.8 0 16-7.2 16-16s-7.2-16-16-16h-64c-26.5 0-48 21.5-48 48 0 8.8 7.2 16 16 16s16-7.2 16-16 7.2-16 16-16"})
);

export default LanFaceLying;
