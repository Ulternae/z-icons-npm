import React from 'react';

export const Lan00Regular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M112 32C50.1 32 0 82.1 0 144v224c0 61.9 50.1 112 112 112s112-50.1 112-112V144c0-61.9-50.1-112-112-112M48 144c0-35.3 28.7-64 64-64s64 28.7 64 64v224c0 35.3-28.7 64-64 64s-64-28.7-64-64zM400 32c-61.9 0-112 50.1-112 112v224c0 61.9 50.1 112 112 112s112-50.1 112-112V144c0-61.9-50.1-112-112-112m-64 112c0-35.3 28.7-64 64-64s64 28.7 64 64v224c0 35.3-28.7 64-64 64s-64-28.7-64-64z"})
);

export default Lan00Regular;
