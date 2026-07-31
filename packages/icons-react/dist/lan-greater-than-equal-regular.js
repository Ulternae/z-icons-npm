import React from 'react';

export const LanGreaterThanEqualRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M16.3 78.7C3.7 74.5-3 60.8 1.3 48.3s17.9-19.3 30.4-15l400 136c9.7 3.3 16.3 12.4 16.3 22.7s-6.5 19.4-16.3 22.7l-400 136c-12.5 4.3-26.2-2.4-30.4-15s2.4-26.2 15-30.4L349.4 192zM424 432c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24z"})
);

export default LanGreaterThanEqualRegular;
