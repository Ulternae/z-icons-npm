import React from 'react';

export const LanCurlingStoneSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M512 384c0 53-43 96-96 96H96c-53 0-96-43-96-96v-8h512zM352 32c17.7 0 32 14.3 32 32s-14.3 32-32 32H224c-17.7 0-32 14.3-32 32v32h192c35.3 0 64 28.7 64 64v5.6c37.3 13.2 64 48.6 64 90.4v8H0v-8c0-41.8 26.7-77.2 64-90.4V224c0-35.3 28.7-64 64-64v-32c0-53 43-96 96-96z"})
);

export default LanCurlingStoneSolid;
