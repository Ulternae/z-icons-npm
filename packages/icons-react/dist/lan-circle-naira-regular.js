import React from 'react';

export const LanCircleNairaRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M464 256a208 208 0 1 0-416 0 208 208 0 1 0 416 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m203.7-117.7L285.2 256H304V152c0-13.3 10.7-24 24-24s24 10.7 24 24v104h16c8.8 0 16 7.2 16 16s-7.2 16-16 16h-16v72c0 10.5-6.8 19.8-16.8 22.9s-20.9-.6-26.9-9.2L249 288h-41v72c0 13.3-10.7 24-24 24s-24-10.7-24-24v-72h-16c-8.8 0-16-7.2-16-16s7.2-16 16-16h16V152c0-10.5 6.8-19.8 16.8-22.9s20.9.6 26.9 9.2M226.8 256 208 228.8V256z"})
);

export default LanCircleNairaRegular;
