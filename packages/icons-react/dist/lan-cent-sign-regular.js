import React from 'react';

export const LanCentSignRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M208 0c13.3 0 24 10.7 24 24v40.7c44.7 3.7 85 22.7 115.8 51.7 9.6 9.1 10.1 24.3 1 33.9s-24.3 10.1-33.9 1C289 126.9 254.3 112 216 112c-79.5 0-144 64.5-144 144s64.5 144 144 144c38.3 0 73-14.9 98.8-39.3 9.6-9.1 24.8-8.7 33.9 1s8.7 24.8-1 33.9c-30.7 29-71.1 48-115.8 51.7V488c0 13.3-10.7 24-24 24s-24-10.7-24-24v-42.7C93.2 430.1 24 351.1 24 256S93.2 81.9 184 66.7V24c0-13.3 10.7-24 24-24"})
);

export default LanCentSignRegular;
