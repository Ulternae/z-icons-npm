import React from 'react';

export const LanWhiskeyGlassIceRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M48 104c0-13.3 10.7-24 24-24h304c13.3 0 24 10.7 24 24v120h-72.9l-7.6-28.2c-9-33.7-43.6-53.6-77.3-44.6l-94.4 25.3c-23.6 6.3-40.5 25.2-45.3 47.5H48zm60 168 20.4 76.2c9 33.7 43.6 53.6 77.3 44.6l94.4-25.3c33.7-9 53.6-43.6 44.6-77.3l-4.9-18.2h60v72c0 48.6-39.4 88-88 88h-176c-48.6 0-88-39.4-88-88v-72h60zM72 32C32.2 32 0 64.2 0 104v240c0 75.1 60.9 136 136 136h176c75.1 0 136-60.9 136-136V104c0-39.8-32.2-72-72-72zm182.7 165.5c8.1-2.2 16.3 2.6 18.5 10.7l25.3 94.4c2.2 8.1-2.6 16.3-10.7 18.5l-94.4 25.3c-8.1 2.2-16.3-2.6-18.5-10.7l-25.3-94.4c-2.2-8.1 2.6-16.3 10.7-18.5z"})
);

export default LanWhiskeyGlassIceRegular;
