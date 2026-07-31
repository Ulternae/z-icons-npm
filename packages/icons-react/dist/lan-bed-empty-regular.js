import React from 'react';

export const LanBedEmptyRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M48 56c0-13.3-10.7-24-24-24S0 42.7 0 56v400c0 13.3 10.7 24 24 24s24-10.7 24-24v-72h480v80c0 13.3 10.7 24 24 24s24-10.7 24-24V280c0-66.3-53.7-120-120-120H48zm480 280H48V208h408c39.8 0 72 32.2 72 72z"})
);

export default LanBedEmptyRegular;
