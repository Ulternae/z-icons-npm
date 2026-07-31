import React from 'react';

export const LanArrowRightToBracketThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"m197.7 98.3 152 152c3.1 3.1 3.1 8.2 0 11.3l-152 152c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3L324.7 264H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h316.7L186.4 109.7c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0zM328 464h88c44.2 0 80-35.8 80-80V128c0-44.2-35.8-80-80-80h-88c-4.4 0-8-3.6-8-8s3.6-8 8-8h88c53 0 96 43 96 96v256c0 53-43 96-96 96h-88c-4.4 0-8-3.6-8-8s3.6-8 8-8"})
);

export default LanArrowRightToBracketThin;
