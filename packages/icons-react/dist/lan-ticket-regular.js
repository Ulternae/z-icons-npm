import React from 'react';

export const LanTicketRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M48 128v44.9c28.7 16.6 48 47.6 48 83.1s-19.3 66.6-48 83.1V384c0 8.8 7.2 16 16 16h448c8.8 0 16-7.2 16-16v-44.9c-28.7-16.6-48-47.6-48-83.1s19.3-66.6 48-83.1V128c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16m-48 0c0-35.3 28.7-64 64-64h448c35.3 0 64 28.7 64 64v64c0 8.8-7.4 15.7-15.7 18.6C541.5 217.1 528 235 528 256s13.5 38.9 32.3 45.4c8.3 2.9 15.7 9.8 15.7 18.6v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64v-64c0-8.8 7.4-15.7 15.7-18.6C34.5 294.9 48 277 48 256s-13.5-38.9-32.3-45.4C7.4 207.7 0 200.8 0 192zm400 176v-96H176v96zM128 192c0-17.7 14.3-32 32-32h256c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32z"})
);

export default LanTicketRegular;
