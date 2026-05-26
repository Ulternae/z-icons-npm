import React from 'react';

export const LanSquareSThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm202.5 64H272c4.4 0 8 3.6 8 8s-3.6 8-8 8h-69.5c-19 0-34.5 15.4-34.5 34.5 0 17.4 13 32.1 30.2 34.2l53.6 6.7c25.3 3.2 44.2 24.6 44.2 50.1 0 27.9-22.6 50.5-50.5 50.5H168c-4.4 0-8-3.6-8-8s3.6-8 8-8h77.5c19 0 34.5-15.4 34.5-34.5 0-17.4-13-32.1-30.2-34.2l-53.6-6.7c-25.3-3.2-44.2-24.6-44.2-50.1 0-27.9 22.6-50.5 50.5-50.5"})
);

export default LanSquareSThin;
