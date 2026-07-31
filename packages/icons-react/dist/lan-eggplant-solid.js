import React from 'react';

export const LanEggplantSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M505 7c9.4 9.4 9.4 24.6 0 33.9l-9 9V192c0 8.8-7.2 16-16 16-26.5 0-48-21.5-48-48 0-5.8-4-10.7-9.4-12.6-13.3-4.8-25.4-13-35.1-22.8s-18-21.9-22.8-35.1c-2-5.4-6.9-9.4-12.6-9.4-26.5 0-48-21.5-48-48 0-8.8 7.2-16 16-16h142.1l9-9c9.4-9.4 24.6-9.4 33.9 0zM169.9 139.3c35.2-17.1 70.7-34.3 100.7-56.6 12.9 20.7 33.5 36.2 57.8 42.4 7.1 12.9 15.9 24.2 25.2 33.4s20.6 18.1 33.4 25.2c8.2 32.3 32.8 58.2 64.5 68C402.7 374.3 305.8 512.1 176.3 512c-96.5-.1-175-80.8-176.4-176-1.7-113.5 83.3-154.7 169.9-196.7z"})
);

export default LanEggplantSolid;
