import React from 'react';

export const LanMonumentSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -40.05 384 552.05',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M209-33c-9.4-9.4-24.6-9.4-33.9 0L95 47c-4.1 4.1-6.5 9.4-7 15.1L58.4 448H48c-17.7 0-32 14.3-32 32s14.3 32 32 32h288c17.7 0 32-14.3 32-32s-14.3-32-32-32h-10.4L295.9 62.2c-.4-5.7-2.9-11.1-7-15.1zm-81 329c0-13.3 10.7-24 24-24h80c13.3 0 24 10.7 24 24s-10.7 24-24 24h-80c-13.3 0-24-10.7-24-24"})
);

export default LanMonumentSolid;
