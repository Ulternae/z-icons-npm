import React from 'react';

export const LanArrowLeftFromBracketThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M328 464c-4.4 0-8 3.6-8 8s3.6 8 8 8h88c53 0 96-43 96-96V128c0-53-43-96-96-96h-88c-4.4 0-8 3.6-8 8s3.6 8 8 8h88c44.2 0 80 35.8 80 80v256c0 44.2-35.8 80-80 80zM2.3 250.3c-3.1 3.1-3.1 8.2 0 11.3l152 152c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L27.3 264H344c4.4 0 8-3.6 8-8s-3.6-8-8-8H27.3l138.4-138.3c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0l-152 152z"})
);

export default LanArrowLeftFromBracketThin;
