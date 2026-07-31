import React from 'react';

export const LanLightEmergencyOnRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"m69.3 36 48 32c11 7.4 14 22.3 6.7 33.3s-22.3 14-33.3 6.7l-48-32c-11-7.4-14-22.3-6.7-33.3s22.3-14 33.3-6.7m528 40-48 32c-11 7.4-25.9 4.4-33.3-6.7s-4.4-25.9 6.7-33.3l48-32c11-7.4 25.9-4.4 33.3 6.7s4.4 25.9-6.7 33.3M24 192h48c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24m544 0h48c13.3 0 24 10.7 24 24s-10.7 24-24 24h-48c-13.3 0-24-10.7-24-24s10.7-24 24-24m-72 128c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H144c-26.5 0-48-21.5-48-48v-64c0-26.5 21.5-48 48-48V208c0-97.2 78.8-176 176-176s176 78.8 176 176zm-48 0V208c0-70.7-57.3-128-128-128s-128 57.3-128 128v112zM144 432h352v-64H144zm168-272c-22.1 0-40 17.9-40 40 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6 39.4-88 88-88 13.3 0 24 10.7 24 24s-10.7 24-24 24"})
);

export default LanLightEmergencyOnRegular;
