import React from 'react';

export const LanCubesRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '-0.5 -8.8 513 520.8',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M284-1.3c-17.3-10-38.7-10-56 0l-84.2 48.6c-17.3 10-28 28.5-28 48.5v101.9l-88.3 51c-17.3 10-28 28.5-28 48.5v97.3c0 20 10.7 38.5 28 48.5l84.3 48.6c17.3 10 38.7 10 56 0l88.3-51 88.3 51c17.3 10 38.7 10 56 0l84.1-48.6c17.3-10 28-28.5 28-48.5v-97.3c0-20-10.7-38.5-28-48.5l-88.3-51V95.8c0-20-10.7-38.5-28-48.5zm-212.5 280 68.3-39.4 68.3 39.4-68.3 39.4zm-24 41.6 68.3 39.4v78.8l-64.3-37.1c-2.5-1.4-4-4.1-4-6.9zm116.3 118.2v-78.8l68.3-39.4v78.8zM280 320.3l68.3 39.4v78.8L280 399.1zm116.3 118.2v-78.8l68.3-39.4v74.2c0 2.9-1.5 5.5-4 6.9zm44.3-159.8-68.3 39.4-68.3-39.4 68.3-39.4zM280 237.2v-78.8l68.3-39.4v78.8zm44.3-159.8L256 116.8l-68.2-39.4L252 40.3c2.5-1.4 5.5-1.4 8 0zm-160.5 41.5 68.3 39.4v78.8l-68.3-39.4z"})
);

export default LanCubesRegular;
