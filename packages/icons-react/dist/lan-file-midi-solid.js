import React from 'react';

export const LanFileMidiSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 580 548',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M288.8 387c5-5.8 13-8.4 20.6-6.3 8.7 2.4 14.7 10.3 14.7 19.3v128c0 11-9 20-20 20s-20-9-20-20v-55.8l-10.8 18.1c-3.6 6-10.1 9.7-17.2 9.7-6.1 0-11.9-2.8-15.7-7.6l-1.5-2.2-10.8-18.1v55.8c0 11-9 20-20 20s-20-9-20-20v-128c0-9 6-16.9 14.7-19.3s17.9 1.3 22.5 9l30.8 51.4 30.8-51.4 1.9-2.7zm79.2-7c11 0 20 9 20 20v128c0 11-9 20-20 20s-20-9-20-20V400c0-11 9-20 20-20m96 0c28.7 0 52 23.3 52 52v64c0 28.7-23.3 52-52 52h-32c-11 0-20-9-20-20V400l.4-4c1.9-9.1 9.9-16 19.6-16zm96 0c11 0 20 9 20 20v128c0 11-9 20-20 20s-20-9-20-20V400c0-11 9-20 20-20M245.5 0c17 0 33.2 6.8 45.2 18.8l106.6 106.4c12 12 18.7 28.3 18.7 45.2v165.5H208c-35.3 0-64 28.7-64 64v112H96c-35.3 0-64-28.7-64-64V64C32 28.7 60.7 0 96 0zM452 508h12c6.6 0 12-5.4 12-12v-64c0-6.6-5.4-12-12-12h-12zM240 152c0 13.3 10.7 24 24 24h93.5L240 58.5z"})
);

export default LanFileMidiSolid;
