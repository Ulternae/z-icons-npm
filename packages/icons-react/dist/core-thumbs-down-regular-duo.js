import React from 'react';

export const CoreThumbsDownRegular-duo = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M192 96h159c26.2 0 49.7 15.9 59.4 40.2l37.6 93.9v57.8c0 17.7-14.3 32-32 32H256v122.9l-64-115.2V95.9z","opacity":".4"}), React.createElement('path', {"fill":"currentColor","d":"M240 512h-18.8l-9.1-16.5-79.8-143.7c-1.4.1-2.8.1-4.2.1h-64c-35.3 0-64-28.7-64-64L0 96c0-35.3 28.7-64 64-64h287c52.3 0 99.4 31.9 118.8 80.5l39.9 99.7 2.3 5.7v70.2c0 53-43 96-96 96h-96v64c0 35.3-28.7 64-64 64h-16zM128 96H64v192h64zm64 0v231.7l64 115.2V320h160c17.7 0 32-14.3 32-32v-57.8l-37.6-93.9C400.7 111.9 377.2 96 351 96z"})
);

export default CoreThumbsDownRegular-duo;
