import React from 'react';

export const LanSignInAltRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"m201 95 144 144c9.4 9.4 9.4 24.6 0 33.9L201 417c-6.9 6.9-17.2 8.9-26.2 5.2S160 409.7 160 400v-64H48c-26.5 0-48-21.5-48-48v-64c0-26.5 21.5-48 48-48h112v-64c0-9.7 5.8-18.5 14.8-22.2s19.3-1.6 26.2 5.2m7 217v30.1l86.1-86.1-86.1-86.1V200c0 13.3-10.7 24-24 24H48v64h136c6.4 0 12.5 2.5 17 7s7 10.6 7 17m136 120h72c26.5 0 48-21.5 48-48V128c0-26.5-21.5-48-48-48h-72c-13.3 0-24-10.7-24-24s10.7-24 24-24h72c53 0 96 43 96 96v256c0 53-43 96-96 96h-72c-13.3 0-24-10.7-24-24s10.7-24 24-24"})
);

export default LanSignInAltRegular;
