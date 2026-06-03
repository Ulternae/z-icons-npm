import React from 'react';

export const LanDownLongToLine = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '-0.078 -64 320.133 640',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M16 576c-8.8 0-16-7.2-16-16s7.2-16 16-16h288c8.8 0 16 7.2 16 16s-7.2 16-16 16zm166.6-137.4c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9S19.1 256 32 256h64V-16c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48v272h64c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128zM160 416l128-128h-80c-8.8 0-16-7.2-16-16V-16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v288c0 8.8-7.2 16-16 16H32z"})
);

export default LanDownLongToLine;
