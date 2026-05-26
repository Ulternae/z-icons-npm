import React from 'react';

export const LanArrowAltDown = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M169.4 470.6c6.3 6.3 14.5 9.4 22.6 9.4s16.4-3.1 22.6-9.4l160-160c9.2-9.2 11.9-22.9 6.9-34.9S364.9 256 352 256h-96V80c0-26.5-21.5-48-48-48h-32c-26.5 0-48 21.5-48 48v176H32c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 7 34.8zM352 288 192 448 32 288h112c8.8 0 16-7.2 16-16V80c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v192c0 8.8 7.2 16 16 16z"})
);

export default LanArrowAltDown;
