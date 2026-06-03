import React from 'react';

export const LanCrosshairsThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -16 576 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M296-8c0-4.4-3.6-8-8-8s-8 3.6-8 8v40.1C162.6 36.3 68.3 130.6 64.1 248H24c-4.4 0-8 3.6-8 8s3.6 8 8 8h40.1c4.2 117.4 98.5 211.7 215.9 215.9V520c0 4.4 3.6 8 8 8s8-3.6 8-8v-40.1c117.4-4.1 211.7-98.5 215.9-215.9H552c4.4 0 8-3.6 8-8s-3.6-8-8-8h-40.1C507.7 130.6 413.4 36.3 296 32.1zM120 264c4.4 0 8-3.6 8-8s-3.6-8-8-8H80.2C84.3 139.5 171.5 52.3 280 48.2V88c0 4.4 3.6 8 8 8s8-3.6 8-8V48.2c108.5 4.1 195.7 91.3 199.8 199.8H456c-4.4 0-8 3.6-8 8s3.6 8 8 8h39.8c-4.1 108.5-91.3 195.7-199.8 199.8V424c0-4.4-3.6-8-8-8s-8 3.6-8 8v39.8C171.5 459.7 84.3 372.5 80.2 264zm144-8a24 24 0 1 1 48 0 24 24 0 1 1-48 0m64 0a40 40 0 1 0-80 0 40 40 0 1 0 80 0"})
);

export default LanCrosshairsThin;
