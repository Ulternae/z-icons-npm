import React from 'react';

export const LanScarfRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M144.5 104c0-30.9 25.1-56 56-56h112c30.9 0 56 25.1 56 56v78.9c0 14.7-5.8 28.7-16 39.2L282.4 152h6.1c13.3 0 24-10.7 24-24s-10.7-24-24-24h-25.4c-35.6 0-53.5 43.1-28.3 68.3l83.7 83.7-62.1 62.1-95.6-95.6a55.92 55.92 0 0 1-16.4-39.6V104zm112 281.9 119 119c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-119-119 14.1-14.1 119 119c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-119-119 14.1-14.1 119 119c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-119-119c19.3-19.5 30.1-45.7 30.1-73.1V104c0-57.4-46.6-104-104-104h-112c-57.4 0-104 46.6-104 104v78.9c0 27.6 11 54 30.5 73.5zm-163.9-96L7.5 375c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l85.1-85.1zm48 48L55.5 423c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l85.1-85.1zm48 48L103.5 471c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l85.1-85.1z"})
);

export default LanScarfRegular;
