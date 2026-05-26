import React from 'react';

export const LanNas = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M448 64c35.3 0 64 28.7 64 64v256l-.3 6.5c-3.3 32.3-30.6 57.5-63.7 57.5H64C30.9 448 3.6 422.8.3 390.5L0 384V128c0-35.3 28.7-64 64-64zM64 96c-16.6 0-30.2 12.6-31.8 28.7L32 128v256c0 17.7 14.3 32 32 32h96V96zm128 320h128V96H192zm160 0h96c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32h-96zm-240-80c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0-64c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16s7.2-16 16-16zm144-64a24 24 0 1 1 0-48 24 24 0 1 1 0 48m160 0a24 24 0 1 1 0-48 24 24 0 1 1 0 48"})
);

export default LanNas;
