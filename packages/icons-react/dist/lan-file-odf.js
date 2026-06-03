import React from 'react';

export const LanFileOdf = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M280 384c22.1 0 40 17.9 40 40v80c0 22.1-17.9 40-40 40h-16c-22.1 0-40-17.9-40-40v-80c0-22.1 17.9-40 40-40zm120 0c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48h-32c-8.8 0-16-7.2-16-16V400l.3-3.2c1.5-7.3 8-12.8 15.7-12.8zm144 0c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32v32h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V400l.3-3.2c1.5-7.3 8-12.8 15.7-12.8zM235.8.3c14.7 1.5 28.4 7.9 38.9 18.4l122.6 122.5c12 12 18.7 28.3 18.7 45.2v149.5h-32v-144h-96c-35.3 0-64-28.7-64-64v-96H96C78.3 32 64 46.3 64 64v384c0 17.7 14.3 32 32 32h80v32H96l-6.5-.3C57.2 508.4 32 481.1 32 448V64C32 30.9 57.2 3.6 89.5.3L96 0h133.5zM264 416c-4.4 0-8 3.6-8 8v80c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-80c0-4.4-3.6-8-8-8zm120 96h16c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16h-16zM256 128c0 17.7 14.3 32 32 32h82.7L256 45.2z"})
);

export default LanFileOdf;
