import React from 'react';

export const LanSquareLiraRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 80c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm150.2 153.5-.6-1.5H144c-8.8 0-16-7.2-16-16 0-8.7 6.9-15.7 15.5-16 0-46.5 37.5-88 88.1-88h2.1c19.7 0 38.8 6.4 54.5 18.2l14.2 10.6c10.6 8 12.8 23 4.8 33.6s-23 12.8-33.6 4.8l-14.2-10.6C252 179 243 176 233.7 176h-2.1c-23 0-40.1 18.9-40 40h80.5c8.8 0 16 7.2 16 16s-7.2 16-16 16h-71.5c2.1 7.9 3.2 16 3.5 24h68c8.8 0 16 7.2 16 16s-7.2 16-16 16h-72c-3.2 11.3-8.3 22.1-15.1 32h111c13.3 0 24 10.7 24 24s-10.7 24-24 24H136c-9.2 0-17.5-5.2-21.6-13.5s-3-18 2.6-25.3l26.7-34.2c1.7-2.2 3.3-4.6 4.7-7H144c-8.8 0-16-7.2-16-16s7.2-16 16-16h11.9c-.4-6.4-1.8-12.9-4.3-19z"})
);

export default LanSquareLiraRegular;
