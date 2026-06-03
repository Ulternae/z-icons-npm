import React from 'react';

export const LanNumpadSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 528',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M48 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96m288 0a48 48 0 1 0 0-96 48 48 0 1 0 0 96m-96-48a48 48 0 1 0-96 0 48 48 0 1 0 96 0M48 240a48 48 0 1 0 0-96 48 48 0 1 0 0 96m336-48a48 48 0 1 0-96 0 48 48 0 1 0 96 0m-192 48a48 48 0 1 0 0-96 48 48 0 1 0 0 96m-96 96a48 48 0 1 0-96 0 48 48 0 1 0 96 0m240 48a48 48 0 1 0 0-96 48 48 0 1 0 0 96m-96-48a48 48 0 1 0-96 0 48 48 0 1 0 96 0m-48 192c26.5 0 48-21.5 48-48s-21.5-48-48-48-48 21.5-48 48 21.5 48 48 48"})
);

export default LanNumpadSolid;
