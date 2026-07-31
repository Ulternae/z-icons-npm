import React from 'react';

export const LanSquareEurozoneSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm40 112h72c13.3 0 24 10.7 24 24s-10.7 24-24 24h-48v43.2h40c13.3 0 24 10.7 24 24s-10.7 24-24 24h-40V320h49.6c13.3 0 24 10.7 24 24s-10.7 24-24 24H104c-13.3 0-24-10.7-24-24V168c0-13.3 10.7-24 24-24m152 0h88c8.3 0 16 4.3 20.4 11.4s4.8 15.9 1 23.4L294.8 320H344c13.3 0 24 10.7 24 24s-10.7 24-24 24h-88c-8.3 0-16-4.3-20.4-11.4s-4.8-15.9-1-23.4L305.2 192H256c-13.3 0-24-10.7-24-24s10.7-24 24-24"})
);

export default LanSquareEurozoneSolid;
