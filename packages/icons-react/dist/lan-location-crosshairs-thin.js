import React from 'react';

export const LanLocationCrosshairsThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -16 576 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M288-16c4.4 0 8 3.6 8 8v40.1c117.4 4.2 211.7 98.5 215.9 215.9H552c4.4 0 8 3.6 8 8s-3.6 8-8 8h-40.1c-4.2 117.4-98.5 211.7-215.9 215.9V520c0 4.4-3.6 8-8 8s-8-3.6-8-8v-40.1C162.6 475.7 68.3 381.4 64.1 264H24c-4.4 0-8-3.6-8-8s3.6-8 8-8h40.1C68.3 130.6 162.6 36.3 280 32.1V-8c0-4.4 3.6-8 8-8M80 256a208 208 0 1 0 416 0 208 208 0 1 0-416 0m208-112a112 112 0 1 1 0 224 112 112 0 1 1 0-224m96 112a96 96 0 1 0-192 0 96 96 0 1 0 192 0"})
);

export default LanLocationCrosshairsThin;
