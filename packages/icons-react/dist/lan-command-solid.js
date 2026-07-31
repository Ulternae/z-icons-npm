import React from 'react';

export const LanCommandSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M104 208h40v96h-40C46.6 304 0 350.6 0 408s46.6 104 104 104 104-46.6 104-104v-40h96v40c0 57.4 46.6 104 104 104s104-46.6 104-104-46.6-104-104-104h-40v-96h40c57.4 0 104-46.6 104-104S465.4 0 408 0 304 46.6 304 104v40h-96v-40C208 46.6 161.4 0 104 0S0 46.6 0 104s46.6 104 104 104m152 96h-48v-96h96v96zM104 144c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40v40zm40 264c0 22.1-17.9 40-40 40s-40-17.9-40-40 17.9-40 40-40h40zm224-264v-40c0-22.1 17.9-40 40-40s40 17.9 40 40-17.9 40-40 40zm40 224c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40v-40z"})
);

export default LanCommandSolid;
