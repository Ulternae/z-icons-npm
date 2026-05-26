import React from 'react';

export const LanSirenRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"m147.5 320 12.6-138.2c1.2-13.2 12.9-22.9 26.1-21.7s22.9 12.9 21.7 26.1L195.7 320h163.1L328 93.8c-1.1-7.9-7.8-13.8-15.9-13.8H135.9c-8 0-14.8 5.9-15.9 13.8L89.2 320zm228-232.6 31.8 233.2c23 3.5 40.6 23.4 40.6 47.4v64c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48v-64c0-24 17.6-43.9 40.7-47.4L72.5 87.4C76.8 55.6 103.9 32 135.9 32h176.3c32 0 59.1 23.6 63.4 55.4zM400 368H48v64h352z"})
);

export default LanSirenRegular;
