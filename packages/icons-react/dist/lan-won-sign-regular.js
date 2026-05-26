import React from 'react';

export const LanWonSignRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M54.9 48.7c-4-12.6-17.5-19.6-30.2-15.5S5.1 50.7 9.1 63.3L65.7 240H32c-13.3 0-24 10.7-24 24s10.7 24 24 24h49l56.1 175.3c3.3 10.3 13 17.1 23.7 16.7s19.9-7.9 22.4-18.4L224.9 288h62l41.7 173.6c2.5 10.5 11.7 18 22.4 18.4s20.5-6.4 23.7-16.7L431 288h49c13.3 0 24-10.7 24-24s-10.7-24-24-24h-33.7l56.5-176.7c4-12.6-2.9-26.1-15.5-30.2s-26.1 2.9-30.2 15.5l-61.2 191.3h-71.1L279.3 50.3C276.8 39.6 267.1 32 256 32s-20.7 7.6-23.3 18.4L187.2 240h-71.1zM131.4 288h44.2l-18.9 78.9zm105.1-48 19.5-81.2 19.5 81.2zm99.8 48h44.2l-25.3 78.9z"})
);

export default LanWonSignRegular;
