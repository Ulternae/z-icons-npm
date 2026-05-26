import React from 'react';

export const LanTemperatureSlashSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-137-137c-.5-41.9-19-79.5-48-105.5L384 96c0-53-43-96-96-96s-96 43-96 96v30.2L41-24.8zm223 223V88c0-13.3 10.7-24 24-24s24 10.7 24 24v158.2l-48-48zM224 368c0-20.3 9.4-38.3 24.1-50.1l-56.7-56.7C162.3 287.5 144 325.6 144 368c0 79.5 64.5 144 144 144 42.4 0 80.4-18.3 106.8-47.4l-56.7-56.7C326.4 422.6 308.3 432 288 432c-35.3 0-64-28.7-64-64"})
);

export default LanTemperatureSlashSolid;
