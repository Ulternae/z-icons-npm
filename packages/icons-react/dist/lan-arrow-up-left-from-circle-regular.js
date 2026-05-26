import React from 'react';

export const LanArrowUpLeftFromCircleRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M184 0H24C10.7 0 0 10.7 0 24v160c0 13.3 10.7 24 24 24s24-10.7 24-24V81.9L295 329c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L81.9 48H184c13.3 0 24-10.7 24-24S197.3 0 184 0m104 64c-13.3 0-24 10.7-24 24s10.7 24 24 24c97.2 0 176 78.8 176 176s-78.8 176-176 176-176-78.8-176-176c0-13.3-10.7-24-24-24s-24 10.7-24 24c0 123.7 100.3 224 224 224s224-100.3 224-224S411.7 64 288 64"})
);

export default LanArrowUpLeftFromCircleRegular;
