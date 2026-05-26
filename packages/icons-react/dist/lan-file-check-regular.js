import React from 'react';

export const LanFileCheckRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M197.5 0c17 0 33.2 6.8 45.2 18.8l122.6 122.4c12 12 18.7 28.3 18.7 45.2V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0zM64 48c-8.8 0-16 7.2-16 16v384c0 8.8 7.2 16 16 16h256c8.8 0 16-7.2 16-16V208h-88c-39.8 0-72-32.2-72-72V48zm164.7 215.9c7.8-10.7 22.8-13.1 33.5-5.3s13.1 22.8 5.3 33.5l-76.1 104.7c-4.2 5.7-10.7 9.3-17.8 9.8s-14-2.2-18.9-7.3l-35.9-37.2c-9.2-9.5-8.9-24.7.6-33.9s24.7-9 33.9.6l16.1 16.6 59.3-81.6zM224 136c0 13.3 10.7 24 24 24h68.1L224 67.9z"})
);

export default LanFileCheckRegular;
