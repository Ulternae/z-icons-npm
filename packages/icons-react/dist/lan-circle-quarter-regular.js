import React from 'react';

export const LanCircleQuarterRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M208.2 53.6V208H53.8c18-76.3 78.1-136.4 154.4-154.4M2.2 224.1C0 241.6 14.6 256 32.2 256h192c17.7 0 32-14.3 32-32V32c0-17.7-14.4-32.2-31.9-30C108.5 16.4 16.6 108.2 2.2 224.1"})
);

export default LanCircleQuarterRegular;
