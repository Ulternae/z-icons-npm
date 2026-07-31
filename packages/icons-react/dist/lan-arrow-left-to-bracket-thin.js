import React from 'react';

export const LanArrowLeftToBracketThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"m314.3 98.3-152 152c-3.1 3.1-3.1 8.2 0 11.3l152 152c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L187.3 264H504c4.4 0 8-3.6 8-8s-3.6-8-8-8H187.3l138.3-138.3c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0zM184 464H96c-44.2 0-80-35.8-80-80V128c0-44.2 35.8-80 80-80h88c4.4 0 8-3.6 8-8s-3.6-8-8-8H96C43 32 0 75 0 128v256c0 53 43 96 96 96h88c4.4 0 8-3.6 8-8s-3.6-8-8-8"})
);

export default LanArrowLeftToBracketThin;
