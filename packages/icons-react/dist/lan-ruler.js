import React from 'react';

export const LanRuler = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -18.3 576 548.525',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M525.9 154.2 186.5 493.6c-6.2 6.2-16.4 6.2-22.6 0L50.7 380.5c-6.2-6.2-6.2-16.4 0-22.6L84.6 324l56.6 56.6c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-56.6-56.6 39.6-39.6 33.9 33.9c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-33.9-33.9 39.6-39.6 56.6 56.6c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L231.6 177l39.6-39.6 33.9 33.9c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-33.9-33.9 39.6-39.6 56.6 56.6c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L356 52.6l33.9-33.9c6.2-6.2 16.4-6.2 22.6 0l113.4 112.8c6.2 6.2 6.2 16.4 0 22.6zM73.3 289.9l-45.2 45.3c-18.7 18.7-18.7 49.1 0 67.9l113.1 113.1c18.7 18.7 49.1 18.7 67.9 0l339.4-339.4c18.7-18.7 18.7-49.1 0-67.9L435.4-4.2c-18.8-18.8-49.2-18.8-67.9 0C77.1 286.2 140.3 223 73.3 289.9"})
);

export default LanRuler;
