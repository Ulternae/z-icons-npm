import React from 'react';

export const LanFileHtmlSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 580 548',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M208 380c11 0 20 9 20 20v128c0 11-9 20-20 20s-20-9-20-20v-44h-24v44c0 11-9 20-20 20s-20-9-20-20V400c0-11 9-20 20-20s20 9 20 20v44h24v-44c0-11 9-20 20-20m112 0c11 0 20 9 20 20s-9 20-20 20h-12v108c0 11-9 20-20 20s-20-9-20-20V420h-12c-11 0-20-9-20-20s9-20 20-20zm126.8 9.7c4.6-7.7 13.8-11.4 22.5-9S484 391 484 400v128c0 11-9 20-20 20s-20-9-20-20v-55.8l-10.8 18.1c-3.6 6-10.1 9.7-17.2 9.7s-13.5-3.7-17.2-9.7L388 472.2V528c0 11-9 20-20 20s-20-9-20-20V400c0-9 6-16.9 14.7-19.3s17.9 1.3 22.5 9l30.8 51.4zM528 380c11 0 20 9 20 20v108h12c11 0 20 9 20 20s-9 20-20 20h-32c-11 0-20-9-20-20V400c0-11 9-20 20-20M245.5 0c17 0 33.2 6.8 45.2 18.8l106.6 106.4c12 12 18.7 28.3 18.7 45.2v165.5H144c-35.3 0-64 28.7-64 64v109.9c-27.6-7.1-48-32.1-48-61.9V64C32 28.7 60.7 0 96 0zM240 152c0 13.3 10.7 24 24 24h93.5L240 58.5z"})
);

export default LanFileHtmlSolid;
