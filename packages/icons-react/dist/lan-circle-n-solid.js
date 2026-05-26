import React from 'react';

export const LanCircleNSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-53.4-359.2 101.4 124V168c0-13.3 10.7-24 24-24s24 10.7 24 24v176c0 10.1-6.4 19.2-15.9 22.6s-20.2.4-26.6-7.4L208 235.2V344c0 13.3-10.7 24-24 24s-24-10.7-24-24V168c0-10.1 6.4-19.2 15.9-22.6s20.2-.4 26.6 7.4z"})
);

export default LanCircleNSolid;
