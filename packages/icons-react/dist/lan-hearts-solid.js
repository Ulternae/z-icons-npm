import React from 'react';

export const LanHeartsSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"m188.1 89.3-12.6-14.5c-21-24.2-52.3-36.9-84.2-34.1C36.4 45.5-4.3 93.9.5 148.9c7.3 83 90 151.9 158.4 197.6-10.5-28.4-16.2-59.2-13.4-91.2 7.1-81.3 78.8-141.5 160.2-134.4 28 2.4 54.3 12.8 76.1 29.2 1.7-11.5 2.2-23.1 1.2-34.7-4.8-54.9-53.2-95.6-108.2-90.8-31.9 2.8-60.6 20.7-77 48.2L188 89.3zm200.3 144-9.9-16.5c-16.4-27.5-45.1-45.4-77-48.2-54.9-4.8-103.4 35.8-108.2 90.8-8 91.4 77.2 181.9 139.4 238.6 8.6 7.9 19.7 12.3 31.3 13.3s23.3-1.5 33.1-7.7c71.1-45.1 170.7-119.4 178.7-210.8 4.8-54.9-35.8-103.4-90.8-108.2-31.9-2.8-63.2 9.9-84.2 34.1l-12.6 14.5z"})
);

export default LanHeartsSolid;
