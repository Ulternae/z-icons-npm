import React from 'react';

export const LanTugrikSign = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M16 32C7.2 32 0 39.2 0 48s7.2 16 16 16h160v147.5l-115.9 29c-8.6 2.1-13.8 10.8-11.6 19.4s10.8 13.8 19.4 11.6l108.1-27v63l-115.9 29c-8.6 2.1-13.8 10.8-11.6 19.4s10.8 13.8 19.4 11.6l108.1-27V456c0 8.8 7.2 16 16 16s16-7.2 16-16V332.5l115.9-29c8.6-2.1 13.8-10.8 11.6-19.4s-10.8-13.8-19.4-11.6l-108.1 27v-63l115.9-29c8.6-2.1 13.8-10.8 11.6-19.4s-10.8-13.8-19.4-11.6l-108.1 27V64h160c8.8 0 16-7.2 16-16s-7.2-16-16-16z"})
);

export default LanTugrikSign;
