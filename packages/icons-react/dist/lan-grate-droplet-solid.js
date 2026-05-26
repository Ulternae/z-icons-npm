import React from 'react';

export const LanGrateDropletSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M160 32c-35.3 0-64 28.7-64 64v320c0 35.3 28.7 64 64 64h193.1c-5.9-16.9-9.1-35-9.1-54 0-3.3.1-6.7.3-10h-.3V280h48v7.6c15.8-25.1 33.1-47.8 48-65.6V96.1h40v90c20.3-9.4 43.7-9.4 64 0v-90c0-35.3-28.7-64-64-64zm0 64h40v136h-40zm0 184h40v136h-40zm88 136V280h48v136zM392 96v136h-48V96zm-96 0v136h-48V96zm96 330.1c0 65.1 53.7 117.9 120 117.9s120-52.8 120-117.9c0-68.9-64.1-150.4-98.6-189.3-11.6-13.1-31.3-13.1-42.9 0-34.5 38.9-98.6 120.4-98.6 189.3z"})
);

export default LanGrateDropletSolid;
