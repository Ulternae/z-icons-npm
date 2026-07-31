import React from 'react';

export const LanWifi2Regular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M58.3 317.7c32.3-37.8 80.2-61.7 133.8-61.7s101.6 23.9 133.9 61.7c8.6 10.1 23.8 11.3 33.8 2.7s11.3-23.8 2.7-33.8c-41-48-102.2-78.6-170.4-78.6S62.8 238.5 21.8 286.6c-8.6 10.1-7.4 25.2 2.7 33.8s25.2 7.4 33.8-2.7M192.1 480c26.5 0 48-21.5 48-48s-21.5-48-48-48-48 21.5-48 48 21.5 48 48 48"})
);

export default LanWifi2Regular;
