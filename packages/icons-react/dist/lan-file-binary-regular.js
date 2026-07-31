import React from 'react';

export const LanFileBinaryRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 48h112v88c0 39.8 32.2 72 72 72h88v240c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16m160 19.9 92.1 92.1H248c-13.3 0-24-10.7-24-24zM64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V186.5c0-17-6.7-33.3-18.7-45.3L242.7 18.7C230.7 6.7 214.5 0 197.5 0zm72 256c-30.9 0-56 25.1-56 56v48c0 30.9 25.1 56 56 56s56-25.1 56-56v-48c0-30.9-25.1-56-56-56m-8 56c0-4.4 3.6-8 8-8s8 3.6 8 8v48c0 4.4-3.6 8-8 8s-8-3.6-8-8zm112-56c-13.3 0-24 10.7-24 24s10.7 24 24 24v64c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24v-88c0-13.3-10.7-24-24-24z"})
);

export default LanFileBinaryRegular;
