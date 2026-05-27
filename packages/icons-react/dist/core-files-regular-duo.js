import React from 'react';

export const CoreFilesRegular-duo = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M192 32v320h224V122.5L325.5 32z","opacity":".4"}), React.createElement('path', {"fill":"currentColor","d":"M416 352V122.5L325.5 32H192v320zM192-32h160L480 96v256c0 35.3-28.7 64-64 64H192c-35.3 0-64-28.7-64-64V32c0-35.3 28.7-64 64-64M64 128v352h288v64H64c-35.3 0-64-28.7-64-64V96h64z"})
);

export default CoreFilesRegular-duo;
