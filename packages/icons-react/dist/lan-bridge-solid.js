import React from 'react';

export const LanBridgeSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M32 32C14.3 32 0 46.3 0 64s14.3 32 32 32h8v64H0v112c37.6 9.4 64 43.2 64 82v94c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32v-64c0-53 43-96 96-96s96 43 96 96v64c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32v-94c0-38.8 26.4-72.6 64-82V160h-40V96h8c17.7 0 32-14.3 32-32s-14.3-32-32-32zm392 64v64h-80V96zm-128 0v64h-80V96zM88 96h80v64H88z"})
);

export default LanBridgeSolid;
