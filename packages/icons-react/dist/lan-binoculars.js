import React from 'react';

export const LanBinoculars = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M112 32c-8.8 0-16 7.2-16 16s7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16zm224 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16zM192 432c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16v-75.1c0-28.8 7.8-57.1 22.7-81.9 16-26.6 26.2-56.3 30.1-87.1l5.7-45.9c1-8 7.8-14 15.9-14H192zm32 0V288h64v144c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48v-75.1c0-34.6-9.4-68.6-27.2-98.3-13.7-22.8-22.5-48.2-25.8-74.6l-5.7-46c-3-24-23.4-42-47.6-42H312c-13.3 0-24 10.7-24 24v8h-64v-8c0-13.3-10.7-24-24-24h-93.6c-24.2 0-44.6 18-47.6 42L53 184c-3.3 26.4-12.1 51.8-25.8 74.6C9.4 288.3 0 322.3 0 356.9V432c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48m0-176v-96h64v96zm96 16V128h85.6c8.1 0 14.9 6 15.9 14l5.7 45.9c3.9 30.8 14.1 60.5 30.1 87.1 14.8 24.7 22.7 53 22.7 81.9V432c0 8.8-7.2 16-16 16H336c-8.8 0-16-7.2-16-16z"})
);

export default LanBinoculars;
