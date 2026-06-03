import React from 'react';

export const LanCommentAltImage = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"m179.2 533.6 112-84c1.4-1 3.1-1.6 4.8-1.6h120c53 0 96-43 96-96V128c0-53-43-96-96-96H96C43 32 0 75 0 128v224c0 53 43 96 96 96h32v68c0 15.5 12.5 28 28 28 6.1 0 12-2 16.8-5.6zM160 448v-8c0-13.3-10.7-24-24-24H96c-35.3 0-64-28.7-64-64V128c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v224c0 35.3-28.7 64-64 64H296c-8.7 0-17.1 2.8-24 8l-112 84zm24-304a24 24 0 1 0-48 0 24 24 0 1 0 48 0m47 42.5-93.8 95.3c-5.9 6-9.2 14-9.2 22.4 0 17.6 14.3 31.9 31.9 31.9h192.2c17.6 0 31.9-14.3 31.9-31.9 0-8.4-3.3-16.4-9.2-22.4L281 186.5c-6.6-6.7-15.6-10.5-25-10.5s-18.4 3.8-25 10.5m25 21.5c.8 0 1.6.3 2.2.9l93.6 95.1H160.1l93.6-95.1c.6-.6 1.4-.9 2.2-.9z"})
);

export default LanCommentAltImage;
