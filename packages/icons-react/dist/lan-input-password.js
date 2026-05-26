import React from 'react';

export const LanInputPassword = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M512 64c35.3 0 64 28.7 64 64v256l-.3 6.5c-3.1 30.1-27 54.1-57.1 57.1l-6.5.3h-448l-6.5-.3c-30.1-3.1-54.1-27-57.1-57.1L0 384V128c0-35.3 28.7-64 64-64zM64 96c-16.6 0-30.2 12.6-31.8 28.7L32 128v256c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32zm336 64c8.8 0 16 7.2 16 16v160c0 8.8-7.2 16-16 16s-16-7.2-16-16V176c0-8.8 7.2-16 16-16M120 280a24 24 0 1 1 0-48 24 24 0 1 1 0 48m96 0a24 24 0 1 1 0-48 24 24 0 1 1 0 48m96 0a24 24 0 1 1 0-48 24 24 0 1 1 0 48"})
);

export default LanInputPassword;
