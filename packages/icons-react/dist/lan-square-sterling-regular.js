import React from 'react';

export const LanSquareSterlingRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 80c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm150.2 153.5C126.3 191.6 168.9 128 231.6 128h2.2c19.7 0 38.8 6.4 54.5 18.2l14.2 10.6c10.6 8 12.8 23 4.8 33.6s-23 12.8-33.6 4.8l-14.2-10.6C252 179 243 176 233.7 176h-2.2c-28.5 0-47.8 28.9-37 55.2l1.4 3.5c2.9 6.9 4.9 14.1 6.3 21.3h69.7c8.8 0 16 7.2 16 16s-7.2 16-16 16h-68.8c-2.1 17-8.3 33.5-18.3 48H296c13.3 0 24 10.7 24 24s-10.7 24-24 24H136c-9.2 0-17.5-5.2-21.6-13.5s-3-18 2.6-25.3l26.7-34.2c5.4-6.9 9-14.7 10.8-23H144c-8.8 0-16-7.2-16-16s7.2-16 16-16h8.8c-.4-1-.7-2-1.1-3l-1.4-3.5z"})
);

export default LanSquareSterlingRegular;
