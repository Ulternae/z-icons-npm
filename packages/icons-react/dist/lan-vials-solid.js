import React from 'react';

export const LanVialsSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M32 0C14.3 0 0 14.3 0 32s14.3 32 32 32v352c0 53 43 96 96 96s96-43 96-96V64h64v352c0 53 43 96 96 96s96-43 96-96V64c17.7 0 32-14.3 32-32S497.7 0 480 0zm128 64v128H96V64zm256 0v128h-64V64z"})
);

export default LanVialsSolid;
