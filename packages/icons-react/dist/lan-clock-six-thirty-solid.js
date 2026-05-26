import React from 'react';

export const LanClockSixThirtySolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512m24-120V256c0-13.3-10.7-24-24-24s-24 10.7-24 24v136c0 13.3 10.7 24 24 24s24-10.7 24-24"})
);

export default LanClockSixThirtySolid;
