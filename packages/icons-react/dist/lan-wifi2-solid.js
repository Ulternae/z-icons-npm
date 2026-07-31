import React from 'react';

export const LanWifi2Solid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M72 326.2c29.4-33.3 72.2-54.2 120-54.2s90.6 20.9 120 54.2c11.7 13.3 31.9 14.5 45.2 2.8s14.5-31.9 2.8-45.2C319 237.4 258.9 208 192 208S65 237.4 24 283.8c-11.7 13.3-10.4 33.5 2.8 45.2s33.5 10.4 45.2-2.8M192 480c26.5 0 48-21.5 48-48s-21.5-48-48-48-48 21.5-48 48 21.5 48 48 48"})
);

export default LanWifi2Solid;
