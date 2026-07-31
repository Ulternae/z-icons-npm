import React from 'react';

export const LanCameraAltThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M191 32c-17.1 0-32.9 9.1-41.5 23.8L126.1 96H64c-35.3 0-64 28.7-64 64v256c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64h-62.1l-23.4-40.2C353.9 41.1 338.1 32 321 32zm-27.7 31.9C169.1 54 179.6 48 191 48h130c11.4 0 21.9 6 27.6 15.9l25.8 44.1c1.4 2.5 4.1 4 6.9 4H448c26.5 0 48 21.5 48 48v256c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V160c0-26.5 21.5-48 48-48h66.7c2.8 0 5.5-1.5 6.9-4l25.8-44.2zM256 400a112 112 0 1 0 0-224 112 112 0 1 0 0 224m-96-112a96 96 0 1 1 192 0 96 96 0 1 1-192 0"})
);

export default LanCameraAltThin;
