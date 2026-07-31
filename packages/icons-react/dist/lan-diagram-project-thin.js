import React from 'react';

export const LanDiagramProjectThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M48 48c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32V80c0-17.7-14.3-32-32-32zm144 88v40c0 16.3-8.1 30.7-20.5 39.3l55.8 74.4c4.1-1.1 8.3-1.7 12.7-1.7h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48v-96c0-16.3 8.1-30.7 20.5-39.3l-55.8-74.4c-4.1 1.1-8.3 1.7-12.7 1.7H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v40h128V80c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48v-40zm144 0v40c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32V80c0-17.7-14.3-32-32-32h-96c-17.7 0-32 14.3-32 32zm-96 168c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32v-96c0-17.7-14.3-32-32-32z"})
);

export default LanDiagramProjectThin;
