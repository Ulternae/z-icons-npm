import React from 'react';

export const LanPersonArmsRaisedSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '-0.008 -32.036 384.048 576.036',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M25.7-31.4C43-34.9 59.9-23.6 63.4-6.3l6.9 34.5C81.9 86.2 132.8 128 192 128s110.1-41.8 121.7-99.8l6.9-34.5c3.5-17.3 20.3-28.6 37.7-25.1s28.6 20.3 25.1 37.7l-6.9 34.5c-12 60.1-51.9 108.7-104.5 133.4V512c0 17.7-14.3 32-32 32s-32-14.3-32-32V352c0-8.8-7.2-16-16-16s-16 7.2-16 16v160c0 17.7-14.3 32-32 32s-32-14.3-32-32V174.2C59.4 149.4 19.5 100.8 7.5 40.8L.6 6.3c-3.4-17.4 7.8-34.2 25.1-37.7M136 24a56 56 0 1 1 112 0 56 56 0 1 1-112 0"})
);

export default LanPersonArmsRaisedSolid;
