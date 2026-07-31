import React from 'react';

export const LanRepeatAltRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -16.05 512 544.1',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M473 113c9.4-9.4 9.4-24.6 0-33.9L385-9c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l47 47H192C86 72 0 158 0 264c0 13.3 10.7 24 24 24s24-10.7 24-24c0-79.5 64.5-144 144-144h206.1l-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l88-88zM39 399c-4.5 4.5-7 10.6-7 17s2.5 12.5 7 17l88 88c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47H320c106 0 192-86 192-192 0-13.3-10.7-24-24-24s-24 10.7-24 24c0 79.5-64.5 144-144 144H113.9l47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0z"})
);

export default LanRepeatAltRegular;
