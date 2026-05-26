import React from 'react';

export const LanRepublicanRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M152 32C68.1 32 0 100.1 0 184v240c0 30.9 25.1 56 56 56h32c30.9 0 56-25.1 56-56v-40h160v40c0 30.9 25.1 56 56 56h32c30.9 0 56-25.1 56-56v-40h48v24c0 39.8 32.2 72 72 72s72-32.2 72-72v-64c0-13.3-10.7-24-24-24s-24 10.7-24 24v64c0 13.3-10.7 24-24 24s-24-10.7-24-24V184c0-83.9-68.1-152-152-152zm344 256v48h-72c-13.3 0-24 10.7-24 24v64c0 4.4-3.6 8-8 8h-32c-4.4 0-8-3.6-8-8v-64c0-13.3-10.7-24-24-24H120c-13.3 0-24 10.7-24 24v64c0 4.4-3.6 8-8 8H56c-4.4 0-8-3.6-8-8V288zm0-48H48v-56c0-57.4 46.6-104 104-104h240c57.4 0 104 46.6 104 104zm-368-56a24 24 0 1 0 0-48 24 24 0 1 0 0 48m280-24a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-152 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48"})
);

export default LanRepublicanRegular;
