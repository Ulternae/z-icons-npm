import React from 'react';

export const LanInputPasswordThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M512 64c35.3 0 64 28.7 64 64v256l-.3 6.5c-3.1 30.1-27 54.1-57.1 57.1l-6.5.3h-448l-6.5-.3c-30.1-3.1-54.1-27-57.1-57.1L0 384V128c0-35.3 28.7-64 64-64zM64 80c-24.9 0-45.3 18.9-47.8 43.1L16 128v256c0 26.5 21.5 48 48 48h448c26.5 0 48-21.5 48-48V128c0-26.5-21.5-48-48-48zm376 80c4.4 0 8 3.6 8 8v176c0 4.4-3.6 8-8 8s-8-3.6-8-8V168c0-4.4 3.6-8 8-8M120 296a40 40 0 1 1 0-80 40 40 0 1 1 0 80m112 0a40 40 0 1 1 0-80 40 40 0 1 1 0 80m112 0a40 40 0 1 1 0-80 40 40 0 1 1 0 80m-224-64a24 24 0 1 0 0 48 24 24 0 1 0 0-48m112 0a24 24 0 1 0 0 48 24 24 0 1 0 0-48m112 0a24 24 0 1 0 0 48 24 24 0 1 0 0-48"})
);

export default LanInputPasswordThin;
