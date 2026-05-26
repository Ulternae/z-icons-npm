import React from 'react';

export const LanCrosshairs = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M288-16c8.8 0 16 7.2 16 16v32.6C415 40.4 503.6 129 511.4 240H544c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32.6C503.6 383 415 471.6 304 479.4V512c0 8.8-7.2 16-16 16s-16-7.2-16-16v-32.6C161 471.6 72.4 383 64.6 272H32c-8.8 0-16-7.2-16-16s7.2-16 16-16h32.6C72.4 129 161 40.4 272 32.6V0c0-8.8 7.2-16 16-16M96.7 272c7.7 93.3 82.1 167.6 175.3 175.3V400c0-8.8 7.2-16 16-16s16 7.2 16 16v47.3c93.3-7.7 167.6-82.1 175.3-175.3H432c-8.8 0-16-7.2-16-16s7.2-16 16-16h47.3c-7.7-93.3-82-167.6-175.3-175.3V112c0 8.8-7.2 16-16 16s-16-7.2-16-16V64.7c-93.3 7.7-167.6 82-175.3 175.3H144c8.8 0 16 7.2 16 16s-7.2 16-16 16zM288 232a24 24 0 1 1 0 48 24 24 0 1 1 0-48"})
);

export default LanCrosshairs;
