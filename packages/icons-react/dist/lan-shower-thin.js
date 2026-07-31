import React from 'react';

export const LanShowerThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M16 107.9C16 74.8 42.8 48 75.9 48c15.9 0 31.1 6.3 42.3 17.5l36.1 36.1c.3.3.7.6 1.1.9-38.3 44-36.5 110.8 5.4 152.6l18.3 18.3-16.8 16.8c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0l192-192c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L337.5 115l-18.3-18.3C277.3 54.8 210.6 53 166.6 91.3c-.3-.4-.6-.7-.9-1.1l-36.2-36A75.85 75.85 0 0 0 75.9 32C34 32 0 66 0 107.9V472c0 4.4 3.6 8 8 8s8-3.6 8-8zm310.2 18.6L190.4 262.3 172.1 244c-37.5-37.5-37.5-98.3 0-135.8s98.3-37.5 135.8 0zM416 208a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-80 80a16 16 0 1 0 0-32 16 16 0 1 0 0 32m-48 48a16 16 0 1 0-32 0 16 16 0 1 0 32 0m80 48a16 16 0 1 0 0-32 16 16 0 1 0 0 32m-64 64a16 16 0 1 0 0-32 16 16 0 1 0 0 32m128-128a16 16 0 1 0 0-32 16 16 0 1 0 0 32m80-80a16 16 0 1 0-32 0 16 16 0 1 0 32 0"})
);

export default LanShowerThin;
