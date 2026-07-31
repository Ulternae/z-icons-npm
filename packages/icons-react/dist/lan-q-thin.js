import React from 'react';

export const LanQThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M16 256c0 114.9 93.1 208 208 208 49.5 0 95-17.3 130.7-46.2L226 269.2c-2.9-3.3-2.5-8.4.8-11.3s8.4-2.5 11.3.8l128.7 148.6C406.9 369.4 432 315.6 432 256c0-114.9-93.1-208-208-208S16 141.1 16 256m349.2 173.9C326.7 461.2 277.5 480 224 480 100.3 480 0 379.7 0 256S100.3 32 224 32s224 100.3 224 224c0 64.4-27.2 122.5-70.8 163.4l68.8 79.4c2.9 3.3 2.5 8.4-.8 11.3s-8.4 2.5-11.3-.8L365.1 430z"})
);

export default LanQThin;
