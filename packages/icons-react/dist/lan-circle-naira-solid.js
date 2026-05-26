import React from 'react';

export const LanCircleNairaSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m203.7-117.7c-6-8.6-16.9-12.4-26.9-9.2S160 141.5 160 152v104h-16c-8.8 0-16 7.2-16 16s7.2 16 16 16h16v72c0 13.3 10.7 24 24 24s24-10.7 24-24v-72h41l59.3 85.7c6 8.6 16.9 12.4 26.9 9.2S352 370.5 352 360v-72h16c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16V152c0-13.3-10.7-24-24-24s-24 10.7-24 24v104h-18.8zM226.8 256H208v-27.2z"})
);

export default LanCircleNairaSolid;
