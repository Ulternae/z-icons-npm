import React from 'react';

export const LanPhoneRotarySolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M0 147.9C0 135.2 5 123 15 115c32.8-26.2 118-83 241-83s208.3 56.8 241 83c9.9 8 15 20.1 15 32.9V176c0 26.5-21.5 48-48 48h-11.6L411 161.9c-20.8-31.2-55.7-49.9-93.2-49.9H194.3c-37.4 0-72.4 18.7-93.2 49.9L59.6 224H48c-26.5 0-48-21.5-48-48zM32 416v-42.2c0-14.2 4.2-28.1 12.1-39.9L141 188.5c11.9-17.8 31.9-28.5 53.3-28.5h123.5c21.4 0 41.4 10.7 53.3 28.5L468 333.9c7.9 11.8 12.1 25.7 12.1 39.9V416c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64m296-104a72 72 0 1 0-144 0 72 72 0 1 0 144 0"})
);

export default LanPhoneRotarySolid;
