import React from 'react';

export const LanCab = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M192 32v32h128V32zm-32 32V32c0-17.7 14.3-32 32-32h128c17.7 0 32 14.3 32 32v32h.8c44.5 0 83.1 30.5 93.4 73.8l13.2 55.2c29.9 5.4 52.6 31.5 52.6 63v208c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48H32v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V256c0-31.5 22.7-57.6 52.6-63l13.2-55.2C76.1 94.5 114.7 64 159.2 64zm160 32H159.2c-29.6 0-55.4 20.3-62.3 49.2L85.8 192h340.4l-11.1-46.8c-6.9-28.9-32.7-49.2-62.3-49.2zm113.8 128H64c-17.7 0-32 14.3-32 32v128h448V256c0-17.7-14.3-32-32-32zM80 304a24 24 0 1 1 48 0 24 24 0 1 1-48 0m328-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48"})
);

export default LanCab;
