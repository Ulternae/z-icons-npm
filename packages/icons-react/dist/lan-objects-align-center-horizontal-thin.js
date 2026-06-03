import React from 'react';

export const LanObjectsAlignCenterHorizontalThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 448 576',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M232-24c0-4.4-3.6-8-8-8s-8 3.6-8 8v88H48C21.5 64 0 85.5 0 112v64c0 26.5 21.5 48 48 48h168v64H112c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h104v88c0 4.4 3.6 8 8 8s8-3.6 8-8v-88h104c26.5 0 48-21.5 48-48v-64c0-26.5-21.5-48-48-48H232v-64h168c26.5 0 48-21.5 48-48v-64c0-26.5-21.5-48-48-48H232zm-8 328h112c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H112c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32zm0-96H48c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32h352c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32z"})
);

export default LanObjectsAlignCenterHorizontalThin;
