import React from 'react';

export const LanShuttleVanRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M48 128v80h120v-96H64c-8.8 0-16 7.2-16 16m0 128v80c0 8.8 7.2 16 16 16h9.6c14.6-28.5 44.2-48 78.4-48s63.8 19.5 78.4 48h123.2c14.6-28.5 44.2-48 78.4-48s63.8 19.5 78.4 48h1.6c8.8 0 16-7.2 16-16v-80zm461.6-48L441 118.3c-3-4-7.7-6.3-12.7-6.3h-52.2v96h133.6zM328 208v-96H216v96zm248 128c0 32.7-24.6 59.8-56.3 63.5-3.8 45.1-41.6 80.5-87.7 80.5-45.9 0-83.6-35.1-87.6-80H239.7c-4 44.9-41.7 80-87.6 80s-83.6-35.1-87.6-80h-.4c-35.3 0-64-28.7-64-64L0 128c0-35.3 28.7-64 64-64h364.2c19.9 0 38.7 9.3 50.8 25.1l83.8 109.5c8.5 11.2 13.2 24.8 13.2 38.9zm-104 56a40 40 0 1 0-80 0 40 40 0 1 0 80 0m-320 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80"})
);

export default LanShuttleVanRegular;
