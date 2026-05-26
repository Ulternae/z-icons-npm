import React from 'react';

export const LanPoliceBoxRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M192 0c13.3 0 24 10.7 24 24v8h72c17.7 0 32 14.3 32 32 17.7 0 32 14.3 32 32v368h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h8V96c0-17.7 14.3-32 32-32 0-17.7 14.3-32 32-32h72v-8c0-13.3 10.7-24 24-24M80 464h224V109.3c-13.6-4.8-24.4-15.6-29.3-29.3H109.3c-4.8 13.6-15.6 24.4-29.3 29.3zm48-320h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16m0 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16m80-80c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16z"})
);

export default LanPoliceBoxRegular;
