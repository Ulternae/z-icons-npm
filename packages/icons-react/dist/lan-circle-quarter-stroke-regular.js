import React from 'react';

export const LanCircleQuarterStrokeRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M464 256c0-104-76.3-190.2-176-205.6V232c0 30.9-25.1 56-56 56H50.4C65.8 387.7 152 464 256 464c114.9 0 208-93.1 208-208M240 48.6C137.9 56.4 56.4 137.9 48.6 240H232c4.4 0 8-3.6 8-8zM0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0"})
);

export default LanCircleQuarterStrokeRegular;
