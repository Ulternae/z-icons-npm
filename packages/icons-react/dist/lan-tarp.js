import React from 'react';

export const LanTarp = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M480 128v128h-96c-35.3 0-64 28.7-64 64v96H64c-17.7 0-32-14.3-32-32V128c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32m-13.3 160L352 402.7V320c0-17.7 14.3-32 32-32zM512 128c0-35.3-28.7-64-64-64H64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h261.5c17 0 33.3-6.7 45.3-18.7l122.5-122.6c12-12 18.7-28.3 18.7-45.3zM96 184a24 24 0 1 0 0-48 24 24 0 1 0 0 48"})
);

export default LanTarp;
