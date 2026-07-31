import React from 'react';

export const LanTally2Regular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M56 64c0-13.3-10.7-24-24-24S8 50.7 8 64v384c0 13.3 10.7 24 24 24s24-10.7 24-24zm128 0c0-13.3-10.7-24-24-24s-24 10.7-24 24v384c0 13.3 10.7 24 24 24s24-10.7 24-24z"})
);

export default LanTally2Regular;
