import React from 'react';

export const LanListTreeThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M48 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64m8 79.3c22.7-3.8 40-23.6 40-47.3 0-26.5-21.5-48-48-48S0 69.5 0 96c0 23.8 17.3 43.5 40 47.3V392c0 22.1 17.9 40 40 40h50.7c6.6 18.6 24.4 32 45.3 32 26.5 0 48-21.5 48-48s-21.5-48-48-48-48 21.5-48 48H80c-13.3 0-24-10.7-24-24V272h74.7c6.6 18.6 24.4 32 45.3 32 26.5 0 48-21.5 48-48s-21.5-48-48-48-48 21.5-48 48H56zM208 416a32 32 0 1 1-64 0 32 32 0 1 1 64 0m-32-192a32 32 0 1 1 0 64 32 32 0 1 1 0-64m-8-128c0 4.4 3.6 8 8 8h320c4.4 0 8-3.6 8-8s-3.6-8-8-8H176c-4.4 0-8 3.6-8 8m128 160c0 4.4 3.6 8 8 8h192c4.4 0 8-3.6 8-8s-3.6-8-8-8H304c-4.4 0-8 3.6-8 8m0 160c0 4.4 3.6 8 8 8h192c4.4 0 8-3.6 8-8s-3.6-8-8-8H304c-4.4 0-8 3.6-8 8"})
);

export default LanListTreeThin;
