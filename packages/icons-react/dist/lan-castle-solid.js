import React from 'react';

export const LanCastleSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M136 32c-13.3 0-24 10.7-24 24v168H64v-40c0-13.3-10.7-24-24-24H24c-13.3 0-24 10.7-24 24v80c0 1.1.1 2.2.2 3.3-.1 1.5-.2 3.1-.2 4.7v176c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V272c0-1.6-.1-3.1-.2-4.7.2-1.1.2-2.2.2-3.3v-80c0-13.3-10.7-24-24-24h-16c-13.3 0-24 10.7-24 24v40h-48V56c0-13.3-10.7-24-24-24h-16c-13.3 0-24 10.7-24 24v40h-48V56c0-13.3-10.7-24-24-24h-16c-13.3 0-24 10.7-24 24v40h-48V56c0-13.3-10.7-24-24-24zm56 352c0-35.3 28.7-64 64-64s64 28.7 64 64v80H192z"})
);

export default LanCastleSolid;
