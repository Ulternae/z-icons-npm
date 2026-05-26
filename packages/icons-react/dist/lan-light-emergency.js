import React from 'react';

export const LanLightEmergency = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M400 320h-16V192c0-88.4-71.6-160-160-160S64 103.6 64 192v128H48c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-64c0-26.5-21.5-48-48-48m-48-128v128H96V192c0-70.7 57.3-128 128-128s128 57.3 128 128M48 352h352c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16m112-160c0-35.3 28.7-64 64-64 8.8 0 16-7.2 16-16s-7.2-16-16-16c-53 0-96 43-96 96 0 8.8 7.2 16 16 16s16-7.2 16-16"})
);

export default LanLightEmergency;
