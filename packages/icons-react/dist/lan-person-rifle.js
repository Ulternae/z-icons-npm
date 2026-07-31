import React from 'react';

export const LanPersonRifle = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M208 32a48 48 0 1 1 0 96 48 48 0 1 1 0-96m0 128a80 80 0 1 0 0-160 80 80 0 1 0 0 160m-64 76c17.1-7.7 36-12 56-12 26.4 0 51.1 7.5 72 20.6v-36.4c-21.8-10.4-46.2-16.2-72-16.2-92.8 0-168 75.2-168 168v72c0 8.8 7.2 16 16 16s16-7.2 16-16v-72c0-41.6 18.6-78.8 48-103.7V496c0 8.8 7.2 16 16 16s16-7.2 16-16zM384 0c-8.8 0-16 7.2-16 16s7.2 16 16 16v96c-17.7 0-32 14.3-32 32v32c-26.5 0-48 21.5-48 48v112c0 26.5 21.5 48 48 48v80c0 17.7 14.3 32 32 32h66.2c21.6 0 37-20.9 30.5-41.5l-27-86.5h42.2c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48v-35.5l51.9-13c7.1-1.8 12.1-8.2 12.1-15.5v-80c0-8.8-7.2-16-16-16s-16 7.2-16 16v67.5l-32 8V160c0-17.7-14.3-32-32-32V16c0-8.8-7.2-16-16-16zm0 160h32v208c0 1.6.2 3.2.7 4.8L450.2 480H384v-96c0-8.8-7.2-16-16-16h-16c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16h16c8.8 0 16-7.2 16-16z"})
);

export default LanPersonRifle;
